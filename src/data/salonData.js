import salonHeroInterior from "../assets/salon_hero_interior.jpg";

export const siteData = {
  name: "PR MEN DOT",
  subtitle: "SALOON & BEAUTY",
  location: "Madhurawada, Bakkanapalem, Vizag",
  fullAddress: "Police Station Road, beside APGV Bank, SBI Colony, Madhurawada, Bakkanapalem, Andhra Pradesh 530048",
  landmark: "Beside APGV Bank, Police Station Road, SBI Colony",
  phone: "8309583129",
  displayPhone: "+91 83095 83129",
  whatsapp: "918309583129",
  whatsappLink: "https://wa.me/918309583129",
  telLink: "tel:+918309583129",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Police+Station+Road+APGV+Bank+SBI+Colony+Madhurawada+Bakkanapalem+Visakhapatnam+530048",
  instagram: "https://instagram.com",
  hours: "Open Daily • 8:30 AM – 10:00 PM",
  tagline: "CUT · TRIM · STYLE · CARE",
  established: "EST. / VIZAG",
};

export const serviceCategories = [
  { id: "all", label: "ALL SERVICES", icon: "✂️" },
  { id: "hair", label: "HAIRCUT & STYLES", icon: "✂" },
  { id: "beard", label: "BEARD & SHAVE", icon: "◈" },
  { id: "color", label: "HAIR COLOUR", icon: "◉" },
  { id: "face", label: "FACIAL & CLEANUP", icon: "✧" },
  { id: "spa", label: "HAIR SPA & THERAPY", icon: "✦" },
  { id: "mask", label: "FACE MASKS", icon: "🧖" },
  { id: "massage", label: "MASSAGES", icon: "💆" },
  { id: "special", label: "PIERCING, TATTOO & PEDI", icon: "✒️" }
];

