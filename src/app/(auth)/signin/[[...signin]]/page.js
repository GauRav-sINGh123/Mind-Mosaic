 'use client'
import { SignIn, } from '@clerk/nextjs'
 
 
 export default function page() {
   
  return (
    <div className='flex justify-center max-h-full mt-16  '>
       <SignIn fallbackRedirectUrl='/admin'/>   
        </div>
  )
}