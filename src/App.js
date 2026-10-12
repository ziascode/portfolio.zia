import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Footer from './Components/Footer';
import './App.css';
import './assets/style.css';

const email = 'ziayousaf94@gmail.com';
const linkedin = 'https://www.linkedin.com/in/zia-y/';
const github = 'https://github.com/ziascode';

const projects = [
  {
    slug: 'autogive',
    title: 'AutoGive',
    eyebrow: 'Giving, made simpler',
    description:
      'An in-house recurring giving product I conceived, designed and launched. It replaced a third-party tool and raised $1.2M in its first month.',
    role: 'Product owner · UX design lead · Front-end architecture',
    stack: ['Next.js', 'React', 'Figma'],
    result: '$1.2M in month one · 67% above previous average',
    impact: '$1.2M raised in the first month',
    featured: true,
    flow: ['Choose a campaign', 'Set a schedule', 'Give with confidence'],
  },
  {
    slug: 'donor-recovery',
    title: 'Donor Recovery Platform',
    eyebrow: 'Every missed gift, accounted for',
    description:
      'A recovery pipeline for failed donations, with a dashboard for staff and recovered payments tied directly to their original Stripe payment intent.',
    role: 'Product owner · Front-end engineer',
    stack: ['Next.js', 'React Server Components', 'Stripe'],
    result: '≈ $300K/year projected recovery',
    impact: '≈ $300K/year recovery projected',
    featured: true,
    flow: ['Failed checkout', 'Personal follow-up', 'Recovery measured'],
  },
  {
    slug: 'penny-appeal',
    title: 'Penny Appeal Canada',
    eyebrow: 'A platform built around impact',
    description:
      "The website and donation platform I own. I led a payment back-end rebuild and campaign redesigns for a platform raising $7M to $10M online each year.",
    role: 'Platform owner · Designer · CMS builder',
    stack: ['WordPress', 'JavaScript', 'Stripe', "Raiser's Edge", 'GA4'],
    result: '$7M–$10M raised yearly · 95% fewer errors · 28% conversion lift',
    impact: '95% fewer payment errors · 28% more conversions',
    featured: true,
    flow: ['Campaign page', 'Reliable checkout', 'Connected donor data'],
  },
  {
    slug: 'formasharp',
    title: 'FormaSharp',
    eyebrow: 'A flexible headless rebuild',
    description:
      'A headless WordPress rebuild for a mechanical engineering firm, with a custom Next.js front end and content the client can manage.',
    role: 'Sole designer · Developer',
    stack: ['Next.js', 'WordPress', 'GraphQL', 'ACF', 'Netlify'],
    result: 'PageSpeed score of 90',
    impact: '90 PageSpeed score',
    featured: true,
    external: 'https://www.formasharp.com',
    flow: ['WordPress', 'GraphQL', 'Next.js', 'Netlify'],
  },
  {
    slug: 'orange-grove',
    title: 'Orange Grove Network',
    eyebrow: 'Corporate giving campaign',
    description:
      'A campaign page I designed and built that generated more than $250K in pledges within six months.',
    role: 'Designer · Developer',
    stack: ['Stack to confirm'],
    result: '$250K+ pledged in six months',
    impact: '$250K+ pledged in six months',
    flow: ['Campaign story', 'Corporate giving', 'Pledges'],
  },
  {
    slug: 'aero-cleaning',
    title: 'Aero Cleaning Services',
    eyebrow: 'A better way to explore services',
    description:
      'A marketing site for a commercial cleaning company, with an interactive before-and-after slider, service explorer panels and enquiry forms.',
    role: 'Sole designer · Developer',
    stack: ['Next.js', 'Tailwind CSS', 'Netlify', 'Netlify Forms'],
    result: 'Designed and built solo',
    impact: 'Interactive experience, designed and built solo',
    flow: ['Explore services', 'See the difference', 'Request a quote'],
  },
];

