'use client'

import { useRouter } from 'next/router'
import React from 'react'

const AbsoluteImages = () => {
	const { pathname } = useRouter()

	return (
		<div className=''>
			<img
				className='absolute -left-[10.2rem]'
				src={
					pathname == '/account/register'
						? '/2 Creative run 1.png'
						: '/2 Creative run 1-1.png'
				}
				alt=''
			/>
			<img
				className='absolute -right-[9rem]'
				src={
					pathname == '/account/register'
						? '/6 progress 2.png'
						: '/6 progress 2-1.png'
				}
				alt=''
			/>
		</div>
	)
}

export default AbsoluteImages
