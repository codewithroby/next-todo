import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classList: ClassValue[]) => twMerge(clsx(classList));

const isOdd = (input: number) => input % 2 !== 0;

export { cn, isOdd };
