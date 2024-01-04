import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Components/Elements/Button";
import { app } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
                setLoading(false);
                toast.success('Successful Login!🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                    });
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('Email not found, please registe')
                }
                setLoading(false);
            })
    
    }
    return (
        <div className="h-screen  flex bg-gradient-to-tr from-lgreen to-dgreen items-center justify-center shadow-black">
            <div className="rounded-lg mx-5 md:mx-0 max-w-md w-full flex flex-col items-center justify-center relative bg-back">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-grey to-dgreen"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-back">
                    <h5 className="text-3xl text-black mb-4 font-thin">Login</h5>
                    <span >New to Krave? <a href="/register" className="text-dgreen">Register</a></span>
                <form className="w-full space-y-6 mt-7" onSubmit={handleSubmit(onSubmit)}>
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
                    <Button size="large">{loading ? "Loading..." : 'Login'}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Login;