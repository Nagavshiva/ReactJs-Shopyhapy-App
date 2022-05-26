// for add item to cart list

export const addCart = (product)=>{
    return{
        type: 'ADDITEM',
        payload: product
    }
}

// for Delete item to cart list

export const delCart = (product)=>{
    return{
        type: 'DELITEM',
        payload: product
    }
}