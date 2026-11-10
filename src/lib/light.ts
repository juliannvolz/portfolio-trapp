export const CHAPTERS = [
  { id: 'inicio', index: '01', label: 'A RUA', kelvin: 2200, source: 'poste de sódio', direction: 'topo-direita', origin: '85% 8%', rgb: '255,180,107', intensity: 0.45, shadow: 0.65 },
  { id: 'obra', index: '02', label: 'A OBRA', kelvin: 3000, source: 'galeria / LED', direction: 'topo + lateral', origin: '70% 15%', rgb: '255,209,161', intensity: 0.30, shadow: 0.55 },
  { id: 'caminho', index: '03', label: 'O CAMINHO', kelvin: 3000, source: '14 luminárias LED', direction: 'poços de cima', origin: '50% 0%', rgb: '255,209,161', intensity: 0.35, shadow: 0.60 },
  { id: 'acervo', index: '04', label: 'O ACERVO', kelvin: 3000, source: 'galeria', direction: 'rasante lateral', origin: '15% 40%', rgb: '255,209,161', intensity: 0.28, shadow: 0.50 },
  { id: 'transformacao', index: '05', label: 'A TRANSFORMAÇÃO', kelvin: 5600, source: 'amanhecer', direction: 'horizonte baixo', origin: '50% 100%', rgb: '232,241,255', intensity: 0.40, shadow: 0.35 },
  { id: 'processo', index: '06', label: 'O PROCESSO', kelvin: 5600, source: 'amanhecer', direction: 'baixa/longa', origin: '20% 100%', rgb: '232,241,255', intensity: 0.38, shadow: 0.40 },
  { id: 'oficio', index: '07', label: 'O OFÍCIO', kelvin: 5000, source: 'ring light', direction: 'frontal circular', origin: '50% 35%', rgb: '242,245,255', intensity: 0.30, shadow: 0.30 },
  { id: 'fecho', index: '08', label: 'O FECHO', kelvin: 5600, source: 'amanhecer + tag azul', direction: 'baixa/frontal', origin: '50% 100%', rgb: '232,241,255', intensity: 0.35, shadow: 0.30 },
] as const;

export type Chapter = typeof CHAPTERS[number];