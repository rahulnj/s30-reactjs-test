import React from 'react'
import './_HomeScreen.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypesSelector'
import { fetchUserDetailsState } from '../../state-management/reducers/UserReducer'
import Button from '../../components/Button/Button'

const HomeScreen = () => {
    const { fetchUserDetails } = useActions()
    const { data, loading }: fetchUserDetailsState = useTypedSelector(
        (state) => state.fetchUserDetails
    )

    const hanldeFetchUserDetails = () => {
        fetchUserDetails();
    }

    React.useEffect(() => {
        let mounted = true;
        if (mounted) {
            fetchUserDetails();
        }
        return () => {
            mounted = false;
        }
    }, [])

    return (
        <div className='homeScreen'>
            <div className='homeScreen_parent'>
                <div className='homeScreen_parent_wrapper'>
                    <div className='homeScreen_parent_wrapper_img'>
                        <img src={loading ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' :
                            data?.picture?.large} alt="user" />
                    </div>
                    <div className='homeScreen_parent_wrapper_userDetails'>
                        <h4>
                            {data?.name?.first} {data?.name?.last}
                        </h4>
                        <p>{data?.email}</p>

                    </div>
                    <Button
                        loading={loading}
                        btnText={'Reload'}
                        iconUrl={'https://htmlacademy.ru/assets/icons/reload-6x-white.png'}
                        onClick={() => hanldeFetchUserDetails()}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen