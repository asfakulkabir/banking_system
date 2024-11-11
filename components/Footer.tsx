import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = ({user, type='desktop'}:FooterProps) => {
    const router = useRouter();

    const handleLogOut =async() => {
        const loggedOut = await logoutAccount();

        if (loggedOut) router.push('/sign-in')
    }

  return (
    <footer className='footer'>
        <div className={type=='mobile'? 'footer_name_mobile': 'footer_name'}>
            <p className='text-xl font-bold text-gray-900'>
                {user.name[0]}
            </p>
        </div>
        <div className={type=='mobile'? 'footer_email_mobile': 'footer_email'}>
            <h1 className='text-14 text-gray-700 truncate font-semibold'>
                {user.name}
            </h1>
            <p className='text-14 text-gray-600 truncate font-normal'>
                {user.email}
            </p>
        </div>

        <div className='footer_image' onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="Logout Icon" />
        </div>

    </footer>
  )
}

export default Footer