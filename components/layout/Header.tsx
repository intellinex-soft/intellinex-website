"use client"
import { Logo } from '@/public/assets'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../ui/theme-toggle'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/client'
import { Service } from '@/types/Service'

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
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <Link href="/" className='me-10' >
                        <Logo size={28} />
                    </Link>
                    <NavigationMenu>
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
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                        <ListItem title='View All' href='/services'>
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
                        <li className='me-6' >
                            <Link href="/contact-us" className='nav-link' >Contact Sales</Link>
                        </li>
                        <li className='me-1' >
                            <Link href="/estimate" className='button-inx' >Estimate</Link>
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


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
