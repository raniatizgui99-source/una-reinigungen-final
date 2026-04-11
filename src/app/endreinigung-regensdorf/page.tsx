import type { Metadata } from 'next';
import { SEOLandingPage } from '@/components/pages/SEOLandingPage';

export const metadata: Metadata = {
  title: 'Endreinigung Regensdorf – Professionelle Reinigung | UNA Reinigungen',
  description: 'Professionelle Endreinigung in Regensdorf mit 100% Abnahmegarantie. Fixpreis ohne versteckte Kosten. Jetzt Offerte anfordern!',
};

export default function RegensdorfPage() {
  return (
    <SEOLandingPage 
      city="Regensdorf" 
      areaText="Wir sind in Regensdorf zu Hause und reinigen im gesamten Umkreis von 20km."
      areas={['Regensdorf', 'Dällikon', 'Buchs', 'Otelfingen', 'Würenlos', 'Weiningen', 'Unterengstringen', 'Dietikon', 'Baden', 'Zürich']}
    />
  );
}
