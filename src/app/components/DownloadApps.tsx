import React from 'react'
import { appStore, googlePlay } from '../assets'

export default function DownloadApps() {
    return (
        <div className="mx-0 mt-12 w-max lg:mt-0 flex flex-col">
            <h3 className='text-FOOTER_GRAY text-base font-bold mb-5'>Download the application</h3>
            <div className='flex flex-row space-x-9'>
                <a href="/">
                    <img src={appStore} alt="appStore" />
                </a>
                <a href="/">
                    <img src={googlePlay} alt="googlePlay" />
                </a>

            </div>
        </div>
    )
}
