"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button';
import { useSearchParams } from 'next/navigation';
import { Textarea } from '../ui/textarea';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Customer {
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    phone: string | null;
}

const ContactUsComponent = () => {

    const [phoneCode, setPhoneCode] = React.useState<{
        name: string;
        flag: string;
        code: string;
        dial_code: string;
    }[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/json/phone-code.json')
            .then(res => res.json())
            .then(data => setPhoneCode(data));
    }, []);

    const params = useSearchParams()
    const encoded = params.get("q")
    let customer: Customer = {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    }
    let message = ''

    if (encoded) {
        try {
            const jsonString = decodeURIComponent(atob(encoded))
            const parsed = JSON.parse(jsonString)

            let phoneFormatted: string | null = ""
            if (parsed.phone?.startWith("0")) {
                phoneFormatted = `${parsed.phonecode}${parsed.phone.slice(1)}`
            }

            customer = {
                firstname: parsed.firstname || '',
                lastname: parsed.lastname || '',
                email: parsed.email || '',
                phone: phoneFormatted || '',
            }

            message = parsed.message || ''
        } catch (err) {
            console.error("Failed to decode URL param", err)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())

        const json = JSON.stringify(data)
        const encoded = btoa(encodeURIComponent(json))

        window.location.href = `?q=${encoded}`
    }

    return (
        <div className='container flex items-center justify-center mx-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-7 gap-10'>
                {/* form */}
                <div className='lg:col-span-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex items-center gap-x-4' >
                            <div className='flex flex-col gap-y-2 w-full'>
                                <Label className='text-gray-600'>First name</Label>
                                <Input name='firstname' type='text' defaultValue={customer.firstname || ""} placeholder='First name' />
                            </div>

                            <div className='flex flex-col gap-y-2 w-full'>
                                <Label className='text-gray-600'>Last name</Label>
                                <Input name='lastname' type='text' defaultValue={customer.lastname || ""} placeholder='Last name' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2 mt-5'>
                            <Label className='text-gray-600'>Phone</Label>
                            <div className='flex items-center'>
                                <Select name='phonecode'>
                                    <SelectTrigger className="border-r-0 rounded-r-none">
                                        <SelectValue placeholder="KH" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Phone Code</SelectLabel>
                                            {phoneCode && phoneCode.map((item) => (
                                                <SelectItem key={`${item.dial_code}-${item.name}`} value={`${item?.dial_code}|${item.code}`}>
                                                    <span>{item?.flag}</span>
                                                    <span>{item?.name}</span>
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Input name='phone' type='number' className='border-l-0 rounded-l-none' defaultValue={customer.phone || ""} placeholder='Phone' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2 mt-5'>
                            <Label className='text-gray-600'>Email</Label>
                            <Input name='email' type='email' defaultValue={customer.email || ""} placeholder='Email' />
                        </div>

                        <div className='flex flex-col gap-y-2 mt-5'>
                            <Label className='text-gray-600'>Message</Label>
                            <Textarea placeholder="Type your message here." defaultValue={message || ""} id="message" className='h-20' name='message' />
                            <p className="text-xs text-muted-foreground">
                                Your message will be copied to the support team.
                            </p>
                        </div>


                        <Button type='submit' className='w-full mt-5' >
                            Send Message
                        </Button>
                    </form>
                </div>
                <div>
                    <p className='text-lg font-medium'>Chat with us</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUsComponent