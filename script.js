(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Gentle reveal on scroll; content remains visible when motion is reduced or JS is unavailable.
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('main > section:not(.hero), .portfolio-card, .price-card, .plan-card, .faq-list details, .contact-panel');
    revealTargets.forEach((el, i) => { el.classList.add('js-reveal'); el.style.transitionDelay = (i % 3) * 70 + 'ms'; });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // Legal popups share the accessible details dialog and close with Escape/backdrop/close button.
  const legalData = {
    privacy: ['PRIVACY POLICY', 'Privacy Policy', `<div class="legal-modal-copy"><p><strong>Last updated: 12 October 2026</strong></p><p>NailMart India Web Studio respects your privacy. This website is intended to explain our website-development services and help visitors contact us.</p><h3>Information you provide</h3><p>If you contact us by phone or WhatsApp, we may receive the information you choose to share, such as your name, business details, project requirements and contact information.</p><h3>How we use it</h3><p>We use enquiry information to respond to your request, discuss project scope, prepare quotations and provide agreed services. We do not sell personal information.</p><h3>Third-party services</h3><p>Links to WhatsApp and other external websites are governed by those providers’ own privacy practices. This site may use basic hosting logs or technical tools provided by its hosting platform.</p><h3>Retention and requests</h3><p>We retain enquiry details only as reasonably needed for communication, service delivery and applicable legal obligations. You may contact us to request correction or deletion, subject to those obligations.</p><h3>Contact</h3><p>F1, Sahapur Road, Alipur, Kolkata - 700053, West Bengal, India. Phone/WhatsApp: +91 93304 82697.</p><p>This is a general website privacy notice and should be reviewed against the actual hosting, analytics and data-handling practices before publication.</p></div>`, ''] ,
    terms: ['SERVICE TERMS', 'Terms of Service', `<div class="legal-modal-copy"><p><strong>Last updated: 12 October 2026</strong></p><p>These terms describe the general basis on which NailMart India Web Studio discusses and delivers website-development projects. The written quotation or agreement for a specific project takes precedence where it sets out different agreed terms.</p><h3>Scope and price</h3><p>Pages, features, content responsibilities, timeline, revisions, delivery and fees should be confirmed in writing before work begins. The ₹4,500 festival offer applies through 31 December 2026 to the defined starter scope only.</p><h3>Third-party costs</h3><p>Domain registration, renewals, paid hosting, premium assets, plugins, payment-provider charges, advertising spend and other third-party services are additional unless expressly included in the written quotation.</p><h3>Limited free maintenance</h3><p>Limited free maintenance may cover small agreed updates after launch. The duration, limits, response time and exclusions must be confirmed in writing. New pages, redesigns, new features and third-party charges are not included unless agreed.</p><h3>Client responsibilities</h3><p>The client is responsible for providing accurate content and having permission to use supplied text, logos, photographs and other materials, and for reviewing and approving the website before launch.</p><h3>Results and availability</h3><p>A website can support online visibility, but search rankings, leads, sales and business results are not guaranteed. Third-party platforms, domain registrars and hosting providers may experience changes or interruptions outside our control.</p><h3>Professional boundaries</h3><p>NailMart India Web Studio provides website-development services and does not provide legal, tax or other regulated professional advice. Clients remain responsible for ensuring their website content complies with rules applicable to their profession.</p><h3>Contact</h3><p>F1, Sahapur Road, Alipur, Kolkata - 700053, West Bengal, India. Phone/WhatsApp: +91 93304 82697.</p><p>Please review these general terms and adapt them to your actual business practices before relying on them as a contract.</p></div>`, '']
  };
  document.querySelectorAll('[data-legal]').forEach(el => el.addEventListener('click', () => {
    const d = legalData[el.dataset.legal];
    if (d) openLegal(d, el);
  }));
  function openLegal(d, el) {
    if (!modal || !dialog || !title || !kicker || !content || !cta) return;
    trigger = el; kicker.textContent = d[0]; title.textContent = d[1]; content.innerHTML = d[2];
    cta.style.display = 'none';
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
    dialog.focus();
    if (!historyOpen) { history.pushState({detailModal:true}, ''); historyOpen = true; }
  }


  const modal = document.querySelector('#detail-modal');
  const dialog = modal?.querySelector('.detail-dialog');
  const title = document.querySelector('#detail-modal-title');
  const kicker = document.querySelector('#detail-modal-kicker');
  const content = document.querySelector('#detail-modal-content');
  const cta = document.querySelector('#detail-modal-cta');
  let trigger = null, historyOpen = false;
  const data = {
    'plan-starter': ['INTRODUCTORY OFFER','Starter Website — ₹4,500','<p>A practical starting point for a professional or local business.</p><ul><li>Up to 5 agreed pages or sections</li><li>Responsive mobile and desktop layout</li><li>Profile, services and contact details</li><li>Call and WhatsApp links</li><li>Basic on-page SEO and deployment testing</li><li>One consolidated revision round</li></ul><p><strong>Separate unless quoted:</strong> domain, hosting, advanced forms, booking, e-commerce and ongoing marketing.</p>','Hello, I would like details about the ₹4,500 Starter Website package.'],
    'plan-business': ['FLEXIBLE WEBSITE PLAN','Business Website','<p>For businesses needing more detailed information and stronger enquiry paths.</p><ul><li>Multi-page plan based on your goals</li><li>About, services, FAQ and gallery options</li><li>Click-to-call and WhatsApp links</li><li>Responsive design and basic on-page SEO</li><li>Optional maps, forms or blog where agreed</li></ul><p>Price and timeline depend on pages, content and features. We provide a written scope first.</p>','Hello, I would like a quote for a Business Website.'],
    'plan-ecommerce': ['ONLINE STORE PLAN','E-commerce Website','<p>For businesses planning to showcase products and sell online.</p><ul><li>Product categories and product details</li><li>Mobile-friendly catalogue</li><li>Cart and checkout requirements planning</li><li>Payment and shipping integrations, subject to provider eligibility</li><li>Order-management requirements defined in advance</li></ul><p>Hosting, payment-provider fees, product entry and third-party services may be additional.</p>','Hello, I would like to discuss an E-commerce Website.'],
    'plan-visibility': ['DIGITAL VISIBILITY','SEO & Digital Visibility','<p>Practical support for online discoverability, scoped to your business and budget.</p><ul><li>Basic on-page SEO and metadata review</li><li>Local search readiness guidance</li><li>Content and keyword planning</li><li>Optional social content or paid-campaign setup</li><li>Reporting options for ongoing work</li></ul><p>Ad budgets and ongoing fees are separate. Rankings, enquiries and sales cannot be guaranteed.</p>','Hello, I would like to discuss SEO and Digital Visibility options.']
  };
  function open(key, el) {
    const d = data[key]; if (!d || !modal) return;
    trigger = el; kicker.textContent = d[0]; title.textContent = d[1]; content.innerHTML = d[2]; cta.style.display = '';
    cta.href = 'https://wa.me/919330482697?text=' + encodeURIComponent(d[3]);
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
    dialog.focus();
    if (!historyOpen) { history.pushState({detailModal:true}, ''); historyOpen = true; }
  }
  function close(useHistory=true) {
    if (!modal?.classList.contains('is-open')) return;
    modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open');
    if (useHistory && historyOpen) { historyOpen=false; history.back(); } else historyOpen=false;
    trigger?.focus?.();
  }
  document.querySelectorAll('[data-modal]').forEach(el => el.addEventListener('click', () => open(el.dataset.modal, el)));
  modal?.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', () => close()));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.addEventListener('popstate', () => { if (modal?.classList.contains('is-open')) close(false); else historyOpen=false; });
})();