import React from 'react'

function Input(
    {
        label='text',
        type='text',
        className='',
        ...props
    },ref)
     {
    return (
        <div className='w-full flex flex-col  h-full 0 p-5 '>
            {label && <label className='text-lg font-sans text-gray-500 overflow-hidden '>{label}</label>}
            <input
            type={type}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            />
        </div>
    )
}

export default React.forwardRef(Input)
