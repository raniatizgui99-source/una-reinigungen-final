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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-58MLX63X');`
        }} />
        {/* End Google Tag Manager */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58MLX63X"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
