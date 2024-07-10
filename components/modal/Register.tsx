'use client'
import axios from 'axios';
import RegisterModal from '@/hooks/RegisterModal'
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import LoginModal from '@/hooks/LoginModal';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const Register = () => {
    
    const useLoginModal = LoginModal()
    const useRegisterModal = RegisterModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)


    const ontoggle = useCallback (() => {
        if(loading) return;
        useLoginModal.onOpen()
        useRegisterModal.onClose()
    }, [useRegisterModal, useLoginModal, loading])

    
    const onSubmit = useCallback(async () => {
        try{
            setLoading(true)
            await axios.post('/api/register', {
                email,
                username,
                name,
                password
            })

            toast.success('Account Created')
            
            signIn('credentials', {
                email,
                password
            })
            useRegisterModal.onClose();
            
        }catch(err){
            console.log(err);
            toast.error('Something Went wrong')
        } finally{
            setLoading(false)
        }
    }, [useRegisterModal, email, username, name, password])


    const bodyContent = (
        <div className="
            flex
            flex-col
            gap-4
            
        ">
            <Input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={loading}
            />
            <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={loading}
            />
            <Input
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={loading}
            />
            <Input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={loading}
            />
        </div>
    )

    const footer = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Already have an account?
            <span onClick={ontoggle} className="text-white cursor-pointer ml-2">sign in</span>
            </p>
        </div>
    )
    return ( 
        <Modal
            isOpen={useRegisterModal.isOpen}
            onClose={useRegisterModal.onClose}
            onSubmit={onSubmit}
            title='Create  an ccount'
            body={bodyContent}
            action='Register'
            disabled={loading}
            footer={footer}
        />
     );
}
 
export default Register;