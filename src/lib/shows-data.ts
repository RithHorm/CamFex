export interface ShowSummary {
  slug: string;
  title: string;
  /** Content spec STANDFIRST line — §4.4.1–4.4.6, verbatim. */
  standfirst: string;
  /** Descriptive alt text for the pending photography, grounded in the show's "What is exhibited" list — not a published fact. */
  imageAlt: string;
  /** Set only once a photo has been checked against build plan §7.1/§7.4 — cleared for use. Falls back to the graded placeholder when absent. */
  imageSrc?: string;
  /** Content spec "What is exhibited" LIST — §4.4.1–4.4.6, verbatim, one entry per category. */
  whatIsExhibited: string[];
  /** Content spec "Who buys here" BODY — §4.4.1–4.4.6, verbatim. */
  whoBuysHere: string;
}

export const shows: ShowSummary[] = [
  {
    slug: "rice-grains",
    title: "Rice & Grains",
    standfirst: "Cambodia's rice, and everything grown alongside it.",
    imageAlt: "A pile of rice grains beside dried grain stalks on a wooden board",
    imageSrc: "/images/six-shows/Rice&Grain_Image.jpg",
    whatIsExhibited: [
      "Milled and fragrant rice including Malis",
      "Organic and certified rice",
      "Maize",
      "Cassava and cassava products",
      "Other grains and pulses",
      "Milling and origin services",
    ],
    whoBuysHere:
      "Rice importers and traders, wholesale and retail buyers, private label programmes, food manufacturers sourcing starch and grain inputs, and government purchasing bodies.",
  },
  {
    slug: "fresh",
    title: "Fresh",
    standfirst: "Fruit, vegetables and the cold chain that moves them.",
    imageAlt: "An assortment of fresh vegetables and fruit in a woven basket",
    imageSrc: "/images/six-shows/Fresh_Vegetables.jpg",
    whatIsExhibited: [
      "Mango",
      "Longan",
      "Banana",
      "Durian",
      "Vegetables",
      "Fresh herbs",
      "Cold chain, packing and post-harvest services",
    ],
    whoBuysHere:
      "Fresh produce importers, supermarket and wholesale buyers, processors sourcing raw fruit, and logistics and cold chain operators building supply into Cambodia.",
  },
  {
    slug: "processed-packaged",
    title: "Processed & Packaged",
    standfirst: "The shelf-ready products Cambodia is starting to make well.",
    imageAlt: "An assortment of packaged snack foods",
    imageSrc: "/images/six-shows/Processed&Packaged_Image.png",
    whatIsExhibited: [
      "Dried fruit",
      "Snacks and confectionery",
      "Sauces, pastes and condiments",
      "Ready-to-eat and ready-to-cook",
      "Private label and contract manufacturing",
      "Ingredients",
    ],
    whoBuysHere:
      "Retail and grocery buyers, private label programme managers, distributors, foodservice and hospitality procurement, and e-commerce grocery platforms.",
  },
  {
    slug: "drinks",
    title: "Drinks",
    standfirst: "Coffee, water, juice, beer, spirits and the sweet things.",
    imageAlt:
      "A row of hand-painted glass bottles of infused rice spirit, each tagged Sombai",
    imageSrc: "/images/six-shows/Drinks_Image.jpg",
    whatIsExhibited: [
      "Coffee, green and roasted",
      "Bottled and mineral water",
      "Juice and soft drinks",
      "Beer",
      "Spirits and rice wine",
      "Palm sugar and natural sweeteners",
    ],
    whoBuysHere:
      "Beverage importers and distributors, hotel and restaurant buyers, retail chains, specialty coffee roasters, and duty-free and travel retail.",
  },
  {
    slug: "protein",
    title: "Protein",
    standfirst: "Nuts, spice, fisheries and livestock.",
    imageAlt:
      "Salmon, whole fish, chicken, pork, eggs, cheese, beans and nuts arranged around a chalkboard sign reading PROTEIN",
    imageSrc: "/images/six-shows/protein.jpg",
    whatIsExhibited: [
      "Cashew, raw and processed",
      "Kampot pepper and other spice",
      "Fisheries and aquaculture",
      "Poultry",
      "Pork",
      "Feed and animal nutrition",
    ],
    whoBuysHere:
      "Nut and spice traders, seafood importers, meat and protein buyers, ingredient sourcing for manufacturers, and specialty and gourmet distributors.",
  },
  {
    slug: "tech-packaging",
    title: "Tech & Packaging",
    standfirst: "The equipment that turns a crop into a product.",
    imageAlt:
      "Two people inspecting a wrapped pallet of boxes in a packaging test facility",
    imageSrc: "/images/six-shows/Tech&Packaging_Image.jpg",
    whatIsExhibited: [
      "Processing and production equipment",
      "Cold chain and refrigeration",
      "Packaging machinery and materials",
      "Food safety, testing and laboratory",
      "Warehousing and logistics",
      "Traceability and software",
    ],
    whoBuysHere:
      "Cambodian producers and processors investing in capacity, food manufacturers, packaging converters, and distributors and agents seeking Cambodian representation. This is the one show where the primary buyer is domestic.",
  },
];
