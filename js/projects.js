/**
 * SERA ASSOCIATES — Projects Data Repository
 * ==========================================================================
 * This file contains the complete catalog of projects displayed across the website.
 * To replace placeholder projects with real project photography and details:
 * 1. Add your project image files into `/assets/images/`
 * 2. Update or add objects to the `PROJECTS_DATA` array below.
 * ==========================================================================
 */

const PROJECTS_DATA = [
  {
    id: "house-01",
    slug: "house-no-01",
    title: "House No. 01",
    subtitle: "Monolithic Courtyard Residence",
    location: "Tuticorin, India",
    year: "2026",
    category: "Residential",
    area: "4,800 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-7", // Architectural grid sizing: 7 columns
    aspectRatio: "aspect-16-9",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A serene, inward-looking private residence crafted from exposed off-white concrete and local granite. Designed around a central light well that captures ambient breeze and changing shadow patterns throughout the day.",
    fullDescription: "House No. 01 explores the dialogue between mass and openness in a dense urban neighborhood. The exterior facade presents a calm, solid presence of hand-boarded off-white concrete, screening the living quarters from street noise while creating an intimate sanctuary within. At its core, a double-height courtyard acts as an environmental lung, pulling cool air upward and flooding internal passages with natural illumination. Timber louvers, recycled teak joinery, and polished stone floors bring tactile warmth to the understated spatial volume.",
    specs: [
      { label: "Typology", value: "Private Single-Family Residence" },
      { label: "Site Area", value: "6,200 sq.ft" },
      { label: "Built-Up Area", value: "4,800 sq.ft" },
      { label: "Structure", value: "Post-tensioned concrete slab & masonry" },
      { label: "Primary Materials", value: "Board-formed concrete, Sadahalli granite, Teakwood" },
      { label: "Climate Strategy", value: "Passive solar chimney, courtyard thermal mass, operable timber louvers" },
      { label: "Location", value: "Tuticorin, Tamil Nadu, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
        caption: "Main living volume overlooking the interior reflective water courtyard.",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
        caption: "Custom teak cabinetry and cast concrete island in the open culinary hall.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
        caption: "Cantilevered stair structure in raw bush-hammered granite.",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=80",
        caption: "Evening light illumination along the western perimeter screened wall.",
        aspect: "full-width"
      }
    ]
  },
  {
    id: "house-02",
    slug: "house-no-02",
    title: "House No. 02",
    subtitle: "Tropical Vernacular Pavilion",
    location: "Tuticorin, India",
    year: "2025",
    category: "Residence",
    area: "6,200 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-5", // Architectural grid sizing: 5 columns
    aspectRatio: "aspect-4-3",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "A low-slung pavilion home floating amidst lush coastal flora. Designed with deep terracotta roof overhangs, exposed brick columns, and seamless indoor-outdoor verandas.",
    fullDescription: "Set within a dense coconut grove along the coastal waters of Tuticorin, House No. 02 modernizes traditional tropical architecture with structural clarity. The design arranges private suites into distinct pavilions connected by covered open-air colonnades. Locally sourced wire-cut brick walls absorb humidity while deep eaves shield the glass walls from monsoon rains and harsh sun. The result is a light, breathable sanctuary where indoor living flows into the surrounding natural ecosystem.",
    specs: [
      { label: "Typology", value: "Tropical Coastal Pavilion Residence" },
      { label: "Site Area", value: "1.2 Acres" },
      { label: "Built-Up Area", value: "6,200 sq.ft" },
      { label: "Structure", value: "Steel frame with exposed clay brick masonry" },
      { label: "Primary Materials", value: "Terracotta tiles, wire-cut brick, reclaimed timber, terrazzo" },
      { label: "Climate Strategy", value: "Cross-ventilation breezeways, extended roof overhangs, green roof insulation" },
      { label: "Location", value: "Tuticorin, Tamil Nadu, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
        caption: "Veranda walkway connecting private bedroom suites across the garden.",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
        caption: "Custom cast-in-place terrazzo bath overlooking private bamboo grove.",
        aspect: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
        caption: "Dining pavilion flanked by sliding floor-to-ceiling glass screens.",
        aspect: "landscape"
      }
    ]
  },
  {
    id: "courtyard-house",
    slug: "courtyard-house",
    title: "Courtyard House",
    subtitle: "Climatic Enclosure & Light Studio",
    location: "Madurai, India",
    year: "2025",
    category: "Residential",
    area: "5,100 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-5", // Architectural grid sizing: 5 columns
    aspectRatio: "aspect-4-5",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "An urban sanctuary responding to hot-humid climate through perforated masonry screens (jaali) and a sequence of three cascading internal courtyards.",
    fullDescription: "Located on a compact city lot in Madurai, Courtyard House reconciles privacy requirements with light and ventilation. The facade features a custom-engineered terra-cotta screen wall that acts as a porous shield against afternoon radiation while casting rhythmic light patterns across the interior terrazzo floor. Three distinct courtyards — wet, dry, and sky — anchor the layout, establishing microclimates that reduce reliance on mechanical cooling.",
    specs: [
      { label: "Typology", value: "Urban Multi-Generational Residence" },
      { label: "Site Area", value: "3,800 sq.ft" },
      { label: "Built-Up Area", value: "5,100 sq.ft" },
      { label: "Structure", value: "Framed RCC structure with un-plastered terracotta brick facade" },
      { label: "Primary Materials", value: "Custom terracotta jaali blocks, white oxide floors, brushed brass" },
      { label: "Climate Strategy", value: "Perforated screen cooling, thermal stack ventilation, rainwater capture" },
      { label: "Location", value: "Madurai, Tamil Nadu, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
        caption: "Light filtering through the terracotta lattice wall into the double-height foyer.",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
        caption: "Central internal lightwell with integrated stone planter basin.",
        aspect: "landscape"
      }
    ]
  },
  {
    id: "concrete-house",
    slug: "concrete-house",
    title: "Concrete House",
    subtitle: "Sculptural Spatial Study",
    location: "Bangalore, India",
    year: "2024",
    category: "Residence",
    area: "3,800 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-7", // Architectural grid sizing: 7 columns
    aspectRatio: "aspect-16-9",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "A compact exercise in architectural restraint. Cantilevered concrete planes intersect with floor-to-ceiling glass to create floating, shadow-filled living volumes.",
    fullDescription: "Concrete House demonstrates how disciplined geometry can create spaciousness within a modest footprint. Built on a tight suburban plot, the upper volume cantilevers five meters over the ground-level parking and entrance garden. Board-marked concrete forms remain unadorned, allowing the texture of wood grain and concrete aggregate to form the primary visual surface.",
    specs: [
      { label: "Typology", value: "Compact Urban Villa" },
      { label: "Site Area", value: "3,000 sq.ft" },
      { label: "Built-Up Area", value: "3,800 sq.ft" },
      { label: "Structure", value: "Post-tensioned cantilever concrete" },
      { label: "Primary Materials", value: "Raw board-formed concrete, black oxidized steel, grey granite" },
      { label: "Location", value: "Bangalore, Karnataka, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        caption: "Exterior cantilever concrete mass hovering over the entrance walkway.",
        aspect: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=80",
        caption: "Minimalist kitchen studio featuring raw steel floating shelves.",
        aspect: "landscape"
      }
    ]
  },
  {
    id: "villa-05",
    slug: "villa-no-05",
    title: "Villa No. 05",
    subtitle: "Hillside Terraced Sanctuary",
    location: "Hosur, India",
    year: "2024",
    category: "Residential",
    area: "7,500 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-7",
    aspectRatio: "aspect-16-9",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    description: "Step-terraced villa integrated into a sloping hill overlooking forested valleys. Built with native excavated granite stone and exposed concrete roof slabs.",
    fullDescription: "Villa No. 05 was conceived as a landscape intervention rather than an inserted building mass. Following the natural contours of a steep Hosur hillside, the house steps down in three distinct terraced levels. Each level opens onto planted roof gardens and infinity water elements that reflect the sky.",
    specs: [
      { label: "Typology", value: "Hillside Residence & Estate" },
      { label: "Site Area", value: "2.1 Acres" },
      { label: "Built-Up Area", value: "7,500 sq.ft" },
      { label: "Primary Materials", value: "Local stone, off-white render, teak timber, infinity pool tile" },
      { label: "Location", value: "Hosur, Tamil Nadu, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
        caption: "Terraced pool deck extending into the tree canopy.",
        aspect: "landscape"
      }
    ]
  },
  {
    id: "house-06",
    slug: "house-no-06",
    title: "House No. 06",
    subtitle: "Heritage Courtyard Restoration & Addition",
    location: "Coimbatore, India",
    year: "2023",
    category: "Residential",
    area: "4,200 sq.ft",
    status: "Completed",
    featured: true,
    gridSpan: "col-span-5",
    aspectRatio: "aspect-4-3",
    heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    cardImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    description: "A sensitive synthesis of a traditional residence with a modern concrete and glass wing, celebrating heritage joinery alongside contemporary precision.",
    fullDescription: "House No. 06 preserves the soulful masonry core of an ancestral residence in Coimbatore while introducing a lightweight contemporary pavilion wing. The existing central courtyard was carefully restored with original timber columns, while new structural elements introduce glass walls and concrete planes that draw sunlight deep into former dark corners.",
    specs: [
      { label: "Typology", value: "Heritage Adaptive Reuse & Residential Extension" },
      { label: "Built-Up Area", value: "4,200 sq.ft" },
      { label: "Primary Materials", value: "Restored Rosewood, Mangalore tiles, structural glass, bush-hammered granite" },
      { label: "Location", value: "Coimbatore, Tamil Nadu, India" }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
        caption: "Interconnection between restored timber colonnade and new glass pavilion.",
        aspect: "landscape"
      }
    ]
  }
];

/**
 * Utility functions for project retrieval
 */
function getProjectById(id) {
  if (!id) return PROJECTS_DATA[0];
  return PROJECTS_DATA.find(p => p.id === id || p.slug === id) || PROJECTS_DATA[0];
}

function getNextPrevProjects(currentId) {
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === currentId || p.slug === currentId);
  const total = PROJECTS_DATA.length;
  
  if (currentIndex === -1) {
    return {
      prev: PROJECTS_DATA[total - 1],
      next: PROJECTS_DATA[1]
    };
  }
  
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  
  return {
    prev: PROJECTS_DATA[prevIndex],
    next: PROJECTS_DATA[nextIndex]
  };
}

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.getProjectById = getProjectById;
  window.getNextPrevProjects = getNextPrevProjects;
}
