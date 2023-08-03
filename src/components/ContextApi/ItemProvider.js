import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ItemProvideContext = createContext();
const ItemProvider = (props) => {
    const idToken = localStorage.getItem('token')
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [token, setToken] = useState(idToken)
    const isLoggegIn = !!token;


    useEffect(() => {
        let c = 0;
        let a = 0;
        items.forEach((item) => {
            c = c + item.count;
            a += item.count * item.price
        })

        setCount(c);
        setTotalAmount(a);
    }, [items])


    const email = localStorage.getItem('email');

    useEffect(() => {
        if (isLoggegIn) {
            const modifiedEmail = email.replace(/[@.]/g, '');
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}.json`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })



                    if (response.ok) {
                        const data = await response.json();
                        const dataItems = Object.values(data);
                        setItems(dataItems)
                    }
                    else {
                        const data = await response.json();
                        console.log(data)
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
            fetchData();
        }
    }, [isLoggegIn])



    const addCartItem = async (itemm) => {
        const { id } = itemm;

        const newItem = {
            id: id,
            count: 1,
            imageUrl: itemm.imageUrl,
            price: itemm.price,
            title: itemm.title
        }
        setItems((items) => {
            if (items) {
                const restItem = items.filter((item) => item.id !== id);
                const currentItem = items.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count++;
                    return [...restItem, currentItem];
                }
                else {
                    const newItems = {
                        id: id,
                        count: 1,
                        imageUrl: itemm.imageUrl,
                        price: itemm.price,
                        title: itemm.title
                    }
                    return [...restItem, newItems];
                }
            }
            else {
                return [newItem]
            }
        })

        const modifiedEmail = email.replace(/[@.]/g, '');


        try {

            if (items.length > 0) {
                const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}.json`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    const data = await response.json();
                    const dataItems = Object.values(data).find((item) => item.id === id);


                    if (!dataItems) {
                        const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}.json`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: id,
                                count: 1,
                                imageUrl: itemm.imageUrl,
                                price: itemm.price,
                                title: itemm.title
                            })
                        });

                        if (response.ok) {
                            const data = await response.json();
                        }
                        else {
                            const data = await response.json();
                            let errorMessage = 'Post Request fail';
                            if (data && data.error && data.error.message) {
                                errorMessage = data.error.message;
                            }
                            throw new Error(errorMessage);
                        }
                    }
                    else {
                        const uniqueId = Object.keys(data).find((key) => data[key] === dataItems)
                        const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}/${uniqueId}.json`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: id,
                                count: dataItems.count + 1,
                                imageUrl: itemm.imageUrl,
                                price: itemm.price,
                                title: itemm.title
                            })
                        });

                        if (response.ok) {
                            const data = await response.json();

                        }
                        else {
                            const data = await response.json();
                            let errorMessage = 'Put Request fail';
                            if (data && data.error && data.error.message) {
                                errorMessage = data.error.message;
                            }
                            throw new Error(errorMessage);

                        }
                    }
                }
                else {
                    const data = await response.json();
                    let errorMessage = 'Get Request fail';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
            }
            else {
                const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}.json`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id,
                        count: 1,
                        imageUrl: itemm.imageUrl,
                        price: itemm.price,
                        title: itemm.title
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                }
                else {
                    const data = await response.json();
                    let errorMessage = 'Post Request fail';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
            }
        }
        catch (error) {
            alert(error.message)
            console.log(error.message);
        }
    }







    const removeCart = async (id) => {
        setItems((items) => {
            const restItem = items.filter((item) => item.id !== id);
            return restItem;
        })


        const modifiedEmail = email.replace(/[@.]/g, '');
        try {
            const response = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const data = await response.json();
                const dataItem = Object.values(data).find((item) => item.id === id);
                const uniqueId = Object.keys(data).find((key) => data[key] === dataItem)

                const response1 = await fetch(`https://ecommerceapp-121ff-default-rtdb.firebaseio.com/${modifiedEmail}/${uniqueId}.json`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'applications/json'
                    }
                })
                if (response1.ok) {
                    const data = await response1.json();
                }
                else {
                    const data = await response1.json();
                    let errorMessage = 'Delete Request fail';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }



    const loginHandler = (data) => {
        const { idToken, email } = data;
        setToken(idToken)
        localStorage.setItem('email', email)
        localStorage.setItem('token', idToken)
    }

    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        alert('Are you sure your want to logout!')
    }


    const contextValue = {
        items: items,
        addCartItem: addCartItem,
        count: count,
        totalAmount: totalAmount,
        removeCart: removeCart,
        loginHandler: loginHandler,
        isLoggegIn: isLoggegIn,
        logOutHandler: logOutHandler
    }



    return (
        <ItemProvideContext.Provider value={contextValue}>
            {props.children}
        </ItemProvideContext.Provider>
    )

}
export default ItemProvider;