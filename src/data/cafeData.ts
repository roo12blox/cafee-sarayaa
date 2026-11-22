export type Language = 'fr' | 'ar' | 'en';

export type MenuCategoryId = 'breakfast' | 'drinks' | 'pastry' | 'bakery';

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  priceDh: number;
  image?: string;
  featured?: boolean;
  name: Record<Language, string>;
  description: Record<Language, string>;
  tag?: Record<Language, string>;
}

export interface GalleryItem {
  id: string;
  src: string;
  aspect: 'wide' | 'square' | 'tall';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  category: Record<Language, string>;
}

export const CAFE_INFO = {
  brandName: 'Saraya Palace',
  arabicName: 'سرايا بالاص',
  city: 'Meknès',
  address: 'Lot Salam 1, Imm 1, Rue Zaytoune, Meknès 50050',
  addressAr: 'تجزئة السلام 1، عمارة 1، زنقة الزيتون، مكناس 50050',
  phoneDisplay: '0535 46 27 64',
  phoneHref: 'tel:+212535462764',
  hoursDisplay: '06:00 – 23:00',
  daysDisplay: {
    fr: 'Ouvert 7j/7',
    ar: 'مفتوح طوال الأسبوع',
    en: 'Open Daily',
  },
  instagramHandle: '@saraya_palace_meknes',
  instagramUrl: 'https://www.instagram.com/saraya_palace_meknes/',
  facebookUrl: 'https://www.facebook.com/saraya.palace.meknes/',
  googleMapsUrl:
    'https://www.google.com/maps/place/%D8%B3%D8%B1%D8%A7%D9%8A%D8%A7+Saraya+Palace/@33.8588717,-5.5628626,17z',
  coordinates: '33.8589° N, 5.5629° W',
  menuPhotoSrc: '/assets/aistudio/unnamed_9__210a1eda.jpg',
};

