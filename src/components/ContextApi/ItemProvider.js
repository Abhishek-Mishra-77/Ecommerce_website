import React, { createContext, useState, useEffect } from 'react';

export const ItemProvideContext = createContext();

const ItemProvider = (props) => {
    const IntianToken = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [token, setToken] = useState(IntianToken)


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


    const addCartItem = (itemm) => {
        const { id } = itemm;
        setItems((items) => {
            if (items) {
                const restItem = items.filter((item) => item.id !== id);
                const currentItem = items.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count++;
                    return [...restItem, currentItem];
                }
                else {
                    const newItem = {
                        id: id,
                        count: 1,
                        imageUrl: itemm.imageUrl,
                        price: itemm.price,
                        title: itemm.title
                    }
                    return [...restItem, newItem];
                }
            }
            else {
                return [
                    {
                        id: id,
                        count: 1,
                        imageUrl: itemm.imageUrl,
                        price: itemm.price,
                        title: itemm.title
                    }
                ]
            }
        })
    }



    const removeCart = (id) => {
        setItems((items) => {
            const restItem = items.filter((item) => item.id !== id);
            return restItem;
        })
    }


    const loginHandler = (token) => {
        setToken(token)
        console.log(token)
        localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    }


    const contextValue = {
        items: items,
        addCartItem: addCartItem,
        count: count,
        totalAmount: totalAmount,
        removeCart: removeCart,
        loginHandler: loginHandler,
        logOutHandler: logOutHandler
    }



    return (
        <ItemProvideContext.Provider value={contextValue}>
            {props.children}
        </ItemProvideContext.Provider>
    )

}
export default ItemProvider;