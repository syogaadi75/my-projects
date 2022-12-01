import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

function Form() {
    return (
        <div className='mb-4 m-4 px-4 py-6 shadow-xl shadow-black/20 border-2 border-black/10 rounded-lg'>
            <div className='y-form'>
                <label htmlFor='project_name'>Project Name</label>
                <input type="text" name="project_name" id="project_name" placeholder='Enter your project name' />
            </div>
            <div className='y-form'>
                <label htmlFor='fee'>Fee</label>
                <input type="number" name="fee" id="fee" placeholder='Enter fee' />
            </div>
            <button className='y-btn y-btn-primary mt-2'>
                <div className='flex items-center gap-[.4rem]'>
                    <CheckCircleIcon className='w-5' />
                    <span>Save Project</span>
                </div>
            </button>
        </div>
    )
}

export default Form