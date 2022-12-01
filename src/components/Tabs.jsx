import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function Tabs() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className='mb-4 m-4 px-4 py-6 shadow-xl shadow-black/20 border-2 border-black/10 rounded-lg'>
            <h4 className='mb-3 text-lg font-semibold'>List Project</h4>
            <div className='tabs mb-5'>
                <div className={`tab ${activeTab === 1 && 'active'}`} onClick={() => setActiveTab(1)}>
                    In Process
                </div>
                <div className={`tab ${activeTab === 2 && 'active'}`} onClick={() => setActiveTab(2)}>
                    Finished
                </div>
            </div>
            {activeTab == 1 ? (
                <div className='tab-item'>
                    <div className='flex justify-between items-center mb-2'>
                        <div className='text-sm flex items-center gap-2 w-full'>
                            <span>
                                1.
                            </span>
                            <span>
                                Aplikasi E-Library
                            </span>
                            <ChevronRightIcon className='w-4' />
                            <span className='font-bold'>
                                Rp.1.000.000
                            </span>
                        </div>
                        <div className='text-xs w-1/3 text-right'>17 Apr 2022 - .....</div>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <div className='text-sm flex items-center gap-2 w-full'>
                            <span>
                                2.
                            </span>
                            <span>
                                Aplikasi Logistik
                            </span>
                            <ChevronRightIcon className='w-4' />
                            <span className='font-bold'>
                                Rp.5.000.000
                            </span>
                        </div>
                        <div className='text-xs w-1/3 text-right'>8 Aug 2021 - .....</div>
                    </div>
                </div>
            ) : (
                <div className='tab-item'>
                    Second First Tab
                </div>
            )}
        </div>
    )
}

export default Tabs