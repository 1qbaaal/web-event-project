'use client'

import { Formik,Form,Field,ErrorMessage } from "formik"
import { useAuthLogin } from '../../../hooks/Auth/useAuthPromotor'
import { loginSchema} from "../../../support/schema/loginschema"
import { userContext } from "@/support/context/userContext"
import Link from "next/link"
import { useRouter} from "next/navigation"
//import { userSlice } from "../../../redux/slice/userSlice"

export default function PromotorLoginPage() {
    const{mutationAuth}= useAuthLogin()
  

    return (   
        <>
             <Formik
                initialValues={{
                    email:"",
                    password:"",
                    roleId:"2"
                                
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    
                    console.log(values)
                    mutationAuth({
                        email: values.email, 
                        password: values.password
                    })
    
                }}
        >
            <Form>
            <div class="bg-blue-600 flex text-center bg-cover bg-center h-48 md:h-64 lg:h-80 pt-[130px]" >
                    <div class="container mx-auto p-4 md:p-6 lg:p-8">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Promotor LoginPage</h2>
                        <p class="text-lg md:text-xl lg:text-2xl text-white">Beranda/Promotor Login</p>
                    </div>
            </div>
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
                                     <Link href="/promotor/register">
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