const caseStudies = {
  autogive: {
    ...projects[0],
    title:
      'AutoGive: replacing a third-party tool with an in-house product that raised $1.2M in its first month',
    meta: [
      ['Role', 'Product owner, UX design lead, front-end architecture, go-to-market'],
      ['Team', 'Four developers'],
      ['Timeline', 'Three months'],
      ['Stack', 'Next.js, React, Figma'],
      ['Result', '$1.2M in the first month'],
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          "We relied on a third-party widget to automate recurring donations for our campaigns. Its checkout lost donors: the donate button fell below the fold on some phones, choosing a campaign was confusing, and donors had no clear view of what they had scheduled. Our donor data also sat on someone else's platform.",
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I identified the problem, made the case to build in-house, and owned the product from concept to launch. I led the UX and UI design in Figma, set the front-end architecture, directed a team of four developers through a three-month build, designed and coded the campaign landing page, and planned and ran the go-to-market.',
        ],
      },
      {
        heading: 'A giving flow with fewer reasons to leave',
        bullets: [
          ['Keep the action in reach', 'The donate button sits above the fold on every device size.'],
          ['Make each step clear', 'Donors choose a campaign, set an exact amount and schedule, and see where their money goes.'],
          ['Make a schedule easy to revisit', 'Each donor gets a magic link to upcoming donations, with no account or password needed.'],
        ],
      },
      {
        heading: 'Choosing the right front-end foundation',
        paragraphs: [
          "I set the front-end architecture at the start of the project. Our engineers' default was a client-rendered React app; I chose Next.js for server-side rendering, faster first loads on mobile, and indexable landing pages. I relied on our back-end engineers for the server-side design.",
        ],
      },
      {
        heading: 'Launch',
        paragraphs: [
          "We already had the traffic, so I redirected it. I designed and coded a short, conversion-focused landing page as the destination for our ads, with everything above the fold and copy written in donors' own language, leading straight into the giving flow. I retargeted people who had used the old widget, then moved donors with recurring gifts on our main website onto AutoGive.",
        ],
      },
      {
        heading: 'The result',
        bullets: [
          ['$1.2M raised in the first month', '$1M from new donors and $200K from migrated recurring donors.'],
          ['67% more from new donors', 'Compared with the old widget’s monthly average of about $600K, on the same traffic.'],
          ['Vendor licence fees eliminated', 'The recurring giving experience and donor data now live in-house.'],
        ],
      },
    ],
  },
  'donor-recovery': {
    ...projects[1],
    title:
      'Donor Recovery Platform: a dashboard for winning back failed donations, projected to recover $300K a year',
    meta: [
      ['Role', 'Product owner and front-end engineer'],
      ['Team', 'Me on the front end, with a back-end team for the data layer and API routes'],
      ['Launched', '2026'],
      ['Stack', 'Next.js, React Server Components, Stripe'],
      ['Result', '≈ $300K a year projected'],
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'Donors were reaching checkout and leaving without completing payment because of card declines, technical errors and bugs. Those donations were lost, and nobody could see who had dropped off or follow up with them.',
        ],
      },
      {
        heading: 'A recovery pipeline for the team',
        paragraphs: [
          'The platform captures every failed checkout and places the donor in a recovery pipeline. Staff see each case in a dashboard and can send the donor a link back to their checkout by email or text, call them, or close the case.',
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I identified the problem and proposed a single platform to centralize recovery. I owned the product and designed and built the front end myself. Our back-end team built the data layer and API routes.',
        ],
      },
      {
        heading: 'Making recovery measurable',
        paragraphs: [
          'I wanted to know exactly how much the platform won back, not estimate it. I specified that a recovery link completes the same Stripe payment intent the donor abandoned, not a new one. Each recovered payment is tied directly to its original failed attempt, so the dashboard total is exact and nothing is double-counted.',
        ],
      },
      {
        heading: 'How I built it',
        bullets: [
          ['Server-rendered by default', 'A Next.js Server Component queries data on the server, so the table arrives populated without client-side fetching.'],
          ['Filters live in the URL', 'Date and status filters update query parameters; each filtered view can be bookmarked or shared.'],
          ['A small interactive surface', 'Only filter controls and action buttons run in the browser. Actions post to an API route, then refresh the data without a full page reload.'],
          ['No state library', 'The only client state is filter inputs and button loading states.'],
        ],
      },
      {
        heading: 'Interface decisions',
        bullets: [
          ['A clear summary', 'The dashboard shows total recovered and the amount still recoverable.'],
          ['Status at a glance', 'New, contacted, recovered and closed statuses are colour-coded and labelled; recovered rows are lightly highlighted.'],
          ['Actions that make sense', 'Buttons are disabled when a donor has no email or phone on file.'],
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Launched in 2026, the platform is projected to recover about $300K a year. That is a projection, not a measured recovery total; the number should be replaced with actual results after production data is available.',
        ],
      },
    ],
  },
  'penny-appeal': {
    ...projects[2],
    title:
      'Penny Appeal Canada: the website and donation platform behind $7M to $10M a year',
    meta: [
      ['Role', 'Platform owner, designer and CMS builder'],
      ['Team', 'Seven people and three partner agencies'],
      ['Timeline', 'June 2022 to present'],
      ['Stack', "WordPress, JavaScript, HTML, CSS, Stripe, Raiser's Edge, GA4"],
      ['Result', '$7M to $10M raised online each year'],
    ],
    sections: [
      {
        heading: 'My role',
        paragraphs: [
          "I own the website. I designed it and built it in WordPress, and I'm responsible for keeping the donation flow working and converting. I lead a team of seven and manage three external partners: an SEO agency, a development team and a fundraising partner.",
        ],
      },
      {
        heading: 'Fixing the foundation: 95% fewer payment errors',
        paragraphs: [
          "When I joined, WordPress, Stripe and Raiser's Edge were connected through plugins and patchwork code inside the form plugin, with no proper back end. Data regularly mismatched across the three systems, causing most of our payment bugs.",
          'I diagnosed the root cause, made the case to rebuild it properly, and led the team that replaced the patchwork with a dedicated API connecting the checkout, Stripe and the donor database. Payment processing errors fell by 95%.',
        ],
      },
      {
        heading: 'Redesigning for conversion: 28% lift',
        paragraphs: [
          'I redesigned our main campaign pages around conversion, using Google Analytics 4 to see where visitors dropped off. The biggest change was moving donation blocks close to the top of the page, because every extra scroll loses donors. Bounce rate fell and online conversion rose 28%.',
        ],
      },
      {
        heading: 'Building on the platform',
        paragraphs: [
          "I wrote a post-donation upsell integration myself: after each successful donation, it sends the payment details to a partner platform's API.",
        ],
      },
      {
        heading: 'Keeping it running',
        paragraphs: [
          'I maintain the payment connections, fix bugs across the donation flow, and resolve critical issues within 24 hours.',
        ],
      },
    ],
  },
  formasharp: {
    ...projects[3],
    title:
      'FormaSharp: a headless WordPress rebuild for a Mississauga mechanical engineering and product design firm',
    meta: [
      ['Role', 'Sole designer and developer'],
      ['Team', 'Me, with a copywriter for the content'],
      ['Live site', 'formasharp.com'],
      ['Stack', 'Next.js, React, WordPress, GraphQL, ACF, Netlify'],
      ['Result', 'PageSpeed score of 90'],
    ],
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          "The firm's old site was slow, ranked poorly in search and looked dated. It did little to show the quality of their work or turn visitors into enquiries.",
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I owned the project end to end: client discovery, design, stack selection and all of the code. I worked with a copywriter on the content.',
        ],
      },
      {
        heading: 'Choosing headless WordPress',
        paragraphs: [
          'The client needed a fully custom, fast front end and a simple way for their own staff to edit content. A standard WordPress theme would have limited the design, while a pure Next.js site would have left them dependent on a developer for every change. I chose a headless setup: WordPress for content editing and a custom Next.js front end.',
        ],
      },
      {
        heading: 'A build the client can manage',
        bullets: [
          ['Content', 'WordPress with Advanced Custom Fields. Clearly labelled fields help the client put content in the right place.'],
          ['Data layer', 'WordPress is the content source; the front end reads it through GraphQL.'],
          ['Front end', 'A custom React and Next.js site with seven service pages, a blog, a portfolio section and quote request forms, hosted on Netlify.'],
          ['Rendering', 'Pages are statically generated and revalidate every 60 seconds. Edits appear in about a minute without a rebuild or deploy.'],
          ['Resilient layout', 'Components handle different client-entered content so edits continue to display correctly.'],
        ],
      },
      {
        heading: 'Built for search and AI assistants',
        paragraphs: [
          'The copywriter researched the search terms and questions that AI assistants prioritize in this field, and I built the page structure around that research.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'A PageSpeed score of 90 out of 100, a modern design that showcases the firm’s services, and a client who updates the site without a developer.',
        ],
      },
    ],
  },
};

