import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { CaminhoDasArtes } from '@/components/sections/CaminhoDasArtes';
import { Portfolio } from '@/components/sections/Portfolio';
import { Transformacao } from '@/components/sections/Transformacao';
import { Processo } from '@/components/sections/Processo';
import { Servicos } from '@/components/sections/Servicos';
import { Contato } from '@/components/sections/Contato';
import { ChapterLight } from '@/components/ui/ChapterLight';

export default function Home() {
  return (
    <>
      <ChapterLight />
      <Hero />
      <Manifesto />
      <CaminhoDasArtes />
      <Portfolio />
      <Transformacao />
      <Processo />
      <Servicos />
      <Contato />
    </>
  );
}
