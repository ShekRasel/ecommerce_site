import { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
 title:'Ecommerce backend',
 description: 'generate by create next',
};

function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html>
        <body lang='en'>
            {children}
        </body>
    </html>
  )
}

export default RootLayout