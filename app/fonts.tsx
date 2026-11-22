import localFont from 'next/font/local'

export const barlow = localFont({
    src: [
        {
            path: "./fonts/barlow/Barlow-Regular.ttf",
            weight: "400",
        },
        {
            path: "./fonts/barlow/Barlow-Medium.ttf",
            weight: "500",
        },
        {
            path: "./fonts/barlow/Barlow-SemiBold.ttf",
            weight: "600",
        },
        {
            path: "./fonts/barlow/Barlow-Bold.ttf",
            weight: "700",
        }
    ],
    variable: "--font-barlow",
})