export const services = [
  // ==========================================
  // 1. HAIRCUT & STYLES (Category: hair)
  // ==========================================
  {
    id: "hair-basic",
    categoryId: "hair",
    tool: "SCISSORS",
    icon: "✂",
    title: "Basic Hairstyle",
    price: "₹100",
    duration: "20-25 mins",
    desc: "Clean everyday trim and comb setting tailored for effortless daily maintenance.",
    items: [
      "Hair sectioning & length trim",
      "Sideburn & ear contour neatening",
      "Neck razor cleanup",
      "Light everyday styling finish"
    ]
  },
  {
    id: "hair-stylish",
    categoryId: "hair",
    tool: "SCISSORS",
    icon: "✂",
    title: "Stylish Haircut",
    price: "₹120",
    duration: "25-30 mins",
    desc: "Contemporary trend cut, textured crop, or modern fade suited to your cranial profile.",
    items: [
      "Personalized style & fade consultation",
      "Precision shear & clipper graduation",
      "Razor perimeter line-up",
      "Matte pomade volume styling"
    ]
  },
  {
    id: "hair-spl",
    categoryId: "hair",
    tool: "SCISSORS",
    icon: "✂",
    title: "Spl Haircut (Special Haircut)",
    price: "₹150",
    duration: "30-35 mins",
    desc: "Signature master scissor cut with high-detail taper, custom texture, and blow dry.",
    items: [
      "Master Takefu 440C shear texturizing",
      "Skin fade or bespoke taper finish",
      "Thermal blow-dry volume lock",
      "Finishing shine & hold spray"
    ]
  },
  {
    id: "hair-kids",
    categoryId: "hair",
    tool: "CARE",
    icon: "✂",
    title: "Kids Haircut",
    price: "₹120",
    duration: "20-25 mins",
    desc: "Gentle, fun, and patient haircut for little boys with zero fuss and clean edges.",
    items: [
      "Patient, kid-friendly handling",
      "Gentle clipper or scissor trim",
      "Soft brush neck cleanup",
      "Fun styling finish"
    ]
  },
  {
    id: "hair-baby-girls",
    categoryId: "hair",
    tool: "CARE",
    icon: "✂",
    title: "Baby Cutting (Girls)",
    price: "₹150",
    duration: "20-25 mins",
    desc: "Delicate, gentle hair trimming and shaping for baby girls with extra patience and care.",
    items: [
      "Gentle, careful scissor sectioning",
      "Even bob or fringe line shaping",
      "Soft comb through & blow-off",
      "Clean, quick gentle touch"
    ]
  },
  {
    id: "hair-cut-shave-basic",
    categoryId: "hair",
    tool: "COMBO",
    icon: "✂",
    title: "Basic Haircut & Shaving",
    price: "₹170",
    duration: "35-40 mins",
    desc: "Complete classic combo: crisp everyday haircut paired with a clean smooth shave.",
    items: [
      "Basic haircut & sideburn trim",
      "Pre-shave warm lather foam",
      "Single-stroke clean razor shave",
      "Cooling aftershave astringent"
    ]
  },
  {
    id: "hair-cut-shave-spl",
    categoryId: "hair",
    tool: "COMBO",
    icon: "✂",
    title: "Special Haircut & Shaving",
    price: "₹200",
    duration: "40-45 mins",
    desc: "Premium master haircut with detailed skin taper and relaxing precision shave.",
    items: [
      "Special stylish haircut & textured fade",
      "Warm water mist & razor perimeter",
      "Smooth close shave with post-balm",
      "Blow dry & styling setting"
    ]
  },

  // ==========================================
  // 2. BEARD & SHAVING (Category: beard)
  // ==========================================
  {
    id: "beard-shaving",
    categoryId: "beard",
    tool: "RAZOR",
    icon: "◈",
    title: "Shaving",
    price: "₹60",
    duration: "15-20 mins",
    desc: "Classic clean shave with rich warm foam for baby-smooth facial skin.",
    items: [
      "Warm foam lather application",
      "Smooth single-stroke safety razor shave",
      "Cold splash pore tightening",
      "Soothing aftershave lotion"
    ]
  },
  {
    id: "beard-trimming",
    categoryId: "beard",
    tool: "CLIPPER",
    icon: "◈",
    title: "Trimming",
    price: "₹60",
    duration: "15-20 mins",
    desc: "Fast, neat clipper beard trim to maintain your natural beard shape and length.",
    items: [
      "Even clipper length guard trim",
      "Moustache neaten & comb through",
      "Cheek & neck boundary clean",
      "Light beard serum touch"
    ]
  },
  {
    id: "beard-spl-shaving",
    categoryId: "beard",
    tool: "RAZOR",
    icon: "◈",
    title: "Spl Shaving (Special Shaving)",
    price: "₹80",
    duration: "20-25 mins",
    desc: "Deluxe razor shave with hot steam towel prep and sharp edge sculpting.",
    items: [
      "Warm steam towel facial softening",
      "Pre-shave hydrating oil & foam",
      "Precision zero-irritation razor shave",
      "Cooling alum & soothing balm"
    ]
  },

  // ==========================================
  // 3. HAIR COLOUR (Category: color)
  // ==========================================
  {
    id: "color-black-henna",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Black Henna Colour",
    price: "₹100",
    duration: "25-30 mins",
    desc: "Natural black henna herbal color application for deep, organic grey coverage.",
    items: [
      "Pure black henna paste application",
      "Root-to-tip grey coverage",
      "Even comb distribution",
      "Quick wash & towel dry"
    ]
  },
  {
    id: "color-gel-black",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Gel Colour Black",
    price: "₹150",
    duration: "25-30 mins",
    desc: "Fast-acting ammonia-free black gel formula providing vibrant, natural black tone.",
    items: [
      "Even gel application across greys",
      "Fast absorption without scalp staining",
      "Conditioning rinse",
      "Natural shine blow dry"
    ]
  },
  {
    id: "color-garnier",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Garnier Black & Burgundy",
    price: "₹150",
    duration: "30-35 mins",
    desc: "Enriched fruit-oil Garnier color in rich natural black or stylish burgundy tint.",
    items: [
      "Shade choice: Deep Black or Rich Burgundy",
      "Enriched almond & olive oil formula",
      "Color-lock wash",
      "Soft texture finish"
    ]
  },
  {
    id: "color-loreal-black",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "L'Oréal Black Colour",
    price: "₹350",
    duration: "35-40 mins",
    desc: "Salon-grade L'Oréal Paris professional black dye with intense conditioning.",
    items: [
      "L'Oréal Paris professional formulation",
      "Pro-keratin scalp protection",
      "100% resistant grey coverage",
      "Silky glossy post-treatment wash"
    ]
  },
  {
    id: "color-revlon-black",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Revlon Black Colour",
    price: "₹350",
    duration: "35-40 mins",
    desc: "Premium Revlon Colorsilk ammonia-free black color for radiant dimensional shine.",
    items: [
      "Revlon 3D Color Gel technology",
      "Ammonia-free gentle formula",
      "Keratin nourishment rinse",
      "Long-lasting color retention finish"
    ]
  },
  {
    id: "color-herbal-henna",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Herbal Henna",
    price: "₹200",
    duration: "35-40 mins",
    desc: "100% natural organic herbal henna conditioning pack for cooling scalp & rich tone.",
    items: [
      "Organic herbal henna leaf blend",
      "Cooling scalp therapy",
      "Natural conditioning and volume",
      "Gentle clean herbal wash"
    ]
  },
  {
    id: "color-highlights-cap",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Highlights Colour with Cap",
    price: "₹300",
    duration: "40-50 mins",
    desc: "Precision cap-pulled multi-strand highlights for trendy dimensional streaks.",
    items: [
      "Perforated highlight cap placement",
      "Strand selection & lightener/color apply",
      "Calibrated processing time",
      "Toning wash & blow dry style"
    ]
  },
  {
    id: "color-highlights-only",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Only Highlights Colour",
    price: "₹150",
    duration: "25-30 mins",
    desc: "Targeted streak or crown highlight coloring to accent your haircut.",
    items: [
      "Fringe or crown streak isolation",
      "Vibrant tone application",
      "Quick processing & wash",
      "Accent styling finish"
    ]
  },

  // ==========================================
  // 4. FACIAL & FACE CLEANUP (Category: face)
  // ==========================================
  {
    id: "face-normal-cleanup",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Normal Face Cleanup",
    price: "₹100",
    duration: "20 mins",
    desc: "Quick face wash, gentle exfoliation, and toner to remove daily dirt and oil.",
    items: [
      "Deep foaming face cleanser",
      "Mild scrub blackhead removal",
      "Rose water skin toning",
      "Fresh oil-free moisturizer"
    ]
  },
  {
    id: "face-scrub-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Scrub Facial",
    price: "₹200",
    duration: "25-30 mins",
    desc: "Intensive exfoliating scrub to remove dead skin cells and reveal fresher, brighter skin.",
    items: [
      "Deep pore scrub exfoliation",
      "Gentle nose & chin dead cell clean",
      "Toner splash",
      "Hydrating gel finish"
    ]
  },
  {
    id: "face-scrub-steam",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Scrub with Steam",
    price: "₹250",
    duration: "30 mins",
    desc: "Warm steam pore opening combined with deep scrub for thorough detox and blackhead release.",
    items: [
      "Warm facial ozone steam mist",
      "Deep pore exfoliating scrub",
      "Blackhead & whitehead clearance",
      "Pore-tightening cold compress"
    ]
  },
  {
    id: "face-dtan",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "D-Tan Treatment",
    price: "₹350",
    duration: "30-35 mins",
    desc: "Insta-active kojic & milk protein de-tan pack to erase stubborn sun tan and restore tone.",
    items: [
      "Face & neck cleansing",
      "Kojic acid active de-tan pack application",
      "Pigmentation & sun spot lightening",
      "Cooling aloe vera soothing finish"
    ]
  },
  {
    id: "face-bleach",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Face Bleach",
    price: "₹350",
    duration: "25-30 mins",
    desc: "Gentle skin bleach to lighten facial hair, even out skin tone, and boost instant brightness.",
    items: [
      "Pre-bleach skin sensitivity check",
      "Golden glow bleach cream application",
      "Facial hair color balancing",
      "Post-bleach cooling face gel"
    ]
  },
  {
    id: "face-basic-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Basic Facial",
    price: "₹500",
    duration: "35-40 mins",
    desc: "Complete essential facial with cleansing, massage, steam, and soothing pack.",
    items: [
      "Cleansing milk purification",
      "Facial scrub & gentle extraction",
      "10-minute relaxing facial massage",
      "Hydrating clay face mask"
    ]
  },
  {
    id: "face-fruit-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Fruit Facial",
    price: "₹1,000",
    duration: "45-50 mins",
    desc: "Natural mixed fruit extracts (papaya, orange, apple) packed with vitamins for radiant skin.",
    items: [
      "Fruit cleansing cream",
      "Natural fruit enzyme scrub",
      "20-minute relaxing facial massage",
      "Nourishing fruit pulp face pack"
    ]
  },
  {
    id: "face-diamond-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Diamond Facial",
    price: "₹1,000",
    duration: "50-60 mins",
    desc: "Diamond ash micro-dermabrasion facial for supreme skin polishing, anti-aging, and glow.",
    items: [
      "Diamond purifying cleanser",
      "Diamond ash exfoliating scrub",
      "Lifting massage cream with serum",
      "Diamond peel-off brightening mask"
    ]
  },
  {
    id: "face-gold-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Gold Facial",
    price: "₹1,500",
    duration: "60 mins",
    desc: "The ultimate luxury 24K gold radiance facial for weddings, celebrations, and grand glow.",
    items: [
      "24K gold leaf cleansing gel",
      "Gold micro-foliating scrub",
      "Acupressure face & neck gold massage",
      "Radiant 24K gold peel-off mask"
    ]
  },

  // ==========================================
  // 5. HAIR SPA & THERAPY (Category: spa)
  // ==========================================
  {
    id: "spa-classic",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Classic Hair Spa",
    price: "₹500",
    duration: "40-45 mins",
    desc: "Deep nourishing cream spa with ozone steam and relaxing scalp massage for soft, shiny hair.",
    items: [
      "Scalp clarifying shampoo wash",
      "Intense keratin spa cream coating",
      "Warm ozone steam circulation",
      "15-minute relaxing head massage"
    ]
  },
  {
    id: "spa-anti-dandruff",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Anti-Dandruff Hair Spa",
    price: "₹750",
    duration: "45-50 mins",
    desc: "Specialized therapeutic tea-tree & zinc spa to eradicate stubborn flakes and soothe itching.",
    items: [
      "Tea-tree exfoliating scalp scrub",
      "Anti-fungal zinc pyrithione spa cream",
      "Warm steam follicle opening",
      "Cooling anti-dandruff tonic leave-in"
    ]
  },
  {
    id: "spa-dandruff-treatment",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Only Dandruff Treatment",
    price: "₹500",
    duration: "30-35 mins",
    desc: "Focused scalp detox treatment targeting active dandruff, root flaking, and irritation.",
    items: [
      "Medicated anti-dandruff scalp wash",
      "Scalp scrub & pore clarifying",
      "Anti-itch cooling pack",
      "Root strengthener application"
    ]
  },
  {
    id: "spa-straightening",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Hair Straightening",
    price: "₹1,000 - ₹2,000",
    duration: "90-120 mins",
    desc: "Professional chemical relaxing & ceramic flat-iron smoothing for pin-straight, frizz-free hair.",
    items: [
      "Hair strand elasticity analysis",
      "Smoothing cream & keratin bonding",
      "Ceramic thermal press alignment",
      "Neutralizing sealant & shine serum"
    ]
  },

  // ==========================================
  // 6. FACE MASKS (Category: mask)
  // ==========================================
  {
    id: "mask-charcoal",
    categoryId: "mask",
    tool: "BEAUTY",
    icon: "🧖",
    title: "Charcoal Face Mask",
    price: "₹350",
    duration: "25 mins",
    desc: "Activated bamboo charcoal peel-off mask that draws out deep toxins, grease, and blackheads.",
    items: [
      "Deep foam face wash",
      "Activated charcoal paste application",
      "Peel-off pore clearance",
      "Cold rose water tightening"
    ]
  },
  {
    id: "mask-orange",
    categoryId: "mask",
    tool: "BEAUTY",
    icon: "🧖",
    title: "Orange Face Mask",
    price: "₹350",
    duration: "25 mins",
    desc: "Vitamin C rich orange peel mask to fight dullness, reduce excess oil, and invigorate tired skin.",
    items: [
      "Gentle face clean",
      "Natural orange zest vitamin C mask",
      "Antioxidant skin brightening",
      "Fresh citrus glow gel"
    ]
  },
  {
    id: "mask-neck-face-clean",
    categoryId: "mask",
    tool: "BEAUTY",
    icon: "🧖",
    title: "Neck & Face Cleaning",
    price: "₹500",
    duration: "35 mins",
    desc: "Thorough dual scrub, steam, and detox wrap for both face and back-of-neck collar areas.",
    items: [
      "Back of neck dark patch scrub",
      "Warm steam wrap & dead skin removal",
      "Full face clarifying cleanse",
      "Even tone moisturizing finish"
    ]
  },

  // ==========================================
  // 7. MASSAGES (Category: massage)
  // ==========================================
  {
    id: "massage-hand",
    categoryId: "massage",
    tool: "CARE",
    icon: "💆",
    title: "Hand Massage",
    price: "₹400",
    duration: "25-30 mins",
    desc: "Relieving palm, forearm, and finger acupressure massage to release repetitive strain.",
    items: [
      "Warm herbal almond oil application",
      "Forearm muscle knot kneading",
      "Palm & finger reflexology pressure",
      "Hot towel dry compress"
    ]
  },
  {
    id: "massage-leg",
    categoryId: "massage",
    tool: "CARE",
    icon: "💆",
    title: "Leg Massage 🦵🏼",
    price: "₹500",
    duration: "30-35 mins",
    desc: "Deep calf and foot relief massage with essential oils to eliminate walking fatigue.",
    items: [
      "Warm herbal oil infusion",
      "Calf muscle decompression strokes",
      "Foot arch reflexology points",
      "Tension release towel wrap"
    ]
  },
  {
    id: "massage-full-body",
    categoryId: "massage",
    tool: "CARE",
    icon: "💆",
    title: "Full Body Massage (1 Hour)",
    price: "₹1,500 - ₹2,000",
    duration: "60 mins",
    desc: "Complete head-to-toe restorative massage by skilled therapists for total mind and body renewal.",
    items: [
      "Choice of warm Ayurvedic herbal oils",
      "Deep tissue knot and back tension release",
      "Shoulder, neck, spine & leg acupressure",
      "Hot steam towel relaxation finish"
    ]
  },

  // ==========================================
  // 8. PIERCING, TATTOO & PEDI (Category: special)
  // ==========================================
  {
    id: "special-gunshot",
    categoryId: "special",
    tool: "CARE",
    icon: "◈",
    title: "Gunshot Piercing (Ear / Nose)",
    price: "₹150",
    duration: "10 mins",
    desc: "Quick, sterile, hygienic spring-loaded ear or nose piercing with surgical-grade studs.",
    items: [
      "Sterile skin sanitization & point marking",
      "Spring-loaded painless gunshot pierce",
      "Hypoallergenic surgical stud placement",
      "Antiseptic aftercare guidance"
    ]
  },
  {
    id: "special-pedicure-only",
    categoryId: "special",
    tool: "CARE",
    icon: "≋",
    title: "Only Pedicure",
    price: "₹500",
    duration: "35-40 mins",
    desc: "Warm herbal foot soak, heel callus scrubbing, nail clip, buff, and soothing foot massage.",
    items: [
      "Antiseptic warm sea salt foot bath",
      "Pumice stone heel scrub & dead skin removal",
      "Nail trim, filing & cuticle care",
      "Relaxing foot & ankle massage"
    ]
  },
  {
    id: "special-pedi-mani",
    categoryId: "special",
    tool: "CARE",
    icon: "≋",
    title: "Pedicure & Manicure",
    price: "₹800",
    duration: "55-65 mins",
    desc: "Complete dual care package for hands and feet with warm soaks, scrubs, and nail detailing.",
    items: [
      "Warm herbal foot bath & hand soak",
      "Heel scrubbing & cuticle maintenance",
      "Nail shaping, clipping & buffing shine",
      "Dual hand and foot reflexology massage"
    ]
  },
  {
    id: "special-tattoos",
    categoryId: "special",
    tool: "CARE",
    icon: "✒️",
    title: "All Tattoos Available (Custom Ink)",
    price: "Available on Consultation",
    duration: "Custom",
    desc: "Custom permanent and artistic tattoo work with 100% sterile single-use needles.",
    items: [
      "100% sterile single-use needles & inks",
      "Custom sketch & size placement",
      "Precision tattoo machine linework & shading",
      "Medical-grade antiseptic healing wrap"
    ]
  }
];

export const comboOffers = [
  {
    id: "pkg-executive",
    title: "Special Cut & Shave Grooming",
    price: "₹200",
    originalPrice: "₹230",
    savings: "Save ₹30",
    tag: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85",
    idealFor: "Fresh special cut & clean shaving for everyday confidence",
    features: [
      "Special Haircut & Fade Detailing",
      "Smooth Precision Shave with Warm Foam",
      "Refreshing Hair Wash & Comb Styling",
      "Quick Head Massage Touch"
    ]
  },
  {
    id: "pkg-detan",
    title: "Royal De-Tan & Hair Spa Combo",
    price: "₹799",
    originalPrice: "₹1,000",
    savings: "Save ₹201",
    tag: "BEST VALUE",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=85",
    idealFor: "Banish sun tan and revitalize dry hair with deep steam",
    features: [
      "Stylish Haircut & Beard Trim",
      "Active D-Tan Sun Removal Face Pack",
      "Classic Hair Spa with Warm Ozone Steam",
      "Cooling Scalp Acupressure Finish"
    ]
  },
  {
    id: "pkg-spa",
    title: "Deep Hair Spa & Anti-Dandruff Detox",
    price: "₹999",
    originalPrice: "₹1,250",
    savings: "Save ₹251",
    tag: "THERAPEUTIC",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
    idealFor: "Melt away headache & stress with nourishing warm steam and flake control",
    features: [
      "Anti-Dandruff Hair Spa & Scalp Scrub",
      "Ozone Warm Steam Circulation",
      "20-Min Deep Head & Shoulder Massage",
      "Hair Wash & Professional Blow Dry Setting"
    ]
  },
  {
    id: "pkg-head-to-toe",
    title: "Deluxe Mani-Pedi & Scrub Refresh",
    price: "₹1,199",
    originalPrice: "₹1,400",
    savings: "Save ₹201",
    tag: "HEAD TO TOE",
    image: "https://images.unsplash.com/photo-1519014816548-bf7851504fdd?auto=format&fit=crop&w=800&q=85",
    idealFor: "Pampered feet, neat hands, and fresh skin from head to toe",
    features: [
      "Pedicure & Manicure Complete Care",
      "Scrub with Steam Facial Clean",
      "Neck & Face Detailing",
      "Warm Herbal Towel Compression"
    ]
  },
  {
    id: "pkg-groom",
    title: "Grand Gold Facial & Groom Transformation",
    price: "₹1,999",
    originalPrice: "₹2,500",
    savings: "Save ₹501",
    tag: "LUXURY WEDDING",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    idealFor: "The ultimate 24K gold glow for weddings & life's big celebrations",
    features: [
      "Spl Haircut & Styling Blow Dry",
      "Spl Shave with Hot Steam Towel",
      "24K Gold Radiance Facial & Pack",
      "Classic Hair Spa with Steam Therapy",
      "Hand & Shoulder Stress Release Massage"
    ]
  }
];

export const gallery = [
  {
    src: salonHeroInterior,
    tag: "THE SHOP",
    caption: "Signature salon lounge at SBI Colony, Police Station Road, Madhurawada, Bakkanapalem",
    big: true
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
    tag: "GROOMING",
    caption: "Sharp beard sculpting with precision clippers"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    tag: "THE CUT",
    caption: "Classic fades and custom scissor cuts"
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
    tag: "STYLE",
    caption: "Textured blow dry and all-day hold"
  },
  {
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=85",
    tag: "DETAIL",
    caption: "Crisp neck taper and sharp razor work"
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
    tag: "FACIAL & SPA",
    caption: "Skin revitalizing facials and hair spa care"
  }
];

export const testimonials = [
  {
    text: "Best salon experience in Madhurawada! Great atmosphere, extremely clean beside APGV Bank, and the barber understood exactly the stylish haircut and beard trim I wanted.",
    author: "Kiran Varma",
    badge: "Verified Client",
    stars: 5
  },
  {
    text: "Very professional staff and comfortable chairs. Their special haircut, shaving, and hair spa are top-notch. Highly recommended in Bakkanapalem, Vizag.",
    author: "Rohit Reddy",
    badge: "Regular Client",
    stars: 5
  },
  {
    text: "Patience and real attention to detail. Even for kids haircuts and baby cutting they handle with utmost care. Booking on WhatsApp was super easy.",
    author: "Srinivas Rao",
    badge: "Happy Customer",
    stars: 5
  }
];
