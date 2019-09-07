import React from 'react';

const Register = () => {


    return(
        <div className="registerPage">
            <div>
            <h1>Sign Up</h1>
            <h2>It’s quick and easy.</h2>
            </div>

            <div>
                <form>
                    <input type="text" placeholder="UserName" />

                    <input type="text" placeholder="User image address" />

                    <input type="password" placeholder="Password" />

                    <input type="password" placeholder="Repeat password" />
                </form>
            </div>
        </div>
    )
}

export default Register;