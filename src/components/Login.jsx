import React from 'react'

function Login() {
  return (
    <div className='flex overflow-hidden flex-col text-center h-screen'>
        <div className="flex mb-3 w-full relative min-h-screen box-border justify-center items-center flex-col py-20 px-10 h-full bg-[url('/images/login-background.jpg')] bg-cover">
            <div id='cta-1' className='mb-1 max-w-xl flex flex-wrap flex-col justify-center mt-0 items-center text-center m-auto p-auto w-full'>
                <img src="/images/cta-logo-one.svg" alt="cta-logo" className='h-28 mb-3 max-w-xl min-h-[1px]' />
                <a className='button'>GET IT ALL THERE</a>
                <p className='text-[hsla(0, 0%, 95.3%, 1)] font-bold text-sm my-0 mx-6 leading-normal'>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img src="/images/cta-logo-two.png" alt="cta-logo-2" className='mt-14 mb-5 inline-block align-bottom w-full' />
            </div>
        </div>
    </div>
  )
}

export default Login