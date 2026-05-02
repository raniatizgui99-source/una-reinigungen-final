import type { Metadata } from 'next';
import { SEOLandingPage } from '@/components/pages/SEOLandingPage';

export const metadata: Metadata = {
  title: 'Endreinigung Regensdorf – Professionelle Reinigung | UNA Reinigungen',
  description: 'Professionelle Endreinigung in Regensdorf mit 100% Abnahmegarantie. Fixpreis ohne versteckte Kosten. Jetzt Offerte anfordern!',
};

export default function RegensdorfPage() {
  return (
    <SEOLandingPage
      cityDe="Regensdorf"
      cityEn="Regensdorf"
      areaTextDe="Wir sind in Regensdorf zu Hause und reinigen im gesamten Umkreis von 20km."
      areaTextEn="We are based in Regensdorf and clean within a radius of 20km."
      areas={['Regensdorf Zentrum', 'Regensdorf-Watt', 'Adlikon', 'Dällikon', 'Buchs', 'Otelfingen', 'Würenlos', 'Weiningen', 'Zürich']}
      customLocalTeamDe="Als Ihr lokales Reinigungsteam direkt aus Regensdorf garantieren wir schnelle Anfahrtswege und höchste Zuverlässigkeit für Ihre Wohnungsabgabe in Watt, Adlikon und Umgebung."
      customLocalTeamEn="As your local cleaning team based right here in Regensdorf, we guarantee fast response times and maximum reliability for your handover in Watt, Adlikon, and the surrounding areas."
      localFaqDe={[
        {
          question: "Bieten Sie die Endreinigung auch in den Ortsteilen Watt und Adlikon an?",
          answer: "Ja! Da wir unser Hauptquartier direkt in Regensdorf haben, sind wir in allen Ortsteilen wie Regensdorf-Watt und Adlikon innerhalb kürzester Zeit vor Ort. Keine langen Anfahrtswege, keine versteckten Kosten."
        }
      ]}
      localFaqEn={[
        {
          question: "Do you also offer move-out cleaning in the Watt and Adlikon districts?",
          answer: "Yes! Because we are headquartered right in Regensdorf, we can reach all local districts like Regensdorf-Watt and Adlikon very quickly. No long travel times, no hidden costs."
        }
      ]}
    />
  );
}
