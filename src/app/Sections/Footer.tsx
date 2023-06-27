import React from 'react'
import Copyright from '../components/Footer/Copyright'
import DownloadApps from '../components/Footer/DownloadApps'
import FooterSections from '../components/Footer/FooterSections'

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
