/**
 * SERA ASSOCIATES — Dynamic Project Detail Hydration Script
 * ==========================================================================
 * Reads project ID from URL parameter (e.g., project.html?id=house-01)
 * and dynamically populates the project details template.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectDetail();
});

function initProjectDetail() {
  const container = document.getElementById('project-detail-content');
  if (!container || !window.PROJECTS_DATA) return;

  // Extract project ID from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || "house-01"; // Fallback to first project if none specified

  const project = window.getProjectById(projectId);
  const navProjects = window.getNextPrevProjects(project.id);

  // Update Page Metadata & Title
  document.title = `${project.title} — SERA ASSOCIATES`;

  // Render Complete Project Template
  container.innerHTML = `
    <!-- Project Header -->
    <header class="project-detail-header reveal-on-scroll">
      <div class="project-detail-title-col">
        <div class="section-title">${project.category} &mdash; ${project.year}</div>
        <h1 class="display-title" style="margin-bottom:0.75rem;">${project.title}</h1>
        <p class="editorial-serif" style="font-size:1.6rem; color:var(--text-muted); font-style:italic;">
          ${project.subtitle}
        </p>
      </div>
      <div class="project-detail-meta-col">
        <div>
          <div class="meta-group-label">Location</div>
          <div class="meta-group-value">${project.location}</div>
        </div>
        <div>
          <div class="meta-group-label">Year</div>
          <div class="meta-group-value">${project.year}</div>
        </div>
        <div>
          <div class="meta-group-label">Typology</div>
          <div class="meta-group-value">${project.category}</div>
        </div>
        <div>
          <div class="meta-group-label">Built Area</div>
          <div class="meta-group-value">${project.area || 'N/A'}</div>
        </div>
      </div>
    </header>

    <!-- Hero Architectural Image -->
    <div class="project-hero-media reveal-on-scroll">
      <img src="${project.heroImage}" alt="${project.title} Hero Architectural Photography" />
    </div>

    <!-- Narrative & Specifications Grid -->
    <section class="project-narrative-grid">
      <div class="project-narrative-col reveal-on-scroll">
        <h2 style="font-size:1.8rem; font-weight:500; font-family:var(--font-title); text-transform:uppercase; margin-bottom:1.5rem; letter-spacing:0.04em;">
          Architectural Intent
        </h2>
        <p style="font-size:1.15rem; line-height:1.8; margin-bottom:1.5rem; color:var(--text-primary);">
          ${project.description}
        </p>
        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-muted);">
          ${project.fullDescription || ''}
        </p>
      </div>

      <div class="project-specs-col reveal-on-scroll delay-100">
        <h3 style="font-size:0.8rem; font-weight:600; font-family:var(--font-display); letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted); margin-bottom:1.5rem;">
          Project Data & Specifications
        </h3>
        <table class="specs-table">
          <tbody>
            ${(project.specs || []).map(spec => `
              <tr>
                <td>${spec.label}</td>
                <td style="color:var(--text-primary); font-weight:500;">${spec.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Gallery Image Sequence -->
    <section class="project-gallery-sequence">
      <h2 class="section-title reveal-on-scroll">Spatial Sequence & Material Studies</h2>
      ${(project.gallery || []).map((item, idx) => `
        <figure class="gallery-item reveal-on-scroll">
          <div class="project-card-image-wrap" style="aspect-ratio: ${item.aspect === 'portrait' ? '4/5' : '16/9'};">
            <img src="${item.url}" alt="${item.caption || project.title}" loading="lazy" />
          </div>
          ${item.caption ? `<figcaption class="gallery-item-caption">${idx + 1}. ${item.caption}</figcaption>` : ''}
        </figure>
      `).join('')}
    </section>

    <!-- Previous / Next Project Navigation -->
    <nav class="project-prev-next-nav reveal-on-scroll">
      <a href="project.html?id=${navProjects.prev.id}" class="nav-project-btn prev" aria-label="Previous project: ${navProjects.prev.title}">
        <span class="nav-project-dir">&larr; Previous Project</span>
        <span class="nav-project-title">${navProjects.prev.title}</span>
        <span style="font-size:0.8rem; color:var(--text-muted); uppercase">${navProjects.prev.location}</span>
      </a>
      <a href="project.html?id=${navProjects.next.id}" class="nav-project-btn next" aria-label="Next project: ${navProjects.next.title}">
        <span class="nav-project-dir">Next Project &rarr;</span>
        <span class="nav-project-title">${navProjects.next.title}</span>
        <span style="font-size:0.8rem; color:var(--text-muted); uppercase">${navProjects.next.location}</span>
      </a>
    </nav>
  `;

  // Trigger reveal observer for newly created elements
  if (typeof initScrollReveal === 'function') {
    initScrollReveal();
  }
}
