import React from 'react';

const Footer = () => {


    const myStyle = {
        padding: '10px',
        margin: '0px 20px'
    }


    return (
        <footer className='navbar navbar-expand navbar-info bg-info' style={{ marginTop: '7rem' }}>
            <div className='container'>
                <h1>𝒯𝒽𝑒 𝒢𝑒𝓃𝑒𝓇𝒾𝒸𝓈</h1>
                <ul className='navbar-nav' style={{ fontSize: '40px', }}>
                    <li className='nav-item' style={myStyle}>
                        <a target='_blank' href='https://github.com/Abhishek-Mishra-77'> <ion-icon name="logo-github"></ion-icon></a>
                    </li>
                    <li className='nav-item' style={myStyle}>
                        <a target='_blank' href='https://www.linkedin.com/in/abhishek-mishra-342494237/'> <ion-icon name="logo-linkedin"></ion-icon></a>

                    </li>
                    <li target='_blank' className='nav-item' style={myStyle}>
                        <a href=''><ion-icon name="logo-whatsapp"></ion-icon></a>

                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer