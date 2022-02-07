import React from 'react';

const NamePlate = () => {
    return (
        <div className='name-plate'>
            <h1>
                <span className='first-name'>{'Whitney'}</span>
                <span className='last-name'>{' Lovelace'}</span>
            </h1>
            {/* <h3 className='name-sub'>{'Some other thing to say'}</h3> */}
        </div>
    );
}

export default NamePlate;