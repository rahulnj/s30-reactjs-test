import React, { FC } from 'react'
import './_Button.scss'


const Button: FC<{
    btnText: string;
    onClick?: () => void;
    iconUrl?: string;
}> = ({ btnText, onClick, iconUrl }) => {
    return (
        <button className="btn-green"
            onClick={onClick}>
            <img className="icon" src={iconUrl} />
            {btnText}
        </button>
    )
}

export default Button