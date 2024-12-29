const initialState = {
  Brands: [],
  errors: ''
}

const RedBrand = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'ShowBrand':
      return { ...state, Brands: payload }

    case 'SetErrorBand':
      return { ...state, errors: payload }


    default:
      return state
  }
}



export default RedBrand