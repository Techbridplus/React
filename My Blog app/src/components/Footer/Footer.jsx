import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Instagram from '../Icons/Instagram'
import Github from '../Icons/Github'
import Linkedin from '../Icons/Linkedin'
import Discord from '../Icons/Discord'
import Twiter from '../Icons/Twiter'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-100 border border-t-2 border-t-red-600 w-screen">
            <div className='flex justify-between m-10 items-center'>
                <div>
                    <Link>
                        <Logo/>
                    </Link>
                </div>
                <div className='flex justify-around ml-20 w-1/2'>
                    <div><a href="https://www.instagram.com/" className='text-gray-600'><Instagram/></a></div>
                    <div ><a href="" className='text-gray-600'><Github/></a></div>
                    <div><a href="" className='text-gray-600'><Linkedin/></a></div>
                    <div><a href="" className='text-gray-600'><Discord/></a></div>
                    <div><a href="" className='text-gray-600'><Twiter/></a></div>
                </div>
                
            </div>
        </section>
  )
}

export default Footer