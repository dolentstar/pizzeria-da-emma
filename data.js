// Dati del sito. Il template (index.html) legge solo questo file.
window.SITE = {
  layout: "pop",
  name: "Pizzeria da Emma",
  shortName: "Pizzeria da Emma",
  tagline: "Pizzeria · Farinata",
  city: "Torino",
  seoTitle: "Pizzeria da Emma · Via Malta 24 bis, Torino",
  seoDescription: "Pizzeria da Emma, Via Malta 24 bis a Torino. Pizza con lievito madre e lunga lievitazione, farinata, focacce e calzoni. Sala, dehors, asporto e consegna a domicilio gratuita.",
  logo: "img/logo.webp",
  address: "Via Malta 24 bis, 10141 Torino",
  addressShort: "Via Malta 24 bis, Torino",
  addressLead: "Sala, dehors, asporto e consegna a domicilio gratuita. Prenotazioni anche su TheFork.",
  mapsQuery: "Pizzeria da Emma, Via Malta 24, 10141 Torino",
  phone: "011 428 2571",
  phoneIntl: "+390114282571",
  whatsapp: "",
  email: "pizzeriadaemma24@gmail.com",
  social: { facebook: "https://www.facebook.com/p/Pizzeria-da-Emma-100070573071114/", instagram: "https://www.instagram.com/pizzeriadaemma_/" },
  piva: "",
  footerLine: "La nostra passione da oltre 40 anni",
  rating: { value: "4,6", count: "239", source: "Google" },
  theme: { primary: "#b52232", primaryDark: "#1c1c1c", accent: "#ffc23d", accentLight: "#ffe6a8", soft: "#fdeee6", cream: "#fff6ea", paper: "#fffdf8", line: "#1c1c1c" },

  hero: {
    image: "img/salsiccia-friarielli.webp",
    imageAlt: "Pizza salsiccia e friarielli appena sfornata",
    eyebrow: "Via Malta · Torino",
    title: "Lievito madre,",
    titleEm: "oltre 48 ore di lievitazione",
    lead: "Pizze al mattone e al padellino, farinata, focacce e calzoni. Da gustare in sala o nel dehors, da asporto o con consegna a domicilio gratuita.",
    cta: "Chiama e prenota",
    badges: ["Lievito madre", "Farinata", "Dehors", "Consegna gratuita"]
  },

  pillars: [
    { t: "Lievito madre", d: "Impasto con farina 00, acqua, sale, lievito madre e olio extravergine." },
    { t: "Oltre 48 ore", d: "Una lunga lievitazione per una pizza leggera e digeribile." },
    { t: "Farinata", d: "Classica a porzione oppure farcita con cipolla, zucchine, funghi, formaggi o salsiccia." },
    { t: "Consegna gratuita", d: "Pizza a casa vostra senza costi di consegna, oppure da asporto." }
  ],

  story: {
    image: "img/farinata.webp",
    imageAlt: "Farinata appena sfornata",
    eyebrow: "Chi siamo",
    title: "La nostra passione da oltre 40 anni",
    paragraphs: [
      "Un locale piccolo e accogliente in via Malta, con una sala curata e un dehors per le serate all'aperto.",
      "Il nostro impasto nasce dal <strong>lievito madre</strong> e riposa per <strong>oltre 48 ore</strong>. Ogni pizza si può scegliere al <strong>mattone</strong> o al <strong>padellino</strong>, e accanto alle pizze non manca la farinata."
    ],
    bullets: ["Pizze al mattone e al padellino", "Farinata classica e farcita", "Sala e dehors", "Asporto e consegna a domicilio gratuita"]
  },

  menu: {
    eyebrow: "Il menù",
    title: "Pizze, farinata e focacce",
    lead: "Le nostre pizze speciali, le classiche al mattone o al padellino, farinata, focacce, calzoni e antipasti. Prezzi in euro.",
    notes: [
      "* Prodotto congelato.",
      "Supplementi da € 1,00 a € 3,00 · Coperto € 2,00.",
      "Pizza del giorno € 10,00: chiedete al personale.",
      "Per informazioni sugli allergeni chiedete al personale."
    ],
    categories: [
 {id:"speciali", t:"Le nostre pizze", s:"Speciali", items:[
  ["Del Pizzaiolo","9,00","pomodoro, mozzarella di bufala, salsiccia, parmigiano grattugiato"],
  ["Salsiccia e friarielli","9,00","pomodoro, mozzarella fior di latte, salsiccia, friarielli, pomodorini ciliegini"],
  ["Parma","10,00","pomodoro, mozzarella fior di latte, prosciutto crudo, rucola, scaglie di parmigiano, olio EVO"],
  ["Raffinata","11,00","mozzarella fior di latte, radicchio, scamorza affumicata, funghi porcini"],
  ["Malta","11,00","mozzarella di bufala, radicchio, scamorza affumicata, noci, scaglie di parmigiano"],
  ["Mortazza","10,00","mozzarella di bufala, mortadella, granella di pistacchio"],
  ["Pancetta e cipolla","9,00","mozzarella fior di latte, pomodorini, pancetta, cipolla, rucola"],
  ["Mediterranea","10,00","mozzarella fior di latte, pomodorini secchi, olive taggiasche, rucola, scaglie di parmigiano"],
  ["Delicata","11,00","mozzarella di bufala, salmone affumicato, olive nere, fette di limone"],
  ["Emma","11,00","burrata, pomodorini, scaglie di parmigiano, rucola, olio EVO (tutto fuori cottura)"],
 ]},
 {id:"classiche", t:"Pizze classiche", s:"Classiche", note:"Prezzi: al mattone · al padellino", items:[
  ["Margherita","5,00 · 4,00","pomodoro, mozzarella fior di latte, basilico"],
  ["Marinara","4,50 · 3,50","pomodoro, aglio, olio EVO"],
  ["Napoli","6,00 · 5,00","pomodoro, mozzarella fior di latte, acciughe, origano"],
  ["Prosciutto","7,00 · 6,00","pomodoro, mozzarella fior di latte, prosciutto cotto"],
  ["U.S.A.","8,00 · 6,00","pomodoro, mozzarella fior di latte, würstel, patatine*"],
  ["Diavola","8,00 · 6,00","pomodoro, mozzarella fior di latte, salamino piccante"],
  ["Prosciutto e funghi","8,00 · 6,00","pomodoro, mozzarella fior di latte, prosciutto cotto, funghi"],
  ["Capricciosa","9,00 · 6,50","pomodoro, mozzarella fior di latte, prosciutto cotto, funghi, carciofi, olive, salamino piccante"],
  ["4 Stagioni","9,00 · 6,50","pomodoro, mozzarella fior di latte, funghi, olive, prosciutto cotto, carciofini"],
  ["4 Formaggi","9,00 · 6,50","mozzarella fior di latte, gorgonzola, fontina, parmigiano"],
  ["Squisita","9,00 · 7,00","mozzarella fior di latte, stracchino, zucchine grigliate, bresaola della Valtellina"],
  ["Golosa","9,00 · 7,00","mozzarella di bufala, scamorza affumicata, salsiccia"],
  ["Rustica","8,00 · 6,00","mozzarella di bufala, scamorza affumicata, speck"],
  ["Vegetariana","9,00 · 6,50","mozzarella fior di latte, melanzane grigliate, zucchine grigliate, peperoni grigliati, rucola"],
  ["Parmigiana","8,00 · 6,00","pomodoro, mozzarella fior di latte, melanzane grigliate, parmigiano"],
  ["Gorgo e cipolla","8,00 · 6,00","pomodoro, mozzarella fior di latte, gorgonzola, cipolla di Tropea"],
  ["Greca","7,00 · 6,00","pomodoro, mozzarella fior di latte, olive nere"],
  ["Bismark","8,00 · 6,00","pomodoro, mozzarella fior di latte, prosciutto cotto, uovo"],
  ["Bufala","9,00 · 7,00","mozzarella di bufala, pomodorini, basilico"],
  ["Burrata","9,00 · 7,00","burrata, pomodorini, basilico"],
  ["Valdostana","8,00 · 6,50","pomodoro, mozzarella fior di latte, prosciutto cotto, fontina"],
  ["Siciliana","8,00 · 6,00","pomodoro, mozzarella fior di latte, capperi, olive, acciughe"],
  ["Tonno e cipolla","8,50 · 6,50","pomodoro, mozzarella fior di latte, tonno, cipolla di Tropea"],
  ["Gorgo e pere","8,00 · 6,50","mozzarella fior di latte, gorgonzola, pere, noci"],
  ["Speck e brie","9,00 · 7,00","mozzarella fior di latte, speck, brie"],
 ], extra:"Impasto: farina 00, acqua, sale, lievito madre, olio EVO"},
 {id:"farinata", t:"Farinata", s:"Farinata", items:[
  ["Farinata classica","3,00","a porzione · farina di ceci, acqua, sale, olio d'oliva","Tradizione"],
  ["Farinata con cipolla","5,00",""],
  ["Farinata con zucchine","5,00",""],
  ["Farinata con funghi","6,00",""],
  ["Farinata ai formaggi","6,00",""],
  ["Farinata con salsiccia","6,00",""],
 ]},
 {id:"focacce", t:"Focacce", s:"Focacce", note:"Farina 00, acqua, sale, lievito madre, olio EVO", items:[
  ["Focaccia con olio e sale","3,00",""],
  ["Focaccia con lardo","6,00",""],
  ["Focaccia con speck","7,00",""],
  ["Focaccia con prosciutto crudo","8,00",""],
  ["Focaccia Primavera","9,00","bufala, pomodorini, basilico"],
  ["Focaccia Light","9,50","bresaola della Valtellina, pomodorini, rucola, scaglie di parmigiano, olio EVO"],
  ["Focaccia Speciale","9,50","bufala, prosciutto crudo, scaglie di parmigiano, rucola"],
  ["Focaccia Leggera","7,50","stracchino, pomodoro fresco, rucola"],
 ]},
 {id:"calzoni", t:"Calzoni", s:"Calzoni", items:[
  ["Del Capo","9,00","pomodoro, mozzarella fior di latte, prosciutto cotto, salamino, ricotta, parmigiano"],
  ["Della Nonna","8,50","mozzarella fior di latte, zucchine grigliate, melanzane grigliate, radicchio"],
  ["Della Signora","8,00","stracchino, prosciutto cotto, funghi"],
 ]},
 {id:"antipasti", t:"Antipasti", s:"Antipasti", items:[
  ["Bufala con prosciutto crudo di Parma","9,00",""],
  ["Burrata con pomodorini e basilico fresco","9,00",""],
  ["Bresaola della Valtellina","9,00","con rucola e scaglie di Grana Padano"],
 ]},
 {id:"dolci", t:"Dolci, digestivi e caffè", s:"Dolci e caffè", items:[
  ["Dolci della casa","5,00",""],
  ["Amari","3,00",""],
  ["Caffè","1,50",""],
  ["Caffè corretto","2,00",""],
 ]},
 {id:"bevande", t:"Bibite, birre e vino", s:"Bevande", items:[
  ["Coca-Cola alla spina","3,00 · 4,00","piccola · media"],
  ["Bibite in lattina","2,50",""],
  ["Acqua in vetro","2,00 · 3,00","0,5 L · 1 L"],
  ["Birra bionda alla spina","3,00 · 4,00","piccola · media"],
  ["Birra rossa alla spina","4,00 · 5,00","piccola · media"],
  ["Vino bianco alla spina","3,00 · 6,00 · 8,00","1/4 · 1/2 · 1 L"],
 ]},
]
  },

  gallery: {
    eyebrow: "Da Emma",
    title: "Il locale e le nostre pizze",
    lead: "Una sala piccola e curata, il dehors e le pizze appena sfornate.",
    images: [
      { src: "img/sala.webp", alt: "La sala con le sedie rosse" },
      { src: "img/pizza-bufala.webp", alt: "Pizza con mozzarella di bufala, pomodorini e basilico" },
      { src: "img/gorgo-pere.webp", alt: "Pizza gorgonzola, pere e noci" },
      { src: "img/esterno.webp", alt: "L'ingresso e il dehors in via Malta la sera" }
    ]
  },

  // lunedì → domenica; [ora, min, ora, min]; [] = chiuso
  hours: [
  ["Lunedì",   []],
  ["Martedì",  [[12,0,14,30],[19,0,23,30]]],
  ["Mercoledì",[[12,0,14,30],[19,0,23,30]]],
  ["Giovedì",  [[12,0,14,30],[19,0,23,30]]],
  ["Venerdì",  [[12,0,14,30],[19,0,23,30]]],
  ["Sabato",   [[12,0,14,30],[19,0,23,30]]],
  ["Domenica", [[19,0,23,30]]],
],
  hoursNote: "Chiusi il lunedì e la domenica a pranzo."
};
