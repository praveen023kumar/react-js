<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
$return = "";
$entityBody = json_decode(file_get_contents('php://input'), true);
if($entityBody["username"] == "admin" && $entityBody["password"]== "admin") {
    $return = ["firstName" => "praveen" ,"token" => "test"];
    echo json_encode($return);
} else {
    header("HTTP/1.1 401 Unauthorized");
    exit;
}
    
?>