export const productActions = {
    addProductVisible,
    handleProductSubmit,
    getProducts,
    deleteProduct
};

function addProductVisible() {
    return { type: "ADD_PRODUCT_VISIBLE" };
}
let nextId = 0;
function handleProductSubmit(productId, productName, productType) {
    return { type: "PRODUCT_SUBMIT", 
        id: nextId++,
        productName, 
        productType
    };
}

function getProducts() {
    return { type: "PRODUCT_ALL" };
}
function deleteProduct(id) {
    return { type: "PRODUCT_DELETE", 
    id : id};
}