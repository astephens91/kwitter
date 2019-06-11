import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "..actions/logout"

const LogoutReducer = (state = initialState, action) => {
    switch (action.type) {
        
case LOGOUT:
      return state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser,
        authentication: initialState.authentication
      };
    case LOGOUT_FAILURE:
      return state;
    }}

export default LogoutReducer;