'use client'

import AbsoluteImages from '@/components/absoluteImages'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useAppSelector } from '@/hooks/hooks'
import { IUserLog } from '@/types/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'

const LoginPage = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useDispatch()
	const { error } = useAppSelector(state => state.user)

	const router = useRouter()

	function handleLogin() {
		if (!email.trim() || !password.trim()) {
			alert('inputs are empty')
			return
		}

		const user: IUserLog = {
			email,
			password,
		}

		login(dispatch, user)
		if (!error) router.replace('/')
	}

	// function handleDelete() {
	// 	const user: IUserLog = {
	// 		email: currentUser.email,
	// 		password: password,
	// 	}

	// 	deleteAccount(dispatch, user, tokens)
	// }

	// function handleRefresh() {
	// 	if (tokens) {
	// 		const token: { refresh: string } = {
	// 			refresh: tokens.refresh,
	// 		}

	// 		tokenRefresh(dispatch, token)
	// 	}
	// }

	return (
		<>
			<Navbar />
			<div className='relative overflow-hidden text-center'>
				<AbsoluteImages />
				<div className=''>
					<h1 className='text-[3.44rem] text-center mt-11 mb-16 font-semibold text-title'>
						Добро пожаловать
					</h1>
					<form
						onSubmit={e => e.preventDefault()}
						className='flex flex-col gap-y-7 mx-auto w-[35.6rem]'
					>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='' className='text-little-text text-lg'>
								Email
							</label>
							<input
								onChange={e => setEmail(e.target.value)}
								name='email'
								// placeholder='Email'
								className='reg-inputs w-full'
								type='text'
							/>
						</div>
						<div className='flex flex-col gap-y-3 text-start'>
							<label htmlFor='' className='text-little-text text-lg'>
								Введите новый пароль
							</label>
							<input
								onChange={e => setPassword(e.target.value)}
								value={password}
								name='password'
								className='reg-inputs'
								type={isVisPass ? 'text' : 'password'}
							/>
							<p className='pass-vis' onClick={() => setIsVisPass(!isVisPass)}>
								показать пароль
							</p>
						</div>

						<Link
							href={'/account/password/restore'}
							className='mb-[4.5rem] font-semibold underline hover:text-sky-600 inline-block text-left'
						>
							забыли пароль?
						</Link>
						<div className='flex justify-between'>
							<button
								onClick={() => {
									handleLogin()
								}}
								className='px-[4.8rem] py-4 rounded-xl text-white text-xl text-center bg-little-text'
							>
								{/* Войти */}
								Войти
							</button>
							<Link
								href={''}
								// onClick={e => {
								// 	handleLogin(e)
								// }}
								className='px-[4.8rem] py-4 rounded-xl text-dark-blue text-xl text-center bg-accent'
							>
								{/* Войти */}
								Стать ментором
							</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default LoginPage
