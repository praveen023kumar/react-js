const initialState = [] ;
export function product(state = initialState, action) {
  switch (action.type) {
    case "PRODUCT_SUBMIT":
        return [
          ...state,
          {
            id: action.id,
            productName : action.productName, 
            productType: action.productType
          }
      ]
    case "PRODUCT_DELETE":
        const numIndex = parseInt(action.id)
        return state.filter(product => product.id !== numIndex);  
    default:
      return state;
  }
}