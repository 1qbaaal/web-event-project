import * as Yup from 'yup'

export const loginSchema =Yup.object().shape({
    emailOrUsername:Yup.string().min(6,'Username Must Have Minimum 6 Characters').required('Username is Required'),
    password: Yup.string().required('Password is Required')
})