export const MENU_CATEGORIES: { id: MenuCategoryId; label: Record<Language, string> }[] = [
  {
    id: 'breakfast',
    label: {
      fr: 'Petits Déjeuners',
      ar: 'وجبات الإفطار',
      en: 'Breakfasts',
    },
  },
  {
    id: 'drinks',
    label: {
      fr: 'Cafés & Salon de Thé',
      ar: 'القهوة والشاي',
      en: 'Coffee & Tea',
    },
  },
  {
    id: 'pastry',
    label: {
      fr: 'Pâtisserie & Glaces',
      ar: 'الحلويات والمثلجات',
      en: 'Pastry & Gelato',
    },
  },
  {
    id: 'bakery',
    label: {
      fr: 'Boulangerie & Pizzeria',
      ar: 'المخبز والبيتزا',
      en: 'Bakery & Pizzeria',
    },
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Authentic Petits Déjeuners directly from Saraya Palace printed menu
  {
    id: 'saraya-palace',
    category: 'breakfast',
    priceDh: 38,
    featured: true,
    image: '/assets/aistudio/unnamed_12__31d2cd35.jpg',
    name: {
      fr: 'Saraya Palace',
      ar: 'فطور سرايا بالاص',
      en: 'Saraya Palace Signature',
    },
    description: {
      fr: 'Toast, jambon de dinde fumée, fromage rouge, saucisse, tomate, cornichons, œuf dur, fruits, pain & miel, jus d’orange, boisson chaude, yaourt et soupe d’avoine.',
      ar: 'توست، ديك رومي مدخن، جبن أحمر، نقانق، طماطم، مخلل، بيض مسلوق، فواكه، خبز وعسل، عصير برتقال، مشروب ساخن، ياغورت وحساء الشوفان.',
      en: 'Toast, smoked turkey, red cheese, sausage, tomato, pickles, boiled egg, fresh fruit, bread & honey, orange juice, hot drink, yogurt, and oat soup.',
    },
    tag: {
      fr: 'Formule Maison',
      ar: 'الأكثر طلباً',
      en: 'House Signature',
    },
  },
  {
    id: 'tostada',
    category: 'breakfast',
    priceDh: 30,
    image: '/assets/aistudio/unnamed_10__0c70f899.jpg',
    name: {
      fr: 'Tostada',
      ar: 'فطور توستادا',
      en: 'Tostada Breakfast',
    },
    description: {
      fr: 'Toast buriné à la sauce maison, deux œufs au plat, boisson chaude, huile d’olive, yaourt, mini jus d’orange, olives et soupe.',
      ar: 'توست بصلصة الدار، بيضتان مقليتان، مشروب ساخن، زيت زيتون، ياغورت، ميني عصير، زيتون وحساء.',
      en: 'House-sauce toasted bread, two fried eggs, hot beverage, olive oil, yogurt, mini orange juice, olives, and soup.',
    },
    tag: {
      fr: 'Classique',
      ar: 'كلاسيكي',
      en: 'Classic',
    },
  },
  {
    id: 'pecheur',
    category: 'breakfast',
    priceDh: 50,
    featured: true,
    name: {
      fr: 'Pêcheur',
      ar: 'فطور الصياد',
      en: 'Fisherman Breakfast',
    },
    description: {
      fr: 'Omelette aux crevettes et champignons, tartine de surimi, avocat en lamelles, boisson chaude, mini jus, yaourt et soupe.',
      ar: 'أومليت بالروبيان والفطر، تارتين سوريمي، شرائح أفوكادو، مشروب ساخن، ميني عصير، ياغورت وحساء.',
      en: 'Shrimp & mushroom omelette, surimi tartine, sliced avocado, hot beverage, mini juice, yogurt, and soup.',
    },
    tag: {
      fr: 'Gourmand',
      ar: 'فاخر',
      en: 'Gourmet',
    },
  },
  {
    id: 'equilibre',
    category: 'breakfast',
    priceDh: 35,
    name: {
      fr: 'Équilibré',
      ar: 'فطور متوازن',
      en: 'Balanced Morning',
    },
    description: {
      fr: 'Pain grillé aux herbes provençales, boisson chaude au choix, mini jus frais, huile d’olive extra vierge et olives.',
      ar: 'خبز محمص بأعشاب بروفنسال، مشروب ساخن، ميني عصير طازج، زيت زيتون وزيتون.',
      en: 'Herbed toasted bread, hot beverage of choice, mini fresh juice, extra virgin olive oil, and olives.',
    },
    tag: {
      fr: 'Léger',
      ar: 'خفيف',
      en: 'Light',
    },
  },
  {
    id: 'chamia-tafersi',
    category: 'breakfast',
    priceDh: 38,
    name: {
      fr: 'Chamia Tafersi',
      ar: 'فطور شامية تافرسيت',
      en: 'Chamia Tafersi',
    },
    description: {
      fr: 'Pain grillé aux trois sauces (ail, persil et olives), œuf, fromage, boisson chaude, yaourt, jus d’orange et huile d’olive.',
      ar: 'خبز محمص بثلاث صلصات (الثوم، البقدونس والزيتون)، بيض، جبن، مشروب ساخن، ياغورت، عصير وزيت زيتون.',
      en: 'Grilled bread with three sauces (garlic, parsley & olives), egg, cheese, hot drink, yogurt, juice, and olive oil.',
    },
  },
  {
    id: 'bruxelle',
    category: 'breakfast',
    priceDh: 45,
    name: {
      fr: 'Bruxelle',
      ar: 'فطور بروكسيل',
      en: 'Brussels Platter',
    },
    description: {
      fr: 'Omelette à l’oignon, deux œufs, huile d’olive, jus d’orange pressé, salade fraîche, toast, yaourt et soupe du matin.',
      ar: 'أومليت بالبصل، بيضتان، زيت زيتون، عصير برتقال طازج، سلطة، توست، ياغورت وحساء.',
      en: 'Onion omelette, two eggs, olive oil, fresh orange juice, garden salad, toast, yogurt, and morning soup.',
    },
  },
  {
    id: 'saraya-palace-2',
    category: 'breakfast',
    priceDh: 45,
    featured: true,
    image: '/assets/aistudio/unnamed_4__b71853c8.jpg',
    name: {
      fr: 'Saraya Palace 2',
      ar: 'سرايا بالاص 2',
      en: 'Saraya Palace 2',
    },
    description: {
      fr: 'Club sandwich à base de poulet, crêpe Nutella & rondelles de banane, boisson chaude, mini jus au choix et soupe.',
      ar: 'كلوب ساندويتش بالدجاج، كريب نوتيلا بالموز، مشروب ساخن، ميني عصير وحساء.',
      en: 'Chicken club sandwich, Nutella & banana crêpe, hot beverage, choice of mini juice, and soup.',
    },
    tag: {
      fr: 'Sucré & Salé',
      ar: 'حلو ومالح',
      en: 'Sweet & Savory',
    },
  },
  {
    id: 'kids-breakfast',
    category: 'breakfast',
    priceDh: 35,
    name: {
      fr: 'Kids Breakfast',
      ar: 'فطور الأطفال',
      en: 'Kids Breakfast',
    },
    description: {
      fr: 'Pancakes dorés, chocolat chaud crémeux, mini jus d’orange pressé et petite assiette gourmande.',
      ar: 'بان كيك ذهبي، شوكولاتة ساخنة، ميني عصير برتقال وطبق صغير لذيذ.',
      en: 'Golden pancakes, creamy hot chocolate, mini orange juice, and a kid-friendly treat plate.',
    },
  },

  // Cafés & Salon de Thé
  {
    id: 'the-menthe-palace',
    category: 'drinks',
    priceDh: 16,
    featured: true,
    image: '/assets/aistudio/unnamed_7__ada98a71.jpg',
    name: {
      fr: 'Thé à la Menthe Traditionnel',
      ar: 'أتاي مغربي بالنعناع',
      en: 'Traditional Mint Tea',
    },
    description: {
      fr: 'Servi en théière d’argent ciselée avec menthe fraîche de Meknès et gâteaux marocains secs en accompagnement.',
      ar: 'يقدم في براد فضي تقليدي مع النعناع الطازج وحلويات مغربية مقرمشة.',
      en: 'Served in an engraved silver teapot with fresh Meknès mint and traditional Moroccan tea biscuits.',
    },
    tag: {
      fr: 'Soirée & Terrasse',
      ar: 'تقليدي',
      en: 'Signature Tea',
    },
  },
  {
    id: 'espresso-italien',
    category: 'drinks',
    priceDh: 14,
    image: '/assets/aistudio/unnamed_5__665aec00.jpg',
    name: {
      fr: 'Espresso Serré / Allongé',
      ar: 'إسبريسو إيطالي',
      en: 'Italian Espresso',
    },
    description: {
      fr: 'Extraction lente à crema dorée, servi en verre avec eau minérale fraîche Sidi Ali.',
      ar: 'قهوة إسبريسو مركزة برغوة ذهبية، تقدم مع ماء سيدي علي البارد.',
      en: 'Slow-pulled rich espresso with golden crema, served in glass with chilled Sidi Ali mineral water.',
    },
  },
  {
    id: 'cafe-creme',
    category: 'drinks',
    priceDh: 16,
    name: {
      fr: 'Café Crème Velouté',
      ar: 'قهوة حليب مخملية',
      en: 'Velvet Café Crème',
    },
    description: {
      fr: 'Espresso torréfié surmonté d’une mousse de lait onctueuse, idéal dès 06h00 sur la terrasse.',
      ar: 'إسبريسو محمص مع رغوة حليب ناعمة، مثالي لصباح مكناس.',
      en: 'Roasted espresso topped with silky steamed milk foam, served from 06:00 on the terrace.',
    },
  },
  {
    id: 'jus-orange-frais',
    category: 'drinks',
    priceDh: 18,
    name: {
      fr: 'Jus d’Orange Pressé Minute',
      ar: 'عصير برتقال طازج',
      en: 'Freshly Pressed Orange Juice',
    },
    description: {
      fr: 'Oranges juteuses pressées à la commande, sans sucre ajouté, servi bien frais.',
      ar: 'برتقال طازج معصور عند الطلب، طبيعي بدون سكر مضاف.',
      en: 'Sun-ripened Moroccan oranges pressed to order, chilled with zero added sugar.',
    },
  },

  // Pâtisserie & Glacier
  {
    id: 'chebakia-sesame',
    category: 'pastry',
    priceDh: 45,
    featured: true,
    image: '/assets/aistudio/unnamed_13__1ef6d213.jpg',
    name: {
      fr: 'Chebakia Artisanale au Sésame',
      ar: 'شباكية تقليدية بالسمسم والعسل',
      en: 'Artisanal Sesame Chebakia',
    },
    description: {
      fr: 'Pâtisserie marocaine façonnée à la main, parfumée à l’eau de fleur d’oranger, nappée de miel pur et graines de sésame dorées.',
      ar: 'شباكية منزلية معطرة بماء الزهر، مغموسة في العسل ومزينة بالسمسم المحمص.',
      en: 'Hand-folded Moroccan pastry infused with orange blossom, glazed in pure honey and toasted sesame seeds.',
    },
    tag: {
      fr: 'Fait Maison',
      ar: 'تحضير منزلي',
      en: 'House Made',
    },
  },
  {
    id: 'crepe-nutella-banane',
    category: 'pastry',
    priceDh: 32,
    image: '/assets/aistudio/unnamed_4__b71853c8.jpg',
    name: {
      fr: 'Crêpe Nutella & Banane Fraîche',
      ar: 'كريب نوتيلا والموز',
      en: 'Nutella & Banana Crêpe',
    },
    description: {
      fr: 'Crêpe fine préparée à la minute, généreusement garnie de chocolat noisette et rondelles de banane.',
      ar: 'كريب رقيق محضر طازجاً محشو بشوكولاتة البندق وشرائح الموز.',
      en: 'Delicate made-to-order crêpe generously filled with hazelnut chocolate spread and sliced banana.',
    },
  },
  {
    id: 'coupe-glacee-saraya',
    category: 'pastry',
    priceDh: 35,
    name: {
      fr: 'Coupe Glacier Saraya',
      ar: 'كأس مثلجات سرايا',
      en: 'Saraya Gelato Sundae',
    },
    description: {
      fr: 'Trois boules de glaces artisanales au choix, chantilly légère, éclats d’amandes torréfiées et coulis.',
      ar: 'ثلاث كرات من المثلجات الحرفية مع كريمة شانتي ولوز محمص.',
      en: 'Three scoops of artisanal gelato, whipped cream, roasted almond crumble, and house coulis.',
    },
  },

  // Boulangerie & Pizzeria
  {
    id: 'pizza-royale',
    category: 'bakery',
    priceDh: 55,
    name: {
      fr: 'Pizza Saraya Royale',
      ar: 'بيتزا سرايا رويال',
      en: 'Saraya Royale Pizza',
    },
    description: {
      fr: 'Pâte maturée maison, sauce tomate mijotée, mozzarella fondante, crevettes, viande hachée, champignons et origan.',
      ar: 'عجينة مخمرة في المخبز، صلصة طماطم، موزاريلا، روبيان، لحم مفروم وفطر.',
      en: 'House-fermented dough, slow-simmered tomato sauce, mozzarella, shrimp, seasoned beef, mushrooms, and oregano.',
    },
    tag: {
      fr: 'Four Artisanal',
      ar: 'فرن تقليدي',
      en: 'Stone Baked',
    },
  },
  {
    id: 'panier-boulangerie',
    category: 'bakery',
    priceDh: 22,
    image: '/assets/aistudio/unnamed_10__0c70f899.jpg',
    name: {
      fr: 'Assortiment Boulangerie du Matin',
      ar: 'تشكيلة المخبوزات الصباحية',
      en: 'Morning Bakery Basket',
    },
    description: {
      fr: 'Petits pains chauds aux céréales et sésame servis avec huile d’olive, miel doré et olives noires.',
      ar: 'خبز دافئ بالحبوب والسمسم يقدم مع زيت الزيتون والعسل والزيتون الأسود.',
      en: 'Warm sesame & grain rolls served alongside Moroccan olive oil, golden honey, and cured black olives.',
    },
  },
  {
    id: 'club-poulet-maison',
    category: 'bakery',
    priceDh: 42,
    name: {
      fr: 'Club Sandwich Poulet Grillé',
      ar: 'كلوب ساندويتش بالدجاج',
      en: 'Grilled Chicken Club',
    },
    description: {
      fr: 'Pain toasté croustillant, filet de poulet mariné, fromage fondant, salade croquante, sauce maison et frites dorées.',
      ar: 'خبز محمص، شرائح دجاج مشوي، جبن ذائب، سلطة طازجة وبطاطس مقلية.',
      en: 'Crisp toasted sandwich with marinated grilled chicken, melted cheese, fresh greens, house sauce, and fries.',
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'facade',
    src: '/assets/aistudio/unnamed_6__2e22fde6.jpg',
    aspect: 'tall',
    category: {
      fr: 'Architecture & Jardin',
      ar: 'الواجهة والحديقة',
      en: 'Facade & Garden',
    },
    title: {
      fr: 'Façade Rue Zaytoune',
      ar: 'واجهة مقهى سرايا بالاص',
      en: 'Rue Zaytoune Storefront',
    },
    subtitle: {
      fr: 'Boulangerie, Pâtisserie, Glacier & Salon de Thé au cœur du quartier Salam.',
      ar: 'مخبز، حلويات، مثلجات وصالون شاي في قلب حي السلام بمكناس.',
      en: 'Bakery, patisserie, gelateria, and tea lounge in the heart of Quartier Salam.',
    },
  },
  {
    id: 'interior',
    src: '/assets/aistudio/unnamed_8__a6f6ead8.jpg',
    aspect: 'wide',
    category: {
      fr: 'Salon Intérieur',
      ar: 'الصالون الداخلي',
      en: 'Indoor Lounge',
    },
    title: {
      fr: 'La Grande Salle Vitrée',
      ar: 'القاعة الزجاجية المضيئة',
      en: 'Light-Filled Glass Lounge',
    },
    subtitle: {
      fr: 'Double hauteur baignée de lumière naturelle, idéale pour vos rendez-vous et pauses café.',
      ar: 'فضاء واسع ومريح بإضاءة طبيعية مثالي للقاءات العمل والعائلة.',
      en: 'Double-height sunlit salon designed for morning meetings and relaxed afternoons.',
    },
  },
  {
    id: 'terrace',
    src: '/assets/aistudio/unnamed_11__80b2b619.jpg',
    aspect: 'wide',
    category: {
      fr: 'Terrasse',
      ar: 'الشرفة المشمسة',
      en: 'Terrace',
    },
    title: {
      fr: 'Allée des Palmiers',
      ar: 'تراس النخيل المشمس',
      en: 'Palm-Lined Terrace',
    },
    subtitle: {
      fr: 'Profitez du soleil de Meknès dès 06h00 sous nos parasols ombragés.',
      ar: 'استمتع بشمس مكناس ابتداءً من السادسة صباحاً تحت ظلال النخيل.',
      en: 'Enjoy Meknès sunshine from 06:00 under shaded parasols along the palm avenue.',
    },
  },
  {
    id: 'breakfast-board',
    src: '/assets/aistudio/unnamed_12__31d2cd35.jpg',
    aspect: 'square',
    category: {
      fr: 'Petit Déjeuner',
      ar: 'فطور الصباح',
      en: 'Breakfast',
    },
    title: {
      fr: 'Planche Saraya Palace',
      ar: 'طبق فطور سرايا بالاص',
      en: 'Saraya Palace Morning Board',
    },
    subtitle: {
      fr: 'Notre formule complète à 38 DH servie sur planche en bois.',
      ar: 'وجبة الإفطار الكاملة بـ 38 درهماً.',
      en: 'Our signature 38 DH complete morning platter served fresh.',
    },
  },
  {
    id: 'mint-tea',
    src: '/assets/aistudio/unnamed_7__ada98a71.jpg',
    aspect: 'square',
    category: {
      fr: 'Salon de Thé',
      ar: 'صالون الشاي',
      en: 'Tea Service',
    },
    title: {
      fr: 'Théière d’Argent en Soirée',
      ar: 'أتاي المساء التقليدي',
      en: 'Evening Mint Tea Service',
    },
    subtitle: {
      fr: 'Service traditionnel sur plateau ciselé jusqu’à 23h00.',
      ar: 'تقديم تقليدي على صينية فضية حتى الحادية عشرة ليلاً.',
      en: 'Traditional silver tray service available daily until 23:00.',
    },
  },
  {
    id: 'chebakia',
    src: '/assets/aistudio/unnamed_13__1ef6d213.jpg',
    aspect: 'square',
    category: {
      fr: 'Pâtisserie',
      ar: 'حلويات مغربية',
      en: 'Patisserie',
    },
    title: {
      fr: 'Chebakia au Miel & Sésame',
      ar: 'شباكية بالعسل والزنجلان',
      en: 'Honey & Sesame Chebakia',
    },
    subtitle: {
      fr: 'Confection artisanale quotidienne dans notre laboratoire de pâtisserie.',
      ar: 'تحضير يومي طازج في معمل الحلويات الخاص بنا.',
      en: 'Handcrafted daily in our on-site Moroccan patisserie.',
    },
  },
];

export const UI_COPY: Record<
  Language,
  {
    nav: {
      menu: string;
      space: string;
      gallery: string;
      contact: string;
      reserve: string;
    };
    hero: {
      kicker: string;
      headline: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      photoCaption: string;
    };
    strip: {
      hoursLabel: string;
      hoursValue: string;
      addressLabel: string;
      addressValue: string;
      phoneLabel: string;
      phoneValue: string;
      craftLabel: string;
      craftValue: string;
    };
    menu: {
      eyebrow: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      viewOriginalMenu: string;
      selectionButton: string;
      addButton: string;
      addedButton: string;
      emptySearch: string;
      resetFilter: string;
    };
    atmosphere: {
      eyebrow: string;
      title: string;
      subtitle: string;
      pillars: { num: string; title: string; body: string }[];
    };
    gallery: {
      eyebrow: string;
      title: string;
      subtitle: string;
      zoomHint: string;
    };
    reservation: {
      eyebrow: string;
      title: string;
      subtitle: string;
      formTitle: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      dateLabel: string;
      timeLabel: string;
      guestsLabel: string;
      zoneLabel: string;
      zones: string[];
      submitButton: string;
      errorRequired: string;
      errorPhone: string;
      confirmedTitle: string;
      confirmedBody: string;
      newReservation: string;
      visitTitle: string;
      openMaps: string;
      callDirectly: string;
      followInstagram: string;
    };
    drawer: {
      title: string;
      emptyTitle: string;
      emptyBody: string;
      browseMenu: string;
      modeTable: string;
      modeTakeaway: string;
      subtotal: string;
      nameLabel: string;
      phoneLabel: string;
      timeLabel: string;
      confirmOrder: string;
      orderConfirmed: string;
      orderConfirmedDesc: string;
      clearOrder: string;
    };
    footer: {
      tagline: string;
      rights: string;
      hours: string;
    };
  }
> = {
  fr: {
    nav: {
      menu: 'La Carte',
      space: 'Savoir-Faire',
      gallery: 'Galerie',
      contact: 'Accès',
      reserve: 'Réserver',
    },
    hero: {
      kicker: 'Meknès · Quartier Salam · Depuis toujours',
      headline: 'Une touche de bonheur, du premier espresso au thé du soir.',
      subtitle:
        'Café, Salon de Thé, Pâtisserie, Glacier, Boulangerie et Pizzeria au cœur de Meknès. Savourez nos petits déjeuners préparés minute sur notre terrasse bordée de palmiers.',
      ctaPrimary: 'Réserver une table',
      ctaSecondary: 'Découvrir la carte',
      photoCaption: 'La grande salle vitrée · Rue Zaytoune, Meknès',
    },
    strip: {
      hoursLabel: 'Horaires continus',
      hoursValue: '7j/7 · 06:00 – 23:00',
      addressLabel: 'Adresse Meknès',
      addressValue: 'Lot Salam 1, Rue Zaytoune',
      phoneLabel: 'Commandes & Tables',
      phoneValue: '0535 46 27 64',
      craftLabel: 'Maison Multi-Métiers',
      craftValue: 'Café · Pâtisserie · Pizzeria',
    },
    menu: {
      eyebrow: 'La Carte du Jour',
      title: 'Petits déjeuners signature, cafés & pâtisserie maison.',
      subtitle:
        'Des formules matinales complètes servies dès 06h00 jusqu’aux douceurs marocaines et glaces artisanales en soirée.',
      searchPlaceholder: 'Rechercher un plat, café, formule...',
      viewOriginalMenu: 'Voir la carte imprimée',
      selectionButton: 'Ma sélection',
      addButton: 'Ajouter',
      addedButton: 'Ajouté',
      emptySearch: 'Aucun article ne correspond à votre recherche dans cette catégorie.',
      resetFilter: 'Réinitialiser',
    },
    atmosphere: {
      eyebrow: 'L’Expérience Saraya Palace',
      title: 'Trois ambiances sous un même toit à Meknès.',
      subtitle:
        'Pensé comme un lieu de vie chaleureux pour les matins pressés, les brunchs en famille et les soirées autour d’un thé à la menthe.',
      pillars: [
        {
          num: '01.',
          title: 'Petits Déjeuners dès 06h00',
          body: 'Huit formules généreuses — de la Tostada à 30 DH à l’assiette Pêcheur — accompagnées de jus pressé minute et pains chauds du four.',
        },
        {
          num: '02.',
          title: 'Terrasse des Palmiers & Salon Vitré',
          body: 'Choisissez la lumière naturelle de notre grande salle climatisée ou l’air doux de la terrasse donnant sur l’avenue Zaytoune.',
        },
        {
          num: '03.',
          title: 'Pâtisserie, Glacier & Boulangerie',
          body: 'Chebakia au sésame, gâteaux marocains, crêpes chaudes, coupes glacées et pizzas artisanales préparées sur place tout au long de la journée.',
        },
      ],
    },
    gallery: {
      eyebrow: 'En Images',
      title: 'Un aperçu de la maison.',
      subtitle: 'Cliquez sur n’importe quelle photographie pour l’afficher en plein écran.',
      zoomHint: 'Agrandir',
    },
    reservation: {
      eyebrow: 'Réservation & Accès',
      title: 'Réservez votre table ou passez nous voir.',
      subtitle:
        'Pour un petit déjeuner d’affaires, une table familiale sur la terrasse ou une commande à emporter, notre équipe vous accueille 7j/7.',
      formTitle: 'Demande de réservation',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex. Youssef El Mansouri',
      phoneLabel: 'Téléphone',
      phonePlaceholder: '06 XX XX XX XX',
      dateLabel: 'Date souhaitée',
      timeLabel: 'Heure d’arrivée',
      guestsLabel: 'Convives',
      zoneLabel: 'Espace préféré',
      zones: ['Terrasse Ensoleillée', 'Salon Intérieur Vitré', 'Étage Mezzanine'],
      submitButton: 'Confirmer la réservation',
      errorRequired: 'Veuillez renseigner votre nom, téléphone et date de réservation.',
      errorPhone: 'Veuillez saisir un numéro de téléphone valide (au moins 9 chiffres).',
      confirmedTitle: 'Table réservée avec succès',
      confirmedBody:
        'Votre demande est enregistrée pour le créneau choisi. En cas d’imprévu ou pour un groupe de plus de 8 personnes, appelez directement le 0535 46 27 64.',
      newReservation: 'Modifier / Nouvelle réservation',
      visitTitle: 'Coordonnées & Itinéraire',
      openMaps: 'Ouvrir dans Google Maps',
      callDirectly: 'Appeler le café',
      followInstagram: 'Suivre @saraya_palace_meknes',
    },
    drawer: {
      title: 'Votre Sélection',
      emptyTitle: 'Votre sélection est vide',
      emptyBody:
        'Ajoutez des formules petit déjeuner, boissons ou pâtisseries depuis la carte pour préparer votre commande.',
      browseMenu: 'Parcourir la carte',
      modeTable: 'Sur place',
      modeTakeaway: 'À emporter',
      subtotal: 'Total estimé',
      nameLabel: 'Votre nom',
      phoneLabel: 'Votre téléphone',
      timeLabel: 'Heure souhaitée',
      confirmOrder: 'Enregistrer la pré-commande',
      orderConfirmed: 'Pré-commande enregistrée',
      orderConfirmedDesc:
        'Présentez ce récapitulatif au comptoir Saraya Palace ou confirmez par téléphone au 0535 46 27 64.',
      clearOrder: 'Nouvelle sélection',
    },
    footer: {
      tagline: 'Café · Salon de Thé · Pâtisserie · Glacier · Boulangerie · Pizzeria',
      rights: 'Saraya Palace Meknès. Tous droits réservés.',
      hours: 'Ouvert tous les jours de 06h00 à 23h00',
    },
  },
  ar: {
    nav: {
      menu: 'القائمة',
      space: 'خبرتنا',
      gallery: 'المعرض',
      contact: 'العنوان',
      reserve: 'احجز طاولة',
    },
    hero: {
      kicker: 'مكناس · حي السلام · مفتوح يومياً',
      headline: 'لمسة من السعادة، من قهوة الصباح إلى شاي المساء.',
      subtitle:
        'مقهى، صالون شاي، حلويات، مثلجات، مخبز وبيتزيريا في قلب مكناس. استمتع بوجبات الإفطار الطازجة على التراس المشمس بين أشجار النخيل.',
      ctaPrimary: 'احجز طاولة',
      ctaSecondary: 'استكشف القائمة',
      photoCaption: 'القاعة الزجاجية الكبرى · زنقة الزيتون، مكناس',
    },
    strip: {
      hoursLabel: 'ساعات العمل',
      hoursValue: '7/7 · 06:00 – 23:00',
      addressLabel: 'العنوان بمكناس',
      addressValue: 'تجزئة السلام 1، زنقة الزيتون',
      phoneLabel: 'الهاتف والحجوزات',
      phoneValue: '0535 46 27 64',
      craftLabel: 'تخصصات الدار',
      craftValue: 'مقهى · حلويات · مخبز',
    },
    menu: {
      eyebrow: 'قائمة الطعام والمشروبات',
      title: 'وجبات إفطار مميزة، قهوة وحلويات تقليدية.',
      subtitle:
        'تشكيلة متكاملة من وجبات الإفطار ابتداءً من الساعة السادسة صباحاً، إلى جانب الشاي المغربي والحلويات والمثلجات.',
      searchPlaceholder: 'ابحث عن وجبة أو مشروب...',
      viewOriginalMenu: 'عرض القائمة المصورة',
      selectionButton: 'طلبي',
      addButton: 'إضافة',
      addedButton: 'تمت الإضافة',
      emptySearch: 'لا توجد نتائج مطابقة لبحثك في هذا القسم.',
      resetFilter: 'إعادة ضبط',
    },
    atmosphere: {
      eyebrow: 'تجربة سرايا بالاص',
      title: 'ثلاثة فضاءات متكاملة تحت سقف واحد في مكناس.',
      subtitle:
        'مصمم ليكون وجهتكم المفضلة لقهوة الصباح، فطور العائلة، وأمسيات الشاي بالنعناع.',
      pillars: [
        {
          num: '01.',
          title: 'إفطار طازج ابتداءً من 06:00',
          body: 'ثماني وجبات متنوعة — من توستادا بـ 30 درهم إلى فطور الصياد — مع عصير طازج ومخبوزات دافئة.',
        },
        {
          num: '02.',
          title: 'شرفة النخيل والقاعة الزجاجية',
          body: 'اختر الجلوس في القاعة المضيئة المكيفة أو في التراس الهادئ المطل على شارع الزيتون.',
        },
        {
          num: '03.',
          title: 'حلويات، مثلجات ومخبز',
          body: 'شباكية بالسمسم، حلويات مغربية، كريب ساخن، مثلجات وبيتزا محضرة يومياً.',
        },
      ],
    },
    gallery: {
      eyebrow: 'معرض الصور',
      title: 'لقطات حقيقية من المقهى.',
      subtitle: 'اضغط على أي صورة لعرضها بالحجم الكامل.',
      zoomHint: 'تكبير',
    },
    reservation: {
      eyebrow: 'الحجز والوصول',
      title: 'احجز طاولتك أو تفضل بزيارتنا.',
      subtitle:
        'لفطور عمل، جلسة عائلية في التراس أو طلبات سفري، فريقنا في استقبالكم طوال أيام الأسبوع.',
      formTitle: 'طلب حجز طاولة',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: يوسف المنصوري',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '06 XX XX XX XX',
      dateLabel: 'التاريخ المطلوب',
      timeLabel: 'وقت الوصول',
      guestsLabel: 'عدد الأشخاص',
      zoneLabel: 'الفضاء المفضل',
      zones: ['التراس المشمس', 'القاعة الداخلية الزجاجية', 'الطابق العلوي'],
      submitButton: 'تأكيد الحجز',
      errorRequired: 'يرجى إدخال الاسم ورقم الهاتف والتاريخ.',
      errorPhone: 'يرجى إدخال رقم هاتف صحيح.',
      confirmedTitle: 'تم تسجيل حجزك بنجاح',
      confirmedBody:
        'تم تسجيل طلبك في الموعد المحدد. لأي تعديل أو للمجموعات الكبيرة يرجى الاتصال على 0535 46 27 64.',
      newReservation: 'حجز جديد',
      visitTitle: 'معلومات التواصل والموقع',
      openMaps: 'فتح في خرائط جوجل',
      callDirectly: 'الاتصال بالمقهى',
      followInstagram: 'تابعنا على إنستغرام',
    },
    drawer: {
      title: 'سلة الطلبات',
      emptyTitle: 'سلتك فارغة حالياً',
      emptyBody: 'أضف وجبات الإفطار أو المشروبات أو الحلويات من القائمة لتجهيز طلبك.',
      browseMenu: 'تصفح القائمة',
      modeTable: 'داخل المقهى',
      modeTakeaway: 'طلب سفري',
      subtotal: 'المجموع التقديري',
      nameLabel: 'الاسم',
      phoneLabel: 'رقم الهاتف',
      timeLabel: 'الوقت المفضل',
      confirmOrder: 'تأكيد الطلب المسبق',
      orderConfirmed: 'تم تسجيل الطلب بنجاح',
      orderConfirmedDesc: 'قدم هذا الرقم عند الاستقبال أو اتصل بنا على 0535 46 27 64.',
      clearOrder: 'طلب جديد',
    },
    footer: {
      tagline: 'مقهى · صالون شاي · حلويات · مثلجات · مخبز · بيتزيريا',
      rights: 'سرايا بالاص مكناس. جميع الحقوق محفوظة.',
      hours: 'مفتوح يومياً من 06:00 صباحاً إلى 23:00 ليلاً',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      space: 'Craft',
      gallery: 'Gallery',
      contact: 'Visit',
      reserve: 'Reserve',
    },
    hero: {
      kicker: 'Meknès · Quartier Salam · Open Daily',
      headline: 'A touch of joy, from morning espresso to evening mint tea.',
      subtitle:
        'Café, Tea Lounge, Patisserie, Gelateria, Bakery & Pizzeria in the heart of Meknès. Enjoy freshly prepared breakfast platters on our palm-lined terrace.',
      ctaPrimary: 'Reserve a Table',
      ctaSecondary: 'Explore the Menu',
      photoCaption: 'Sunlit Glass Lounge · Rue Zaytoune, Meknès',
    },
    strip: {
      hoursLabel: 'Daily Hours',
      hoursValue: '7 Days · 06:00 – 23:00',
      addressLabel: 'Meknès Location',
      addressValue: 'Lot Salam 1, Rue Zaytoune',
      phoneLabel: 'Tables & Orders',
      phoneValue: '0535 46 27 64',
      craftLabel: 'All-Day House',
      craftValue: 'Café · Patisserie · Pizzeria',
    },
    menu: {
      eyebrow: 'Daily Selection',
      title: 'Signature breakfasts, coffee & Moroccan pastry.',
      subtitle:
        'Complete morning platters served from 06:00 alongside traditional tea service, house pastries, and stone-baked pizzas.',
      searchPlaceholder: 'Search breakfast, coffee, pastry...',
      viewOriginalMenu: 'View printed menu',
      selectionButton: 'My Selection',
      addButton: 'Add',
      addedButton: 'Added',
      emptySearch: 'No items match your search in this category.',
      resetFilter: 'Reset',
    },
    atmosphere: {
      eyebrow: 'The Saraya Experience',
      title: 'Three atmospheres under one roof in Meknès.',
      subtitle:
        'Designed as a welcoming neighborhood house for early risers, family brunches, and late-evening mint tea gatherings.',
      pillars: [
        {
          num: '01.',
          title: 'Breakfasts from 06:00',
          body: 'Eight generous platters—from the 30 DH Tostada to our Fisherman board—paired with fresh pressed juice and warm bakery rolls.',
        },
        {
          num: '02.',
          title: 'Palm Terrace & Glass Salon',
          body: 'Choose between the airy climate-controlled interior lounge or our sunlit terrace overlooking Rue Zaytoune.',
        },
        {
          num: '03.',
          title: 'Patisserie, Gelato & Bakery',
          body: 'Sesame chebakia, traditional Moroccan sweets, warm Nutella crêpes, gelato sundaes, and artisanal pizzas crafted fresh daily.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Inside Saraya Palace.',
      subtitle: 'Click any photograph to view full resolution.',
      zoomHint: 'Expand',
    },
    reservation: {
      eyebrow: 'Reservations & Directions',
      title: 'Book your table or stop by.',
      subtitle:
        'Whether for a morning business coffee, weekend family breakfast, or takeaway order, our team welcomes you every day.',
      formTitle: 'Table Reservation',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Youssef El Mansouri',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '06 XX XX XX XX',
      dateLabel: 'Preferred Date',
      timeLabel: 'Arrival Time',
      guestsLabel: 'Guests',
      zoneLabel: 'Seating Area',
      zones: ['Sunny Terrace', 'Glass Indoor Lounge', 'Mezzanine Level'],
      submitButton: 'Confirm Reservation',
      errorRequired: 'Please enter your name, phone number, and reservation date.',
      errorPhone: 'Please enter a valid phone number (at least 9 digits).',
      confirmedTitle: 'Table Reserved',
      confirmedBody:
        'Your table request is logged for your chosen slot. For parties over 8 guests, call us directly at 0535 46 27 64.',
      newReservation: 'Modify / New Booking',
      visitTitle: 'Location & Contact',
      openMaps: 'Open in Google Maps',
      callDirectly: 'Call the Café',
      followInstagram: 'Follow @saraya_palace_meknes',
    },
    drawer: {
      title: 'Your Order Selection',
      emptyTitle: 'Your selection is empty',
      emptyBody: 'Add breakfast platters, drinks, or pastries from the menu to prepare your order.',
      browseMenu: 'Browse Menu',
      modeTable: 'Dine-in',
      modeTakeaway: 'Takeaway',
      subtotal: 'Estimated Total',
      nameLabel: 'Your Name',
      phoneLabel: 'Your Phone',
      timeLabel: 'Pickup / Arrival Time',
      confirmOrder: 'Submit Pre-Order',
      orderConfirmed: 'Pre-Order Saved',
      orderConfirmedDesc:
        'Show this summary at the Saraya Palace counter or confirm by calling 0535 46 27 64.',
      clearOrder: 'Start New Order',
    },
    footer: {
      tagline: 'Café · Tea Lounge · Patisserie · Gelateria · Bakery · Pizzeria',
      rights: 'Saraya Palace Meknès. All rights reserved.',
      hours: 'Open daily from 06:00 to 23:00',
    },
  },
};
