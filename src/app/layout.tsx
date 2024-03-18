'use client';
import { LinkHTMLAttributes } from 'react';
import './globals.css'
import Home, {themeCollection} from './page'
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  let theme: string;
  const pathName = usePathname();
  const pathTheme: string = pathName.split('/')[1];
  theme = themeCollection.includes(pathTheme) ? pathTheme : 'material3';
  
  interface CustomLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    precedence?: string;
  }
  
  const linkProps: CustomLinkProps = {
    rel: "stylesheet",
    href: '/nextjs/demos/styles/ej2/' + theme + '.css',
    precedence: "next"
  };

  return (
    <html lang="en">
      <head>
        <link {...linkProps} />
        <meta name="description" content="Explore and learn Syncfusion Next.js React UI components library using large collection of feature-wise examples for each components."></meta>
        <title>Demos, Examples of Syncfusion Next.js React UI Components</title>
        <link rel="shortcut icon" href="/nextjs/demos/favicon.ico" />
        <link href="/nextjs/demos/common/lib/content/roboto.css" rel="stylesheet" />
        <link href="/nextjs/demos/common/lib/content/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/nextjs/demos/common/codemirror/lib/codemirror.css" />
        <link rel="stylesheet" href="/nextjs/demos/common/codemirror/theme/mbo.css" />
        <link rel='stylesheet' href='/nextjs/demos/styles/index.css'></link>
        <script src="/nextjs/demos/common/codemirror/lib/codemirror.js" defer ></script>
        <script src="/nextjs/demos/common/codemirror/mode/javascript/javascript.js" defer ></script>
        <script src="/nextjs/demos/common/codemirror/mode/jsx/jsx.js" defer ></script>
        <script src="/nextjs/demos/common/codemirror/mode/xml/xml.js" defer ></script>
        <script src="/nextjs/demos/common/codemirror/mode/css/css.js" defer ></script>
      </head>
      <body className={'e-view ' + theme}>
        <Home theme={theme}>{children}</Home>
      </body>
    </html>
  )
}
