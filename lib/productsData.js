// Complete Flowitec Product Catalog

// Images for products
const IMAGES = {
  industrial: [
    'https://images.pexels.com/photos/6791514/pexels-photo-6791514.jpeg',
    'https://images.pexels.com/photos/8470046/pexels-photo-8470046.jpeg',
    'https://images.pexels.com/photos/9242831/pexels-photo-9242831.jpeg',
    'https://images.pexels.com/photos/35082108/pexels-photo-35082108.jpeg',
  ]
};

// Helper function to generate product objects
const createProduct = (id, title, category, slug, description, subcategory = null) => ({
  id,
  title,
  category,
  subcategory,
  slug,
  shortDescription: description,
  longDescription: `${description} Flowitec supplies high-quality ${title.toLowerCase()} designed for reliability and performance in demanding industrial applications across Africa.`,
  image: IMAGES.industrial[Math.floor(Math.random() * IMAGES.industrial.length)],
  specs: [
    { key: 'Category', value: category },
    { key: 'Application', value: 'Industrial & Commercial' },
    { key: 'Availability', value: 'In Stock' },
    { key: 'Warranty', value: 'Manufacturer Warranty Included' }
  ],
  materials: 'Various materials available based on application requirements',
  industries: ['mining', 'water-treatment', 'agriculture', 'petrochemical', 'municipal'],
  applications: ['clean-water', 'waste-water', 'slurry', 'chemical']
});

// ==================== PUMPS ====================

// SURFACE PUMPS - with custom images
const SURFACE_PUMPS = [
  {
    ...createProduct('pump-surf-1', 'End Suction Pumps', 'pumps', 'end-suction-pumps', 
      'Versatile horizontal end suction centrifugal pumps for general water transfer and industrial applications.', 'surface'),
    coverImage: '/products/cover/endsuction-pump.jpg',
    heroImage: '/products/hero/endsuction-pump2.jpg'
  },
  {
    ...createProduct('pump-surf-2', 'Multistage Pumps', 'pumps', 'multistage-pumps',
      'High-pressure multistage centrifugal pumps for applications requiring high head and efficient operation.', 'surface'),
    coverImage: '/products/cover/multistage-pump.jpg',
    heroImage: '/products/hero/multistage-pump2.jpg'
  },
  {
    ...createProduct('pump-surf-3', 'Split Case Pumps', 'pumps', 'split-case-pumps',
      'Horizontal split case pumps ideal for high flow, medium head water supply and irrigation systems.', 'surface'),
    coverImage: '/products/cover/splitcase-pump.jpg',
    heroImage: '/products/hero/splitcase-pump2.jpg'
  },
  {
    ...createProduct('pump-surf-4', 'Close Coupled Pumps', 'pumps', 'close-coupled-pumps',
      'Compact close coupled centrifugal pumps offering space-saving design with direct motor coupling.', 'surface'),
    coverImage: '/products/cover/close-coupled.jpg',
    heroImage: '/products/hero/close-coupled2.jpg'
  },
  {
    ...createProduct('pump-surf-5', 'Diaphragm Pumps (AODD)', 'pumps', 'diaphragm-pumps-aodd',
      'Air-operated double diaphragm pumps for handling abrasive, viscous, and corrosive fluids.', 'surface'),
    coverImage: '/products/cover/diaphragm-pump.jpg',
    heroImage: '/products/hero/diaphragm-pump2.jpg'
  },
  {
    ...createProduct('pump-surf-6', 'Progressive Cavity Pumps', 'pumps', 'progressive-cavity-pumps',
      'Positive displacement progressive cavity pumps for thick slurries, sludges, and viscous fluids.', 'surface'),
    coverImage: '/products/cover/progressivecavity-pump.jpg',
    heroImage: '/products/hero/progressivecavity-pump2.jpg'
  },
  {
    ...createProduct('pump-surf-7', 'Metering Pumps', 'pumps', 'metering-pumps',
      'Precision dosing and metering pumps for accurate chemical injection and treatment processes.', 'surface'),
    coverImage: '/products/cover/metering-pump.jpg',
    heroImage: '/products/hero/metering-pump2.jpg'
  },
   {
    ...createProduct('pump-surf-8', 'Domestic Pumps', 'pumps', 'domestic-pumps',
      'For households, and light commercial buildings for water transfer and water boosting purposes.', 'surface'),
    coverImage: '/products/cover/domestic-pump.jpg',
    heroImage: '/products/hero/domestic-pump2.jpg'
  }
];

