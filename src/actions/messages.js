import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { store } from "../index";

export const CREATE_KWEET = "CREATE_KWEET";

const url = domain + "/messages/";

export const handleCreateKweet = text => dispatch => {
    const token = store.getState().auth.login.token

    return fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({text})
    })
    .then(handleJsonResponse)
    .then(result => {
        console.log(result)
    })
}

