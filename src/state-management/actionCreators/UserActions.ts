import axios from 'axios';
import { Dispatch } from 'redux';
import { FetchUserDetailsAction } from '../actionModels/UserActions';
import { FetchUserDetailsActionType } from '../actionTypes/UserActionType';
import { FetchUserDetailsResponse, FETCH_USER_DETAILS_API } from '../api/User';


export const fetchUserDetails = () => {
    return async (dispatch: Dispatch<FetchUserDetailsAction>) => {
        dispatch({
            type: FetchUserDetailsActionType.FETCH_USER_DETAILS_REQUEST
        });
        try {
            const { data } = await axios.get<FetchUserDetailsResponse>(FETCH_USER_DETAILS_API)
            localStorage.setItem('userV1', JSON.stringify(data))
            dispatch({
                type: FetchUserDetailsActionType.FETCH_USER_DETAILS_SUCCESS,
                payload: data.results[0]
            })
        } catch (error: any) {
            dispatch({
                type: FetchUserDetailsActionType.FETCH_USER_DETAILS_FAIL,
                payload: error
            })

        }
    }
}