// SUBMERSIBLE PUMPS - with custom images
const SUBMERSIBLE_PUMPS = [
  {
    ...createProduct('pump-sub-1', 'Borehole Pumps (Deep & Shallow)', 'pumps', 'borehole-pumps',
      'Submersible borehole pumps for deep well and shallow well water extraction applications.', 'submersible'),
    coverImage: '/products/cover/borehole-pump.jpg',
    heroImage: '/products/hero/borehole-pump2.jpg'
  },
  {
    ...createProduct('pump-sub-2', 'Sewage Pumps', 'pumps', 'sewage-pumps',
      'Heavy-duty submersible sewage pumps designed for municipal and industrial wastewater handling.', 'submersible'),
    coverImage: '/products/cover/sewage-pump.jpg',
    heroImage: '/products/hero/sewage-pump2.jpg'
  },
  {
    ...createProduct('pump-sub-3', 'Slurry Pumps', 'pumps', 'slurry-pumps',
      'Robust slurry pumps built for mining and industrial abrasive slurry applications.', 'submersible'),
    coverImage: '/products/cover/slurry-pump.jpg',
    heroImage: '/products/hero/slurry-pump2.jpg'
  },
  {
    ...createProduct('pump-sub-4', 'Dewatering Pumps', 'pumps', 'dewatering-pumps',
      'Portable submersible dewatering pumps for construction sites, mines, and emergency drainage.', 'submersible'),
    coverImage: '/products/cover/dewatering-pump.jpg',
    heroImage: '/products/hero/dewatering-pump2.jpg'
  },
  {
    ...createProduct('pump-sub-5', 'Sludge Pumps', 'pumps', 'sludge-pumps',
      'Submersible sludge pumps engineered for thick sludge and high solids content applications.', 'submersible'),
    coverImage: '/products/cover/sludge-pump.jpg',
    heroImage: '/products/hero/sludge-pump2.jpg'
  },
];

export const ALL_PUMPS = [...SURFACE_PUMPS, ...SUBMERSIBLE_PUMPS];

// ==================== VALVES ====================