const pageDetails = {
  home: {
    title: 'Zia Yousaf, Front-End Developer and Web Platform Manager',
    description:
      'I build and lead web platforms that raise $10M a year. Case studies in Next.js, React and WordPress.',
  },
  work: {
    title: 'Selected work, Zia Yousaf',
    description:
      'Product, platform and web work across fundraising, payments, content and conversion.',
  },
  about: {
    title: 'About Zia Yousaf',
    description: 'Front-end developer and web platform manager in Toronto.',
  },
  autogive: {
    title: 'AutoGive case study, Zia Yousaf',
    description:
      'How I replaced a third-party tool with an in-house giving product that raised $1.2M in its first month.',
  },
  'donor-recovery': {
    title: 'Donor Recovery Platform case study, Zia Yousaf',
    description:
      'A Next.js dashboard for winning back failed donations, built with React Server Components.',
  },
  'penny-appeal': {
    title: 'Penny Appeal Canada case study, Zia Yousaf',
    description:
      'Owning a donation platform that raises $7M to $10M a year: 95% fewer payment errors and 28% more conversions.',
  },
  formasharp: {
    title: 'FormaSharp case study, Zia Yousaf',
    description:
      'A headless WordPress rebuild with a Next.js front end for a mechanical engineering firm.',
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function PageMeta() {
  const { pathname } = useLocation();
  const pageKey = pathname === '/' ? 'home' : pathname.split('/').filter(Boolean).pop();
  const page = pageDetails[pageKey] || pageDetails.home;

  useEffect(() => {
    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:image', `${window.location.origin}/social-preview.jpg`);
    setMeta('name', 'twitter:card', 'summary_large_image');
  }, [page]);

  return null;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
}

function ScrollReveal({ as: Element = 'div', children, className = '', delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={elementRef}
      className={`scroll-reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Zia Yousaf home">
          <span className="brand-name">Zia Yousaf</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <Link to="/work" onClick={closeMenu}>Work</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link className="nav-contact" to="/#contact" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

function ArrowLink({ to, children, className = '' }) {
  return (
    <Link className={`arrow-link ${className}`} to={to}>
      {children}<span aria-hidden="true">↗</span>
    </Link>
  );
}

function SectionIntro({ eyebrow, title, children }) {
  return (
    <ScrollReveal className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </ScrollReveal>
  );
}

function ProjectArtwork({ project, compact = false }) {
  return (
    <div className={`project-artwork artwork-${project.slug}${compact ? ' is-compact' : ''}`} aria-hidden="true">
      <div className="artwork-sky">
        <span className="artwork-orbit" />
        <span className="artwork-star star-one" />
        <span className="artwork-star star-two" />
      </div>
      <div className="artwork-panel">
        <span className="artwork-panel-kicker">{project.eyebrow}</span>
        <span className="artwork-panel-result">{project.impact}</span>
        <span className="artwork-panel-rule" />
        <span className="artwork-panel-bottom">{project.stack.join(' · ')}</span>
      </div>
      <span className="artwork-number">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const hasCaseStudy = Boolean(caseStudies[project.slug]);
  const content = (
    <>
      <ProjectArtwork project={project} compact={!project.featured} />
      <div className="project-card-content">
        <div className="project-card-heading">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          {hasCaseStudy && <span className="project-arrow" aria-hidden="true">↗</span>}
        </div>
        <p>{project.description}</p>
        <div className="project-card-details">
          <div className="project-impact">
            <span className="project-detail-label">Impact</span>
            <strong>{project.impact}</strong>
          </div>
          <div className="project-role">
            <span className="project-detail-label">My role</span>
            <span>{project.role}</span>
          </div>
          <div className="project-stack">
            <span className="project-detail-label">Stack</span>
            <ul aria-label={`${project.title} technology stack`}>
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <ScrollReveal
      as="article"
      className={`project-card${project.featured ? ' is-featured' : ''}${hasCaseStudy ? '' : ' is-static'}`}
      delay={(index % 2) * 100}
    >
      {hasCaseStudy ? (
        <Link to={`/work/${project.slug}`} className="project-card-link" aria-label={`Read about ${project.title}`}>
          {content}
        </Link>
      ) : content}
    </ScrollReveal>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow hero-enter hero-enter-one"><span className="status-dot" /> Toronto, Canada · Open to the right next chapter</p>
          <h1 className="hero-enter hero-enter-two">I build and lead web platforms that raise <span>$10M a year.</span></h1>
          <p className="hero-intro hero-enter hero-enter-three">
            I’m Zia Yousaf, a front-end developer and web platform manager in Toronto. I build in React and Next.js, and lead the team behind Penny Appeal Canada’s website and donation products.
          </p>
          <div className="hero-actions hero-enter hero-enter-four">
            <Link className="button button-primary" to="/work">View my work <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-footnote hero-enter hero-enter-five"><span>✦</span> Thoughtful products. Measurable impact. Built to keep working.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span /> Scroll to explore</div>
      </section>

      <section className="metrics-section page-width" aria-label="Selected results">
        {[
          ['$1.2M', 'Raised by AutoGive in its first month'],
          ['28%', 'Lift in online conversion from campaign page redesigns'],
          ['95%', 'Fewer payment processing errors after the back-end rebuild'],
          ['7 + 3', 'People on the team I lead, plus partner agencies'],
        ].map(([value, label]) => (
          <ScrollReveal as="div" className="metric" key={value} delay={value === '28%' || value === '7 + 3' ? 100 : 0}>
            <strong>{value}</strong>
            <span>{label}</span>
          </ScrollReveal>
        ))}
      </section>

      <section className="home-work section-pad page-width" id="work">
        <SectionIntro eyebrow="Selected work · 2022—2026" title="My Projects" >
          I bring product thinking, clear design and dependable engineering together to make digital experiences work better for the people using them.
        </SectionIntro>
        <div className="project-grid featured-grid">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <ArrowLink className="section-link" to="/work">Explore all selected work</ArrowLink>
      </section>

      <section className="home-principle">
        <div className="page-width principle-inner">
          <p className="eyebrow">The way I work</p>
          <p className="principle-statement">Start with the result. Make the next step feel obvious. <span>Measure what changed.</span></p>
          <ArrowLink to="/about">A little more about me</ArrowLink>
        </div>
      </section>
    </main>
  );
}

function WorkPage() {
  return (
    <main className="page-width interior-page">
      <section className="page-heading">
        <p className="eyebrow">Work · Selected projects</p>
        <h1>Digital work with a <span>real-world return.</span></h1>
        <p>Products, platforms and websites shaped around a simple question: what should be better when this is done?</p>
      </section>
      <div className="project-grid work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      <p className="work-note">Some internal product details and client materials are intentionally not shown here. Project visuals are diagrams, not production screenshots. Before publishing, confirm permission to share project names and reported fundraising figures; add verified live links and the remaining project details.</p>
    </main>
  );
}

function ProductFlow({ project }) {
  return (
    <ScrollReveal className={`case-visual artwork-${project.slug}`}>
      <div className="case-visual-heading">
        <span className="eyebrow">The experience, at a glance</span>
        <span className="visual-caption">Product flow</span>
      </div>
      <div className="flow-track">
        {project.flow.map((step, index) => (
          <div className="flow-step" key={step}>
            <span className="flow-step-number">0{index + 1}</span>
            <span className="flow-step-label">{step}</span>
          </div>
        ))}
      </div>
      <div className="case-visual-foot">
        <span>{project.title}</span>
        <span>Conceptual flow diagram · not a product screenshot</span>
      </div>
    </ScrollReveal>
  );
}

function CaseHeroIllustration({ project }) {
  const hasPhoneScreenshot = project.slug === 'autogive';

  return (
    <div className={`case-hero-art artwork-${project.slug}`} aria-hidden="true">
      <div className={`case-screen${hasPhoneScreenshot ? ' case-screen-phone' : ''}`}>
        {!hasPhoneScreenshot && (
          <div className="case-screen-toolbar">
            <span className="case-screen-controls"><i /><i /><i /></span>
            <span className="case-screen-address">{project.slug}.project</span>
            <span className="case-screen-menu">•••</span>
          </div>
        )}
        {project.slug === 'autogive' && (
          <div className="screen-autogive-reference">
            <div className="case-phone">
              <img src="/autogive-phone-reference.png" alt="" />
            </div>
          </div>
        )}
        {project.slug === 'donor-recovery' && (
          <div className="screen-recovery">
            <div className="screen-app-nav"><b>Recovery</b><span>Overview&nbsp;&nbsp; Donors&nbsp;&nbsp; Reports</span><i>ZY</i></div>
            <div className="screen-dashboard">
              <span>RECOVERY OVERVIEW</span>
              <strong>$18,420 <i>↑ 12.8%</i></strong>
              <div className="screen-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="screen-table"><b>Donor</b><b>Amount</b><b>Status</b><span>Amira K.</span><span>$240</span><i>Recovered</i><span>Sam R.</span><span>$125</span><i>Contacted</i></div>
            </div>
          </div>
        )}
        {project.slug === 'penny-appeal' && (
          <div className="screen-penny screen-penny-reference">
            <img src="/penny-appeal-homepage-reference.png" alt="" />
          </div>
        )}
        {project.slug === 'formasharp' && (
          <div className="screen-formasharp screen-formasharp-reference">
            <img src="/formasharp-homepage-reference.png" alt="" />
          </div>
        )}
      </div>
      <span className="case-screen-caption">
        {project.slug === 'donor-recovery' ? 'Illustrative interface concept · not a production screenshot' : 'Supplied project screenshot'}
      </span>
    </div>
  );
}

function CaseSection({ section, index }) {
  return (
    <ScrollReveal as="section" className="case-section" delay={(index % 2) * 80}>
      <span className="case-section-number">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h2>{section.heading}</h2>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && (
          <ul className="case-bullet-list">
            {section.bullets.map(([heading, detail]) => (
              <li key={heading}>
                <span className="bullet-spark" aria-hidden="true">✳</span>
                <p><strong>{heading}</strong> {detail}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ScrollReveal>
  );
}

function CaseStudyPage({ slug }) {
  const project = caseStudies[slug];
  const projectIndex = Object.keys(caseStudies).indexOf(slug);
  const nextSlug = Object.keys(caseStudies)[(projectIndex + 1) % Object.keys(caseStudies).length];
  const nextProject = caseStudies[nextSlug];

  return (
    <main className="page-width case-page">
      <Link className="back-link" to="/work"><span aria-hidden="true">←</span> All work</Link>
      <header className="case-header">
        <div className="case-header-copy">
          <p className="eyebrow">Case study · {project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="case-lede">{project.description}</p>
        </div>
        <CaseHeroIllustration project={project} />
      </header>
      <ProductFlow project={project} />
      <ScrollReveal as="section" className="case-meta-grid" aria-label="Project details">
        {project.meta.map(([label, value], index) => (
          <ScrollReveal as="div" className="case-meta-item" key={label} delay={index * 65}>
            <span>{label}</span>
            <strong>{value}</strong>
          </ScrollReveal>
        ))}
      </ScrollReveal>
      <div className="case-story">
        {project.sections.map((section, index) => (
          <CaseSection key={section.heading} section={section} index={index} />
        ))}
      </div>
      {slug === 'formasharp' && (
        <a className="button button-outline case-live-link" href={project.external} target="_blank" rel="noreferrer">
          Visit FormaSharp <span aria-hidden="true">↗</span>
        </a>
      )}
      <ScrollReveal as="section" className="next-project">
        <div>
          <p className="eyebrow">Next case study</p>
          <h2>{nextProject.title}</h2>
        </div>
        <ArrowLink to={`/work/${nextSlug}`}>Read the case study</ArrowLink>
      </ScrollReveal>
    </main>
  );
}

const workingPrinciples = [
  ['Start with the result', 'Every project begins with what should change: more conversions, fewer errors, less cost.'],
  ['Design for the person using it', 'Clear steps, the main action always visible, and nothing that makes people think twice.'],
  ['Measure it', 'I build products so results can be counted exactly, and use analytics to decide what to change next.'],
  ['Use the right amount of technology', 'Server-render where it helps, use a CMS where the client needs to edit, and skip libraries that do not earn their place.'],
];

const skills = [
  {
    area: 'Languages',
    tools: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    ],
  },
  {
    area: 'Frameworks',
    tools: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    area: 'CMS',
    tools: [
      { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'ACF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    ],
  },
  {
    area: 'Data & integrations',
    tools: [
      { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
      { name: 'Raisers Edge', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Notion-logo.svg' },
    ],
  },
  {
    area: 'Design & analytics',
    tools: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'GA4', logo: 'https://www.gstatic.com/images/branding/product/2x/google-analytics_64dp.png' },
    ],
  },
  {
    area: 'Hosting & workflow',
    tools: [
      { name: 'Netlify', logo: 'https://www.netlify.com/v3/img/components/full-logo-light.svg' },
      { name: 'Vercel', logo: 'https://static.cdnlogo.com/logos/v/7/vercel.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Cursor', logo: 'https://cursor.com/favicon.ico' },
    ],
  },
];

const experience = [
  ['Jun 2022 — Present', 'Front-End Developer, then Web and Tech Manager', 'Penny Appeal Canada'],
  ['Mar 2021 — Jul 2022', 'Front-End Developer', 'Metaspace VR'],
  ['Aug 2019 — Mar 2021', 'Web Developer', 'Cambridge Driving School'],
];

function AboutPage() {
  return (
    <main className="page-width interior-page about-page">
      <section className="page-heading">
        <p className="eyebrow">About Zia</p>
        <h1>My Projects</h1>
        <p>I’m a front-end developer and web platform manager based in Toronto.</p>
      </section>
      <ScrollReveal as="section" className="about-bio content-panel">
        <div>
          <p>For the past four years I’ve run the website and donation products at Penny Appeal Canada, which raise $7M to $10M online each year. I started there as a front-end developer and now lead a team of seven and three partner agencies.</p>
          <p>I work across the whole job. I find the problem, design the solution in Figma, write the front-end code in React and Next.js, and stay with it through launch until the numbers move. Before Penny Appeal I built virtual reality sales tools at Metaspace VR and websites for small businesses.</p>
          <a className="text-link" href={`mailto:${email}`}>Say hello <span aria-hidden="true">↗</span></a>
        </div>
      </ScrollReveal>
      <section className="section-pad about-section">
        <SectionIntro eyebrow="Working principles" title="A practical way to make good things." />
        <div className="principle-list">
          {workingPrinciples.map(([title, description], index) => (
            <article className="principle-row" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section">
        <SectionIntro eyebrow="Tools of the trade" title="A stack I can explain." />
        <dl className="skills-grid">
          {skills.map(({ area, tools }) => (
            <div className="skill-item" key={area}>
              <dt>{area}</dt>
              <dd>
                <div className="skill-logo-row">
                  {tools.map((tool) => (
                    <div className="skill-logo-item" key={tool.name} title={tool.name}>
                      {tool.logo && <img src={tool.logo} alt={`${tool.name} logo`} />}
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="about-section">
        <SectionIntro eyebrow="Experience" title="A little context." />
        <div className="experience-list">
          {experience.map(([date, role, employer]) => (
            <article className="experience-row" key={employer}>
              <span>{date}</span>
              <h3>{role}</h3>
              <p>{employer}</p>
            </article>
          ))}
        </div>
      </section>
      <ScrollReveal as="section" className="education-row">
        <div>
          <p className="eyebrow">Education</p>
          <h2>Honours BSc, Biological Sciences</h2>
        </div>
        <p>University of Guelph · 2017</p>
      </ScrollReveal>
      <ScrollReveal as="blockquote" className="testimonial">
        <span className="eyebrow">A kind word from a client</span>
        <p>“Zia developed a wonderful and user-friendly website for our company in a very short time. We had been struggling with an outdated and difficult-to-use web presence, that had steadily decreased online sales. The new site has greatly improved our traffic and overall sales!”</p>
        <cite>Noora · Al-Rihla Tourism</cite>
      </ScrollReveal>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="page-width not-found">
      <p className="eyebrow">A little off the trail</p>
      <h1>This page isn’t here.</h1>
      <ArrowLink to="/">Back to the home page</ArrowLink>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="page-width footer-top">
        <div className="footer-message">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2>Let’s make something <span>that matters.</span></h2>
          <a className="footer-email" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-links" aria-label="Contact links">
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="page-width footer-sound">
        <div>
          <p className="eyebrow">Stay a little longer</p>
          <p>Pick a quiet soundscape for the trail back down.</p>
        </div>
        <Footer />
      </div>
      <div className="page-width footer-bottom">
        <Link className="brand" to="/"><span className="brand-name">Zia Yousaf</span></Link>
        <p>Designed and developed with care · Toronto, Canada</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <>
      <PageMeta />
      <ScrollManager />
      <div id="top">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          {Object.keys(caseStudies).map((slug) => (
            <Route key={slug} path={`/work/${slug}`} element={<CaseStudyPage slug={slug} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}

export default App;
