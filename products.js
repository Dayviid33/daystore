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
    name:"Logitech G Pro X Superlight 2",
    brand: "Logitech",
    oldPrice: 650.00,
    currency: "RON",
    price: 609.99,
    rating: "4.8",
    category: "Gaming",
    description: "Premium gaming mouse made with precsion by Logitech",
    affiliateLink: "#",
    image: "images/mouselogitech.jpg",
    badge: "Best Seller",
    reviews: 1243,
    specs:{
        Weight:"60g",
        Battery:"95 Hours",
        Sensor:"HERO 2",
        DPI:"32000"
    },
    pros: [
        "Ultra-lightweight (60g)",
        "Excellent HERO 2 sensor",
        "95-hour battery life"
    ],

    cons: [
        "Premium price",
        "No Bluetooth connectivity"
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
    description: "Premium mechanical gaming keyboard with adjustable switches.",
    affiliateLink: "#",
    image: "images/keyboardapex.png",
    badge: "Editor's Choice",
    reviews: 587,
    specs: {
    Switches: "OmniPoint 3.0",
    Layout: "TKL",
    RGB: "Per-key RGB",
    Connection: "USB-C",
    Polling: "8000 Hz"
    },
    pros: [
    "Adjustable OmniPoint 3.0 switches",
    "Extremely fast 8000Hz polling rate",
    "Premium aluminum build"
],

cons: [
    "Expensive",
    "No wireless option",
    "TKL layout has no numpad"
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
    description: "Premium wireless gaming headset with active noise cancellation and high-fidelity audio.",
    affiliateLink: "#",
    image: "images/headphonessteel.avif",
    badge: "Best Value",
    reviews: 996,
    specs: {
    Driver: "40 mm",
    Battery: "44 hours",
    Microphone: "AI Noise Cancelling",
    Connection: "2.4 GHz + Bluetooth",
    NoiseCancelling: "Active Noise Cancellation"
    },
    pros: [
    "Excellent sound quality",
    "Active Noise Cancellation",
    "Dual battery system for uninterrupted gaming"
],

cons: [
    "High price",
    "Slightly heavier than competitors",
    "Microphone isn't detachable"
],
    },
    {
    id: 4,
    name: "Apple iPhone 17",
    brand: "Apple",
    featured: true,
    tagline: "Powerful. Beautiful. Built for the future. Discover Apple's newest flagship.",
     oldPrice: 4999.99,
    currency: "RON",
    price: 4598.99,
    rating: 4.8,
    category: "Phones",
    description: "6.3-inch Super Retina XDR display with ProMotion, A19 chip, 48MP dual-camera system, and all-day battery life.",
    affiliateLink: "#",
    image: "images/iphoe17.jpeg",
    badge: "New",
    reviews: 1304,
    specs: {
    Display: "6.3-inch OLED",
    Chip: "Apple A19",
    Storage: "128GB",
    Camera: "48MP",
    Battery: "Up to 28 hours video playback"
    },
    pros: [
    "Powerful A19 chip",
    "Excellent camera system",
    "Beautiful OLED display"
],

cons: [
    "No charger included",
    "Higher price than many competitors"
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
    description: "27-inch QHD OLED gaming monitor with a 240Hz refresh rate built for competitive play.",
    affiliateLink: "#",
    image: "images/asusmonitor.jpg",
    badge: "Top Rated",
    reviews: 412,
    specs: {
        Display: "27-inch QHD OLED",
        RefreshRate: "240Hz",
        ResponseTime: "0.03ms",
        Ports: "DisplayPort 1.4, HDMI 2.1"
    },
    pros: [
        "Stunning OLED color and contrast",
        "Ultra-fast 240Hz refresh rate",
        "Near-instant response time"
    ],
    cons: [
        "Risk of OLED burn-in with static images",
        "Expensive compared to LCD alternatives"
    ]
},
    {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    oldPrice: 4800.00,
    currency: "RON",
    price: 4499.99,
    rating: 4.7,
    category: "Phones",
    description: "6.9-inch Dynamic AMOLED display, Snapdragon 8 Elite chip, and a 200MP camera system with built-in S Pen.",
    affiliateLink: "#",
    image: "images/galaxys25.jpg",
    badge: "Best Seller",
    reviews: 2107,
    specs: {
        Display: "6.9-inch AMOLED",
        Chip: "Snapdragon 8 Elite",
        Storage: "256GB",
        Camera: "200MP",
        Battery: "5000mAh"
    },
    pros: [
        "Excellent 200MP camera system",
        "Built-in S Pen",
        "Bright, sharp AMOLED display"
    ],
    cons: [
        "Large size isn't for everyone",
        "Premium price"
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
    description: "15-inch Liquid Retina display, Apple M4 chip, and all-day battery life in a fanless design.",
    affiliateLink: "#",
    image: "images/macbookair15.jpg",
    badge: "Editor's Choice",
    reviews: 876,
    specs: {
        Display: "15.3-inch Liquid Retina",
        Chip: "Apple M4",
        RAM: "16GB",
        Storage: "512GB SSD",
        Battery: "Up to 18 hours"
    },
    pros: [
        "Silent, fanless design",
        "Excellent battery life",
        "Lightweight for a 15-inch laptop"
    ],
    cons: [
        "Limited port selection",
        "Not upgradeable after purchase"
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
    description: "16-inch OLED gaming laptop with an RTX 5070 GPU in a slim, premium aluminum chassis.",
    affiliateLink: "#",
    image: "images/zephyrusg16.jpg",
    badge: "Best Value",
    reviews: 341,
    specs: {
        Display: "16-inch OLED 240Hz",
        GPU: "RTX 5070",
        RAM: "32GB",
        Storage: "1TB SSD",
        Weight: "1.85 kg"
    },
    pros: [
        "Powerful RTX 5070 graphics",
        "Vivid 240Hz OLED display",
        "Surprisingly slim for a gaming laptop"
    ],
    cons: [
        "Fans can get loud under load",
        "Premium price for the specs"
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
    description: "Industry-leading wireless noise-cancelling headphones with 30-hour battery life and premium sound.",
    affiliateLink: "#",
    image: "images/sonyxm5.jpg",
    badge: "Best Seller",
    reviews: 3298,
    specs: {
        Driver: "30 mm",
        Battery: "30 hours",
        NoiseCancelling: "Adaptive ANC",
        Connection: "Bluetooth 5.2",
        Weight: "250g"
    },
    pros: [
        "Best-in-class noise cancellation",
        "Excellent sound quality",
        "Comfortable for long listening sessions"
    ],
    cons: [
        "Doesn't fold as compactly as prior models",
        "Touch controls can be finicky"
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
    description: "Next-generation active noise cancellation with a smaller, more comfortable fit and adaptive audio.",
    affiliateLink: "#",
    image: "images/airpodspro3.jpg",
    badge: "New",
    reviews: 1542,
    specs: {
        Battery: "Up to 8 hours (ANC on)",
        NoiseCancelling: "Adaptive ANC",
        Connection: "Bluetooth 5.3",
        WaterResistance: "IP57"
    },
    pros: [
        "Improved noise cancellation over prior gen",
        "Compact, comfortable fit",
        "Seamless integration with Apple devices"
    ],
    cons: [
        "Case doesn't support wired charging",
        "Best features limited to Apple ecosystem"
    ]
}

];