export const ALL_VALVES = [
  {
    ...createProduct('valve-1', 'Ball Valves', 'valves', 'ball-valves',
      'Quarter-turn ball valves providing tight shut-off for water, gas, and industrial fluids.'),
    coverImage: '/products/cover/ball-valve.jpg',
    heroImage: '/products/hero/ball-valve2.jpg'
  },
  {
    ...createProduct('valve-2', 'Butterfly Valves', 'valves', 'butterfly-valves',
      'Space-saving butterfly valves for flow regulation and isolation in large diameter pipelines.'),
    coverImage: '/products/cover/butterfly-valve.jpg',
    heroImage: '/products/hero/butterfly-valve2.jpg'
  },
  {
    ...createProduct('valve-3', 'Knife Gate Valves', 'valves', 'knife-gate-valves',
      'Knife gate valves designed for slurry, viscous fluids, and applications with suspended solids.'),
    coverImage: '/products/cover/knifegate-valve.jpg',
    heroImage: '/products/hero/knifegate-valve2.jpg'
  },
  {
    ...createProduct('valve-4', 'Gate Valves', 'valves', 'gate-valves',
      'Traditional gate valves for full-bore isolation in water supply and industrial piping systems.'),
    coverImage: '/products/cover/gate-valve.jpg',
    heroImage: '/products/hero/gate-valve2.jpg'
  },
  {
    ...createProduct('valve-5', 'Globe Valves', 'valves', 'globe-valves',
      'Throttling globe valves for precise flow control and pressure regulation applications.'),
    coverImage: '/products/cover/globe-valve.jpg',
    heroImage: '/products/hero/globe-valve2.jpg'
  },
  {
    ...createProduct('valve-6', 'Check Valves', 'valves', 'check-valves',
      'Non-return check valves preventing backflow and protecting pumps and equipment.'),
    coverImage: '/products/cover/check-valve.jpg',
    heroImage: '/products/hero/check-valve2.jpg'
  },
  {
    ...createProduct('valve-7', 'Safety Relief Valves', 'valves', 'safety-relief-valves',
      'Pressure safety relief valves for overpressure protection in steam, gas, and liquid systems.'),
    coverImage: '/products/cover/safety-relief-valve.jpg',
    heroImage: '/products/hero/safety-relief-valve2.jpg'
  },
  {
    ...createProduct('valve-8', 'Control Valves', 'valves', 'control-valves',
      'Automated control valves for precise flow, pressure, and temperature regulation.'),
    coverImage: '/products/cover/control-valve.jpg',
    heroImage: '/products/hero/control-valve2.jpg'
  },
  {
    ...createProduct('valve-9', 'Pressure Reducing Valves', 'valves', 'pressure-reducing-valves',
      'Pressure reducing valves maintaining downstream pressure in water distribution systems.'),
    coverImage: '/products/cover/pressure-reducingvalve.jpg',
    heroImage: '/products/hero/pressure-reducingvalve2.jpg'
  },
  {
    ...createProduct('valve-12', 'Diaphragm Valves', 'valves', 'diaphragm-valves',
      'Diaphragm valves ideal for corrosive chemicals, slurries, and sterile applications.'),
    coverImage: '/products/cover/diaphragm-valve.jpg',
    heroImage: '/products/hero/diaphragm-valve2.jpg'
  },
  {
    ...createProduct('valve-13', 'Y-Strainers', 'valves', 'y-strainers',
      'Y-type strainers removing debris and protecting downstream equipment and valves.'),
    coverImage: '/products/cover/y-strainer-valve.jpg',
    heroImage: '/products/hero/y-strainer-valve2.jpg'
  }
];

// ==================== ELECTRIC MOTORS ====================

// SURFACE MOTORS - with custom images
const SURFACE_MOTORS = [
  {
    ...createProduct('motor-surf-1', '2 Pole Surface Motor', 'motors', '2-pole-surface-motor',
      'High-speed 2-pole electric motors (3000 RPM) for direct-coupled pumps and industrial machinery.', 'surface-motors'),
    coverImage: '/products/cover/2-pole-electric-motor.jpg',
    heroImage: '/products/hero/2-pole-electric-motor2.jpg'
  },
  {
    ...createProduct('motor-surf-2', '4 Pole Surface Motor', 'motors', '4-pole-surface-motor',
      'Standard 4-pole electric motors (1500 RPM) for general purpose pump and fan applications.', 'surface-motors'),
    coverImage: '/products/cover/4-pole-electric-motor.jpg',
    heroImage: '/products/hero/4-pole-electric-motor2.jpg'
  },
  {
    ...createProduct('motor-surf-3', '6 Pole Surface Motor', 'motors', '6-pole-surface-motor',
      'Low-speed 6-pole electric motors (1000 RPM) for high torque and heavy-duty applications.', 'surface-motors'),
    coverImage: '/products/cover/6-pole-electric-motor.jpg',
    heroImage: '/products/hero/6-pole-electric-motor2.jpg'
  }
];

