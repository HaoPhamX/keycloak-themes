import { clsx, CxArg } from 'keycloakify/tools/clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: CxArg[]) {
    return twMerge(clsx(inputs))
}
