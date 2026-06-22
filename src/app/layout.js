import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'José David Ibargüen | Backend Java & Full Stack Developer',
  description:
    'Desarrollador Backend Java & Full Stack con experiencia en Spring Boot, Node.js, Docker y arquitectura de microservicios. Disponible para proyectos remotos, híbridos y presenciales en Medellín, Colombia.',
  keywords: [
    'José David Ibargüen',
    'Desarrollador Backend Java',
    'Full Stack Developer',
    'Spring Boot',
    'Node.js',
    'React',
    'Medellín Colombia',
    'API RESTful',
    'Docker',
    'Microservicios',
  ],
  authors: [{ name: 'José David Ibargüen Renteria' }],
  creator: 'José David Ibargüen Renteria',
  openGraph: {
    title: 'José David Ibargüen | Backend Java & Full Stack Developer',
    description:
      'Desarrollador de Software Backend y Full Stack especializado en Java 8, Spring Boot y Node.js. Experiencia en sistemas empresariales de alta criticidad.',
    url: 'https://portfolio-josedavid.vercel.app',
    siteName: 'José David Ibargüen — Portfolio',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José David Ibargüen | Backend Java & Full Stack Developer',
    description:
      'Desarrollador Backend Java & Full Stack | Spring Boot, Node.js, Docker | Medellín, Colombia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#0A0F1E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className="font-[var(--font-body)] antialiased"
        style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
