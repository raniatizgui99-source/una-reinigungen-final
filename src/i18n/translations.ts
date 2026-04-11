export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: {
      services: 'Dienstleistungen',
      about: 'Über uns',
      faq: 'FAQ',
      reviews: 'Referenzen',
      cta: 'Fixpreis berechnen',
    },
    hero: {
      h1: 'Volle Kaution zurück —\ngarantiert.',
      sub: 'Wir übernehmen die komplette Endreinigung Ihrer Wohnung in Regensdorf und Umgebung. Wird die Wohnung nicht abgenommen, reinigen wir kostenlos nach. Zum fairen Fixpreis, ohne versteckte Kosten.',
      cta: 'In 60 Sekunden zur Offerte',
      secondary: 'Über 1000 erfolgreiche Wohnungsübergaben',
      locationInfo: 'Regensdorf & 20km Umkreis',
      topRated: '5.0 auf Google',
      urgency: 'Nächste freie Termine füllen sich schnell',
      guarantee: '100% Abnahmegarantie',
      fixedPrice: 'Fixpreis ohne versteckte Kosten',
      whatsappChat: 'Sofort Angebot per WhatsApp'
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
      cta_button: 'Fixpreis berechnen',
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
      label: 'Warum uns vertrauen?',
      title: 'Über 1000 Mieter haben durch uns ihre volle Kaution zurückbekommen.',
      description: 'Wir sind nicht einfach eine Putzfirma. Wir sind Ihr Versicherungsschutz für die Wohnungsübergabe. Jede Reinigung wird von unserem erfahrenen Team persönlich durchgeführt — und wir begleiten Sie bis zur erfolgreichen Abnahme.',
      moreText: 'Von Regensdorf aus bedienen wir Kunden in Zürich, Baden, Dietikon und im gesamten Umkreis von 20km. Vollversichert, fair bepreist und mit einer Garantie, die ihren Namen verdient.',
      badgeTitle: 'Vollversichert',
      badgeDesc: 'Haftpflichtdeckung für Ihre Sicherheit',
      stats: [
        { label: 'Erfolgreiche Übergaben', value: '1000+' },
        { label: 'Jahre Erfahrung', value: '10+' },
        { label: 'Kautionen gesichert', value: '100%' }
      ]
    },
    form: {
      title: 'Ihren Fixpreis berechnen',
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
      submit: 'Fixpreis jetzt erhalten',
      next: 'Weiter',
      back: 'Zurück',
      success: 'Vielen Dank! Wir melden uns innerhalb von 2 Stunden bei Ihnen.',
      socialProof: '847 Offerten dieses Jahr verschickt'
    },
    faq: {
      label: 'Ihre Fragen, ehrlich beantwortet',
      title: 'Häufig gestellte Fragen',
      subtitle: 'Wir verstehen, dass eine Wohnungsübergabe stressig ist. Hier sind die Antworten, die wirklich zählen.',
      moreQuestionsTitle: 'Noch Fragen offen?',
      moreQuestionsDesc: 'Unser Team in Regensdorf berät Sie gerne persönlich — kostenlos und unverbindlich.',
      callUs: 'Jetzt anrufen',
      emailUs: 'E-Mail schreiben',
      items: [
        { q: 'Was passiert, wenn die Verwaltung die Wohnung nicht abnimmt?', a: 'Dann kommen wir zurück und reinigen kostenlos nach — so oft wie nötig, bis die Abnahme erfolgt. Das ist unsere 100% Abnahmegarantie. Sie zahlen keinen Rappen mehr.' },
        { q: 'Mein Vermieter ist sehr streng. Funktioniert die Garantie trotzdem?', a: 'Gerade dann! Wir kennen die Standards der meisten Verwaltungen in der Region. Strenge Vermieter sind unser Alltag — in über 1000 Übergaben haben wir noch keine Kaution verloren.' },
        { q: 'Lohnt sich eine professionelle Reinigung wirklich?', a: 'Eine durchschnittliche Kaution beträgt CHF 3000-6000. Unsere Reinigung kostet einen Bruchteil davon und garantiert, dass Sie Ihre volle Kaution zurückbekommen. Dazu sparen Sie sich 2-3 Tage Eigenarbeit inklusive Putzequipment.' },
        { q: 'Wie hoch sind die Kosten genau?', a: 'Sie erhalten einen verbindlichen Fixpreis — ohne versteckte Kosten. Fahrspesen, Reinigungsmittel und allfällige Nachreinigung sind inklusive. Fordern Sie in 60 Sekunden Ihre Offerte an.' },
        { q: 'Was, wenn ich kurzfristig absagen muss?', a: 'Kein Problem. Kostenlose Stornierung bis 48 Stunden vor dem Termin. Wir verstehen, dass sich Umzugsdaten verschieben können.' },
        { q: 'In welchen Städten sind Sie tätig?', a: 'Wir sind in Regensdorf zu Hause und bedienen alle Orte im Umkreis von 20km: Zürich, Dielsdorf, Buchs, Wettingen, Baden, Dietikon und viele mehr.' }
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
    },
    heroForm: {
      title: 'Fixpreis berechnen',
      step1: '1. Eckdaten',
      step2: '2. Kontakt',
      stepIndicator: 'Schritt {current} von {total}',
      stepLabels: ['Umfang', 'Optionen', 'Termin', 'Abschluss'],
      rooms: 'Zimmer',
      zip: 'PLZ',
      zipPlaceholder: '8105',
      name: 'Vorname & Name',
      email: 'E-Mail',
      phone: 'Telefonnummer',
      messagePlaceholder: 'Ihre Nachricht (Optional)',
      next: 'Weiter zur Offerte',
      submit: 'Jetzt anfordern',
      back: 'Zurück',
      successTitle: 'Offerte angefordert!',
      successText: 'Wir melden uns innerhalb von 2 Stunden mit Ihrem Fixpreis.',
      roomsOptions: ['1.5 - 2.5', '3.5 - 4.5', '5.5+'],
      tabType: 'Reinigungstyp',
      tabDate: 'Wunschdatum',
      optionGarantie: 'Umzugsreinigung mit Abnahmegarantie',
      optionNoGarantie: 'Umzugsreinigung ohne Abnahmegarantie',
      addonsTitle: 'ZUSATZLEISTUNGEN',
      addonsLabel: 'Zusatzleistungen',
      details: 'Details',
      flexibleDateNote: '📅 Flexible Terminwahl möglich',
      addonList: [
        'Balkon / Terrasse',
        'Keller / Estrich / Garage',
        'Teppich-Shamponnieren (80.-)',
        'Wintergarten (4.-/m2)',
        'Hochdruckreinigung (80.-)',
        'Raucherwohnung (250.-)'
      ],
    },
    testimonials: {
      label: 'Kundenrezensionen',
      title: 'Das sagen unsere Kunden auf Google',
      subtitle: 'Ausgezeichnet mit 5.0 Sternen',
      readMore: 'Mehr ansehen',
      googleReviews: 'Google Rezensionen',
      basedOn: 'Basierend auf echten Kunden',
      helpful: 'Hilfreich',
      items: [
        {
          name: 'Branimir Soldat',
          initial: 'B',
          color: 'bg-purple-600',
          timeAgo: 'vor 2 Jahren',
          text: 'Alles bestens. Das Team war pünktlich vor Ort und kam auch zur Wohnungsabgabe mit einem Mitarbeiter. Beanstandet wurde aber nichts seitens Verwaltung. Vielen Dank und gerne wieder.',
          isLocalGuide: true,
          reviewCount: '12 Rezensionen'
        },
        {
          name: 'Michael Hoffmann',
          initial: 'M',
          color: 'bg-blue-600',
          timeAgo: 'vor 4 Monaten',
          text: 'Tip top, kann ich voll und ganz weiterempfehlen. Hatte schon einige Umzüge hinter mir, aber noch nie so einfach, gut und preiswert wie mit Una-Reinigung.',
          isLocalGuide: false,
          reviewCount: '4 Rezensionen'
        },
        {
          name: 'Jakub Tuleja',
          initial: 'J',
          color: 'bg-green-600',
          timeAgo: 'vor 1 Monat',
          text: 'Bester Preis, TOP-Qualität, mit Garantie für die Abnahme bei der Wohnungsübergabe, hervorragende Reinigung, freundlicher Service. Sehr empfehlenswert.',
          isLocalGuide: true,
          reviewCount: '34 Rezensionen · 5 Fotos'
        },
        {
          name: 'L. Lussi',
          initial: 'L',
          color: 'bg-orange-600',
          timeAgo: 'vor 3 Wochen',
          text: 'Ich bin sehr zufrieden mit der Endreinigung meiner Wohnung. Herr Lukac war pünktlich und der Kontakt sehr angenehm. Kann ihn nur empfehlen.',
          isLocalGuide: false,
          reviewCount: '2 Rezensionen'
        }
      ]
    },
    guaranteeSection: {
      label: 'Unser Versprechen',
      title: 'Wird die Wohnung nicht abgenommen? Wir kommen zurück. Kostenlos.',
      subtitle: 'Unsere 100% Abnahmegarantie bedeutet: Sie zahlen einmal — wir reinigen so oft nach, bis Ihr Vermieter zufrieden ist. Kein Kleingedrucktes. Kein Risiko für Sie.',
      points: [
          { icon: 'shield', title: 'Abnahme garantiert', desc: 'Wir sind bei der Wohnungsübergabe persönlich dabei und stehen mit unserem Namen dafür ein.' },
          { icon: 'refresh', title: 'Kostenlose Nachreinigung', desc: 'Falls die Verwaltung Mängel findet, reinigen wir sofort nach — so oft wie nötig, ohne Aufpreis.' },
          { icon: 'money', title: 'Ihre Kaution ist sicher', desc: 'In über 1000 Übergaben haben unsere Kunden noch nie ihre Kaution verloren.' },
      ],
      cta: 'Jetzt stressfrei buchen'
    },
    stickyCTA: {
      call: 'Anrufen',
      quote: 'Fixpreis berechnen'
    },
    seo: {
      heroSub: "Professionelle Endreinigung mit 100% Abnahmegarantie in {city} und Umgebung. Fixpreis, keine versteckten Kosten.",
      heroCta: "Jetzt Offerte anfordern",
      whatIsTitle: "Was ist eine Endreinigung?",
      whatIsText: "In der Schweiz sind Mieter gesetzlich verpflichtet, ihre Wohnung bei Auszug in makellosem Zustand zurückzugeben. Eine professionelle Endreinigung in {city} durch UNA Reinigungen garantiert die erfolgreiche Wohnungsabgabe ohne Mängel. Ohne eine gründliche und fachgerechte Reinigung riskieren Mieter, dass die Verwaltung die Abnahme verweigert und Tausende von Franken von der Mietkaution einbehalten werden.",
      includedTitle: "Was ist im Preis inbegriffen?",
      areaTitle: "Unser Einsatzgebiet in {city}",
      whyTitle: "Warum UNA Reinigungen in {city}?",
      whyPoints: {
        p1: "100% Abnahmegarantie",
        p2: "Fixpreis-Garantie",
        p3: "Regionale Präsenz",
        p4: "Über 1000 erfolgreiche Übergaben",
        p5: "Vollversichert"
      },
      contactTitle: "Jetzt Endreinigung {city} anfragen",
      contactText: "Erhalten Sie in 60 Sekunden Ihren kostenlosen Fixpreis. Abnahmegarantie inklusive.",
      ctaButton: "Fixpreis berechnen"
    }
  },
  en: {
    header: {
      services: 'Services',
      about: 'About Us',
      faq: 'FAQ',
      reviews: 'Reviews',
      cta: 'Get Fixed Price',
    },
    hero: {
      h1: 'Full Deposit Back —\nguaranteed.',
      sub: 'We handle the complete final cleaning of your apartment in Regensdorf and surroundings. If the apartment is not accepted, we re-clean for free. Fair fixed price, no hidden costs.',
      cta: 'Get Quote in 60 Seconds',
      secondary: 'Over 1000 successful apartment handovers',
      locationInfo: 'Regensdorf & 20km radius',
      topRated: '5.0 on Google',
      urgency: 'Next available slots filling up fast',
      guarantee: '100% Handover Guarantee',
      fixedPrice: 'Fixed price without hidden costs',
      whatsappChat: 'Instant Quote via WhatsApp'
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
      label: 'Why trust us?',
      title: 'Over 1000 tenants got their full deposit back through us.',
      description: 'We are not just a cleaning company. We are your insurance for the apartment handover. Every cleaning is personally carried out by our experienced team — and we accompany you until successful acceptance.',
      moreText: 'From Regensdorf, we serve customers in Zurich, Baden, Dietikon and the entire 20km radius. Fully insured, fairly priced, and with a guarantee that deserves its name.',
      badgeTitle: 'Fully Insured',
      badgeDesc: 'Liability coverage for your safety',
      stats: [
        { label: 'Successful Handovers', value: '1000+' },
        { label: 'Years of Experience', value: '10+' },
        { label: 'Deposits Secured', value: '100%' }
      ]
    },
    form: {
      title: 'Calculate Your Fixed Price',
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
      submit: 'Get Your Fixed Price Now',
      next: 'Next',
      back: 'Back',
      success: 'Thank you! We will contact you within 2 hours.',
      socialProof: '847 quotes sent this year'
    },
    faq: {
      label: 'Your Questions, Honestly Answered',
      title: 'Frequently Asked Questions',
      subtitle: 'We understand that an apartment handover is stressful. Here are the answers that really matter.',
      moreQuestionsTitle: 'Still have questions?',
      moreQuestionsDesc: 'Our team in Regensdorf is happy to advise you personally — free and non-binding.',
      callUs: 'Call Now',
      emailUs: 'Write Email',
      items: [
        { q: 'What happens if the landlord does not accept the apartment?', a: 'Then we come back and re-clean for free — as many times as needed until acceptance. That is our 100% handover guarantee. You pay nothing extra.' },
        { q: 'My landlord is very strict. Does the guarantee still work?', a: 'Especially then! We know the standards of most property managers in the region. Strict landlords are our daily business — in over 1000 handovers, we have never lost a single deposit.' },
        { q: 'Is professional cleaning really worth it?', a: 'An average deposit is CHF 3000-6000. Our cleaning costs a fraction of that and guarantees you get your full deposit back. Plus, you save 2-3 days of DIY work including equipment.' },
        { q: 'How much does it cost exactly?', a: 'You receive a binding fixed price — no hidden costs. Travel expenses, cleaning supplies, and any re-cleaning are included. Request your quote in 60 seconds.' },
        { q: 'What if I need to cancel at short notice?', a: 'No problem. Free cancellation up to 48 hours before the appointment. We understand that moving dates can shift.' },
        { q: 'In which cities do you operate?', a: 'We are at home in Regensdorf and serve all locations within a 20km radius: Zurich, Dielsdorf, Buchs, Wettingen, Baden, Dietikon and many more.' }
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
    },
    heroForm: {
      title: 'Get Fixed Price',
      step1: '1. Details',
      step2: '2. Contact',
      stepIndicator: 'Step {current} of {total}',
      stepLabels: ['Scope', 'Options', 'Schedule', 'Contact'],
      rooms: 'Rooms',
      zip: 'ZIP',
      zipPlaceholder: '8105',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      messagePlaceholder: 'Your message (Optional)',
      next: 'Continue to Quote',
      submit: 'Request Now',
      back: 'Back',
      successTitle: 'Quote Requested!',
      successText: 'We will be in touch within 2 hours with your fixed price.',
      roomsOptions: ['1.5 - 2.5', '3.5 - 4.5', '5.5+'],
      tabType: 'Cleaning Type',
      tabDate: 'Desired Date',
      optionGarantie: 'Move-out cleaning with handover guarantee',
      optionNoGarantie: 'Move-out cleaning without handover guarantee',
      addonsTitle: 'ADDITIONAL SERVICES',
      addonsLabel: 'Add-ons',
      details: 'Details',
      flexibleDateNote: '📅 Flexible dates available',
      addonList: [
        'Balcony / Terrace',
        'Cellar / Attic / Garage',
        'Carpet Shampooing (80.-)',
        'Winter Garden (4.-/m2)',
        'High-pressure Cleaning (80.-)',
        'Smoking Apartment (250.-)'
      ],
    },
    testimonials: {
      label: 'Customer Reviews',
      title: 'What our customers say on Google',
      subtitle: 'Rated 5.0 Stars',
      readMore: 'Read more',
      googleReviews: 'Google Reviews',
      basedOn: 'Based on real customers',
      helpful: 'Helpful',
      items: [
        {
          name: 'Branimir Soldat',
          initial: 'B',
          color: 'bg-purple-600',
          timeAgo: '2 years ago',
          text: 'Everything perfect. The team arrived on time and even attended the apartment handover with an employee. The administration had zero complaints. Thank you very much, gladly again.',
          isLocalGuide: true,
          reviewCount: '12 reviews'
        },
        {
          name: 'Michael Hoffmann',
          initial: 'M',
          color: 'bg-blue-600',
          timeAgo: '4 months ago',
          text: 'Tip top, I can fully recommend them. I have had several moves in the past, but it was never as easy, good and affordable as with Una-Reinigung.',
          isLocalGuide: false,
          reviewCount: '4 reviews'
        },
        {
          name: 'Jakub Tuleja',
          initial: 'J',
          color: 'bg-green-600',
          timeAgo: 'a month ago',
          text: 'Best price, TOP quality, with a guarantee for acceptance at the apartment handover, excellent cleaning, friendly service. Highly recommended.',
          isLocalGuide: true,
          reviewCount: '34 reviews · 5 photos'
        },
        {
          name: 'L. Lussi',
          initial: 'L',
          color: 'bg-orange-600',
          timeAgo: '3 weeks ago',
          text: 'I am very satisfied with the final cleaning of my apartment. Mr. Lukac was punctual and the contact was very pleasant. Can only recommend him.',
          isLocalGuide: false,
          reviewCount: '2 reviews'
        }
      ]
    },
    guaranteeSection: {
      label: 'Our Promise',
      title: 'Apartment not accepted? We come back. Free of charge.',
      subtitle: 'Our 100% handover guarantee means: you pay once — we re-clean as many times as needed until your landlord is satisfied. No fine print. No risk for you.',
      points: [
          { icon: 'shield', title: 'Acceptance guaranteed', desc: 'We are personally present at the apartment handover and stand behind our name.' },
          { icon: 'refresh', title: 'Free re-cleaning', desc: 'If the management finds issues, we re-clean immediately — as many times as needed, at no extra cost.' },
          { icon: 'money', title: 'Your deposit is safe', desc: 'In over 1000 handovers, our customers have never lost their deposit.' },
      ],
      cta: 'Book stress-free now'
    },
    stickyCTA: {
      call: 'Call',
      quote: 'Get Fixed Price'
    },
    seo: {
      heroSub: "Professional end of tenancy cleaning with 100% handover guarantee in {city} and surroundings. Fair fixed price, no hidden costs.",
      heroCta: "Request quote now",
      whatIsTitle: "What is an end of tenancy cleaning?",
      whatIsText: "In Switzerland, tenants are legally required to return their apartment in perfect condition when moving out. Professional end of tenancy cleaning in {city} by UNA Reinigungen guarantees a successful apartment handover without defects. Without a thorough professional cleaning, tenants risk the property management refusing acceptance and retaining thousands of francs from the deposit.",
      includedTitle: "What is included in the price?",
      areaTitle: "Our service area in {city}",
      whyTitle: "Why choose UNA Reinigungen in {city}?",
      whyPoints: {
        p1: "100% Handover Guarantee",
        p2: "Fixed Price Guarantee",
        p3: "Regional Presence",
        p4: "Over 1000 successful handovers",
        p5: "Fully insured"
      },
      contactTitle: "Request {city} End of Tenancy Cleaning now",
      contactText: "Receive your free fixed price quote in 60 seconds. Handover guarantee included.",
      ctaButton: "Calculate fixed price"
    }
  }
};
