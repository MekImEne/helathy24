import React from 'react'
import Copyright from './Copyright'
import DownloadApps from './DownloadApps'
import FooterSections from './FooterSections'

export default function Footer() {
    return (
        <footer className="relative px-4 pb-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap  text-center lg:text-left">
                    <FooterSections />
                    <DownloadApps />
                </div>
                <Copyright />
            </div>
        </footer>
    )
}
