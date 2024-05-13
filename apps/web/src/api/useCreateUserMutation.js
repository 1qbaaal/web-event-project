import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateUserMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async({email, roleId, password}) => {
            await axios.post(' http://localhost:8000/api/user', {
            
                email, 
                roleId, 
                password, 
        })
            // }, {
            //     headers: {
            //         'accessToken': 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjbHZkdG92ZWEwMDAxNm02MnFiZ2Frd3p2IiwiaWF0IjoxNzE0MDMzMDU4LCJleHAiOjE3MTQwMzY2NTh9.kAfkeLQNLNUeRggxPmJzDNlBWColS2-MOLJ7Pdqy8nk'               }
            //})
          

        }, 
        onSuccess, 
        onError
    })

    return{
        mutate
    }
}


