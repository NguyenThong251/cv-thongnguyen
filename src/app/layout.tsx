import type { Metadata } from 'next';
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata: Metadata = {
  title: 'Portfolio | Thong',
  description: 'Personal portfolio of a software developer',
  icons: {
    icon: [
      {
        url: '/logo-mini.svg',
        type: 'image/svg+xml',
      },
      
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        
      <body>
        
        <div >

        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}