const initialState = {
  Category: [],
  errors: ''
}

const RedCategory = (state = initialState, { type, payload }) => {
  switch (type) {


    case 'ShowCategory':
      return { ...state, Category: payload }

    case 'SetErrorCat':
      return { ...state, errors: payload }


    default:
      return state
  }
}



export default RedCategory