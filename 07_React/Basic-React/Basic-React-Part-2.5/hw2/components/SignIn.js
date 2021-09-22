import { useState } from 'react';
import axios from '../config/axios';

function SignIn() {

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswdChange = (e) => {
        setPasswd(e.target.value);
    };

    const onFormSubmit = async (e) => {
        try {
            e.preventDefault();
            const body = {
                email,
                password: passwd
            }
            const res = await axios.post("/api/v1/auth/signin", body);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <form onSubmit={onFormSubmit}>
            <p>Email</p>
            <input type="text" placeholder="Email" onChange={onEmailChange} />
            <p>Password</p>
            <input type="text" placeholder="Password" onChange={onPasswdChange} />
            <input type="submit" />
        </form>
    )
}

export default SignIn
