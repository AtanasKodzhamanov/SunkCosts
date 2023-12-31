import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './ui/Sidenav'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.main}>
          <SideNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
