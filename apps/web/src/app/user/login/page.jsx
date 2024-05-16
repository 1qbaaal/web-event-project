'use client'
import axios from "axios"
import { useState,useContext } from "react"
import { Formik,Form,Field,ErrorMessage } from "formik"
import { useAuthLogin } from '../../../hooks/Auth/useAuthlogin'
import { toast } from "react-toastify"
import { loginSchema} from "../../../support/schema/loginschema"
import { userContext } from "@/support/context/userContext"
import Link from "next/link"
import { useRouter} from "next/navigation"
//import { userSlice } from "../../../redux/slice/userSlice"

export default function UserLoginPage() {
    const{mutationAuth}= useAuthLogin()
    // const [isLoading, setIsLoading] = useState(false);
    // const  setUserData  = useContext(userContext);
    // const onHandleLogin = async (values, resetForm) => {
    //     try {
    //       setIsLoading(true);
    //       let findEmail;
    //       if (values.email.includes("@")) {
    //         findEmail = await axios.get(`http://localhost:8000/user?email=${values.email}&password=${values.password}`);
    //       } else {
    //         findEmail = await axios.get(`http://localhost:8000/users?username=${values.email}&password=${values.password}`);
    //       }
    
    //       if (findEmail.data.length === 0) throw new Error("Login Failed!");
    //       toast.success("Login Success!");
    //       setUserData({
    //         id: findEmail.data[0].id, 
    //         username: findEmail.data[0].username
    //     })
    //         localStorage.setItem('dataUser', JSON.stringify({
    //           id: findEmail.data[0].id, 
    //           username: findEmail.data[0].username
    //       }))
    //       Link('/user/dashboard')
    //     }catch (error) {
    //         toast.error(error.message);
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     };      

    return (   
        <>
             <Formik
                initialValues={{
                    email:"",
                    password:""
                                
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    // onHandleLogin(values,resetForm)
                    console.log(values)
                    mutationAuth({
                        email: values.email, 
                        password: values.password
                    })
    
                }}
        >
            <Form>
            <div className='flex flex-col items-center px-5 py-10 pt-[100px] gap-3'>
                            <div className='w-[500px]'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Email Account</span>
                                    </div>
                                    <Field type="text" name='email' placeholder="Type Email" className="input input-bordered w-full" />
                                    <ErrorMessage name="email" />
                                </label>
                            </div>
                            <div className='w-[500px]'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Password Account</span>
                                    </div>
                                    <Field type="password" name='password' placeholder="Type Password" className="input input-bordered w-full" />
                                    <ErrorMessage name="password" />
                                </label>
                            </div>
                                 <div className="gap-2">
                                    {" "}
                                     Don't have an account?{" "}
                                     <a className="text-sky-400" href="">
                                     <Link href="/user/register">
                                        register
                                    </Link>
                                    </a>{" "}
                                    </div>
                            <button className='btn bg-indigo-500 text-white w-[500px] 'type="submit">
                                Sign in
                            </button>
                        </div>
            </Form>
        </Formik>
        </>  
    )
    }

