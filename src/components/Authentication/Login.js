import React, { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import './Login.css';




const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredpassword] = useState('');
    const navigate = useNavigate();
    const cartCtx = useContext(ItemProvideContext)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        let URL;
        if (isLogin) {
            URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB73myGtUGF1QJiMyYqbEATM_8ayAfaZdU'
        }
        else {
            URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB73myGtUGF1QJiMyYqbEATM_8ayAfaZdU'
        }
        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'applications/json'
                }
            })

            setIsLoading(false)
            if (response.ok) {
                const data = await response.json();
                cartCtx.loginHandler(data)
                navigate('/store')
            } else {
                const data = await response.json();
                let errroMessage = "Authentication fail!"
                if (data && data.error && data.error.message) {
                    errroMessage = data.error.message;
                }
                throw new Error(errroMessage)
            }
        }
        catch (error) {
            alert(error.message)
        }
        setEnteredpassword('')
    }



    return (
        <div className='container auth' style={{ width: '40%' }}>
            <div className='text-center mt-4'>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">𝗬𝗼𝘂𝗿 𝗘𝗺𝗮𝗶𝗹:</label>
                    <input
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        type="email"
                        required
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">𝗬𝗼𝘂𝗿 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱
                        :</label>
                    <input
                        value={enteredPassword}
                        onChange={(e) => setEnteredpassword(e.target.value)}
                        type="password"
                        required
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <div className='actions'>
                    {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request....</p>}
                    <button
                        type='button'
                        className='toggle'
                        onClick={switchAuthModeHandler}>
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
            <button
                onClick={cartCtx.logOutHandler}
                style={{ float: 'right' }}
                type="button"
                className="btn btn-outline-danger">Logout</button>
            <NavLink to={'/auth/user'}>
                <button
                    type='button'
                    className='toggle'>
                    {<h6>change your password</h6>}
                </button>
            </NavLink>
        </div>
    )
}

export default Login