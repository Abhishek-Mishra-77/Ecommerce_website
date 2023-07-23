import React from 'react';



const Header = () => {

    const myStyle = {
        display :'flex',
        justifyContent:'center',
        alignItem : 'center',
        height : '7rem',
        color :'white',
        fontSize : '5rem'
    }

    return (
        <div className='card bg-info border-top border-2 border-primary' style={myStyle}>
            <h1 style={myStyle}> 𝒯𝒽𝑒 𝒢𝑒𝓃𝑒𝓇𝒾𝒸𝓈 </h1>
        </div>
    )
}

export default Header