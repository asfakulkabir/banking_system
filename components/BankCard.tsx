import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex felx-col'>
        <Link href='/' className='bank-card'>
        <div className='bank-card_content'>
            <div>
                <h1 className='text-16 font-semibold text-white'>
                {userName}
                </h1>
                <p className='font-black text-white'>
                    {formatAmount(account.currentBalance)}
                </p>
            </div>

            <article className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-14 font-semibold text-white'>
                        {userName}
                    </h1>
                    <h2 className='text-10 font-semibold text-white'>
                    ●●/●●
                    </h2>
                </div>
                <p className='text-12 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-14'>1234</span>
                </p>
            </article>
        </div>
        <div className='bank-card_icon'>
            <Image
            src='/icons/Paypass.svg' alt='Paypass'  width={20} height={24}
            />
            <Image
            src='/icons/mastercard.svg' alt='mastercard'  width={45} height={32} className='ml-5'
            />
        </div>
        <Image
            src='/icons/lines.png' alt='lins'  width={316} height={190} className='absolute top-0 left-0'
            />
        </Link>
    </div>
  )
}

export default BankCard