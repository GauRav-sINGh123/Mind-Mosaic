import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='flex items-center justify-center max-h-full mt-16'>
       <SignUp fallbackRedirectUrl='/admin'/>
    </div>
  )
}