"use client"
import React from 'react'
import QRCode from "react-qr-code";
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const DownloadComponent = () => {

    const handleOnIosCopy = () => {
        toast.success("Link copied for iOS")
    }

    return (
        <div className='flex items-center gap-x-4' >
            <div className='flex flex-col gap-2' >
                <span>iOS</span>
                <QRCode
                    value='https://youtube.com'
                    size={180}
                    className='rounded'
                />
                <Button onClick={handleOnIosCopy} className='text-xs font-normal cursor-pointer'>
                    <div>Copy Link</div>
                    <Copy size={16} />
                </Button>
            </div>
            <div className='flex flex-col gap-2' >
                <span>Android</span>
                <QRCode
                    value='https://youtube.com'
                    size={180}
                    className='rounded'
                />
                <Button className='text-xs font-normal cursor-pointer'>
                    <div>Copy Link</div>
                    <Copy size={16} />
                </Button>
            </div>
        </div>
    )
}

export default DownloadComponent