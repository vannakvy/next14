import type { Metadata } from 'next'

import './globals.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/providers/theme-provider"



// const inter = Inter({ subsets: ['latin'] })

import { Titillium_Web, JetBrains_Mono, PT_Serif } from 'next/font/google';
import BlogHeader from '@/components/blog-header'
import BlogFooter from '@/components/blog-footer'


const fontTertiary = PT_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: "--font-tertiary",
});

const fontPrimary = JetBrains_Mono({
   subsets: ['latin'],
    weight: ['400'],
    variable:"--font-primary",
   });

const fontSecondary = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable:"--font-secondary",
});


export const metadata: Metadata = {
  title: 'Vy Vannak',
  description: 'Created Using Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontTertiary.variable}`}>
      <body className={`${fontTertiary.variable} ${fontPrimary.variable} ${fontSecondary.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BlogHeader />
          {children}
          <BlogFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
