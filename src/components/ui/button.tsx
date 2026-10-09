import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { default: 'bg-brand text-white hover:bg-blue-800', outline: 'border border-slate-300 bg-white hover:bg-slate-100', ghost: 'hover:bg-slate-100' } }, defaultVariants: { variant: 'default' } });
export function Button({ className, variant, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) { return <button className={cn(buttonVariants({ variant }), className)} {...props} />; }
