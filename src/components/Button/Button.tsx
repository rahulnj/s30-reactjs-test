import React, { FC } from 'react'
import './_Button.scss'


const Button: FC<{
    btnText: string;
    onClick?: () => void;
    iconUrl?: string;
    loading: boolean;
}> = ({ btnText, onClick, iconUrl, loading }) => {
    return (
        <button disabled={loading} className="btn-green"
            onClick={onClick}>
            <img className={loading ? "reload icon" : "icon"} src={iconUrl} alt="refresh button" />
            {btnText}
        </button>
    )
}

export default Button