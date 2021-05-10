const initialState = {
  user: [],
  signedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        signedIn: true
      };

    case "SIGN_OUT":
      return {
        signedIn: false
      };

    default:
      return state;
  }
};

export default userReducer;
