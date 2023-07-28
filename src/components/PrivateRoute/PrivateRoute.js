import React, { useContext } from 'react';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const cartCtx = useContext(ItemProvideContext);
    return cartCtx.isLoggegIn ? <Outlet /> : <Navigate to={'/auth'} />

}

export default PrivateRoute