import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Components/Elements/Button";
import { app } from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        createUserWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already In Use')
                }
            })
        
            fetch('http://localhost:8080/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    _id: uid
                })
            }).then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                    toast.success('Account created successfully!🎉', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                        });
                    navigate('/login');
                } else {
                    console.log(response.json());
                }
            }).catch((error) => {
                setLoading(false);
                console.log(error)
            })
    }
    return (
        <div className="h-screen bg-gradient-to-tr from-dgreen to-lgreen flex  items-center justify-center">
            <div className="rounded-lg mx-5 md:mx-0 max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-grey to-dgreen"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-back">
                    <h5 className="text-3xl mb-4 text-black  font-thin">Register</h5>
                    <span >Already a user? <a href="/login" className="text-dgreen">Login</a></span>
                <form className="w-full space-y-6 mt-7" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-lg font-medium text-black">Name</label>
                        <input 
                        {...register('name')}
                        id="name"
                        type="text"
                        className="block appearance-none w-full px-3 py-2 border border-gray roundedn-md shadow-sm placeholder-gray focus:outline-none focus:ring-gray focus:border-gray"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-black">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray roundedn-md shadow-sm placeholder-gray focus:outline-none focus:ring-gray focus:border-gray"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-black">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray roundedn-md shadow-sm placeholder-gray focus:outline-none focus:ring-gray focus:border-gray"
                        />
                    </div>
                    <Button size="large">{loading ? "Loading..." : 'Register'}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Register;