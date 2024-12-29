const initialState = {
  error : ''
}

const RedAuthAdmin = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'ErrAuthAdmin':
      return { ...state, error : payload }

  default:
    return state
  }
}


export default RedAuthAdmin


