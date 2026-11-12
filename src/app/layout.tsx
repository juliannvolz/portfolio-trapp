import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Suspense, lazy } from 'react';
import { siteConfig } from '@/content/site';
import { Providers } from '@/components/providers/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTAFixed } from '@/components/layout/CTAFixed';
import { Preloader } from '@/components/motion/Preloader';
import { archivoBlack, sourceSans3, jetbrainsMono } from './fonts';

const ChapterIndex = lazy(() => import('@/components/layout/ChapterIndex').then((mod) => ({ default: mod.ChapterIndex })));
const ScrollbarCalligraphy = lazy(() => import('@/components/layout/ScrollbarCalligraphy').then((mod) => ({ default: mod.ScrollbarCalligraphy })));
const SoundToggle = lazy(() => import('@/components/layout/SoundToggle').then((mod) => ({ default: mod.SoundToggle })));

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#0B0A08',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0A08',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClass = `${archivoBlack.variable} ${sourceSans3.variable} ${jetbrainsMono.variable}`;

  return (
    <html lang="pt-BR" className={`${fontClass} no-js`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js");',
          }}
        />
        <link rel="preload" as="image" href="/images/caminho-das-artes-principal-w960.avif" imageSrcSet="/images/caminho-das-artes-principal-w480.avif 480w, /images/caminho-das-artes-principal-w640.avif 640w, /images/caminho-das-artes-principal-w750.avif 750w, /images/caminho-das-artes-principal-w960.avif 960w" imageSizes="100vw" />
        <link rel="preload" as="image" href="/images/caminho-das-artes-principal-w960.webp" imageSrcSet="/images/caminho-das-artes-principal-w480.webp 480w, /images/caminho-das-artes-principal-w640.webp 640w, /images/caminho-das-artes-principal-w750.webp 750w, /images/caminho-das-artes-principal-w960.webp 960w" imageSizes="100vw" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Providers>
          <Preloader />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CTAFixed />
          <Suspense fallback={null}>
            <ChapterIndex />
            <ScrollbarCalligraphy />
            <SoundToggle />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}