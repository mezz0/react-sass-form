const initialState = {
  user: [],
  signedIn: false,
};

const userReducer = (state = initialState, action) => {
  let user = state.user;

  switch (action.type) {
    case "SIGN_IN":
      user.push(action.payload);

      return {
        ...state,
        user,
        signedIn: true
      };

    case "SIGN_OUT":
      return {
        ...state,
        user: user.filter(
          (item) => item.email !== action.payload.email
        ),
        signedIn: true
      };

    default:
      return state;
  }
};

export default userReducer;
