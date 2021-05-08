export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: {
      user,
      signedIn: true,
    },
  };
};

export const signOut = (user) => {
  return {
    type: "SIGN_OUT",
    payload: {
      user,
      signedIn: false,
    },
  };
};