import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import Script from 'next/script'
// import ""

export default function Document() {

  
  return (
    <Html lang="en" className='dar'>
      <Head >

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
      </Head>

 
   
      <body className='text-secondary dark:text-secondary2 bg-light1 dark:bg-dark1'>

    
    

   
   
        
        <Main />
        <NextScript />
        <div id="navigation"></div>
      </body>
    </Html>
  )
}
