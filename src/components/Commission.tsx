import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Clipboard, MessageCircle, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/motion";
import { Reveal, SectionLabel } from "./Reveal";

const services = ["Mural", "Tatuagem", "Tela", "Oficina"] as const;
type Service = (typeof services)[number];
type Draft = {
  name: string;
  service: Service;
  city: string;
  width: string;
  height: string;
  placement: string;
  participants: string;
  timeframe: string;
  idea: string;
};

const emptyDraft: Draft = { name: "", service: "Mural", city: "", width: "", height: "", placement: "", participants: "", timeframe: "Sem data definida", idea: "" };

function loadDraft(): Draft {
  try {
    const saved = localStorage.getItem("ruan-trapp-brief");
    if (!saved) return emptyDraft;
    const parsed = JSON.parse(saved) as Partial<Draft>;
    return { ...emptyDraft, ...parsed, service: services.includes(parsed.service as Service) ? parsed.service as Service : "Mural" };
  } catch {
    return emptyDraft;
  }
}

function numeric(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function Commission() {
  const [draft, setDraft] = useState<Draft>(loadDraft);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  useEffect(() => {
    try { localStorage.setItem("ruan-trapp-brief", JSON.stringify(draft)); } catch { /* Storage can be unavailable in private browsing. */ }
  }, [draft]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const update = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "", dimensions: "" }));
    setFallbackUrl("");
  };

  const usesDimensions = draft.service === "Mural" || draft.service === "Tela";
  const unit = draft.service === "Tela" ? "cm" : "m";
  const width = numeric(draft.width);
  const height = numeric(draft.height);
  const area = width && height ? width * height : 0;

  const message = useMemo(() => {
    const lines = [
      `Olá, Trapp! Meu nome é ${draft.name.trim() || "[seu nome]"}.`,
      "",
      `*Projeto:* ${draft.service}`,
      `*Cidade:* ${draft.city.trim() || "A informar"}`,
    ];
    if (usesDimensions) {
      const dimensions = width && height ? `${draft.width} × ${draft.height} ${unit} (${area.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} ${unit}²)` : "A confirmar";
      lines.push(`*Dimensões aproximadas:* ${dimensions}`);
    }
    if (draft.service === "Tatuagem") lines.push(`*Região do corpo:* ${draft.placement.trim() || "A conversar"}`);
    if (draft.service === "Oficina") lines.push(`*Número de participantes:* ${draft.participants || "A confirmar"}`);
    lines.push(`*Prazo desejado:* ${draft.timeframe}`);
    lines.push("", "*Ideia / contexto:*", draft.idea.trim() || "Gostaria de desenvolver a ideia em conversa.", "", "Brief criado pelo portfólio trapp.");
    return lines.join("\n");
  }, [draft, usesDimensions, width, height, unit, area]);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (draft.name.trim().length < 2) nextErrors.name = "Digite seu nome para personalizar o brief.";
    if (draft.city.trim().length < 2) nextErrors.city = "Informe a cidade do projeto.";
    if (usesDimensions && ((draft.width && !draft.height) || (!draft.width && draft.height))) nextErrors.dimensions = "Preencha as duas medidas ou deixe ambas para depois.";
    if (usesDimensions && ((draft.width && !width) || (draft.height && !height))) nextErrors.dimensions = "Use medidas maiores que zero, com ponto ou vírgula.";
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) window.setTimeout(() => document.getElementById(firstError === "dimensions" ? "width" : firstError)?.focus(), 0);
    return Object.keys(nextErrors).length === 0;
  };

  const sendToWhatsApp = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const url = whatsappUrl(message);
    const opened = window.open(url, "_blank");
    if (opened) {
      opened.opener = null;
      setToast("WhatsApp aberto. Revise e envie a mensagem por lá.");
    } else {
      setFallbackUrl(url);
    }
  };

  const copyBrief = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = message;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) throw new Error("Copy unavailable");
      }
      setToast("Brief copiado para a área de transferência.");
    } catch {
      setToast("Não foi possível copiar. Você pode selecionar o resumo manualmente.");
    }
  };

  const clearDraft = () => {
    setDraft(emptyDraft);
    setErrors({});
    setFallbackUrl("");
    try { localStorage.removeItem("ruan-trapp-brief"); } catch { /* No action needed. */ }
    setToast("Brief limpo neste dispositivo.");
  };

  return (
    <section id="contato" className="section-pad relative overflow-hidden bg-[#11110f]" aria-labelledby="commission-title">
      <div className="pointer-events-none absolute -right-20 top-0 h-[36rem] w-[36rem] rounded-full bg-gold/[0.055] blur-[120px]" />
      <div className="page-shell relative">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3"><Reveal><SectionLabel index="06">Seu projeto começa aqui</SectionLabel></Reveal></div>
          <Reveal className="lg:col-span-9">
            <h2 id="commission-title" className="font-display text-[clamp(4.4rem,9.5vw,9.5rem)] leading-[0.8] text-bone">Tem uma ideia?<br /><span className="gold-sheen">Dê forma a ela.</span></h2>
            <p className="mt-7 max-w-xl text-sm font-light leading-7 text-muted">Monte um brief objetivo em menos de dois minutos. O site organiza suas respostas e abre a conversa no WhatsApp — sem valores estimados fictícios e sem envio automático.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={sendToWhatsApp} noValidate className="border border-white/15 bg-ink/60 p-5 sm:p-8 md:p-10">
              <fieldset>
                <legend className="eyebrow mb-4 text-gold">01 / O que vamos criar?</legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Tipo de projeto">
                  {services.map((service) => (
                    <button key={service} type="button" role="radio" aria-checked={draft.service === service} onClick={() => update("service", service)} className={`border px-3 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${draft.service === service ? "border-gold bg-gold text-ink" : "border-white/15 text-muted hover:border-gold/50 hover:text-bone"}`}>{service}</button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-9">
                <p className="eyebrow mb-4 text-gold">02 / Contexto</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs text-muted">Seu nome *
                    <input id="name" className="field mt-2" value={draft.name} onChange={(event) => update("name", event.target.value)} placeholder="Como podemos chamar você?" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                    {errors.name && <span id="name-error" className="mt-2 block text-[11px] text-gold-light">{errors.name}</span>}
                  </label>
                  <label className="block text-xs text-muted">Cidade / UF *
                    <input id="city" className="field mt-2" value={draft.city} onChange={(event) => update("city", event.target.value)} placeholder="Ex.: Jaraguá do Sul / SC" autoComplete="address-level2" aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? "city-error" : undefined} />
                    {errors.city && <span id="city-error" className="mt-2 block text-[11px] text-gold-light">{errors.city}</span>}
                  </label>
                </div>

                {usesDimensions && (
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <label className="block text-xs text-muted">Largura aproximada ({unit})
                      <input id="width" className="field mt-2" inputMode="decimal" value={draft.width} onChange={(event) => update("width", event.target.value)} placeholder={draft.service === "Tela" ? "80" : "4,5"} aria-invalid={Boolean(errors.dimensions)} aria-describedby={errors.dimensions ? "dimensions-error" : undefined} />
                    </label>
                    <label className="block text-xs text-muted">Altura aproximada ({unit})
                      <input id="height" className="field mt-2" inputMode="decimal" value={draft.height} onChange={(event) => update("height", event.target.value)} placeholder={draft.service === "Tela" ? "100" : "2,8"} aria-invalid={Boolean(errors.dimensions)} />
                    </label>
                    {errors.dimensions && <p id="dimensions-error" className="text-[11px] text-gold-light sm:col-span-2">{errors.dimensions}</p>}
                  </div>
                )}

                {draft.service === "Tatuagem" && (
                  <label className="mt-5 block text-xs text-muted">Região do corpo / tamanho desejado
                    <input className="field mt-2" value={draft.placement} onChange={(event) => update("placement", event.target.value)} placeholder="Ex.: antebraço, cerca de 15 cm" />
                  </label>
                )}
                {draft.service === "Oficina" && (
                  <label className="mt-5 block text-xs text-muted">Número estimado de participantes
                    <input className="field mt-2" inputMode="numeric" value={draft.participants} onChange={(event) => update("participants", event.target.value.replace(/[^0-9]/g, ""))} placeholder="Ex.: 20" />
                  </label>
                )}

                <label className="mt-5 block text-xs text-muted">Quando você imagina o projeto?
                  <select className="field mt-2" value={draft.timeframe} onChange={(event) => update("timeframe", event.target.value)}>
                    <option>Sem data definida</option><option>Próximos 30 dias</option><option>Entre 1 e 3 meses</option><option>Daqui a 3 meses ou mais</option><option>Tenho uma data específica</option>
                  </select>
                </label>
                <label className="mt-5 block text-xs text-muted">Conte um pouco da ideia
                  <textarea className="field mt-2 min-h-32 resize-y" value={draft.idea} onChange={(event) => update("idea", event.target.value)} placeholder={draft.service === "Mural" ? "Onde fica a parede? Qual atmosfera você busca? Existe alguma referência ou palavra importante?" : "Referências, intenção, estilo e qualquer detalhe que ajude na primeira conversa."} maxLength={1200} />
                  <span className="mt-2 block text-right font-mono text-[9px] text-muted">{draft.idea.length} / 1200</span>
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="group inline-flex flex-1 items-center justify-center gap-3 bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-light"><MessageCircle size={17} /> Abrir no WhatsApp <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" /></button>
                <button type="button" onClick={copyBrief} className="inline-flex items-center justify-center gap-3 border border-white/20 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-bone transition-colors hover:border-gold hover:text-gold"><Clipboard size={15} /> Copiar brief</button>
              </div>
              {fallbackUrl && <div className="mt-4 border border-gold/40 p-4 text-xs leading-6 text-bone"><p>Seu navegador bloqueou a nova guia. Use este link direto:</p><a href={fallbackUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-gold">Continuar para o WhatsApp <ArrowUpRight size={14} /></a></div>}
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-[10px] leading-5 text-muted">Rascunho salvo apenas neste dispositivo. Nada é enviado até você confirmar no WhatsApp.</p>
                <button type="button" onClick={clearDraft} className="inline-flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-wider text-muted transition-colors hover:text-gold"><RotateCcw size={12} /> Limpar</button>
              </div>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <aside className="lg:sticky lg:top-28" aria-label="Resumo do brief">
              <div className="border border-gold/35 bg-gold/[0.045] p-6 md:p-8">
                <div className="flex items-center justify-between"><p className="eyebrow text-gold">Resumo ao vivo</p><span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-muted"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Salvo localmente</span></div>
                <p className="mt-8 font-display text-6xl text-bone">{draft.service}</p>
                <dl className="mt-8 space-y-5 border-t border-gold/20 pt-6 text-sm">
                  <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Nome</dt><dd className="text-bone">{draft.name || "—"}</dd></div>
                  <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Local</dt><dd className="text-bone">{draft.city || "—"}</dd></div>
                  {usesDimensions && <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Medidas</dt><dd className="text-bone">{area ? `${draft.width} × ${draft.height} ${unit}` : "A confirmar"}{area > 0 && <span className="mt-1 block text-xs text-gold">{area.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} {unit}² calculados</span>}</dd></div>}
                  {draft.service === "Tatuagem" && <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Aplicação</dt><dd className="text-bone">{draft.placement || "A conversar"}</dd></div>}
                  {draft.service === "Oficina" && <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Grupo</dt><dd className="text-bone">{draft.participants ? `${draft.participants} pessoas` : "A confirmar"}</dd></div>}
                  <div className="grid grid-cols-[90px_1fr] gap-4"><dt className="text-muted">Prazo</dt><dd className="text-bone">{draft.timeframe}</dd></div>
                </dl>
                <p className="mt-8 border-l border-gold/50 pl-4 text-xs font-light leading-6 text-muted">{draft.idea || "Sua ideia aparece aqui enquanto você escreve. Depois, o brief completo será formatado para o WhatsApp."}</p>
              </div>
              <div className="mt-5 flex items-start gap-3 p-2 text-xs leading-6 text-muted"><Check size={15} className="mt-1 shrink-0 text-gold" /><p>O orçamento é individual: área, complexidade, superfície, acesso, materiais e deslocamento entram na análise.</p></div>
            </aside>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {toast && <motion.div role="status" className="fixed bottom-24 left-4 z-[170] max-w-sm border border-gold/45 bg-panel px-5 py-4 text-xs leading-5 text-bone shadow-2xl md:bottom-6 md:left-6" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}>{toast}</motion.div>}
      </AnimatePresence>
    </section>
  );
}
