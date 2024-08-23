import React from 'react'
import {Edit,Delete,Upload} from '../components/index'

function Button({name,type,upload,edit,deleteButton,className='',hover,...props}) {
    return (
        <div className={`${className}`}>
            <button className={`bg-blue-600 text-white flex justify-around items-center ${hover}`} type={type} {...props}>
                {name?name:''}
                {upload&&<Upload/>}
                {edit&&<Edit/>}
                {deleteButton&&<Delete/>}
            </button>
           
        </div>
    )
}

export default Button
