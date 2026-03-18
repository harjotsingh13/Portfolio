import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { clsx } from "clsx"
import Navbar from "@/components/Navbar"
import ThemeProvider from "@/components/ThemeProvider"
import BackToTop from "@/components/BackToTop"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
    title: 'Harjot Singh | AI Developer',
    description: 'Portfolio of Harjot Singh, AI Developer and Data Science Enthusiast.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className={clsx("dark scroll-smooth", inter.variable, jetbrains.variable)}>
            <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--selection-bg)] selection:text-[var(--text-primary)] overflow-x-hidden font-sans">
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <BackToTop />
                </ThemeProvider>
            </body>
        </html>
    )
}
