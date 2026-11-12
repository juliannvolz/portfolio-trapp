import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada — Ruan Trapp',
  description: 'A página que você procura não existe.',
};

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Página não encontrada — Ruan Trapp</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html, body { height: 100%; background: #0B0A08; color: #EDE8DF; font-family: "Source Sans 3", sans-serif; }
          .container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; padding: 2rem; }
          h1 { font-family: "Archivo Black", sans-serif; font-size: clamp(4rem, 12vw, 10rem); line-height: 0.9; letter-spacing: -0.03em; text-transform: uppercase; margin-bottom: 1rem; }
          p { font-size: clamp(1rem, 2vw, 1.25rem); color: #A8A8A1; margin-bottom: 2rem; max-width: 400px; }
          a { display: inline-block; padding: 1rem 2rem; background: #EDE8DF; color: #0B0A08; font-weight: 600; text-decoration: none; border-radius: 4px; transition: background 0.2s; }
          a:hover { background: #C9C2B6; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>404</h1>
          <p>A página que você procura não existe. A rua continua por aqui.</p>
          <a href="/">Voltar ao início</a>
        </div>
      </body>
    </html>
  );
}
