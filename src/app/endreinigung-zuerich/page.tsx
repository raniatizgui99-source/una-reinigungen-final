import type { Metadata } from 'next';
import { SEOLandingPage } from '@/components/pages/SEOLandingPage';

export const metadata: Metadata = {
  title: 'Endreinigung Zürich – Professionelle Reinigung | UNA Reinigungen',
  description: 'Professionelle Endreinigung in Zürich mit 100% Abnahmegarantie. Fixpreis ohne versteckte Kosten. Jetzt Offerte anfordern!',
};

export default function ZuerichPage() {
  return (
    <SEOLandingPage
      cityDe="Zürich"
      cityEn="Zurich"
      areaTextDe="Wir bedienen alle Stadtkreise in Zürich sowie die umliegenden Gemeinden."
      areaTextEn="We serve all city districts in Zurich as well as the surrounding municipalities."
      areas={['Zürich City', 'Oerlikon', 'Altstetten', 'Wiedikon', 'Affoltern', 'Seebach', 'Schwamendingen', 'Dietikon', 'Schlieren', 'Regensdorf']}
    />
  );
}
