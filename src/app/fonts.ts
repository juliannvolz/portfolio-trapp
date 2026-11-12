import { Archivo_Black, Source_Sans_3, JetBrains_Mono } from 'next/font/google';

export const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
  preload: true,
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
});