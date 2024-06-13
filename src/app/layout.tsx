'use client';
import { LinkHTMLAttributes } from 'react';
import './globals.css'
import Home, { themeCollection } from './page'
import { usePathname } from 'next/navigation';
import { base_path } from '@/common/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let theme: string;
  const pathName = usePathname();
  const pathTheme: string = pathName.split('/')[1];
  theme = themeCollection.includes(pathTheme.split('-')[0]) ? pathTheme : 'fluent2';

  interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    precedence?: string;
  }

  const linkProps: CustomLinkProps = {
    rel: "stylesheet",
    href: base_path + '/styles/ej2/' + theme + '.css',
    precedence: "next"
  };

  return (
    <html lang="en">
      <head>
        {/* Add GTM script to the head of the document */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W8WD8WN');
            `,
          }}
        />
        <link {...linkProps} />
        <meta name="description" content="Explore and learn Syncfusion Next.js React UI components library using large collection of feature-wise examples for each components."></meta>
        <title>Demos, Examples of Syncfusion Next.js React UI Components</title>
        <link rel="shortcut icon" href={base_path + "/favicon.ico"} />
        <link rel="manifest" href={base_path + "/manifest.webmanifest"}></link>
        <link href={base_path + "/common/lib/content/roboto.css"} rel="stylesheet" />
        <link href={base_path + "/common/lib/content/bootstrap.min.css"} rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={base_path + "/common/codemirror/lib/codemirror.css"} />
        <link rel="stylesheet" href={base_path + "/common/codemirror/theme/mbo.css"} />
        <link rel='stylesheet' href={base_path + "/styles/index.css"}></link>
        <script src={base_path + "/common/codemirror/lib/codemirror.js"} defer ></script>
        <script src={base_path + "/common/codemirror/mode/javascript/javascript.js"} defer ></script>
        <script src={base_path + "/common/codemirror/mode/jsx/jsx.js"} defer ></script>
        <script src={base_path + "/common/codemirror/mode/xml/xml.js"} defer ></script>
        <script src={base_path + "/common/codemirror/mode/css/css.js"} defer ></script>
      </head>
      <body className={'e-view ' + theme}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8WD8WN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript)  */}
        <div hidden id="sync-analytics" data-queue="EJ2 - Next.js - React - Demos"></div>
        <Home theme={theme}>{children}</Home>
      </body>
    </html>
  )
}
