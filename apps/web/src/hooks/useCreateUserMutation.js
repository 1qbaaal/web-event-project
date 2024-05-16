import {useCreateUserMutation } from '@/api/useCreateUserMutation'
import { toast } from 'react-toastify'
import {useRouter} from "next/navigation"


export const useCreateUser =()=>{
const router = useRouter()
console.log('hello')
    const {mutate:mutationCreateUser} = useCreateUserMutation({
        onSuccess:(res) =>{
            console.log(res)
            toast.success('Registration Success')  
            router.push('/')
        },
        onError:(err)=>{
            console.log(err)
            toast.error('Registration Failed')
        }
    })

    return {
        mutationCreateUser
    }
}