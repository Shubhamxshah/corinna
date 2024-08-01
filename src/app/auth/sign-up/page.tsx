import React from 'react'
import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import RegistrationFormStep from '@/components/forms/sign-up/registration-step'
import ButtonHandler from '@/components/forms/sign-up/button-handlers'
import HighLightBar from '@/components/forms/sign-up/highlight-bar'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
        <div className='flex flex-col h-full gap-3'>
        <SignUpFormProvider>
          <div className='flex flex-col gap-3'>
            <RegistrationFormStep />
            <ButtonHandler />
            <HighLightBar />
          </div>  
        </SignUpFormProvider>    
        </div> 
    </div>
  )
}

export default SignUp