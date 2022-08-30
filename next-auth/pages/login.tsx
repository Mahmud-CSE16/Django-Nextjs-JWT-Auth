import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import {useRouter} from "next/router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/users/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => {
            console.log(response.status)
            if(response.status==200){
                response.json().then( async (res)=>{
                    console.log(res);
                    localStorage.setItem('jwt', res['jwt'])
                    await router.push('/');
                }).catch((error)=>console.log(error))
            }else{

            }
        }).catch((error)=>console.log(error));
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </Layout>
    );
};

export default Login;
