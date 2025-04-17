'use client'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import { Button } from './button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const [mount, setMount] = useState<boolean>(false);
    React.useEffect(() => {
        setMount(true);
        return () => setMount(false);
    }, []);

    return mount && (
        <Button size='icon' className='rounded-full cursor-pointer w-8 h-8 bg-gradient-to-b from-primary/80 to-primary border shadow border-primary' onClick={toggleTheme}>
            {theme === 'light' && <Moon size={15} />}
            {theme === 'dark' && <Sun color='#F9F9F9' />}
        </Button>

    )
}
