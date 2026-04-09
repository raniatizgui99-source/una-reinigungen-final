import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'UNA Reinigungen | Umzugsreinigung Regensdorf',
  description: 'Ihr zuverlässiger Partner für professionelle Umzugs-, Wohnungs- und Büroreinigungen in Regensdorf und Umgebung. Mit Abgabegarantie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11462828452"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11462828452');
          `
        }} />
      </head>
      <body className="bg-[#fafafa] text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
