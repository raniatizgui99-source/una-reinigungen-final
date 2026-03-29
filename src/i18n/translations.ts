export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: {
      services: 'Dienstleistungen',
      about: 'Über uns',
      faq: 'FAQ',
      reviews: 'Referenzen',
      cta: 'Gratis Offerte',
    },
    hero: {
      h1: 'Umzugsreinigung Regensdorf\nmit Abnahmegarantie',
      sub: 'Ihre Experten für die professionelle Endreinigung mit Abnahmegarantie in Regensdorf und weiteren Städten im Umkreis von 20km. Wir garantieren eine stressfreie Wohnungsübergabe zum fairen Fixpreis.',
      cta: 'Jetzt gratis Offerte anfordern',
      secondary: 'Umzugsreinigung mit Abnahmegarantie',
      locationInfo: 'Adlikerstrasse 30, 8105 Regensdorf',
      topRated: 'Top-Bewertet'
    },
    whyUs: {
      title: 'Warum UNA Reinigungen?',
      subtitle: 'Ihre erste Wahl für Umzugsreinigung Regensdorf und Zürich.',
      description: 'Verlassen Sie sich auf lokale Expertise und ein eingespieltes Team aus Regensdorf.',
      points: [
        { title: '100% Abnahmegarantie', desc: 'Wir sind bei der Übergabe dabei. Sollte etwas nicht perfekt sein, wir reinigen sofort kostenlos nach. Umzugsreinigung mit Abnahmegarantie ist unser Standard.' },
        { title: 'Fixpreis-Garantie', desc: 'Keine versteckten Kosten. Ob Endreinigung mit Abnahmegarantie Regensdorf oder Umgebung – Sie zahlen genau das, was wir offerieren.' },
        { title: 'Regionale Präsenz', desc: 'Wir sind in Regensdorf zu Hause und bedienen Kunden im Umkreis von 20km. Schnell, zuverlässig und professionell.' }
      ]
    },
    process: {
      title: 'In 3 Schritten zur sauberen Wohnung',
      label: 'Prozess & Effizienz',
      steps: [
        { title: 'Offerte anfragen', desc: 'Nutzen Sie unser Formular für eine kostenlose Schätzung Ihrer Umzugsreinigung mit Abnahmegarantie oder Endreinigung.' },
        { title: 'Termin fixieren', desc: 'Wir planen die Reinigung flexibel nach Ihrem Umzugsdatum – auch kurzfristig möglich.' },
        { title: 'Sorglose Übergabe', desc: 'Wir reinigen, Sie ziehen um. Wir garantieren die erfolgreiche Abnahme durch Ihre Verwaltung.' }
      ]
    },
    services: {
      title: 'Leistungsbeschrieb Umzugsreinigung',
      subtitle: 'Unser Rundum-Sorglos-Paket mit 100% Abnahmegarantie',
      mainPackage: {
        title: 'Umzugsreinigung mit Abnahmegarantie',
        description: 'Im Preis inbegriffen ist unsere Anwesenheit während der Wohnungsabgabe inkl. Fahrspesen und allfällige Nachreinigung bis zur erfolgreichen Abnahme!',
        badges: ['Fahrspesen inkl.', 'Nachreinigung inkl.', 'Abnahmegarantie'],
        features: [
          { category: 'Küche', items: ['Komplettreinigung inkl. Kühlschrank, Gefrierschrank, Tablare', 'Herd, Dampfabzug, Ober- und Unterbauten, Schubladen', 'Backofen, Waschbecken, Bodenbeläge'] },
          { category: 'Badezimmer/WC', items: ['Reinigen und entkalken, inkl. WC, Spülkasten, Lavabo', 'Bade- und Duschwanne, Armaturen, Spiegel', 'Plättliwände, Bodenbeläge'] },
          { category: 'Fenster & Storen', items: ['Innen- und Aussenreinigung inkl. Rahmen & Fensterbänken', 'Storen, Rolläden & Klappen (feucht reinigen & trocknen)'] },
          { category: 'Innenräume', items: ['Türen inkl. Rahmen, Radiatoren (feucht reinigen)', 'Bodenbeläge (Absaugen & feucht aufnehmen)', 'Einbauschränke (feucht reinigen & trocknen)', 'Wänden/Decken/Balken von Spinnweben befreien'] },
          { category: 'Aussen & Technik', items: ['Waschmaschine & Tumbler werden gereinigt!', 'Terrasse/Sitzplatz/Balkon (besenrein)', 'Keller/Estrich/Garage (besenrein)'] }
        ]
      },
      handoverTitle: 'Wohnungsabgabe',
      handoverItems: [
        'Unsere Anwesenheit während der Abgabe',
        'Inklusive Fahrspesen',
        'Allfällige Nachreinigung bis zur Abnahme'
      ],
      cta_button: 'Jetzt Offerte',
      addonsTitle: 'Zusatzleistungen',
      addonsNote: 'Diese Leistungen werden separat verrechnet, sofern nicht explizit eingeschlossen.',
      addonPrices: [
        { label: 'Teppich-Shamponnieren', price: '80.-- CHF', note: 'inkl. Reinigungsmittel' },
        { label: 'Wintergarten - Fensterreinigung', price: '4.00 CHF', note: 'pro m/2' },
        { label: 'Hochdruckreinigung', price: '80.-- CHF', note: 'inkl. Reinigungsmittel' },
        { label: 'Zuschlag Raucherwohnung', price: '250.00 CHF', note: '' }
      ],
      seo_note: 'Professionelle Umzugsreinigung mit Abnahmegarantie in Regensdorf und Umgebung.'
    },
    about: {
      label: 'Unsere Geschichte',
      title: 'UNA Reinigungen – Ihr Partner in Regensdorf',
      description: 'Seit Jahren sind wir der Spezialist für Umzugsreinigungen und Gebäudereinigungen in der Region Regensdorf. Unser Ziel ist es, Ihnen den Umzug so einfach wie möglich zu machen.',
      moreText: 'Wir bieten professionelle Endreinigung mit Abnahmegarantie Regensdorf, Zürich, Baden, Dietikon und vielen weiteren Städten im Umkreis von 20km an. Unser Team arbeitet effizient, sauber und verantwortungsbewusst.',
      badgeTitle: 'Versichert',
      badgeDesc: 'Vollumfängliche Haftpflichtdeckung',
      stats: [
        { label: 'Zufriedene Kunden', value: '1000+' },
        { label: 'Jahre Erfahrung', value: '10+' },
        { label: 'Abnahmegarantie', value: '100%' }
      ]
    },
    form: {
      title: 'Gratis Offerte anfordern',
      step1Title: '1. Objektdaten',
      step2Title: '2. Termin & Ort',
      step3Title: '3. Kontakt',
      stepLabels: ['Umfang', 'Details', 'Kontakt'],
      apartmentSize: 'Wohnungsgrösse',
      rooms: ['1.5 Zimmer', '2.5 Zimmer', '3.5 Zimmer', '4.5 Zimmer', '5.5+ Zimmer'],
      addons: 'Zusatzleistungen',
      addonList: ['Balkon / Terrasse', 'Keller / Estrich / Garage', 'Teppich-Shamponnieren (80.-)', 'Wintergarten (4.-/m2)', 'Hochdruckreinigung (80.-)', 'Raucherwohnung (250.-)'],
      date: 'Wunschdatum',
      zip: 'PLZ / Ort (z.B. 8105 Regensdorf)',
      category: 'Gewünschte Option',
      categories: ['Umzugsreinigung mit Abnahmegarantie', 'Umzugsreinigung ohne Abnahmegarantie'],
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Weitere Informationen',
      messagePlaceholder: 'Haben Sie spezielle Wünsche oder Details, die wir wissen sollten? (z.B. Etage, Parkmöglichkeit, Haustiere...)',
      optional: '(Optional)',
      submit: 'Offerte jetzt anfordern',
      next: 'Weiter',
      back: 'Zurück',
      success: 'Vielen Dank! Wir senden Ihnen in Kürze Ihre Offerte.'
    },
    faq: {
      label: 'Informationen',
      title: 'Häufig gestellte Fragen',
      subtitle: 'Wir möchten, dass Sie sich bei uns sicher fühlen. Hier finden Sie alle Details zu unserem Service und unseren Garantien.',
      moreQuestionsTitle: 'Noch Fragen offen?',
      moreQuestionsDesc: 'Unser Support-Team in Regensdorf berät Sie gerne persönlich am Telefon.',
      callUs: 'Anrufen',
      emailUs: 'E-Mail schreiben',
      items: [
        { q: 'Was beinhaltet die Abnahmegarantie?', a: 'Wir garantieren, dass Ihre Wohnung vom Vermieter abgenommen wird. Falls Nachreinigungen verlangt werden, erledigen wir diese sofort und kostenlos.' },
        { q: 'In welchen Städten sind Sie tätig?', a: 'Wir sind spezialisiert auf Umzugsreinigung Regensdorf und bedienen alle Orte im Umkreis von 20km, wie Zürich, Dielsdorf, Buchs, Wettingen etc.' },
        { q: 'Bieten Sie auch Endreinigung mit Abnahmegarantie an?', a: 'Ja, das ist unsere Kernkompetenz. Wir bieten Endreinigung mit Abnahmegarantie Regensdorf und Umgebung zum Fixpreis an.' },
        { q: 'Wie hoch sind die Kosten?', a: 'Die Kosten hängen von der Grösse und dem Zustand ab. Fordern Sie eine Gratis Offerte an für einen verbindlichen Fixpreis.' }
      ]
    },
    footer: {
      description: 'Ihr zuverlässiger Partner für professionelle Umzugsreinigung mit Abnahmegarantie in Regensdorf und Umgebung.',
      contactLabel: 'Kontakt',
      linksLabel: 'Links',
      languageLabel: 'Sprache',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: '© 2025 UNA REINIGUNGEN. ALLE RECHTE VORBEHALTEN.',
      links: ['Impressum', 'Datenschutz', 'Kontakt'],
      contact: {
        address: 'Adlikerstrasse 30, 8105 Regensdorf (ZH)',
        tel: '043 388 82 81',
        mob: '078 817 13 68',
        email: 'info@una-reinigungen.ch'
      }
    },
    legal: {
      imprint: {
        title: 'Impressum',
        company: 'UNA REINIGUNGEN',
        address: 'Adlikerstrasse 30',
        city: '8105 Regensdorf (ZH)',
        owner: 'Inhaber: UNA REINIGUNGEN Team',
        contact: 'Kontakt:',
        phone: 'Telefon: 043 388 82 81',
        email: 'E-Mail: info@una-reinigungen.ch',
        disclaimer: 'Haftungsausschluss',
        disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.'
      },
      privacy: {
        title: 'Datenschutzerklärung',
        intro: 'Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig.',
        collection: 'Datenerhebung und -verwendung',
        collectionText: 'Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Kontaktanfrage freiwillig mitteilen. Wir verwenden die von Ihnen mitgeteilten Daten ausschliesslich zur Bearbeitung Ihrer Anfragen.',
        cookies: 'Cookies',
        cookiesText: 'Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.',
        rights: 'Ihre Rechte',
        rightsText: 'Sie haben ein Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten Daten sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.'
      }
    }
  },
  en: {
    header: {
      services: 'Services',
      about: 'About Us',
      faq: 'FAQ',
      reviews: 'Reviews',
      cta: 'Free Quote',
    },
    hero: {
      h1: 'Move-out Cleaning Regensdorf\nwith Handover Guarantee',
      sub: 'Your experts for professional final cleaning in Regensdorf and surroundings (up to 20km). We guarantee a stress-free apartment handover with 100% acceptance guarantee at a fair fixed price.',
      cta: 'Request Free Quote Now',
      secondary: 'Move-out cleaning with handover guarantee',
      locationInfo: 'Adlikerstrasse 30, 8105 Regensdorf',
      topRated: 'Top-Rated'
    },
    whyUs: {
      title: 'Why UNA Cleaning?',
      subtitle: 'Your first choice for move-out cleaning in Regensdorf and Zurich.',
      description: 'Rely on local expertise and an experienced team from Regensdorf.',
      points: [
        { title: '100% Handover Guarantee', desc: 'We are present during the handover. If anything is not perfect, we will re-clean immediately for free. Move-out cleaning with handover guarantee is our standard.' },
        { title: 'Fixed Price Guarantee', desc: 'No hidden costs. Whether it is final cleaning with guarantee in Regensdorf or surroundings – you pay exactly what we quote.' },
        { title: 'Regional Presence', desc: 'We are at home in Regensdorf and serve customers within a 20km radius. Fast, reliable, and professional.' }
      ]
    },
    process: {
      title: 'In 3 Steps to a Clean Apartment',
      label: 'Process & Efficiency',
      steps: [
        { title: 'Request Quote', desc: 'Use our form for a free estimate of your move-out cleaning or final cleaning.' },
        { title: 'Fix Date', desc: 'We plan the cleaning flexibly according to your move date – also possible at short notice.' },
        { title: 'Worry-free Handover', desc: 'We clean, you move. We guarantee successful acceptance by your management.' }
      ]
    },
    services: {
      title: 'Service Description Move-out Cleaning',
      subtitle: 'Our all-inclusive package with 100% handover guarantee',
      mainPackage: {
        title: 'Move-out Cleaning with Handover Guarantee',
        description: 'Included in the price is our presence during the apartment handover incl. travel expenses and any re-cleaning until successful acceptance!',
        badges: ['Travel incl.', 'Re-cleaning incl.', 'Handover Guarantee'],
        features: [
          { category: 'Kitchen', items: ['Complete cleaning incl. fridge, freezer, shelves', 'Stove, hood, upper & lower cabinets, drawers', 'Oven, sink, floor coverings'] },
          { category: 'Bathroom/WC', items: ['Cleaning & descaling (WC, cistern, sink)', 'Bath & shower tub, fittings, mirror', 'Tile walls & floor coverings'] },
          { category: 'Windows & Blinds', items: ['Inside & outside cleaning incl. frames & sills', 'Blinds, shutters & flaps (wet clean & dry)'] },
          { category: 'Interior', items: ['Doors incl. frames, radiators (wet clean)', 'Floor coverings (vacuuming & wet mopping)', 'Built-in cupboards (wet clean & dry)', 'Walls/ceilings/beams cleared of cobwebs'] },
          { category: 'Exterior & Tech', items: ['Washing machine & tumbler will be cleaned!', 'Terrace/seating area/balcony (swept clean)', 'Cellar/attic/garage (swept clean)'] }
        ]
      },
      handoverTitle: 'Apartment Handover',
      handoverItems: [
        'Our presence during the handover',
        'Including travel expenses',
        'Any re-cleaning until acceptance'
      ],
      cta_button: 'Get Quote',
      addonsTitle: 'Additional Services',
      addonsNote: 'These services are charged separately unless explicitly included.',
      addonPrices: [
        { label: 'Carpet Shampooing', price: '80.-- CHF', note: 'incl. cleaning agents' },
        { label: 'Winter Garden - Window Cleaning', price: '4.00 CHF', note: 'per m/2' },
        { label: 'High-pressure Cleaning', price: '80.-- CHF', note: 'incl. cleaning agents' },
        { label: 'Smoking Apartment Surcharge', price: '250.00 CHF', note: '' }
      ],
      seo_note: 'Professional move-out cleaning with handover guarantee in Regensdorf and surroundings.'
    },
    about: {
      label: 'Our Story',
      title: 'UNA Cleaning – Your Partner in Regensdorf',
      description: 'For years, we have been the specialist for move-out cleaning and building cleaning in the Regensdorf region. Our goal is to make your move as easy as possible.',
      moreText: 'We offer professional final cleaning with handover guarantee in Regensdorf, Zurich, Baden, Dietikon, and many other cities within a 20km radius. Our team works efficiently, cleanly, and responsibly.',
      badgeTitle: 'Insured',
      badgeDesc: 'Full liability coverage',
      stats: [
        { label: 'Satisfied Customers', value: '1000+' },
        { label: 'Years of Experience', value: '10+' },
        { label: 'Handover Guarantee', value: '100%' }
      ]
    },
    form: {
      title: 'Request Free Quote',
      step1Title: '1. Object Data',
      step2Title: '2. Date & Location',
      step3Title: '3. Contact',
      stepLabels: ['Scope', 'Details', 'Contact'],
      apartmentSize: 'Apartment Size',
      rooms: ['1.5 Rooms', '2.5 Rooms', '3.5 Rooms', '4.5 Rooms', '5.5+ Rooms'],
      addons: 'Additional Services',
      addonList: ['Balcony / Terrace', 'Cellar / Attic / Garage', 'Carpet Shampooing (80.-)', 'Winter Garden (4.-/m2)', 'High-pressure Cleaning (80.-)', 'Smoking Apartment (250.-)'],
      date: 'Desired Date',
      zip: 'ZIP / City (e.g., 8105 Regensdorf)',
      category: 'Desired Option',
      categories: ['Move-out cleaning with handover guarantee', 'Move-out cleaning without handover guarantee'],
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Additional Information',
      messagePlaceholder: 'Do you have special requests or details we should know? (e.g., floor, parking, pets...)',
      optional: '(Optional)',
      submit: 'Request Quote Now',
      next: 'Next',
      back: 'Back',
      success: 'Thank you! We will send you your quote shortly.'
    },
    faq: {
      label: 'Information',
      title: 'Frequently Asked Questions',
      subtitle: 'We want you to feel safe with us. Here you will find all the details about our service and our guarantees.',
      moreQuestionsTitle: 'Still have questions?',
      moreQuestionsDesc: 'Our support team in Regensdorf will be happy to advise you personally on the phone.',
      callUs: 'Call Us',
      emailUs: 'Write Email',
      items: [
        { q: 'What does the handover guarantee include?', a: 'We guarantee that your apartment will be accepted by the landlord. If re-cleaning is requested, we will do it immediately and for free.' },
        { q: 'In which cities do you operate?', a: 'We specialize in move-out cleaning Regensdorf and serve all locations within a 20km radius, such as Zurich, Dielsdorf, Buchs, Wettingen etc.' },
        { q: 'Do you also offer final cleaning with handover guarantee?', a: 'Yes, that is our core competence. We offer final cleaning with handover guarantee in Regensdorf and surroundings at a fixed price.' },
        { q: 'How high are the costs?', a: 'The costs depend on the size and condition. Request a free quote for a binding fixed price.' }
      ]
    },
    footer: {
      description: 'Your reliable partner for professional move-out cleaning with handover guarantee in Regensdorf and surroundings.',
      contactLabel: 'Contact',
      linksLabel: 'Links',
      languageLabel: 'Language',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      rights: '© 2025 UNA CLEANING. ALL RIGHTS RESERVED.',
      links: ['Imprint', 'Privacy Policy', 'Contact'],
      contact: {
        address: 'Adlikerstrasse 30, 8105 Regensdorf (ZH)',
        tel: '043 388 82 81',
        mob: '078 817 13 68',
        email: 'info@una-reinigungen.ch'
      }
    },
    legal: {
      imprint: {
        title: 'Imprint',
        company: 'UNA CLEANING',
        address: 'Adlikerstrasse 30',
        city: '8105 Regensdorf (ZH)',
        owner: 'Owner: UNA CLEANING Team',
        contact: 'Contact:',
        phone: 'Phone: 043 388 82 81',
        email: 'Email: info@una-reinigungen.ch',
        disclaimer: 'Disclaimer',
        disclaimerText: 'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'We are pleased about your interest in our website. Protecting your privacy is very important to us.',
        collection: 'Data Collection and Use',
        collectionText: 'We collect personal data when you voluntarily provide it to us as part of your contact request. We use the data you provide exclusively to process your requests.',
        cookies: 'Cookies',
        cookiesText: 'This website uses cookies to improve user-friendliness.',
        rights: 'Your Rights',
        rightsText: 'You have a right to free information about your data stored by us and, if applicable, a right to correction, blocking or deletion of this data.'
      }
    }
  }
};
