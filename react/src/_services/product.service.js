import { authHeader } from '../_helpers';

export const productService = {
    getAll,
    update,
    insert,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(URL+`/users`, requestOptions).then(handleResponse);
}
function insert(productId, productName, productType) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 
            "Access-Control-Request-Headers": "*",
            "Access-Control-Request-Method": "*", 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ productId, productName, productType })
    };

    return fetch(URL+`/users/${product.id}`, requestOptions).then(handleResponse);
}
function update(product) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(URL+`/users/${product.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(URL+`/users/${id}`, requestOptions).then(handleResponse);
}