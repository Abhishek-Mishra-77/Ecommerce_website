import React from 'react';



const Header = () => {

    const myStyle = {
        display :'flex',
        justifyContent:'center',
        alignItem : 'center',
        height : '9rem',
        color :'white',
        fontSize : '5rem'
    }

    return (
        <div className='bg-info' style={myStyle}>
            <h1 style={myStyle}> 𝒯𝒽𝑒 𝒢𝑒𝓃𝑒𝓇𝒾𝒸𝓈 </h1>
        </div>
    )
}

export default Header