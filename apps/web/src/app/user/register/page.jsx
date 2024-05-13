'use client'
import { Formik,Form,Field } from "formik"
import { useCreateUser } from "@/hooks/useCreateUserMutation"

export default function UserRegisterPage() {
	const {mutationCreateUser} = useCreateUser()
    return (
		<Formik
			initialValues={{
				full_name:"",
				username:"",
				email:"",
				password:"",
				roleId: ""
							
			}}
			onSubmit={(values) => {
				console.log(values)
				mutationCreateUser({
					full_name:values.full_name,
					username:values.username,
					email: values.email, 
					password: values.password,
					roleId:parseInt(values.roleId)
				})
				
			}}
		>
			<Form>
			<div class="container mx-auto px-4 py-32">
				<h2 class="text-2xl font-bold text-center mb-8">Buat Akun Untuk Membeli Tiket</h2>
				<div class="w-full max-w-md mx-auto">
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
					<Field type="roleId" id="roleId" name="roleId" required class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
				</div>
				<div class="mt-8">
					<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Daftar
					</button>
				</div>
				</div>
			</div>		
			</Form>
		</Formik>		
    )
    }


