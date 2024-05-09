import {useCreateUserMutation } from '@/api/useCreateUserMutation'
export const useCreateUser =()=>{
console.log('hello')
    const {mutate:mutationCreateUser} = useCreateUserMutation({
        onSuccess:(res) =>{
            console.log (res.data)
        },
        onError:(err)=>{
            console.log (err.response.data.message)
        }
    })

    return {
        mutationCreateUser
    }
}