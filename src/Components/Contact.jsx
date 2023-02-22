import React, { useState } from 'react'
import "./Contact.css";

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const { name, email, phone, address, message } = user;

        if (name && email && phone && address && message) {

            const res = await fetch("https://contactformreact-4dcbf-default-rtdb.firebaseio.com/reactformfirebase.json",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify({ name, email, phone, address, message })
                })

            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    message: ""
                });
                alert("Data Stored Successfully");
            }

        }

    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <h1>Contact us</h1>
                <div className="form-container">
                    <div className="form-content">
                        <div className="label">Name</div>
                        <input className="input-field" type="text" value={user.name}
                            onChange={getUserData} placeholder="Enter your Name" required={true} autoComplete="off" name="name" />
                        <div className="underline"></div>
                    </div>

                    <div className="form-content">
                        <div className="label">Email</div>
                        <input className="input-field" type="email" value={user.email}
                            onChange={getUserData} placeholder="Enter your Email Address" required={true} autoComplete="off" name="email" />
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="form-container">
                    <div className="form-content">
                        <div className="label">Mobile Number</div>
                        <input className="input-field" type="number" value={user.phone}
                            onChange={getUserData} placeholder="Enter your Mobile Number" required={true} autoComplete="off" name="phone" />
                        <div className="underline"></div>
                    </div>

                    <div className="form-content">
                        <div className="label">Address</div>
                        <input className="input-field" type="text" value={user.address}
                            onChange={getUserData} placeholder="Enter your Address" required={true} autoComplete="off" name="address" />
                        <div className="underline"></div>
                    </div>

                    <div className="message">
                        <div className="label">Message</div>
                        <textarea name="message" rows="5" value={user.message}
                            onChange={getUserData} placeholder="Enter your Message" required={true} autoComplete="off"></textarea>
                        <div className="underline"></div>
                    </div>
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default Contact