// SUBMERSIBLE MOTORS - with custom images
const SUBMERSIBLE_MOTORS = [
  {
    ...createProduct('motor-sub-1', 'Water-Filled Borehole Motor', 'motors', 'water-filled-borehole-motor',
      'Water-filled submersible motors for borehole pumps in clean water applications.', 'submersible-motors'),
    coverImage: '/products/cover/water-filled.jpg',
    heroImage: '/products/hero/water-filled2.jpg'
  },
  {
    ...createProduct('motor-sub-2', 'Oil-Filled Borehole Motor', 'motors', 'oil-filled-borehole-motor',
      'Oil-filled submersible motors providing superior cooling and lubrication for deep wells.', 'submersible-motors'),
    coverImage: '/products/cover/oil-filled-borehole-motor.jpg',
    heroImage: '/products/hero/oil-filled-borehole-motor2.jpg'
  },
  {
    ...createProduct('motor-sub-3', 'Resin-Filled Borehole Motor', 'motors', 'resin-filled-borehole-motor',
      'Resin-filled submersible motors offering excellent electrical insulation and moisture protection.', 'submersible-motors'),
    coverImage: '/products/cover/resin-filled.jpg',
    heroImage: '/products/hero/resin-filled2.jpg'
  }
];

export const ALL_MOTORS = [...SURFACE_MOTORS, ...SUBMERSIBLE_MOTORS];

// ==================== CONTROL PANELS ====================

export const ALL_CONTROL_PANELS = [
  {
    ...createProduct('panel-1', 'DOL Panels', 'control-panels', 'dol-panels',
      'Direct-On-Line starter panels for simple motor starting applications up to 15kW.'),
    coverImage: '/products/cover/DOL_panel.jpg',
    heroImage: '/products/hero/DOL_panel.jpg'
  },
  {
    ...createProduct('panel-2', 'Star Delta Panels', 'control-panels', 'star-delta-panels',
      'Star-Delta starter panels reducing inrush current for motors 15kW and above.'),
    coverImage: '/products/cover/Star_Delta_panels.jpg',
    heroImage: '/products/hero/Star_Delta_panels.jpg'
  },
  {
    ...createProduct('panel-3', 'Soft Starter Panels', 'control-panels', 'soft-starter-panels',
      'Soft starter panels providing smooth motor acceleration and protecting mechanical systems.'),
    coverImage: '/products/cover/Soft_Starter_panel.jpg',
    heroImage: '/products/hero/Soft_Starter_panel.jpg'
  },
  {
    ...createProduct('panel-4', 'VFD Panels', 'control-panels', 'vfd-panels',
      'Variable Frequency Drive panels for precise motor speed control and energy savings.'),
    coverImage: '/products/cover/VFD_panel.jpg',
    heroImage: '/products/hero/VFD_panel.jpg'
  },
  {
    ...createProduct('panel-5', 'Pump Control Panels', 'control-panels', 'pump-control-panels',
      'Complete pump control panels with level controls, pressure switches, and automation.'),
    coverImage: '/products/cover/Pump_Control_panel.jpg',
    heroImage: '/products/hero/Pump_Control_panel.jpg'
  },
  {
    ...createProduct('panel-6', 'MCC Panels', 'control-panels', 'mcc-panels',
      'Motor Control Center panels for centralized control of multiple motors and drives.'),
      coverImage: '/products/cover/MCC_panel.jpg',
      heroImage: '/products/hero/MCC_panel.jpg'
  },
  {
    ...createProduct('panel-7', 'PLC / Automation Panels', 'control-panels', 'plc-automation-panels',
      'PLC-based automation panels for complex process control and SCADA integration.'),
    coverImage: '/products/cover/Automation_panel.jpg',
    heroImage: '/products/hero/Automation_panel.jpg'
  }
];

// ==================== SPARE PARTS ====================

// MECHANICAL SPARE PARTS - with custom images
const MECHANICAL_SPARE_PARTS = [
  {
    ...createProduct('spare-mech-1', 'Mechanical Seals', 'spare-parts', 'mechanical-seals',
      'High-quality mechanical seals for pumps, preventing leakage and ensuring reliable operation.', 'mechanical'),
    coverImage: '/products/cover/Mechanical_seals.jpg',
    heroImage: '/products/hero/Mechanical_seals.jpg'
  },
  {
    ...createProduct('spare-mech-2', 'Bearings', 'spare-parts', 'bearings',
      'Premium pump bearings including ball bearings and roller bearings for extended service life.', 'mechanical'),
    coverImage: '/products/cover/Bearings.jpg',
    heroImage: '/products/hero/Bearings.jpg'
  },
  {
    ...createProduct('spare-mech-3', 'Gland Packing', 'spare-parts', 'gland-packing',
      'Compression gland packing in various materials for valve stems and pump shafts.', 'mechanical'),
    coverImage: '/products/cover/Gland_packing.jpg',
    heroImage: '/products/hero/Gland_packing.jpg'
  }
];

