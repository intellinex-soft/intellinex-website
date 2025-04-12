'use client'

import { useRouter } from 'next/navigation'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from './button'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <Dialog open={true} modal onOpenChange={() => router.back()} >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <Button type="button" onClick={() => router.back()}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}