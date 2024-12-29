const initialState = {
  error: '',
  ForgetPass: false,
  ErrForgetPass : ''
}

const RedAuthClient = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'ErrAuthCLient':
      return { ...state, error: payload }
    case 'ErrForgetPassword':
      return { ...state, ErrForgetPass: payload }

    case 'true':
      return { ...state, ForgetPass: !state.ForgetPass }

    default:
      return state
  }
}



export default RedAuthClient