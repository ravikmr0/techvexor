// Product catalog data with detailed information for each product
export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: string;
  priceValue: number;
  image: string;
  images: string[];
  description: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications: { label: string; value: string }[];
  features: string[];
  warranty: string;
  brand: string;
  sku: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "all", name: "All Products", description: "Browse all products", slug: "all" },
  { id: "solar", name: "Solar Energy", description: "Solar panels, inverters, and accessories", slug: "solar" },
  { id: "battery", name: "Batteries", description: "Power backup batteries and storage", slug: "batteries" },
  { id: "inverters", name: "Inverters", description: "Home and commercial inverters", slug: "inverters" },
  { id: "electrical", name: "Electrical", description: "Meters, breakers, and electrical equipment", slug: "electrical" },
  { id: "industrial", name: "Industrial", description: "EV chargers and industrial equipment", slug: "industrial" },
];

export const products: Product[] = [
  // Solar Products
  {
    id: 1,
    slug: "solar-panels-mono-perc",
    name: "Solar Panels (Mono PERC)",
    category: "solar",
    price: "₹18,500",
    priceValue: 18500,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
    ],
    description: "High-efficiency monocrystalline PERC solar panels",
    longDescription: "Our premium Mono PERC solar panels deliver exceptional performance with industry-leading efficiency. Featuring advanced PERC (Passivated Emitter and Rear Cell) technology, these panels maximize energy capture even in low-light conditions. The monocrystalline silicon cells ensure superior power output and long-term reliability, making them perfect for residential and commercial installations.",
    rating: 4.8,
    reviewCount: 128,
    inStock: true,
    specifications: [
      { label: "Power Output", value: "540W" },
      { label: "Efficiency", value: "21.4%" },
      { label: "Cell Type", value: "Mono PERC" },
      { label: "Dimensions", value: "2278 x 1134 x 35mm" },
      { label: "Weight", value: "28.5 kg" },
      { label: "Frame", value: "Anodized Aluminum" },
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Max System Voltage", value: "1500V DC" }
    ],
    features: [
      "High-efficiency PERC technology",
      "Anti-reflective tempered glass",
      "IP68 rated junction box",
      "Salt mist and ammonia resistant",
      "PID resistant",
      "25-year linear power warranty"
    ],
    warranty: "25 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-SP-540M",
    metaTitle: "Mono PERC Solar Panels 540W - High Efficiency Solar Panels | Tech Vexor",
    metaDescription: "Buy premium 540W Mono PERC solar panels with 21.4% efficiency. Best-in-class monocrystalline solar panels with 25-year warranty. Free consultation & competitive pricing.",
    keywords: ["mono perc solar panels", "540w solar panel", "monocrystalline solar panel", "high efficiency solar panel", "residential solar panel"]
  },
  {
    id: 2,
    slug: "solar-panels-polycrystalline",
    name: "Solar Panels (Polycrystalline)",
    category: "solar",
    price: "₹14,500",
    priceValue: 14500,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    ],
    description: "Affordable polycrystalline solar panels",
    longDescription: "Cost-effective polycrystalline solar panels offering excellent value for money. These panels feature blue-hued polycrystalline silicon cells that provide reliable performance across various conditions. Ideal for budget-conscious installations without compromising on quality.",
    rating: 4.5,
    reviewCount: 95,
    inStock: true,
    specifications: [
      { label: "Power Output", value: "400W" },
      { label: "Efficiency", value: "18.5%" },
      { label: "Cell Type", value: "Polycrystalline" },
      { label: "Dimensions", value: "2000 x 1000 x 35mm" },
      { label: "Weight", value: "22 kg" },
      { label: "Frame", value: "Anodized Aluminum" }
    ],
    features: [
      "Budget-friendly option",
      "Reliable performance",
      "10-year product warranty",
      "25-year performance warranty",
      "Easy installation"
    ],
    warranty: "10 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-SP-400P",
    metaTitle: "Polycrystalline Solar Panels 400W - Affordable Solar Solutions | Tech Vexor",
    metaDescription: "Buy affordable 400W polycrystalline solar panels. Budget-friendly solar panels with 25-year performance warranty. Best prices in India.",
    keywords: ["polycrystalline solar panels", "400w solar panel", "affordable solar panel", "budget solar panel"]
  },
  {
    id: 3,
    slug: "bifacial-solar-panels",
    name: "Bifacial Solar Panels",
    category: "solar",
    price: "₹22,000",
    priceValue: 22000,
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    ],
    description: "Double-sided solar panels for maximum efficiency",
    longDescription: "Revolutionary bifacial solar panels that capture sunlight from both sides, increasing energy yield by up to 30%. The transparent backsheet allows reflected light from the ground or roof surface to be converted into electricity, maximizing your solar investment.",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    specifications: [
      { label: "Power Output", value: "550W (front)" },
      { label: "Bifacial Gain", value: "Up to 30%" },
      { label: "Efficiency", value: "22.3%" },
      { label: "Cell Type", value: "N-Type Bifacial" },
      { label: "Dimensions", value: "2278 x 1134 x 35mm" },
      { label: "Weight", value: "27 kg" }
    ],
    features: [
      "Dual-sided power generation",
      "N-Type cell technology",
      "Lower degradation rate",
      "30-year warranty",
      "Excellent low-light performance"
    ],
    warranty: "30 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-SP-550BF",
    metaTitle: "Bifacial Solar Panels 550W - Double-Sided Solar Technology | Tech Vexor",
    metaDescription: "Buy premium bifacial solar panels with up to 30% extra energy yield. N-Type technology with 30-year warranty. Best bifacial panels in India.",
    keywords: ["bifacial solar panels", "double-sided solar panel", "n-type solar panel", "high yield solar panel"]
  },
  {
    id: 4,
    slug: "rooftop-solar-system-5kw",
    name: "Rooftop Solar System (5kW)",
    category: "solar",
    price: "₹2,45,000",
    priceValue: 245000,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
    ],
    description: "Complete residential rooftop system",
    longDescription: "A complete turnkey 5kW rooftop solar system designed for Indian homes. Includes premium solar panels, grid-tied inverter, mounting structure, cables, and professional installation. Generate 20-25 units of electricity daily and reduce your electricity bills by up to 80%.",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    specifications: [
      { label: "System Capacity", value: "5kW" },
      { label: "Daily Generation", value: "20-25 units" },
      { label: "Monthly Savings", value: "₹5,000-7,000" },
      { label: "Panels Included", value: "10 x 540W" },
      { label: "Inverter", value: "5kW Grid-Tied" },
      { label: "Area Required", value: "400-500 sq ft" }
    ],
    features: [
      "Complete turnkey solution",
      "Professional installation",
      "Net metering assistance",
      "5-year comprehensive warranty",
      "25-year panel warranty",
      "Free maintenance for 1 year"
    ],
    warranty: "5 Years Comprehensive",
    brand: "Tech Vexor Energy",
    sku: "TVE-RTS-5KW",
    metaTitle: "5kW Rooftop Solar System - Complete Home Solar Package | Tech Vexor",
    metaDescription: "Buy complete 5kW rooftop solar system for home. Includes panels, inverter, installation. Save ₹5000-7000 monthly on electricity. Get free quote today.",
    keywords: ["5kw solar system", "rooftop solar", "home solar system", "residential solar", "solar installation"]
  },
  {
    id: 5,
    slug: "commercial-solar-system-50kw",
    name: "Commercial Solar System (50kW)",
    category: "solar",
    price: "₹22,50,000",
    priceValue: 2250000,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    ],
    description: "Large-scale commercial solar installation",
    longDescription: "Enterprise-grade 50kW commercial solar system designed for businesses, factories, and large establishments. This comprehensive solution includes premium bifacial panels, industrial-grade inverters, robust mounting systems, and complete project management from design to commissioning.",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    specifications: [
      { label: "System Capacity", value: "50kW" },
      { label: "Daily Generation", value: "200-250 units" },
      { label: "Annual Savings", value: "₹6-8 Lakhs" },
      { label: "Panels Included", value: "90 x 550W" },
      { label: "Inverter", value: "50kW String Inverter" },
      { label: "Area Required", value: "4000-5000 sq ft" }
    ],
    features: [
      "Commercial-grade equipment",
      "Project management included",
      "Government subsidy assistance",
      "Net metering setup",
      "Remote monitoring system",
      "Annual maintenance contract"
    ],
    warranty: "5 Years Comprehensive",
    brand: "Tech Vexor Energy",
    sku: "TVE-CMS-50KW",
    metaTitle: "50kW Commercial Solar System - Business Solar Solutions | Tech Vexor",
    metaDescription: "Buy 50kW commercial solar system for business. Save ₹6-8 lakhs annually. Complete project management with government subsidy assistance.",
    keywords: ["50kw solar system", "commercial solar", "industrial solar", "business solar system"]
  },
  {
    id: 6,
    slug: "on-grid-solar-inverter",
    name: "On-Grid Solar Inverter",
    category: "solar",
    price: "₹45,000",
    priceValue: 45000,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    description: "Grid-tied solar inverter with monitoring",
    longDescription: "Advanced on-grid solar inverter with WiFi monitoring capability. Features dual MPPT tracking for optimal power harvest, built-in DC switch for safety, and real-time monitoring via mobile app. Perfect for grid-connected solar installations.",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "5kW" },
      { label: "MPPT Channels", value: "2" },
      { label: "Max Efficiency", value: "98.4%" },
      { label: "Input Voltage Range", value: "150-850V DC" },
      { label: "Output Voltage", value: "230V AC" },
      { label: "Display", value: "LCD with WiFi" }
    ],
    features: [
      "Dual MPPT tracking",
      "WiFi monitoring",
      "Mobile app control",
      "Natural convection cooling",
      "IP65 protection",
      "5-year warranty"
    ],
    warranty: "5 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-INV-5ON",
    metaTitle: "On-Grid Solar Inverter 5kW - Grid-Tied Inverter with WiFi | Tech Vexor",
    metaDescription: "Buy 5kW on-grid solar inverter with WiFi monitoring. Dual MPPT, 98.4% efficiency. Best grid-tied inverter for home solar systems.",
    keywords: ["on-grid inverter", "grid-tied inverter", "solar inverter", "5kw inverter", "wifi solar inverter"]
  },
  {
    id: 7,
    slug: "off-grid-solar-inverter",
    name: "Off-Grid Solar Inverter",
    category: "solar",
    price: "₹55,000",
    priceValue: 55000,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
    ],
    description: "Standalone solar inverter for off-grid systems",
    longDescription: "Powerful off-grid solar inverter designed for standalone solar installations. Features built-in MPPT charge controller, battery management system, and generator support. Ideal for remote locations without grid access.",
    rating: 4.7,
    reviewCount: 72,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "5kVA" },
      { label: "Battery Voltage", value: "48V" },
      { label: "MPPT Controller", value: "80A Built-in" },
      { label: "Max PV Input", value: "5000W" },
      { label: "Output Waveform", value: "Pure Sine Wave" },
      { label: "Transfer Time", value: "<10ms" }
    ],
    features: [
      "Built-in MPPT charger",
      "Pure sine wave output",
      "Generator compatible",
      "LCD display",
      "Priority mode selection",
      "Overload protection"
    ],
    warranty: "3 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-INV-5OFF",
    metaTitle: "Off-Grid Solar Inverter 5kVA - Standalone Solar Inverter | Tech Vexor",
    metaDescription: "Buy 5kVA off-grid solar inverter with built-in MPPT controller. Pure sine wave output for remote and standalone solar systems.",
    keywords: ["off-grid inverter", "standalone inverter", "solar inverter with mppt", "5kva inverter"]
  },
  {
    id: 8,
    slug: "hybrid-solar-inverter",
    name: "Hybrid Solar Inverter",
    category: "solar",
    price: "₹65,000",
    priceValue: 65000,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    description: "Versatile hybrid solar inverter",
    longDescription: "All-in-one hybrid solar inverter that combines grid-tied and off-grid functionality. Features intelligent energy management, battery storage support, and seamless switching between grid and battery power. The ultimate solution for energy independence.",
    rating: 4.9,
    reviewCount: 104,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "5kW" },
      { label: "Battery Voltage", value: "48V Lithium/Lead Acid" },
      { label: "Max PV Input", value: "6500W" },
      { label: "Efficiency", value: "97.6%" },
      { label: "Transfer Time", value: "0ms (UPS Mode)" },
      { label: "Communication", value: "WiFi/RS485/CAN" }
    ],
    features: [
      "Grid-tied + Off-grid modes",
      "Zero transfer time UPS",
      "Lithium battery compatible",
      "Time-of-use programming",
      "Remote monitoring",
      "5-year warranty"
    ],
    warranty: "5 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-INV-5HYB",
    metaTitle: "Hybrid Solar Inverter 5kW - Grid + Battery Inverter | Tech Vexor",
    metaDescription: "Buy 5kW hybrid solar inverter with grid-tie and battery backup. Zero transfer time, lithium compatible. Best hybrid inverter in India.",
    keywords: ["hybrid inverter", "hybrid solar inverter", "grid battery inverter", "5kw hybrid inverter"]
  },
  {
    id: 9,
    slug: "pwm-solar-charge-controller",
    name: "PWM Solar Charge Controller",
    category: "solar",
    price: "₹8,500",
    priceValue: 8500,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    description: "Pulse width modulation charge controller",
    longDescription: "Reliable PWM solar charge controller for small to medium solar installations. Features multiple protection mechanisms including overcharge, over-discharge, short circuit, and reverse polarity protection. Perfect for 12V/24V battery systems.",
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    specifications: [
      { label: "Rated Current", value: "30A" },
      { label: "System Voltage", value: "12V/24V Auto" },
      { label: "Max PV Input", value: "400W (12V) / 800W (24V)" },
      { label: "Charging Algorithm", value: "3-Stage PWM" },
      { label: "Self Consumption", value: "<10mA" },
      { label: "Operating Temperature", value: "-35°C to +55°C" }
    ],
    features: [
      "Auto voltage detection",
      "LCD display",
      "USB charging ports",
      "Multiple protections",
      "2-year warranty",
      "Easy installation"
    ],
    warranty: "2 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-CC-30PWM",
    metaTitle: "PWM Solar Charge Controller 30A - Solar Battery Charger | Tech Vexor",
    metaDescription: "Buy 30A PWM solar charge controller with LCD display. Auto 12V/24V detection, multiple protections. Affordable solar charge controller.",
    keywords: ["pwm charge controller", "solar charge controller", "30a charge controller", "battery charger"]
  },
  {
    id: 10,
    slug: "mppt-solar-charge-controller",
    name: "MPPT Solar Charge Controller",
    category: "solar",
    price: "₹15,000",
    priceValue: 15000,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    description: "Maximum power point tracking controller",
    longDescription: "Advanced MPPT solar charge controller with up to 99% tracking efficiency. Harvests up to 30% more energy compared to PWM controllers. Features WiFi monitoring, programmable load control, and compatibility with lithium batteries.",
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    specifications: [
      { label: "Rated Current", value: "60A" },
      { label: "System Voltage", value: "12V/24V/48V Auto" },
      { label: "Max PV Input", value: "3200W" },
      { label: "MPPT Efficiency", value: "99.5%" },
      { label: "Max PV Voltage", value: "150V DC" },
      { label: "Charging Algorithm", value: "4-Stage MPPT" }
    ],
    features: [
      "99.5% MPPT efficiency",
      "WiFi monitoring",
      "Lithium battery compatible",
      "Programmable load control",
      "Temperature compensation",
      "3-year warranty"
    ],
    warranty: "3 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-CC-60MPPT",
    metaTitle: "MPPT Solar Charge Controller 60A - High Efficiency Charger | Tech Vexor",
    metaDescription: "Buy 60A MPPT solar charge controller with 99.5% efficiency. WiFi monitoring, lithium compatible. Best MPPT controller in India.",
    keywords: ["mppt charge controller", "mppt solar controller", "60a charge controller", "high efficiency charger"]
  },
  // Battery Products
  {
    id: 19,
    slug: "inverter-battery-150ah-tubular",
    name: "Inverter Battery 150Ah Tubular",
    category: "battery",
    price: "₹16,500",
    priceValue: 16500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1609091837083-757a2f0e1b85?w=800&q=80"
    ],
    description: "Long-lasting tubular battery",
    longDescription: "Premium 150Ah tall tubular battery designed for heavy-duty power backup applications. Features extra-thick positive plates for longer life, low water loss, and superior charge acceptance. Ideal for areas with frequent power cuts.",
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "150Ah @ C20" },
      { label: "Voltage", value: "12V" },
      { label: "Type", value: "Tall Tubular" },
      { label: "Dimensions", value: "502 x 191 x 410mm" },
      { label: "Weight", value: "58 kg" },
      { label: "Electrolyte", value: "Low Maintenance" }
    ],
    features: [
      "Extra-thick tubular plates",
      "Low water top-up",
      "Fast charging",
      "1500+ deep cycles",
      "42 months warranty",
      "Made in India"
    ],
    warranty: "42 Months",
    brand: "Tech Vexor Power",
    sku: "TVP-TB-150",
    metaTitle: "150Ah Tubular Inverter Battery - Long Life Battery | Tech Vexor",
    metaDescription: "Buy 150Ah tubular inverter battery with 42 months warranty. Extra-thick plates, low maintenance. Best tubular battery for home inverter.",
    keywords: ["150ah battery", "tubular battery", "inverter battery", "tall tubular battery", "power backup battery"]
  },
  {
    id: 20,
    slug: "inverter-battery-200ah-tubular",
    name: "Inverter Battery 200Ah Tubular",
    category: "battery",
    price: "₹21,000",
    priceValue: 21000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    description: "High-capacity tubular battery",
    longDescription: "High-capacity 200Ah tall tubular battery for extended backup requirements. Features advanced tubular technology for exceptional deep discharge recovery and longer service life. Perfect for large homes and small offices.",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "200Ah @ C20" },
      { label: "Voltage", value: "12V" },
      { label: "Type", value: "Tall Tubular" },
      { label: "Dimensions", value: "502 x 191 x 440mm" },
      { label: "Weight", value: "72 kg" },
      { label: "Cycle Life", value: "1800+ cycles" }
    ],
    features: [
      "High capacity backup",
      "Premium tubular plates",
      "Fast recharge",
      "Deep discharge recovery",
      "48 months warranty",
      "Low maintenance"
    ],
    warranty: "48 Months",
    brand: "Tech Vexor Power",
    sku: "TVP-TB-200",
    metaTitle: "200Ah Tubular Inverter Battery - High Capacity Battery | Tech Vexor",
    metaDescription: "Buy 200Ah tubular inverter battery with 48 months warranty. High capacity, low maintenance. Best 200Ah battery for home and office.",
    keywords: ["200ah battery", "high capacity battery", "tubular battery", "inverter battery"]
  },
  {
    id: 22,
    slug: "lithium-battery-pack-200ah",
    name: "Lithium Battery Pack 200Ah",
    category: "battery",
    price: "₹45,000",
    priceValue: 45000,
    image: "https://images.unsplash.com/photo-1609091837083-757a2f0e1b85?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609091837083-757a2f0e1b85?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    description: "Lightweight lithium-ion pack",
    longDescription: "Advanced 200Ah lithium iron phosphate (LiFePO4) battery pack with integrated BMS. Offers 4x the cycle life of lead-acid batteries with half the weight. Features fast charging, deep discharge capability, and maintenance-free operation.",
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "200Ah" },
      { label: "Voltage", value: "12.8V (LiFePO4)" },
      { label: "Energy", value: "2.56kWh" },
      { label: "Weight", value: "24 kg" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "BMS", value: "Integrated 200A" }
    ],
    features: [
      "LiFePO4 chemistry",
      "Built-in BMS",
      "6000+ cycle life",
      "Fast charging (1C)",
      "Wide temperature range",
      "5-year warranty"
    ],
    warranty: "5 Years",
    brand: "Tech Vexor Power",
    sku: "TVP-LI-200",
    metaTitle: "200Ah Lithium Battery LiFePO4 - Lithium Iron Phosphate Battery | Tech Vexor",
    metaDescription: "Buy 200Ah lithium battery (LiFePO4) with 6000+ cycle life. Built-in BMS, 5-year warranty. Best lithium battery for solar and inverter.",
    keywords: ["lithium battery", "lifepo4 battery", "200ah lithium", "lithium ion battery", "solar lithium battery"]
  },
  // Inverter Products
  {
    id: 29,
    slug: "home-inverter-850va",
    name: "Home Inverter 850VA",
    category: "inverters",
    price: "₹5,500",
    priceValue: 5500,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    description: "Pure sine wave home inverter",
    longDescription: "Compact 850VA pure sine wave home inverter for small households. Powers TVs, fans, lights, and small appliances during power outages. Features intelligent charging, overload protection, and silent operation.",
    rating: 4.5,
    reviewCount: 312,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "850VA / 12V" },
      { label: "Output", value: "Pure Sine Wave" },
      { label: "Load Capacity", value: "700W" },
      { label: "Charging Current", value: "10A" },
      { label: "Battery Voltage", value: "12V" },
      { label: "Efficiency", value: ">85%" }
    ],
    features: [
      "Pure sine wave output",
      "Intelligent charging",
      "Overload protection",
      "Short circuit protection",
      "Silent operation",
      "2-year warranty"
    ],
    warranty: "2 Years",
    brand: "Tech Vexor Power",
    sku: "TVP-INV-850",
    metaTitle: "850VA Home Inverter - Pure Sine Wave Inverter | Tech Vexor",
    metaDescription: "Buy 850VA pure sine wave home inverter. Powers TVs, fans, lights. 2-year warranty, best price. Ideal for small homes.",
    keywords: ["850va inverter", "home inverter", "pure sine wave inverter", "small inverter"]
  },
  {
    id: 30,
    slug: "home-inverter-1500va",
    name: "Home Inverter 1500VA",
    category: "inverters",
    price: "₹9,500",
    priceValue: 9500,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    description: "High-capacity home inverter",
    longDescription: "Powerful 1500VA pure sine wave inverter for medium to large homes. Features dual battery support, LCD display, and smart charging modes. Powers refrigerators, computers, and multiple appliances simultaneously.",
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "1500VA / 24V" },
      { label: "Output", value: "Pure Sine Wave" },
      { label: "Load Capacity", value: "1200W" },
      { label: "Charging Current", value: "15A" },
      { label: "Battery Configuration", value: "2 x 12V" },
      { label: "Display", value: "LCD" }
    ],
    features: [
      "High capacity output",
      "LCD display",
      "Smart charging modes",
      "ECO mode for efficiency",
      "Battery health indicator",
      "3-year warranty"
    ],
    warranty: "3 Years",
    brand: "Tech Vexor Power",
    sku: "TVP-INV-1500",
    metaTitle: "1500VA Home Inverter - High Capacity Inverter | Tech Vexor",
    metaDescription: "Buy 1500VA pure sine wave home inverter with LCD display. Powers refrigerator, AC loads. 3-year warranty, best price in India.",
    keywords: ["1500va inverter", "high capacity inverter", "home inverter", "24v inverter"]
  },
  {
    id: 31,
    slug: "commercial-inverter-5kva",
    name: "Commercial Inverter 5kVA",
    category: "inverters",
    price: "₹32,000",
    priceValue: 32000,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    description: "Three-phase commercial inverter",
    longDescription: "Heavy-duty 5kVA commercial inverter designed for offices, shops, and small industries. Features DSP-based sine wave technology, wide input voltage range, and intelligent battery management for maximum reliability.",
    rating: 4.8,
    reviewCount: 87,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "5kVA" },
      { label: "Battery Voltage", value: "96V (8 x 12V)" },
      { label: "Output", value: "Pure Sine Wave" },
      { label: "Charging Current", value: "25A" },
      { label: "Input Range", value: "100-290V AC" },
      { label: "Efficiency", value: ">92%" }
    ],
    features: [
      "DSP technology",
      "Wide voltage range",
      "Parallel operation capable",
      "Generator compatible",
      "Remote monitoring option",
      "3-year warranty"
    ],
    warranty: "3 Years",
    brand: "Tech Vexor Power",
    sku: "TVP-INV-5000C",
    metaTitle: "5kVA Commercial Inverter - Business Inverter | Tech Vexor",
    metaDescription: "Buy 5kVA commercial inverter for office and shop. DSP sine wave, wide voltage range. Best commercial inverter price in India.",
    keywords: ["5kva inverter", "commercial inverter", "office inverter", "business inverter"]
  },
  // Electrical Products
  {
    id: 36,
    slug: "smart-energy-meter",
    name: "Smart Energy Meter",
    category: "electrical",
    price: "₹4,500",
    priceValue: 4500,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    description: "WiFi-enabled smart meter",
    longDescription: "Advanced smart energy meter with WiFi connectivity and mobile app support. Monitor your electricity consumption in real-time, set alerts for unusual usage, and track your energy costs. Features bidirectional metering for solar installations.",
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
    specifications: [
      { label: "Current Rating", value: "5-100A" },
      { label: "Voltage", value: "230V AC" },
      { label: "Accuracy", value: "Class 1.0" },
      { label: "Display", value: "LCD with backlight" },
      { label: "Communication", value: "WiFi 2.4GHz" },
      { label: "Mounting", value: "DIN Rail" }
    ],
    features: [
      "Real-time monitoring",
      "Mobile app support",
      "Usage alerts",
      "Bidirectional metering",
      "Historical data logging",
      "2-year warranty"
    ],
    warranty: "2 Years",
    brand: "Tech Vexor Electric",
    sku: "TVE-SM-100",
    metaTitle: "Smart Energy Meter WiFi - Digital Power Meter | Tech Vexor",
    metaDescription: "Buy WiFi smart energy meter with mobile app. Real-time monitoring, usage alerts. Best smart meter for home and solar.",
    keywords: ["smart meter", "energy meter", "wifi meter", "power meter", "electricity monitor"]
  },
  {
    id: 41,
    slug: "surge-protection-device",
    name: "Surge Protection Device",
    category: "electrical",
    price: "₹5,500",
    priceValue: 5500,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    description: "Class I+II SPD protection",
    longDescription: "Industrial-grade surge protection device providing Type 1+2 protection against lightning and power surges. Essential for protecting expensive electronics, solar systems, and industrial equipment from transient overvoltages.",
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    specifications: [
      { label: "Type", value: "Class I + II (T1+T2)" },
      { label: "Max Discharge Current", value: "40kA" },
      { label: "Protection Level", value: "≤1.5kV" },
      { label: "Nominal Voltage", value: "230/400V AC" },
      { label: "Response Time", value: "<25ns" },
      { label: "Mounting", value: "DIN Rail 35mm" }
    ],
    features: [
      "Type 1+2 combined",
      "Visual status indicator",
      "Remote signaling contact",
      "Thermal disconnect",
      "Easy replacement",
      "5-year warranty"
    ],
    warranty: "5 Years",
    brand: "Tech Vexor Electric",
    sku: "TVE-SPD-T12",
    metaTitle: "Surge Protection Device SPD - Lightning Arrester | Tech Vexor",
    metaDescription: "Buy Class I+II surge protection device. 40kA discharge capacity, lightning protection. Best SPD for solar and industrial.",
    keywords: ["surge protection", "spd", "lightning arrester", "surge protector", "voltage protection"]
  },
  // Industrial Products
  {
    id: 44,
    slug: "ac-ev-charging-station-7kw",
    name: "AC EV Charging Station 7kW",
    category: "industrial",
    price: "₹85,000",
    priceValue: 85000,
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80"
    ],
    description: "Level 2 AC EV charger",
    longDescription: "Premium 7kW AC electric vehicle charging station for homes, offices, and commercial establishments. Features smart connectivity, RFID access control, and dynamic load management. Compatible with all Type 2 EVs including Tata, MG, Hyundai, and more.",
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    specifications: [
      { label: "Power Output", value: "7kW (32A)" },
      { label: "Connector", value: "Type 2 (IEC 62196)" },
      { label: "Input", value: "230V AC Single Phase" },
      { label: "Cable Length", value: "5 meters" },
      { label: "Protection", value: "IP65" },
      { label: "Communication", value: "WiFi + OCPP" }
    ],
    features: [
      "Smart app control",
      "RFID access",
      "Scheduled charging",
      "Load balancing",
      "OCPP 1.6 compliant",
      "3-year warranty"
    ],
    warranty: "3 Years",
    brand: "Tech Vexor EV",
    sku: "TVEV-AC-7KW",
    metaTitle: "7kW EV Charging Station - Electric Vehicle Charger | Tech Vexor",
    metaDescription: "Buy 7kW AC EV charging station with smart app control. Type 2 connector, OCPP compliant. Best EV charger for home and office.",
    keywords: ["ev charger", "ev charging station", "7kw charger", "electric vehicle charger", "type 2 charger"]
  },
  {
    id: 45,
    slug: "dc-fast-charger-50kw",
    name: "DC Fast Charger 50kW",
    category: "industrial",
    price: "₹12,50,000",
    priceValue: 1250000,
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80"
    ],
    description: "Fast charging station",
    longDescription: "Commercial-grade 50kW DC fast charging station for public charging infrastructure, highways, and commercial fleets. Features dual connectors (CCS2 + CHAdeMO), payment integration, and remote management capabilities.",
    rating: 4.9,
    reviewCount: 23,
    inStock: true,
    specifications: [
      { label: "Power Output", value: "50kW" },
      { label: "Connectors", value: "CCS2 + CHAdeMO" },
      { label: "Input", value: "415V AC Three Phase" },
      { label: "Output Voltage", value: "200-500V DC" },
      { label: "Efficiency", value: ">94%" },
      { label: "Display", value: '10.1" Touchscreen' }
    ],
    features: [
      "Dual connectors",
      "Payment integration",
      "OCPP 2.0 compliant",
      "Remote monitoring",
      "Dynamic power sharing",
      "5-year warranty"
    ],
    warranty: "5 Years",
    brand: "Tech Vexor EV",
    sku: "TVEV-DC-50KW",
    metaTitle: "50kW DC Fast Charger - Commercial EV Charging Station | Tech Vexor",
    metaDescription: "Buy 50kW DC fast charger with CCS2 and CHAdeMO. Commercial EV charging station for highways and fleets. Best price in India.",
    keywords: ["dc fast charger", "50kw charger", "commercial ev charger", "ccs charger", "chademo charger"]
  },
  {
    id: 48,
    slug: "energy-storage-system-10kwh",
    name: "Energy Storage System 10kWh",
    category: "industrial",
    price: "₹4,50,000",
    priceValue: 450000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    description: "Commercial energy storage",
    longDescription: "Complete 10kWh battery energy storage system for commercial and industrial applications. Features LiFePO4 battery modules, intelligent BMS, and integrated hybrid inverter. Ideal for peak shaving, load shifting, and backup power applications.",
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
    specifications: [
      { label: "Capacity", value: "10kWh" },
      { label: "Power Output", value: "5kW continuous" },
      { label: "Chemistry", value: "LiFePO4" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "DoD", value: "95%" },
      { label: "Dimensions", value: "600 x 400 x 1200mm" }
    ],
    features: [
      "Modular design",
      "Integrated inverter",
      "Remote monitoring",
      "Peak shaving mode",
      "Grid support functions",
      "10-year warranty"
    ],
    warranty: "10 Years",
    brand: "Tech Vexor Energy",
    sku: "TVE-ESS-10KWH",
    metaTitle: "10kWh Energy Storage System - Commercial Battery Storage | Tech Vexor",
    metaDescription: "Buy 10kWh battery energy storage system with integrated inverter. LiFePO4, 10-year warranty. Best ESS for commercial applications.",
    keywords: ["energy storage", "battery storage", "ess", "commercial battery", "lifepo4 storage"]
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") return products;
  return products.filter(p => p.category === categoryId);
}

// Helper function to get related products
export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

// Helper function to search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  );
}
