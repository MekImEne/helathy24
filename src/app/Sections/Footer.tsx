import React from 'react'
import Copyright from '../components/Copyright'
import DownloadApps from '../components/DownloadApps'
import FooterSections from '../components/FooterSections'

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
