import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Toaster } from 'sonner'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocuGenius',
  description: 'AI-powered documentation generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="bg-background border-b">
              <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                  DocuGenius
                </Link>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-sm font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link href="/projects" className="text-sm font-medium hover:text-primary">
                    Projects
                  </Link>
                  <Link href="/settings" className="text-sm font-medium hover:text-primary">
                    Settings
                  </Link>
                  <ModeToggle />
                </div>
              </nav>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-muted py-4">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                ©{new Date().getFullYear()} DocuGenius. All rights reserved.
              </div>
            </footer>
          </div>
          <Toaster richColors={true} />
        </ThemeProvider>
      </body>
    </html>
  )
}