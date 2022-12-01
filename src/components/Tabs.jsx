import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function Tabs() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className='mb-4 px-4 py-6 shadow-xl shadow-black/20 border-2 border-black/10 rounded-lg'>
            <h4 className='mb-3 font-semibold'>List Project</h4>
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
                    <div className='flex justify-between gap-3 items-center mb-2'>
                        <div className='p-4 bg-primary/10'>
                            1
                        </div>
                        <div className='flex w-full flex-col'>
                            <div className='font-bold text-sm'>
                                Aplikasi E-Library
                            </div>
                            <div className='text-xs'>
                                <span className='mr-2 font-semibold text-primary'>
                                    Rp. 1.000.000 ,
                                </span>
                                17 Apr 2022
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-3 items-center mb-2'>
                        <div className='p-4 bg-primary/10'>
                            2
                        </div>
                        <div className='flex w-full flex-col'>
                            <div className='font-bold text-sm'>
                                Aplikasi Logistik
                            </div>
                            <div className='text-xs'>
                                <span className='mr-2 font-semibold text-primary'>
                                    Rp. 5.000.000 ,
                                </span>
                                8 Aug 2022
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='tab-item'>
                    Second Tab
                </div>
            )}
        </div>
    )
}

export default Tabs