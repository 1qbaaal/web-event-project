import {useCreateUserMutation } from '@/api/useCreateUserMutation'
export const useCreateUser =()=>{
console.log('hello')
    const {mutate:mutationCreateUser} = useCreateUserMutation({
        onSuccess:(res) =>{
            alert(res.data)
            console.log('Registration Succes')
        },
        onError:(err)=>{
            alert (err.response.data.message)
        }
    })

    return {
        mutationCreateUser
    }
}