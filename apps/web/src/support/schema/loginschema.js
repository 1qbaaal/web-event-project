import * as Yup from 'yup'

export const loginSchema =Yup.object().shape({
    email:Yup.string().required('Username is Required'),
    password: Yup.string().required('Password is Required')
})