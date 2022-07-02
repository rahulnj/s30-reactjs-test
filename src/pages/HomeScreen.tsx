import React from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypesSelector'
import { FetchUserDetailsResponse, userDetailsV1Response } from '../state-management/api/User'
import { fetchUserDetailsState } from '../state-management/reducers/UserReducer'

const HomeScreen = () => {
    const { fetchUserDetails } = useActions()


    const hanldeFetchUserDetails = () => {
        fetchUserDetails()
    }
    const { data }: fetchUserDetailsState = useTypedSelector(
        (state) => state.fetchUserDetails
    )
    // console.log(data?.email);





    return (
        <div>HomeScreen

            <button
                onClick={hanldeFetchUserDetails}>click me</button>
        </div>
    )
}

export default HomeScreen