const initialState = {
  products : [],
  errors : ''
}

const RedProducts =  (state = initialState, { type, payload }) => {
  switch (type) {

  case 'ShowProducts':
    return { ...state, products : payload }
  
  case 'DeleteProducts':
    const data = state.products.filter(item => item.id != payload)
    return  {...state , products : data }

  case 'EditProducts':
    const product = state.products.filter(item => item.id === payload)
    return  {...state , products : product }
  

  case 'SetError':
    return { ...state, errors: payload }


  default:
    return state
  }
}



export default RedProducts