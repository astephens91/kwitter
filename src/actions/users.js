// import { domain, handleJsonResponse } from "./constants"

// export const GET_USER = "GET_USER";
// export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
// export const GET_USER_FAIL = "GET_USER_FAIL";

// const url = domain + "/users";

// export const getUser = userId => dispatch => {
//     dispatch({
//         type: GET_USER
//     });

//     fetch(url + "/" + userId)
//     .then(handleJsonResponse)
//     .then(result => {
//         dispatch({
//             type: GET_USER_SUCCESS,
//             payload: result
//         });
//     }).catch(err => {
//         dispatch({
//             type: GET_USER_FAIL,
//             payload: err
//         });
//     });
// }

// export const getLoggedInUser = () => (dispatch, getState) => {
//     const userid = getState().auth.login.id;
//     dispatch(getUser)
// }