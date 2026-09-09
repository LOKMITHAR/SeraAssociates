/**
 * SERA ASSOCIATES — Global Controller & Architectural Interactions
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initCustomCursor();
  initSeraIdentityModal();
  renderFeaturedProjectsGrid();
});

/* ==========================================================================
   1. HEADER SCROLL STATE CHANGE
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-menu-links a');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggleMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   3. SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .image-mask-reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. CUSTOM DESKTOP CURSOR FOLLOWER
   ========================================================================== */
function initCustomCursor() {
  // Only activate on non-touch desktop pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = -100;
  let mouseY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  }, { passive: true });

  // Attach hover triggers for cards and links
  document.addEventListener('mouseover', (e) => {
    const projectCard = e.target.closest('.project-card, .project-card-image-wrap');
    const interactive = e.target.closest('a, button, .sera-letter-card');

    if (projectCard) {
      cursor.classList.add('hover-project');
      cursor.classList.remove('hover-interactive');
    } else if (interactive) {
      cursor.classList.add('hover-interactive');
      cursor.classList.remove('hover-project');
    } else {
      cursor.classList.remove('hover-project', 'hover-interactive');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}

/* ==========================================================================
   5. SERA IDENTITY SECTION MODAL / INTERACTION
   ========================================================================== */
const SERA_IDEOLOGY_DATA = {
  S: {
    letter: "S",
    concept: "Spatial Intelligence & Integrity",
    subtitle: "Architecture of Proportion and Light",
    description: "Every SERA project begins with spatial reduction. We study how volume, height, and natural illumination shape human experience. Rather than applying surface decoration, spatial clarity is achieved through exact alignment, axial sightlines, and generous architectural volume.",
    pillars: ["Volumetric proportion", "Natural daylight chimneys", "Spatial sequence & threshold design"]
  },
  E: {
    letter: "E",
    concept: "Environmental & Climatic Context",
    subtitle: "Built form responding to site, climate and wind",
    description: "We view site conditions as design constraints to celebrate. Our practice prioritizes microclimate modeling, passive stack ventilation, solar shading, rainwater collection, and localized masonry techniques that keep residential structures cooling naturally.",
    pillars: ["Passive thermal chimneys", "Perforated jaali screens", "Orientation-driven solar shading"]
  },
  R: {
    letter: "R",
    concept: "Restrained Material Honesty",
    subtitle: "Concrete, stone, timber and raw steel",
    description: "Material selection in SERA ASSOCIATES is guided by longevity and tactile authenticity. Exposed board-formed concrete, bush-hammered local granite, reclaimed teakwood, and untreated copper age gracefully over decades, developing a rich patina rather than deteriorating.",
    pillars: ["Honest material expression", "Local quarry sourcing", "Tactile surface finishes"]
  },
  A: {
    letter: "A",
    concept: "Architectural Precision & Construction",
    subtitle: "Bridging conceptual design with execution",
    description: "Unlike studios that delegate construction coordination entirely to external contractors, SERA ASSOCIATES acts as both design architect and technical construction lead. We ensure design intent translates directly to site tolerances.",
    pillars: ["Turnkey construction coordination", "Millimeter-level detailing", "End-to-end structural oversight"]
  }
};

function initSeraIdentityModal() {
  const cards = document.querySelectorAll('.sera-letter-card');
  if (!cards.length) return;

  // Create Modal Structure if not existing
  let backdrop = document.querySelector('.sera-modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sera-modal-backdrop';
    backdrop.innerHTML = `
      <div class="sera-modal-content" role="dialog" aria-modal="true">
        <button class="sera-modal-close" aria-label="Close modal">&times;</button>
        <div class="sera-modal-body"></div>
      </div>
    `;
    document.body.appendChild(backdrop);
  }

  const modalBody = backdrop.querySelector('.sera-modal-body');
  const closeBtn = backdrop.querySelector('.sera-modal-close');

  const openModal = (letterKey) => {
    const data = SERA_IDEOLOGY_DATA[letterKey];
    if (!data) return;

    modalBody.innerHTML = `
      <div style="font-size:0.75rem; font-weight:600; letter-spacing:0.2em; font-family:var(--font-display); text-transform:uppercase; color:var(--text-muted); margin-bottom:1rem;">
        SERA BRAND IDEOLOGY — LETTER ${data.letter}
      </div>
      <div style="font-size:4rem; font-family:var(--font-serif); line-height:1; margin-bottom:0.5rem;">
        ${data.letter}
      </div>
      <h3 style="font-size:1.75rem; font-weight:500; font-family:var(--font-title); text-transform:uppercase; margin-bottom:0.5rem; letter-spacing:0.04em;">
        ${data.concept}
      </h3>
      <p style="font-size:1.1rem; color:var(--text-primary); font-family:var(--font-serif); font-style:italic; margin-bottom:1.5rem;">
        "${data.subtitle}"
      </p>
      <p style="margin-bottom:2rem; font-size:1rem; line-height:1.7;">
        ${data.description}
      </p>
      <div style="border-top:1px solid var(--line-color); padding-top:1.5rem;">
        <h4 style="font-size:0.75rem; font-weight:600; letter-spacing:0.18em; font-family:var(--font-display); text-transform:uppercase; color:var(--text-muted); margin-bottom:1rem;">
          Core Pillars & Application
        </h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem; font-size:0.95rem;">
          ${data.pillars.map(p => `<li style="display:flex; align-items:center; gap:8px;"><span style="width:4px; height:4px; background:var(--text-primary); border-radius:50%;"></span> ${p}</li>`).join('')}
        </ul>
      </div>
    `;

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const letter = card.getAttribute('data-letter');
      openModal(letter);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. RENDER FEATURED PROJECTS ON HOME PAGE GRID
   ========================================================================== */
function renderFeaturedProjectsGrid() {
  const container = document.getElementById('featured-projects-grid');
  if (!container || !window.PROJECTS_DATA) return;

  const projects = window.PROJECTS_DATA;
  
  container.innerHTML = projects.map(p => `
    <article class="project-card ${p.gridSpan} reveal-on-scroll" data-project-id="${p.id}">
      <a href="project.html?id=${p.id}" aria-label="View project details for ${p.title}">
        <div class="project-card-image-wrap ${p.aspectRatio}">
          <img src="${p.cardImage}" alt="${p.title} - ${p.subtitle} in ${p.location}" loading="lazy" />
        </div>
        <div class="project-card-meta">
          <div>
            <h3 class="project-title">${p.title}</h3>
            <div class="project-category-location">${p.category} &mdash; ${p.location}</div>
          </div>
          <div class="project-year">${p.year}</div>
        </div>
      </a>
    </article>
  `).join('');

  // Re-run scroll reveal check on newly injected project elements
  initScrollReveal();
}
