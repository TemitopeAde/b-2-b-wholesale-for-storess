import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';
export const Tabs = TabsPrimitive.Root;
export function TabsList({ className, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.List>) { return <TabsPrimitive.List className={cn('flex gap-1 overflow-x-auto border-b border-slate-200', className)} {...props} />; }
export function TabsTrigger({ className, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) { return <TabsPrimitive.Trigger className={cn('whitespace-nowrap border-b-2 border-transparent px-3 py-2 text-sm text-slate-600 data-[state=active]:border-brand data-[state=active]:font-semibold data-[state=active]:text-brand', className)} {...props} />; }
export const TabsContent = TabsPrimitive.Content;
