'use client'

import { useRouter } from 'next/navigation'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
// import { Button } from './button'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <Dialog open={true} modal onOpenChange={() => router.back()} >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Download App</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                {children}
                {/* <DialogFooter>
                    <Button type="button" className='cursor-pointer' onClick={() => router.back()}>Done</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}