import clsx from "clsx";
import type { ClassValue } from "clsx";
import {  twMerge } from 'tailwind-merge'
import CookieServices from "../Services/CookieServices";

export function tailwindCMerge(...inputs:ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function getUserColorSystem()
{
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" || (!("theme" in localStorage) && systemPrefersDark)
);
}


// handle log out
export function handleLogOut() {
  CookieServices.remove("userData");
  window.location.reload();
}


/**
 * Adds or removes an ID from the array depending on whether it already exists.
 * 
 * @param array - The original array of string IDs.
 * @param id - The ID to toggle (add if not found, remove if found).
 * @returns A new array with the ID toggled.
 */
export function toggleId(array: string[], id: string): string[] {
  return array.includes(id)
    ? array.filter(item => item !== id)
    : [...array, id];
}



