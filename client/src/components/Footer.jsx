import React from 'react'

const Footer = () => {
  return (
    <div className='flex h-80 bg-black text-white'>
        <div className='flex w-[30%] items-center justify-center'>
            <h1 className='text-2xl text-red-600'>
                My Drive
            </h1>
        </div>
        <div className='flex ml-20 mt-20 w-[60%]'>
            <div className='gap-4'>
                <h1 className='text-2xl'>Products</h1>
                <div className='text-slate-500 text-sm'>
                    <h3>Cloud Storage</h3>
                    <h3>Object Storage</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer