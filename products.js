// Formats a numeric price using the product's currency code.
// Supports USD ($149.99) and RON (149.99 lei), with a safe fallback for anything else.
function formatPrice(amount, currency) {

    if (currency === "RON") {
        return `${amount.toFixed(2)} lei`;
    }

    if (currency === "USD" || !currency) {
        return `$${amount.toFixed(2)}`;
    }

    return `${amount.toFixed(2)} ${currency}`;
}

const products = [
  {
    id:1,
    name:"Set 5 Tricouri Negre Simple Barbati, Model Elegant, 100% bumbac",
    brand: "Gildan",
    oldPrice: 94.05,
    currency: "RON",
    price: 79.86,
    rating: 4.32,
    category: "Imbracaminte",
    description: "Acest set conține 5 tricouri Gildan pentru bărbați, realizate din 100% bumbac, oferind confort și respirabilitate pe tot parcursul anului. Croiala tubulară fără cusături laterale asigură o potrivire plăcută, iar cusăturile duble din zona gâtului și a umerilor cresc rezistența în timp. Datorită designului simplu și elegant, tricourile sunt potrivite atât pentru ținute casual și sport, cât și pentru un stil de zi cu zi.",
    affiliateLink: "https://l.profitshare.ro/l/16251086",
    image: "images/tricouri.avif",
    badge: "Cel mai vândut",
    reviews: 203,
    specs:{
       Culoare: "Negru",
       Imprimeu: "Uni",
       Material: "bumbac",
       Croiala: "Lejer",
       Guler: "La baza gatului",
       Lungime: "Maneca scurta",
    },
    pros: [
       "Fabricate din 100% bumbac, confortabile și respirabile",
       "Pachet de 5 tricouri, raport calitate-preț foarte bun",
       "Design simplu și ușor de asortat cu orice ținută",
    ],

    cons: [
        "Fără imprimeuri sau modele, aspect foarte simplu",
        "Pot necesita călcare după spălare",
    ]
},
    {
    id: 2,
    name: "SteelSeries Apex Pro TKL Gen 3",
    brand: "SteelSeries",
    currency: "RON",
    price: 849.99,
    rating: 4.9,
    category: "Gaming",
    description: "Tastatură mecanică gaming premium, cu switch-uri reglabile.",
    affiliateLink: "#",
    image: "images/keyboardapex.png",
    badge: "Alegerea Editorilor",
    reviews: 587,
    specs: {
    Switchuri: "OmniPoint 3.0",
    Format: "TKL",
    RGB: "RGB per tastă",
    Conexiune: "USB-C",
    RataDeInterogare: "8000 Hz"
    },
    pros: [
    "Switch-uri OmniPoint 3.0 reglabile",
    "Rată de interogare extrem de rapidă, 8000Hz",
    "Construcție premium din aluminiu"
],

cons: [
    "Scumpă",
    "Fără opțiune wireless",
    "Formatul TKL nu are numpad"
],
    },
    {
    id: 3,
    name: "SteelSeries Arctis Nova Pro Wireless",
    brand: "SteelSeries",
    currency: "RON",
    price: 1249.99,
    rating: 4.9,
    category: "Gaming",
    description: "Căști gaming wireless premium, cu anulare activă a zgomotului și sunet de înaltă fidelitate.",
    affiliateLink: "#",
    image: "images/headphonessteel.avif",
    badge: "Cel mai bun raport calitate-preț",
    reviews: 996,
    specs: {
    Driver: "40 mm",
    Baterie: "44 ore",
    Microfon: "Anulare zgomot cu AI",
    Conexiune: "2.4 GHz + Bluetooth",
    AnulareZgomot: "Anulare activă a zgomotului"
    },
    pros: [
    "Calitate excelentă a sunetului",
    "Anulare activă a zgomotului",
    "Sistem dublu de baterii pentru sesiuni de gaming neîntrerupte"
],

cons: [
    "Preț ridicat",
    "Puțin mai grele decât concurența",
    "Microfonul nu este detașabil"
],
    },
    {
    id: 4,
    name: "Apple iPhone 17",
    brand: "Apple",
    featured: true,
    tagline: "Puternic. Elegant. Construit pentru viitor. Descoperă cel mai nou flagship Apple.",
     oldPrice: 4999.99,
    currency: "RON",
    price: 4598.99,
    rating: 4.8,
    category: "Phones",
    description: "Display Super Retina XDR de 6.3 inch cu ProMotion, chip A19, sistem foto dual de 48MP și autonomie pentru o zi întreagă.",
    affiliateLink: "#",
    image: "images/iphoe17.jpeg",
    badge: "Nou",
    reviews: 1304,
    specs: {
    Display: "OLED de 6.3 inch",
    Chip: "Apple A19",
    Stocare: "128GB",
    Cameră: "48MP",
    Baterie: "Până la 28 de ore redare video"
    },
    pros: [
    "Chip A19 puternic",
    "Sistem foto excelent",
    "Display OLED superb"
],

cons: [
    "Nu include încărcător",
    "Preț mai mare decât mulți competitori"
]
},
    {
    id: 5,
    name: "ASUS ROG Swift PG27AQDP",
    brand: "ASUS",
    oldPrice: 5500.00,
    currency: "RON",
    price: 5032.99,
    rating: 4.7,
    category: "Gaming",
    description: "Monitor gaming OLED QHD de 27 inch, cu rată de refresh de 240Hz, construit pentru jocul competitiv.",
    affiliateLink: "#",
    image: "images/asusmonitor.jpg",
    badge: "Cel mai bine cotat",
    reviews: 412,
    specs: {
        Display: "QHD OLED de 27 inch",
        RataDeRefresh: "240Hz",
        TimpDeRăspuns: "0.03ms",
        Porturi: "DisplayPort 1.4, HDMI 2.1"
    },
    pros: [
        "Culori și contrast OLED impresionante",
        "Rată de refresh ultra-rapidă de 240Hz",
        "Timp de răspuns aproape instantaneu"
    ],
    cons: [
        "Risc de burn-in OLED la imagini statice",
        "Scump comparativ cu alternativele LCD"
    ]
},
    {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    oldPrice: 4800.99,
    currency: "RON",
    price: 4499.99,
    rating: 4.7,
    category: "Phones",
    description: "Display Dynamic AMOLED de 6.9 inch, chip Snapdragon 8 Elite și sistem foto de 200MP cu S Pen inclus.",
    affiliateLink: "#",
    image: "images/galaxys25.jpg",
    badge: "Cel mai vândut",
    reviews: 2107,
    specs: {
        Display: "AMOLED de 6.9 inch",
        Chip: "Snapdragon 8 Elite",
        Stocare: "256GB",
        Cameră: "200MP",
        Baterie: "5000mAh"
    },
    pros: [
        "Sistem foto excelent de 200MP",
        "S Pen inclus",
        "Display AMOLED luminos și clar"
    ],
    cons: [
        "Dimensiunea mare nu e pentru oricine",
        "Preț premium"
    ]
},
    {
    id: 7,
    name: "Apple MacBook Air 15 (M4)",
    brand: "Apple",
    currency: "RON",
    price: 5999.99,
    rating: 4.8,
    category: "Laptops",
    description: "Display Liquid Retina de 15 inch, chip Apple M4 și autonomie pentru o zi întreagă, într-un design fără ventilator.",
    affiliateLink: "#",
    image: "images/macbookair15.jpg",
    badge: "Alegerea Editorilor",
    reviews: 876,
    specs: {
        Display: "Liquid Retina de 15.3 inch",
        Chip: "Apple M4",
        RAM: "16GB",
        Stocare: "512GB SSD",
        Baterie: "Până la 18 ore"
    },
    pros: [
        "Design silențios, fără ventilator",
        "Autonomie excelentă a bateriei",
        "Ușor pentru un laptop de 15 inch"
    ],
    cons: [
        "Selecție limitată de porturi",
        "Nu poate fi upgradat după achiziție"
    ]
},
    {
    id: 8,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    oldPrice: 14000.00,
    currency: "RON",
    price: 13799.99,
    rating: 4.6,
    category: "Laptops",
    description: "Laptop gaming OLED de 16 inch, cu placă video RTX 5070, într-un șasiu subțire din aluminiu premium.",
    affiliateLink: "#",
    image: "images/zephyrusg16.jpg",
    badge: "Cel mai bun raport calitate-preț",
    reviews: 341,
    specs: {
        Display: "OLED de 16 inch, 240Hz",
        GPU: "RTX 5070",
        RAM: "32GB",
        Stocare: "1TB SSD",
        Greutate: "1.85 kg"
    },
    pros: [
        "Grafică RTX 5070 puternică",
        "Display OLED viu, 240Hz",
        "Surprinzător de subțire pentru un laptop gaming"
    ],
    cons: [
        "Ventilatoarele pot fi zgomotoase sub sarcină",
        "Preț premium pentru specificațiile oferite"
    ]
},
    {
    id: 9,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    oldPrice: 1499.99,
    currency: "RON",
    price: 1299.99,
    rating: 4.8,
    category: "Audio",
    description: "Căști wireless cu anulare a zgomotului lider în industrie, autonomie de 30 de ore și sunet premium.",
    affiliateLink: "#",
    image: "images/sonyxm5.jpg",
    badge: "Cel mai vândut",
    reviews: 3298,
    specs: {
        Driver: "30 mm",
        Baterie: "30 ore",
        AnulareZgomot: "ANC adaptiv",
        Conexiune: "Bluetooth 5.2",
        Greutate: "250g"
    },
    pros: [
        "Anulare a zgomotului de top",
        "Calitate excelentă a sunetului",
        "Confortabile pentru sesiuni lungi de ascultare"
    ],
    cons: [
        "Nu se pliază la fel de compact ca modelele anterioare",
        "Comenzile tactile pot fi capricioase"
    ]
},
    {
    id: 10,
    name: "Apple AirPods Pro 3",
    brand: "Apple",
    currency: "RON",
    price: 1249.99,
    rating: 4.7,
    category: "Audio",
    description: "Anulare activă a zgomotului de nouă generație, cu o formă mai mică, mai confortabilă și audio adaptiv.",
    affiliateLink: "#",
    image: "images/airpodspro3.jpg",
    badge: "Nou",
    reviews: 1542,
    specs: {
        Baterie: "Până la 8 ore (cu ANC activ)",
        AnulareZgomot: "ANC adaptiv",
        Conexiune: "Bluetooth 5.3",
        RezistențăLaApă: "IP57"
    },
    pros: [
        "Anulare a zgomotului îmbunătățită față de generația anterioară",
        "Formă compactă și confortabilă",
        "Integrare perfectă cu dispozitivele Apple"
    ],
    cons: [
        "Carcasa nu suportă încărcare prin cablu",
        "Cele mai bune funcții sunt limitate la ecosistemul Apple"
    ]
}

];