'use client'
import { Formik,Form,Field } from "formik"
import {useAuthLogin} from '../../../hooks/Auth/useAuthlogin'

export default function PromotorLoginPage() {
    const {mutation} =useAuthLogin()
    return ( 
        <>
        <Formik
            initialValues={{
                email:"",
                password:""
                            
            }}
            onSubmit={(values) => {
                console.log(values)
                mutation({
                    email: values.email, 
                    password: values.password
                })
                
            }}
        >
            <Form>
                    <div className="flex justify-center pt-[100px]">
                        <div class="w-full max-w-xs">
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex text-xl justify-center pt-5">
                            Promotor Login Page
                        </div>
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                            Email
                        </label>
                        <Field class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Email" type="text" placeholder="Email"/>
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <Field class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="password"/>
                        </div>
                        <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                        </div>
                    </div>
                    </div>
                    </div>
            </Form>
            
        </Formik>
             
        </>             
            
    )
    }
  
  