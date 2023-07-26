import React, { createContext, useState, useEffect } from 'react';

export const ItemProvideContext = createContext();

const ItemProvider = (props) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [productDetail, setProductDetail] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        let c = 0;
        let a = 0;
        items.forEach((item) => {
            c = c + item.count;
            console.log('bdfbshkfbk')
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


    const productDetailsHandler = (product) => {
        console.log(product)
        setProductDetail(product)
    }




    return (
        <ItemProvideContext.Provider value={{ items, addCartItem, count, totalAmount, removeCart, productDetailsHandler, productDetail }}>
            {props.children}
        </ItemProvideContext.Provider>
    )

}
export default ItemProvider;