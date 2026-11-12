export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-[var(--color-concrete-700)]" role="contentinfo">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/images/logotrappazulsemfundo.png" 
              alt="Ruan Trapp" 
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4" 
            />
            <p className="type-mono text-[var(--color-silver)] text-center md:text-left">
              Jaraguá do Sul — SC
            </p>
          </div>
          <div>
            <h3 className="type-mono text-[var(--color-light-5600)] mb-4">Créditos</h3>
            <p className="text-[var(--color-bone-dim)] text-[var(--text-body)]">
              Imagens: acervo do artista
            </p>
          </div>
          <div className="text-right md:text-left">
            <p className="type-mono text-[var(--color-silver)] mb-2">
              © 2026 Ruan Trapp
            </p>
            <a
              href="#topo"
              className="type-mono text-[var(--color-gold)] hover:underline inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
              voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}