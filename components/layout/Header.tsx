"use client"
import { Logo } from '@/public/assets'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../ui/theme-toggle'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/client'
import { Service } from '@/types/Service'
import { LayoutGridIcon, SidebarCloseIcon } from 'lucide-react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function Header() {
    const supabase = createClient();
    const [services, setServices] = useState<Service[]>([])
    const getServices = async () => {
        const { data } = await supabase
            .from("fa_services")
            .select("*")
            .eq("status", true);

        if (data) {
            setServices(data)
        }
    }

    useEffect(() => {
        getServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-linear ${scrolled ? ' bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-900' : ''}`}>
            <div className='container mx-auto flex items-center justify-between px-6 lg:p-0'>
                <div className='flex items-center'>
                    <Drawer direction='left'>
                        <DrawerTrigger asChild>
                            <button className='w-7 h-7 flex items-center justify-center me-3 bg-neutral-100 rounded lg:hidden cursor-pointer'>
                                <LayoutGridIcon size={20} color='#777777' strokeWidth={1.5} />
                            </button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle></DrawerTitle>
                                <div className='flex items-center justify-between'>
                                    <DrawerClose asChild>
                                        <Link href="/" className='me-10' >
                                            <Logo size={40} />
                                        </Link>
                                    </DrawerClose>
                                    <DrawerClose asChild>
                                        <button className='cursor-pointer'>
                                            <SidebarCloseIcon color='#666666' strokeWidth={1.5} size={20} />
                                        </button>
                                    </DrawerClose>
                                </div>
                            </DrawerHeader>
                            <div className='p-5 flex flex-col space-y-2'>
                                <DrawerClose asChild>
                                    <Link href="/about-us" className='nav-link'>
                                        About Us
                                    </Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href="/services" className='nav-link'>
                                        Services
                                    </Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href="/product" className='nav-link'>
                                        Products
                                    </Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href="/client" className='nav-link'>
                                        Clients
                                    </Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href="/partner" className='nav-link'>
                                        Partners
                                    </Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href="/blog" className='nav-link'>
                                        Blog
                                    </Link>
                                </DrawerClose>
                            </div>
                            <DrawerFooter>

                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                    <Link href="/" className='me-10' >
                        <Logo size={28} />
                    </Link>
                    <NavigationMenu className='hidden lg:flex'>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/about-us" legacyBehavior passHref>
                                    <NavigationMenuLink className='nav-link' href='/about-us'>
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='nav-link' >Service</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {services.map((service: Service) => (
                                            <ListItem
                                                icon={service.icon}
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                        <ListItem icon={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`} title='View All' href='/services'>
                                            See all of our services
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/product" legacyBehavior passHref>
                                    <NavigationMenuLink className='nav-link' >
                                        Products
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/client" legacyBehavior passHref>
                                    <NavigationMenuLink className='nav-link' >
                                        Clients
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/partner" legacyBehavior passHref>
                                    <NavigationMenuLink className='nav-link' >
                                        Partners
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className='nav-link' >
                                        Blogs
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>


                <div className='flex items-center gap-6'>
                    <ul className='flex items-center' >
                        <li className='me-2' >
                            <Link href="/contact-us" className='button-inx' >Contact Sales</Link>
                        </li>
                        <li className='me-2' >
                            <Link target='_blank' href="https://github.com/intellinex" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-200' title='Github' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}
interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    children: React.ReactNode;
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    ListItemProps
>(({ className, title, icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className='flex items-center gap-2'>
                        <div dangerouslySetInnerHTML={{ __html: icon }} className='w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center p-2' />
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
