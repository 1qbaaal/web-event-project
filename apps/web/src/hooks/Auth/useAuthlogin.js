import { useAuthMutation } from "../../api/useAuthMutation";
import { setCookie } from "../../utils/cookiesHelper";
import {useRouter} from "next/navigation"

export const useAuthLogin =()=>{
    const{mutate:mutationAuth}= useAuthMutation({
        onSuccess:(res)=>{
            setCookie(res.data.accesstoken)
            alert(res.data.message)
            console.log(res)
        },
        onError:(err)=>{
            
            alert(err.response.data.message)
        }
    })
    return{
        mutationAuth
    }
}