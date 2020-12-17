const INITIAL_STATE = false;

const isAuth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isAuth;
