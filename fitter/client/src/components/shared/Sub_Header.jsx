import React from 'react'

export default function Sub_Header(props) {
    return (
        <>
            <div className="sub-header-container">
                <div className="welcome">
                    Welcome! Create an account to join and participate in Fitter's Community.
            </div>
                <div className="registration">
                    <form onSubmit={props.handleRegister}>
                        <div className="registration-input">
                            <lable htmlFor='name'>
                                Name
                            <input
                                name='name' 
                                type='text' 
                                value={props.userData.name}
                                onChange={props.handleChange} 
                            />
                            </lable>

                            <lable htmlFor='age'>
                                Age
                            <input
                                name='age' 
                                type='text' 
                                value={props.userData.age}
                                onChange={props.handleChange} 
                            />
                            </lable>

                            <lable htmlFor='location'>
                                Location
                            <input
                                name='location' 
                                type='text' 
                                value={props.userData.location}
                                onChange={props.handleChange} 
                            />
                            </lable>

                            <label htmlFor='username'>
                                Username
                            </label>
                            <input
                                name='username' 
                                type='text' 
                                value={props.userData.username}
                                onChange={props.handleChange} 
                            />

                            <label htmlFor='email'>
                                Email
                            </label>
                            <input
                                name='email' 
                                type='text' 
                                value={props.userData.email}
                                onChange={props.handleChange} 
                            />
                        
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input 
                                name='password' 
                                type='password'
                                value={props.userData.password}
                                onChange={props.handleChange}
                            />
                        </div>

                        <input type='submit' value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}
