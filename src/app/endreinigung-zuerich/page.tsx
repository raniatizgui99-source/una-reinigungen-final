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
      areas={['Zürich Kreis 1-12', 'Zürich Oerlikon (Kreis 11)', 'Zürich Altstetten (Kreis 9)', 'Zürich Unterstrass (Kreis 6)', 'Wiedikon', 'Affoltern', 'Seebach', 'Schwamendingen']}
      customHeroSubDe="Ihre professionelle Endreinigung für alle Zürcher Stadtkreise. Zuverlässig, extrem schnell vor Ort und mit 100% Abnahmegarantie."
      customHeroSubEn="Your professional move-out cleaning for all Zurich city districts. Reliable, extremely fast response time, and with a 100% handover guarantee."
      customLocalTeamDe="Dank unserer zentralen Nähe sind wir in allen Zürcher Stadtkreisen (wie z.B. Kreis 6, Kreis 11 oder Altstetten) extrem schnell für Sie vor Ort. Vertrauen Sie auf unseren Zürcher Reinigungsservice mit Bestpreis-Garantie."
      customLocalTeamEn="Thanks to our central proximity, we are extremely fast to reach you in all Zurich city districts (such as District 6, District 11, or Altstetten). Trust our Zurich cleaning service with a best-price guarantee."
    />
  );
}
