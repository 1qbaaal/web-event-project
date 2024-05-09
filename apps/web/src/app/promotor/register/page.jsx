'use client'
import { Formik,Form,Field} from "formik"
export default function PromotorRegisterPage(){
    return(

    <>
        <Formik>
            <Form>
            <div>  
            <div class="bg-blue-600 flex text-center bg-cover bg-center h-48 md:h-64 lg:h-80 pt-[130px]" >
                    <div class="container mx-auto p-4 md:p-6 lg:p-8">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Promotor Register</h2>
                        <p class="text-lg md:text-xl lg:text-2xl text-white">Beranda/Promotor Register</p>
                    </div>
            </div>
                <div class="container mx-auto px-4 py-32">
                    <h2 class="text-2xl font-bold text-center mb-8">Buat Akun Untuk Membeli Tiket</h2>
                    <form action="/submit_registration" method="post" class="w-full max-w-md mx-auto">
                    <div class="mb-4">
                        <label for="full_name" class="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
                        <Field type="text" id="full_name" name="full_name" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-4">
                        <label for="username" class="block text-gray-700 font-bold mb-2">Nama Pengguna</label>
                        <Field type="text" id="username" name="username" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                        <Field type="email" id="email" name="email" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 font-bold mb-2">Kata Sandi</label>
                        <Field type="password" id="password" name="password" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-4">
                        <label for="confirm_password" class="block text-gray-700 font-bold mb-2">Kode Referal</label>
                        <Field type="Kode Referral" id="Kode Referal" name="Kode Referal" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <Field type="checkbox" id="not_robot" name="not_robot" required class="form-checkbox h-5 w-5 text-gray-600"/>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Daftar
                        </button>
                    </div>
                    </form>
                </div>	
            </div>	
            </Form>
           
        </Formik>
        
    </>
   
    )       
};

    

