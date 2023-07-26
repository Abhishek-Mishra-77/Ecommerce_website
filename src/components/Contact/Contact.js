import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');



    const postContactData = async (contact) => {
        const response = await fetch('https://e-commerce-website-85532-default-rtdb.firebaseio.com/ecommerce_web.json', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Contect-type': 'applications-json'
            }
        })
        const data = await response.json();
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (name.length === 0 || email.length === 0 || number.length === 0) {
            alert('Feel all the field');
        }

        const newContact = {
            name: name,
            email: email,
            number: number
        }

        postContactData(newContact);
        setName('');
        setEmail('');
        setNumber('');
    }


    const myStyle = {
        width: '45%',
        height: '27rem',
        boxShadow: '0px 0px 20px 0px cyan',
        borderColor: 'cyan',
        fontWeight: 'bold'
    }



    return (
        <div className='container' style={myStyle} onSubmit={onSubmitHandler}>
            <div className='text-center mt-4'>
                <h2>𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙐𝙨</h2>
            </div>
            <form>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone No:</label>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-info btn-primary ">Submit</button>
            </form>
        </div>
    )
}

export default Contact;