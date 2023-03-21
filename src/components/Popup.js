import React from 'react'

const Popup = ({isOpen = false, closePopup, children}) => {
    return (
        <div className={isOpen ? 'popup open' : 'popup'}>
            <div className='popup__overlay' onClick={closePopup()}>&nbsp;</div>
            <div className='popup__content'>
                {children}
            </div>
        </div>
    )
}

export default Popup