// ELECTRICAL SPARE PARTS - with custom images
const ELECTRICAL_SPARE_PARTS = [
  {
    ...createProduct('spare-elec-1', 'MCCBs', 'spare-parts', 'mccbs',
      'Moulded Case Circuit Breakers for motor and distribution panel protection.', 'electrical'),
    coverImage: '/products/cover/MCCBs.jpg',
    heroImage: '/products/hero/MCCBs.jpg'
  },
  {
    ...createProduct('spare-elec-2', 'ACBs', 'spare-parts', 'acbs',
      'Air Circuit Breakers for main distribution and high current protection applications.', 'electrical'),
    coverImage: '/products/cover/ACBs.jpg',
    heroImage: '/products/hero/ACBs.jpg'
  },
  {
    ...createProduct('spare-elec-3', 'Contactors', 'spare-parts', 'contactors',
      'Electromagnetic contactors for motor control and switching applications.', 'electrical'),
    coverImage: '/products/cover/Contactors.jpg',
    heroImage: '/products/hero/Contactors.jpg'
  },
  {
    ...createProduct('spare-elec-4', 'Relays (Overload, Control, Protection)', 'spare-parts', 'relays',
      'Thermal overload relays, control relays, and protection relays for electrical panels.', 'electrical'),
    coverImage: '/products/cover/Relays.jpg',
    heroImage: '/products/hero/Relays.jpg'
  }
];

export const ALL_SPARE_PARTS = [...MECHANICAL_SPARE_PARTS, ...ELECTRICAL_SPARE_PARTS];

// ==================== ALL PRODUCTS COMBINED ====================

export const ALL_PRODUCTS = [
  ...ALL_PUMPS,
  ...ALL_VALVES,
  ...ALL_MOTORS,
  ...ALL_CONTROL_PANELS,
  ...ALL_SPARE_PARTS
];

// ==================== PRODUCT CATEGORIES ====================

export const PRODUCT_CATEGORIES = [
  {
    id: 'pumps',
    name: 'Pumps',
    slug: 'pumps',
    description: 'Comprehensive range of surface and submersible pumps for all applications',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'surface',
        name: 'Surface Pumps',
        products: SURFACE_PUMPS
      },
      {
        id: 'submersible',
        name: 'Submersible Pumps',
        products: SUBMERSIBLE_PUMPS
      }
    ]
  },
  {
    id: 'valves',
    name: 'Valves',
    slug: 'valves',
    description: 'Complete valve solutions for flow control and isolation',
    hasSubcategories: false,
    products: ALL_VALVES
  },
  {
    id: 'motors',
    name: 'Electric Motors',
    slug: 'motors',
    description: 'High-efficiency electric motors for industrial applications',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'surface-motors',
        name: 'Surface Motors',
        products: SURFACE_MOTORS
      },
      {
        id: 'submersible-motors',
        name: 'Submersible Motors (Borehole Motors)',
        products: SUBMERSIBLE_MOTORS
      }
    ]
  },
  {
    id: 'control-panels',
    name: 'Control Panels',
    slug: 'control-panels',
    description: 'Custom electrical control panels and automation solutions',
    hasSubcategories: false,
    products: ALL_CONTROL_PANELS
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts',
    slug: 'spare-parts',
    description: 'Genuine spare parts for all equipment we supply',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'mechanical',
        name: 'Mechanical Spare Parts',
        products: MECHANICAL_SPARE_PARTS
      },
      {
        id: 'electrical',
        name: 'Electrical Spare Parts',
        products: ELECTRICAL_SPARE_PARTS
      }
    ]
  }
];