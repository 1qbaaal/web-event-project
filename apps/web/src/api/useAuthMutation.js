'use client'
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';

export const useAuthMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async({email, password}) => {
            console.log('Mutation Executed!')
            console.log(email)
            console.log(password)
            return await axios.post('http://localhost:8000/api/auth/login-user', {
                email, 
                password
            }) 
            
        }, 
        onSuccess, 
        onError
    })

    return {
        mutate
    }
}