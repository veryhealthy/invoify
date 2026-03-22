// Next Fonts
import localFont from "next/font/local";
import {
    Alex_Brush,
    Dancing_Script,
    Great_Vibes,
    Parisienne,
} from "next/font/google";

// Geist Sans - app UI font
export const geistSans = localFont({
    src: [
        {
            path: "../public/fonts/Geist-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/Geist-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Geist-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Geist-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Geist-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-geist-sans",
    display: "swap",
});

// Open Sauce Sans - PDF template font
export const openSauceSans = localFont({
    src: [
        {
            path: "../public/fonts/open-sauce-sans-latin-300-normal.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/open-sauce-sans-latin-400-normal.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/open-sauce-sans-latin-500-normal.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/open-sauce-sans-latin-600-normal.woff",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/open-sauce-sans-latin-700-normal.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-open-sauce-sans",
    display: "swap",
});

// Signature fonts
export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-dancing-script",
    preload: true,
    display: "swap",
});

export const parisienne = Parisienne({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-parisienne",
    preload: true,
    display: "swap",
});

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-great-vibes",
    preload: true,
    display: "swap",
});

export const alexBrush = Alex_Brush({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-alex-brush",
    preload: true,
    display: "swap",
});
