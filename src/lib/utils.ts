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
