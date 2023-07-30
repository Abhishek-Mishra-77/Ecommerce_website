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
                const response = await axios.get(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}`);
                console.log(response.data)
                setItems(response.data)
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
                    return [...restItem, newItem];
                }
            }
            else {
                return [newItem]
            }
        })

        const modifiedEmail = email.replace(/[@.]/g, '');


        try {
            const response = await axios.get(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}`);
            const existingCartItems = response.data;
            const data = existingCartItems.find((item) => {
                return item.id === newItem.id;
            });

            if (!data) {
                const response = await axios.post(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}`, newItem)
                console.log('post', response.data)
            }
            else {
                const updatedData = {
                    id: data.id,
                    count: data.count + 1,
                    imageUrl: data.imageUrl,
                    price: data.price,
                    title: data.title
                };
                const response = await axios.put(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}/${data._id}`, updatedData)
                console.log('put', response.data)
            }
        } catch (error) {
            console.error(error);
        }

    }





    const removeCart = async (id) => {
        setItems((items) => {
            const restItem = items.filter((item) => item.id !== id);
            return restItem;
        })

        const modifiedEmail = email.replace(/[@.]/g, '');
        try {
            const response = await axios.get(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}`);
            const gettingData = response.data.find((item) => {
                return item.id === id;
            })
            if (gettingData) {
                const response = await axios.delete(`https://crudcrud.com/api/018d8eb8f0f8498a87416ababcfe3fe9/cart${modifiedEmail}/${gettingData._id}`);
               console.log(response.data)
            }
        }
        catch (error) {
            console.log(error)
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