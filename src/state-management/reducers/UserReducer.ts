import { FetchUserDetailsAction } from "../actionModels/UserActions"
import { FetchUserDetailsActionType } from "../actionTypes/UserActionType"
import {  userDetailsV1Response } from "../api/User"

export type fetchUserDetailsState={
    loading:boolean,
    error:string[]|null,
    data:userDetailsV1Response|null
}


const initialState = {
    loading: false,
    error: null,
    data: localStorage.getItem("userV1") ? JSON.parse(localStorage.getItem("userV1") as string) as userDetailsV1Response: null,
}

export const fetchUserDetailsReducer = (
    state: fetchUserDetailsState = initialState,
    action: FetchUserDetailsAction
): fetchUserDetailsState => {
    switch (action.type) {
        case FetchUserDetailsActionType.FETCH_USER_DETAILS_REQUEST:
            return { ...state, loading: true, error: null, data: null }
        case FetchUserDetailsActionType.FETCH_USER_DETAILS_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload }
        case FetchUserDetailsActionType.FETCH_USER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload, data: null }
        default:
            return state;
    }
}