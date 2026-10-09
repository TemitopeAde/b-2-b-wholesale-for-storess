import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export function DialogContent({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) { return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 bg-slate-950/40" /><DialogPrimitive.Content className={cn('fixed left-1/2 top-1/2 w-[min(94vw,580px)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl', className)} {...props} /></DialogPrimitive.Portal>; }
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
