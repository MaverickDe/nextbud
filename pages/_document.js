import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import Script from 'next/script'
// import ""

export default function Document() {

  
  return (
    <Html lang="en" className='dar'>
      <Head >

      <meta name="monetag" content="163bde9480fb0e2d4fd08d5b6b66f7f5"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
      </Head>

 
   
      <body className='text-secondary dark:text-secondary2 bg-light1 dark:bg-dark1'>

    
        {/* <Script strategy="beforeInteractive" src="script/moneytag/moneytaginpageanti.js" />
      <Script strategy="beforeInteractive" src="script/moneytag/moneytagviganti.js" />
  
     */}

   
   
        
        <Main />
        <NextScript />
        <div id="navigation"></div>
      </body>
    </Html>
  )
}
