import '@/app/styles/globals.css';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Attendance recording software',
  description: 'Welcome to the Attendance recording software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
