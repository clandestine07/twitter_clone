'use client'
import LoginModal from "@/hooks/LoginModal";
import RegisterModal from "@/hooks/RegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const Login = () => {
    const useLoginModal = LoginModal()
    const useRegisterModal = RegisterModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const ontoggle = useCallback (() => {
        if(loading) return;
        useLoginModal.onClose()
        useRegisterModal.onOpen()
    }, [useRegisterModal, useLoginModal, loading])

    

    const onSubmit = useCallback(async () => {
        try{
            setLoading(true)
            // fetch login request

            useLoginModal.onClose();
        }catch(err){
            console.log(err);
            
        } finally{
            setLoading(false)
        }
    }, [useLoginModal])


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
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={loading}
            />
        </div>
    )

    const footer = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>New to twitter?
            <span onClick={ontoggle} className="text-white cursor-pointer ml-2">sign up</span>
            </p>
        </div>
    )

    return ( 
        <Modal
            isOpen={useLoginModal.isOpen}
            onClose={useLoginModal.onClose}
            onSubmit={onSubmit}
            title='Login'
            body={bodyContent}
            action='Sign in'
            disabled={loading}
            footer={footer}
        />
     );
}
 
export default Login;