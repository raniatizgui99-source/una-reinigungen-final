import type { Metadata } from 'next';
import { SEOLandingPage } from '@/components/pages/SEOLandingPage';

export const metadata: Metadata = {
  title: 'Endreinigung Zürich – Professionelle Reinigung | UNA Reinigungen',
  description: 'Professionelle Endreinigung in Zürich mit 100% Abnahmegarantie. Fixpreis ohne versteckte Kosten. Jetzt Offerte anfordern!',
};

export default function ZuerichPage() {
  return (
    <SEOLandingPage 
      city="Zürich" 
      areaText="Wir bedienen alle Stadtkreise in Zürich sowie die umliegenden Gemeinden."
      areas={['Zürich City', 'Oerlikon', 'Altstetten', 'Wiedikon', 'Affoltern', 'Seebach', 'Schwamendingen', 'Dietikon', 'Schlieren', 'Regensdorf']}
    />
  );
}
