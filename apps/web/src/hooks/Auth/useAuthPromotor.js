import { toast } from "react-toastify";
import { useAuthMutation } from "../../api/useAuthMutation";
import { setCookie } from "../../utils/cookiesHelper";
import { useRouter } from "next/navigation"


export const useAuthLogin =()=>{
    const router = useRouter()
    const{mutate:mutationAuth}= useAuthMutation({
        onSuccess:(res)=>{
            setCookie(res.data.accesstoken)
            toast.success(res.data.message)
            console.log(res)
            router.push ('/promotor/dashboard')
        },
        onError:(err)=>{
            
            toast.error(err.response.data.message)
        }
    })
    return{
        mutationAuth
    }
}