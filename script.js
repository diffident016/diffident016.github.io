/* =========================================================
   DATA — edit these arrays to update the portfolio.
   ========================================================= */

var GH = 'https://github.com/diffident016/';

/* Projects ("Discography").
   cats: web | mobile | hardware | ai | game
   art:  file in assets/svg (without .svg), grad: g1–g9 cover gradient
   featured: true → also listed under "Popular"
   shots: screenshot image paths shown in the project viewer (first one is the main image)
   org:   GitHub organization the project was built with (adds it to the "Organizations" filter)
   repos: [label, 'repo' | 'owner/repo', private?]. Private repos show a lock instead of a link. */
var PROJECTS = [
  {
    title: 'SWEEP CDO Decision Support System',
    desc: 'Decision support system with a Leaflet GIS map for site selection, backend endpoints serving ML models, and NextCloud document storage.',
    tech: ['Next.js', 'TypeScript', 'Python Flask', 'Leaflet', 'NextCloud'],
    year: 2025, cats: ['web', 'ai'], art: 'sw-web', grad: 'g7', featured: true,
    shots: ['assets/shots/sweep-cdo-decision-support-system.jpg'],
    repos: [['web', 'sweep-cdo-dss-web', true], ['api', 'sweep-cdo-dss-api', true]]
  },
  {
    title: 'Solar Monitoring System',
    desc: 'ESP32 sensor nodes read voltage, current, power, temperature and solar radiance from PV panels, streaming to a live React + ApexCharts dashboard via Firebase.',
    tech: ['ESP32', 'C', 'Firebase', 'React', 'ApexCharts'],
    year: 2024, cats: ['hardware', 'web'], art: 'hw-solar', grad: 'g6', featured: true,
    demo: 'https://solar-monitoring-dashboard.vercel.app',
    shots: ['assets/shots/solar-monitoring-system.jpg'],
    repos: [['dashboard', 'solar-monitoring'], ['firmware', 'solar-monitoring-hardware']]
  },
  {
    title: 'HRMO Payroll System',
    desc: 'Manages employees, departments and DTR records, and computes salaries automatically, with a Python biometrics service and a Flask API. Deployed on a DigitalOcean droplet.',
    tech: ['Next.js', 'Prisma', 'MongoDB', 'Python', 'Flask', 'VPS'],
    year: 2025, cats: ['web'], art: 'sw-web', grad: 'g1', featured: true, org: 'HR-Payroll',
    demo: 'https://hrmo-payroll-web.vercel.app',
    shots: ['assets/shots/hrmo-payroll-system.jpg'],
    repos: [['web', 'hrmo-payroll-web'], ['biometrics', 'HR-Payroll/hrmo-payroll-biometrics'], ['api', 'HR-Payroll/hrmo-payroll-api', true]]
  },
  {
    title: 'Smart Solid Waste Collector',
    desc: 'Tracks garbage trucks in real time, manages barangay schedules and notifies residents, with ultrasonic fill-level sensors on the bins.',
    tech: ['React', 'Firebase', 'Node.js', 'C++'],
    year: 2024, cats: ['hardware', 'web'], art: 'hw-waste', grad: 'g3', featured: true,
    repos: [['web', 'smart-solid-waste-collector'], ['hardware', 'smart-solid-waste-collector-hardware']]
  },
  {
    title: 'Storyteller: Children\'s Game',
    desc: 'Interactive game that lets children write their own stories, with custom mechanics, UI, animation and networked features.',
    tech: ['Godot', 'Nakama', 'TypeScript'],
    year: 2024, cats: ['game'], art: 'sw-game', grad: 'g4', featured: true,
    repos: [['server', 'storyteller-app-nakama']]
  },
  {
    title: 'Flood Monitoring',
    desc: 'Web dashboard for monitoring flood conditions.',
    tech: ['React', 'Vite'],
    year: 2025, cats: ['web', 'hardware'], art: 'hw-geolocator', grad: 'g7',
    repos: [['repo', 'flood-monitoring']]
  },
  {
    title: 'Recippy',
    desc: 'Responsive recipe manager with category filtering, search, and full recipe CRUD backed by a REST API.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Express', 'MongoDB'],
    year: 2025, cats: ['web'], art: 'sw-web', grad: 'g2',
    repos: [['web', 'recippy-web'], ['api', 'recippy-api', true]]
  },
  {
    title: 'At Homes Website',
    desc: 'Real estate website for AtHomes PH with property search by location, type and price.',
    tech: ['Nuxt 3', 'Vue', 'TypeScript'],
    year: 2025, cats: ['web'], art: 'sw-web', grad: 'g5', org: 'ATHOMES-Realty',
    demo: 'https://athomes-website.vercel.app',
    shots: ['assets/shots/at-homes-website.jpg'],
    repos: [['website', 'athomes-website'], ['realty web', 'ATHOMES-Realty/athomes-web', true]]
  },
  {
    title: 'iBrgy',
    desc: 'Capstone project: a barangay e-services portal where residents sign up and log in to request services, with the barangay\'s Citizen\'s Charter and service listings. I was the lead contributor.',
    tech: ['React', 'Vite', 'Firebase', 'MUI', 'Tailwind'],
    year: 2024, cats: ['web'], art: 'sw-web', grad: 'g6', org: 'capstone-ibrgy',
    demo: 'https://ibrgy.netlify.app/',
    shots: ['assets/shots/ibrgy.jpg'],
    repos: [['web', 'capstone-ibrgy/ibrgy']]
  },
  {
    title: 'ICpEP.SE USTP Official Website',
    desc: 'Official website of the Institute of Computer Engineers of the Philippines Student Edition – USTP, with blog, about and contact pages. Built as frontend developer for the chapter\'s Committee on Web Development.',
    tech: ['Gatsby', 'React', 'Tailwind'],
    year: 2023, cats: ['web'], art: 'sw-web', grad: 'g2', org: 'ICpEP.SE USTP',
    demo: 'https://www.icpepse-ustp.org',
    repos: [['website', 'icpepseustp/official-website']]
  },
  {
    title: 'CpExpress',
    desc: 'ICpEP.SE USTP\'s digital campus community portal ("Connect, Share, Inspire"), built solo.',
    tech: ['React', 'Vite', 'Firebase', 'Tailwind'],
    year: 2024, cats: ['web'], art: 'sw-chat', grad: 'g9', org: 'ICpEP.SE USTP',
    demo: 'https://express.icpepse-ustp.org',
    shots: ['assets/shots/cpexpress-website.jpg'],
    repos: [['website', 'icpepseustp/cpexpress-website']]
  },
  {
    title: 'ICpEP.SE Event Websites',
    desc: 'Event sites for ICpEP.SE USTP: Week of Welcome 2022 and 2023, and the General Assembly.',
    tech: ['React', 'JavaScript', 'CSS'],
    year: 2023, cats: ['web'], art: 'sw-web', grad: 'g4', org: 'ICpEP.SE USTP',
    demo: 'https://wow2k23.icpepse-ustp.org/',
    repos: [['week of welcome 2023', 'icpepseustp/wow-website-2023'], ['week of welcome 2022', 'icpepseustp/wow-website'], ['general assembly', 'icpepseustp/gen-ass-website']]
  },
  {
    title: 'GraveFinder',
    desc: 'Grave lot identification and reservation system with a grave locator and routing.',
    tech: ['React', 'Firebase', 'Node.js'],
    year: 2024, cats: ['web'], art: 'hw-geolocator', grad: 'g8',
    demo: 'https://grave-finder.vercel.app',
    repos: [['web', 'grave-finder-web'], ['server', 'grave-finder-web-server', true]]
  },
  {
    title: 'Barcode Inventory & POS',
    desc: 'Inventory and point-of-sale system that tracks store stock with barcode scanning.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    year: 2024, cats: ['web'], art: 'sw-qr', grad: 'g9',
    demo: 'https://barcode-inventory-store.vercel.app/',
    repos: [['frontend', 'barcode-inv-management-frontend'], ['backend', 'barcode-inv-management-backend']]
  },
  {
    title: 'QR & SMS Attendance Monitoring',
    desc: 'Records and monitors student attendance using QR codes, with SMS notifications.',
    tech: ['React', 'Firebase', 'Node.js'],
    year: 2024, cats: ['web'], art: 'sw-qr', grad: 'g1',
    demo: 'https://calatrava-sms.netlify.app/',
    shots: ['assets/shots/qr-sms-attendance-monitoring.jpg'],
    repos: [['web', 'sams-calatrava'], ['sms proxy', 'sams-calatrava-smsproxy']]
  },
  {
    title: 'Wagging Tails',
    desc: 'E-commerce storefront for a dog food brand, with a product shop, reviews and FAQ, backed by a separate API.',
    tech: ['JavaScript', 'Node.js'],
    year: 2023, cats: ['web'], art: 'sw-web', grad: 'g6',
    demo: 'https://wagging-tails.vercel.app',
    shots: ['assets/shots/wagging-tails.jpg'],
    repos: [['frontend', 'wagging-tails-frontend'], ['backend', 'wagging-tails-backend']]
  },
  {
    title: 'Security Portal: CV Access Control',
    desc: 'Raspberry Pi + camera running TensorFlow Lite object detection to flag people at an access point in real time.',
    tech: ['Raspberry Pi', 'Python', 'TensorFlow Lite'],
    year: 2023, cats: ['hardware', 'ai'], art: 'hw-security', grad: 'g8',
    repos: [['repo', 'security-portal-hardware']]
  },
  {
    title: 'LiveTag Geolocator',
    desc: 'Compact GPS tracking tag with live location reporting.',
    tech: ['GPS', 'C++', 'Flutter'],
    year: 2023, cats: ['hardware', 'mobile'], art: 'hw-geolocator', grad: 'g3',
    repos: [['repo', 'livetag-geolocator']]
  },
  {
    title: 'Smart Home App',
    desc: 'Flutter app for controlling smart home devices.',
    tech: ['Flutter', 'Dart'],
    year: 2023, cats: ['mobile', 'hardware'], art: 'sw-mobile', grad: 'g5',
    repos: [['repo', 'smart_home']]
  },
  {
    title: 'Online Clinic Appointment',
    desc: 'Appointment booking for doctor, nurse and patient roles, with chat and an intent-based FAQ chatbot.',
    tech: ['Flutter', 'Strapi', 'Python Flask'],
    year: 2023, cats: ['mobile', 'ai'], art: 'sw-chat', grad: 'g2',
    repos: [['app', 'online-clinic-appointment-apk'], ['chatbot', 'online-clinic-appointment-chatbot']]
  },
  {
    title: 'Agribusiness Network App',
    desc: 'Start-up project helping farmers sell their produce directly to consumers through a Flutter + Firebase Android app.',
    tech: ['Flutter', 'Firebase'],
    year: 2023, cats: ['mobile'], art: 'sw-mobile', grad: 'g9', org: 'ANI-Capstone',
    repos: [['app', 'ANI-Capstone/start_up-ani'], ['capstone', 'ani-capstone', true]]
  },
  {
    title: 'Tourist Application',
    desc: 'Android tourist app with a companion proxy server.',
    tech: ['Java', 'Android', 'Node.js'],
    year: 2024, cats: ['mobile'], art: 'sw-mobile', grad: 'g7',
    repos: [['app', 'tourist-application'], ['proxy', 'tourist-application-proxy']]
  }
];

/* Certificates & badges ("Playlists"), newest first.
   type:   'Badge' | 'Certificate'
   file:   image in assets/certs shown on the card and in the viewer
   url:    verification link (Credly, Udemy, …)
   skills: optional tags shown in the viewer */
var CERTIFICATES = [
  {
    title: 'Object Oriented Programming in C++', issuer: 'Udemy', date: 'Sep 2026', type: 'Certificate',
    desc: 'Course by Codaming and Dinesh Kumar on object-oriented programming in C++.',
    skills: ['C++', 'OOP'],
    url: 'https://www.udemy.com/certificate/UC-c77bf646-cd03-4438-9c91-526c8b27fc95/',
    file: 'assets/certs/udemy-oop-cpp.jpg', grad: 'g3'
  },
  {
    title: 'The Complete Full-Stack JavaScript Course', issuer: 'Udemy', date: 'Sep 2026', type: 'Certificate',
    desc: '24.5-hour course by Joseph Delgadillo and Nick Germaine covering full-stack JavaScript development.',
    skills: ['JavaScript', 'Full-Stack', 'Node.js'],
    url: 'https://www.udemy.com/certificate/UC-a0d64721-53b7-4908-9637-2cd63c68d409/',
    file: 'assets/certs/udemy.jpg', grad: 'g4'
  },
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco', date: 'Jun 2023', type: 'Badge',
    desc: 'Scalable network architectures, dynamic routing, security threat mitigation, WANs, virtualization and network automation, with hands-on labs in Cisco Packet Tracer.',
    skills: ['Enterprise Networking', 'Network Security', 'Automation', 'WAN', 'Virtualization'],
    url: 'https://www.credly.com/badges/bd42dc42-1686-4000-a233-35eeb784516e',
    file: 'assets/certs/ccna-ensa.png', grad: 'g1'
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco', date: 'Mar 2023', type: 'Badge',
    desc: 'Switching operations, secure wired and wireless LAN configuration, and redundancy protocols, with hands-on labs in Cisco Packet Tracer.',
    skills: ['Switching', 'Routing', 'Wireless LAN', 'Network Redundancy'],
    url: 'https://www.credly.com/badges/dda2f689-b26a-4bd4-b772-882fd9e54360',
    file: 'assets/certs/ccna-srwe.png', grad: 'g7'
  },
  {
    title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'Feb 2023', type: 'Badge',
    desc: 'Networking fundamentals: IP addressing, Ethernet and data link protocols, and configuring connectivity between switches, routers and end devices.',
    skills: ['IP Addressing', 'Ethernet', 'Network Fundamentals'],
    url: 'https://www.credly.com/badges/0143ff4b-8af3-4acb-9444-91ff43802a83',
    file: 'assets/certs/ccna-itn.png', grad: 'g5'
  }
];

/* Experience ("Releases"), newest first. Also feeds the now-playing bar. */
var EXPERIENCE = [
  {
    role: 'Software Engineer', org: 'Kaulix', when: 'Oct 2025 – Present', now: true, type: 'Full-time', grad: 'g3',
    points: [
      'Develop and maintain web applications using React.js.',
      'Build and manage backend services using Node.js and PostgreSQL.',
      'Develop and integrate AI agents into application workflows and systems.',
      'Use Microsoft Azure for cloud infrastructure and deployment.'
    ]
  },
  {
    role: 'Project Technical Assistant I', org: 'SWEEP CDO Project', when: 'Apr 2025 – Sep 2025', type: 'Project', grad: 'g7',
    points: [
      'Developed a Decision Support System using Next.js, TypeScript, Python Flask, NextCloud and SQL.',
      'Integrated a GIS map for site selection using React Leaflet.',
      'Built backend services handling API requests to ML models.',
      'Implemented a NextCloud storage system for documents and models.'
    ]
  },
  {
    role: 'Nuxt 3 & Node.js Remote Developer', org: 'Seven365 Pte. Ltd.', when: 'Aug 2024 – Apr 2025', type: 'Remote', grad: 'g4',
    points: [
      'Built and maintained web apps with Nuxt 3, Vue.js, TypeScript, MongoDB and Node.js.',
      'Implemented modular services and APIs, improving scalability and maintainability.',
      'Integrated backend services with databases and external APIs.',
      'Optimized application performance.'
    ]
  },
  {
    role: 'Remote Godot Programmer', org: 'Contract-based Game Developer', when: 'May 2024 – Present', now: true, type: 'Contract', grad: 'g2',
    points: [
      'Developing an interactive children\'s game.',
      'Designed a user-friendly interface that lets children write stories.',
      'Implemented custom game mechanics, UI components and animation.',
      'Optimized game performance and integrated network features.'
    ]
  },
  {
    role: 'Freelancer: Web, Android & Embedded', org: 'Independent', when: '2021 – Present', now: true, type: 'Freelance', grad: 'g6',
    points: [
      'Full-stack web applications.',
      'Flutter + Firebase and React + Firebase applications.',
      'Arduino- and Raspberry Pi-based systems.',
      'Computer vision projects.'
    ]
  }
];

/* Skills ("Browse" genres). Clicking a tile opens a preview listing related projects & certificates.
   match.tech:  project tech tags (case-insensitive, exact) or certificate skills/title words
   match.cats:  project categories (web | mobile | hardware | ai | game)
   match.hosts: projects whose live demo is on one of these hosts */
var SKILLS = [
  { name: 'Frontend', items: 'Next.js 15, React, Nuxt 3, Vue, TypeScript, JavaScript, HTML, CSS, Tailwind CSS', color: '#e13300', icon: '</>',
    match: { tech: ['next.js', 'react', 'nuxt 3', 'vue', 'typescript', 'javascript', 'css', 'tailwind', 'gatsby', 'vite', 'mui', 'apexcharts', 'leaflet'] } },
  { name: 'Backend', items: 'Node.js, Laravel, Python, Flask, Prisma, PostgreSQL, MongoDB, Firebase', color: '#1e3264', icon: '{}',
    match: { tech: ['node.js', 'express', 'python', 'flask', 'python flask', 'prisma', 'mongodb', 'firebase', 'strapi', 'nextcloud', 'postgresql'] } },
  { name: 'Mobile', items: 'Flutter, Dart, Firebase, Java', color: '#8400e7', icon: '▯',
    match: { cats: ['mobile'] } },
  { name: 'Hardware & Embedded', items: 'Arduino, ESP32, Raspberry Pi, sensors, C / C++ firmware', color: '#148a08', icon: '⚡',
    match: { cats: ['hardware'], tech: ['c', 'c++'] } },
  { name: 'AI & Computer Vision', items: 'TensorFlow, YOLOv8, TensorFlow Lite, AI agents', color: '#dc148c', icon: '◎',
    match: { cats: ['ai'] } },
  { name: 'Game Dev', items: 'Godot, Unity C#, Nakama', color: '#e8115b', icon: '▶',
    match: { cats: ['game'] } },
  { name: 'Cloud & DevOps', items: 'Microsoft Azure, Cloudflare (DNS, SSL, CDN), Linux server admin (Ubuntu), VPS hosting (Hostinger, DigitalOcean), Vercel, Netlify, NextCloud', color: '#0d73ec', icon: '☁',
    match: { tech: ['vps', 'nextcloud'], hosts: ['vercel.app', 'netlify.app'] } },
  { name: 'Networking', items: 'Routing, Switching, Wireless LAN, Network Security, Cisco Packet Tracer', color: '#477d95', icon: '⇄',
    match: { tech: ['ccna', 'routing', 'switching', 'enterprise networking', 'network fundamentals'] } }
];

/* =========================================================
   RENDERING
   ========================================================= */
(function () {
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var PLAY_SVG = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  var LOCK_SVG = '<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v3h2v12H5V10h2V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3z"/></svg>';
  var ORG_SVG = '<svg viewBox="0 0 24 24"><path d="M8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM1 20c0-3.9 3.1-7 7-7s7 3.1 7 7zm15.5 0a8.9 8.9 0 0 0-2.4-6.2A5.5 5.5 0 0 1 23 18v2z"/></svg>';
  // 'repo' → your account; 'owner/repo' → that org/user.
  var repoUrl = function (name) { return name.indexOf('/') > -1 ? 'https://github.com/' + name : GH + name; };
  var initials = function (s) {
    return s.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
  };

  /* ---- Popular ---- */
  var featured = PROJECTS.filter(function (p) { return p.featured; });
  $('#popularList').innerHTML = featured.map(function (p, i) {
    return '<li class="track" tabindex="0" data-track="' + i + '">' +
      '<div class="track-num"><span>' + (i + 1) + '</span>' + PLAY_SVG + '</div>' +
      '<div class="track-main"><div class="track-cover ' + p.grad + '"></div><div style="min-width:0">' +
        '<div class="track-title">' + esc(p.title) + '</div>' +
        '<div class="track-sub">' + esc(p.tech.join(', ')) + '</div></div></div>' +
      '<div class="track-plays">' + esc(p.cats.map(catLabel).join(' · ')) + '</div>' +
      '<div class="track-year">' + p.year + '</div></li>';
  }).join('');

  function catLabel(c) {
    return { web: 'Web', mobile: 'Mobile', hardware: 'Hardware', ai: 'AI', game: 'Game' }[c] || c;
  }

  /* ---- Projects ---- */
  var grid = $('#projectGrid');
  grid.innerHTML = PROJECTS.map(function (p, i) {
    var links = (p.demo ? '<a class="demo" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live demo</a>' : '') +
      p.repos.map(function (r) {
        return r[2] ? '<span class="private" title="Private repository">' + LOCK_SVG + esc(r[0]) + '</span>'
                    : '<a href="' + esc(repoUrl(r[1])) + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a>';
      }).join('');
    var cats = p.cats.concat(p.org ? ['org'] : []);
    return '<article class="card project" tabindex="0" aria-label="View ' + esc(p.title) + '" data-i="' + i + '" data-cats="' + cats.join(' ') + '" data-search="' +
        esc((p.title + ' ' + p.desc + ' ' + p.tech.join(' ') + ' ' + p.cats.join(' ') + ' ' + (p.org || '')).toLowerCase()) + '">' +
      '<div class="cover ' + p.grad + '">' +
        '<img class="art" src="assets/svg/' + p.art + '.svg" alt="" loading="lazy" />' +
        '<span class="fab" aria-hidden="true">' + PLAY_SVG + '</span>' +
      '</div>' +
      '<div class="card-title" title="' + esc(p.title) + '">' + esc(p.title) + '</div>' +
      '<div class="card-sub">' + p.year + ' · ' + esc(p.tech.slice(0, 3).join(', ')) + '</div>' +
      (p.org ? '<div class="card-org">' + ORG_SVG + esc(p.org) + '</div>' : '') +
      '<p class="card-sub" style="margin-top:4px">' + esc(p.desc) + '</p>' +
      '<div class="card-links">' + links + '</div>' +
    '</article>';
  }).join('');

  $('#libProjCount').textContent = PROJECTS.length;

  var activeFilter = 'all';
  var searchInput = $('#searchInput');
  function applyFilter() {
    var q = (searchInput.value || '').trim().toLowerCase();
    var shown = 0;
    $$('.project', grid).forEach(function (card) {
      var okCat = activeFilter === 'all' || card.dataset.cats.split(' ').indexOf(activeFilter) > -1;
      var okQ = !q || card.dataset.search.indexOf(q) > -1;
      var ok = okCat && okQ;
      card.hidden = !ok;
      if (ok) shown++;
    });
    $('#projCount').textContent = shown + ' of ' + PROJECTS.length;
    $('#projectEmpty').hidden = shown > 0;
  }
  $$('#filters .pill').forEach(function (btn) {
    btn.setAttribute('aria-pressed', btn.classList.contains('on') ? 'true' : 'false');
    btn.addEventListener('click', function () {
      $$('#filters .pill').forEach(function (b) {
        b.classList.toggle('on', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      activeFilter = btn.dataset.filter;
      applyFilter();
    });
  });
  searchInput.addEventListener('input', function () {
    applyFilter();
    if (searchInput.value) $('#projects').scrollIntoView({ block: 'start' });
  });
  applyFilter();

  /* ---- Experience ---- */
  $('#experienceList').innerHTML = EXPERIENCE.map(function (e) {
    return '<article class="release">' +
      '<div class="release-cover ' + e.grad + '">' + esc(initials(e.org)) + '</div>' +
      '<div><div class="release-type">' + esc(e.type) + '</div>' +
      '<h3>' + esc(e.role) + (e.now ? '<span class="now-badge">Current</span>' : '') + '</h3>' +
      '<div class="release-meta"><b>' + esc(e.org) + '</b> · ' + esc(e.when) + '</div>' +
      '<ul>' + e.points.map(function (pt) { return '<li>' + esc(pt) + '</li>'; }).join('') + '</ul></div>' +
    '</article>';
  }).join('');

  /* ---- Certificates ---- */
  $('#certGrid').innerHTML = CERTIFICATES.map(function (c, i) {
    return '<article class="card cert" tabindex="0" data-cert="' + i + '">' +
      '<div class="cover ' + c.grad + (c.file ? ' cert-art' + (c.type === 'Badge' ? ' is-badge' : '') : '') + '">' +
        (c.file ? '<img src="' + esc(c.file) + '" alt="" loading="lazy" />'
                : '<span style="font-size:48px;font-weight:900;opacity:.9">✦</span><span class="cover-label">' + esc(c.title) + '</span>') +
        '<span class="fab" aria-hidden="true">' + PLAY_SVG + '</span>' +
      '</div>' +
      '<div class="card-title" title="' + esc(c.title) + '">' + esc(c.title) + '</div>' +
      '<div class="card-sub">' + esc(c.type || 'Certificate') + ' · ' + esc(c.issuer) + ' · ' + esc(c.date) + '</div>' +
    '</article>';
  }).join('');
  var nBadges = CERTIFICATES.filter(function (c) { return c.type === 'Badge'; }).length;
  var plural = function (n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); };
  $('#certCount').textContent = plural(CERTIFICATES.length - nBadges, 'certificate') + ' · ' + plural(nBadges, 'badge');
  $('#libCertCount').textContent = CERTIFICATES.length;

  /* ---- Skills ---- */
  $('#skillGrid').innerHTML = SKILLS.map(function (s, i) {
    return '<button type="button" class="genre" data-skill="' + i + '" style="background:' + s.color + '" aria-label="View ' + esc(s.name) + ' skills">' +
      '<span class="genre-name">' + esc(s.name) + '</span><span class="genre-items">' + esc(s.items) + '</span>' +
      '<span class="tilt" aria-hidden="true">' + esc(s.icon) + '</span></button>';
  }).join('');

  // Which projects / certificates belong to a skill category (see SKILLS match rules).
  function skillProjects(s) {
    var m = s.match || {}, tech = m.tech || [], cats = m.cats || [], hosts = m.hosts || [];
    return PROJECTS.map(function (p, i) {
      var hits = p.tech.filter(function (t) { return tech.indexOf(t.toLowerCase()) > -1; });
      var ok = hits.length || p.cats.some(function (c) { return cats.indexOf(c) > -1; }) ||
        (p.demo && hosts.some(function (h) { return p.demo.indexOf(h) > -1; }));
      return ok ? { i: i, p: p, hits: hits } : null;
    }).filter(Boolean);
  }
  function skillCerts(s) {
    var tech = (s.match && s.match.tech) || [];
    return CERTIFICATES.map(function (c, i) {
      var words = (c.skills || []).map(function (x) { return x.toLowerCase(); });
      var title = c.title.toLowerCase();
      var ok = tech.some(function (t) { return words.indexOf(t) > -1 || (t.length > 3 && title.indexOf(t) > -1); });
      return ok ? { i: i, c: c } : null;
    }).filter(Boolean);
  }

  /* ---- Modals (shared) ---- */
  var openModalEl = null;
  var lastFocus = null;
  function openModal(el) {
    if (!openModalEl) lastFocus = document.activeElement;
    if (openModalEl && openModalEl !== el) openModalEl.hidden = true;
    openModalEl = el;
    el.hidden = false;
    document.body.classList.add('modal-open');
    $('.modal-close', el).focus();
  }
  function closeModal() {
    if (!openModalEl) return;
    if (openModalEl === projModal) setHash('');
    openModalEl.hidden = true;
    openModalEl = null;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  }
  $$('.modal [data-close]').forEach(function (el) { el.addEventListener('click', closeModal); });
  document.addEventListener('keydown', function (e) {
    if (!openModalEl) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {   // keep focus inside the open dialog
      var f = $$('a[href], button:not([disabled]), [tabindex="0"]', openModalEl).filter(function (x) { return x.offsetParent; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (openModalEl === projModal) {
      if (e.key === 'ArrowRight') stepProject(1);
      if (e.key === 'ArrowLeft') stepProject(-1);
    }
  });

  /* ---- Certificate viewer ---- */
  var certModal = $('#certModal');
  function openCert(i) {
    var c = CERTIFICATES[i];
    var cover = $('#modalCover');
    var isBadge = c.type === 'Badge';
    cover.className = 'modal-cover ' + c.grad + (isBadge ? ' is-badge' : '');
    cover.innerHTML = c.file
      ? '<a href="' + esc(c.file) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(c.file) + '" alt="' + esc(c.title) + '" /></a>'
      : '✦';
    // Landscape certificates read better full width; square badges sit beside the text.
    $('.modal-box', certModal).classList.toggle('wide', !!c.file && !isBadge);
    $('#modalType').textContent = c.type || 'Certificate';
    $('#modalTitle').textContent = c.title;
    $('#modalMeta').textContent = c.issuer + ' · ' + c.date;
    $('#modalDesc').textContent = c.desc || '';
    $('#modalSkills').innerHTML = (c.skills || []).map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('');
    var link = $('#modalLink');
    var href = c.url || c.file;
    link.hidden = !href;
    if (href) {
      link.href = href;
      var host = /credly\.com/.test(href) ? 'Credly' : /udemy\.com|ude\.my/.test(href) ? 'Udemy' : '';
      link.textContent = c.url ? 'Verify' + (host ? ' on ' + host : ' credential') + ' ↗' : 'View full size ↗';
    }
    openModal(certModal);
  }
  $$('.cert').forEach(function (card) {
    var open = function () { openCert(+card.dataset.cert); };
    card.addEventListener('click', open);
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  /* ---- Project viewer ---- */
  var projModal = $('#projModal');
  var pvBody = $('#pvContent');
  var currentProject = -1;
  var LINK_SVG = '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14zM5 5h6v2H5v12h12v-6h2v8H3V5z"/></svg>';
  var GH_SVG = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>';

  // Prev/next walk through the projects currently visible in the grid (respects filters/search).
  function visibleProjects() {
    var list = $$('.project', grid).filter(function (c) { return !c.hidden; }).map(function (c) { return +c.dataset.i; });
    return list.length ? list : PROJECTS.map(function (_, i) { return i; });
  }
  function stepProject(dir) {
    var list = visibleProjects();
    var at = list.indexOf(currentProject);
    openProject(list[(at + dir + list.length) % list.length]);
  }

  function openProject(i) {
    var p = PROJECTS[i];
    currentProject = i;
    var publicRepo = p.repos.filter(function (r) { return !r[2]; })[0];
    var primary = p.demo || (publicRepo ? repoUrl(publicRepo[1]) : '');
    var list = visibleProjects();
    var pos = list.indexOf(i);
    var actionLabel = p.demo ? 'Open live demo' : 'Open repository';

    $('#pvHead').className = 'pv-head ' + p.grad;
    $('#pvHead').innerHTML =
      '<div class="pv-cover ' + p.grad + '"><img class="art" src="assets/svg/' + p.art + '.svg" alt="" /></div>' +
      '<div class="pv-meta">' +
        '<small>Project' + (p.featured ? ' · Featured' : '') + '</small>' +
        '<h3 id="pvTitle">' + esc(p.title) + '</h3>' +
        '<p><img class="pv-avatar" src="assets/profile.jpg" alt="" /><b>Marvin Tagolimot Jr.</b>' +
          (p.org ? ' with <b>' + esc(p.org) + '</b>' : '') + ' · ' + p.year +
          ' · ' + esc(p.cats.map(catLabel).join(', ')) + ' · ' + p.repos.length + (p.repos.length > 1 ? ' repos' : ' repo') + '</p>' +
      '</div>';

    pvBody.innerHTML =
      '<div class="pv-actions">' +
        (primary ? '<a class="big-play" href="' + esc(primary) + '" target="_blank" rel="noopener" aria-label="' + actionLabel + '" title="' + actionLabel + '">' + PLAY_SVG + '</a>' : '') +
        (p.demo ? '<a class="follow-btn" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live demo ↗</a>' : '') +
        '<span class="pv-count">' + (pos + 1) + ' / ' + list.length + '</span>' +
      '</div>' +
      '<p class="pv-desc">' + esc(p.desc) + '</p>' +
      galleryHTML(p) +
      '<h4>Tech stack</h4>' +
      '<div class="pv-chips">' + p.tech.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<h4>Source</h4>' +
      '<ol class="pv-tracks">' +
        p.repos.map(function (r, n) {
          var path = r[1].indexOf('/') > -1 ? r[1] : 'diffident016/' + r[1];
          var owner = path.split('/')[0], name = path.split('/')[1];
          var inner = '<span class="pv-n">' + (n + 1) + '</span>' +
            '<span class="pv-t"><b>' + esc(name) + '</b><small>' + esc(r[0]) + ' · ' +
              (r[2] ? 'private repository in ' + esc(owner) : 'github.com/' + esc(owner)) + '</small></span>';
          return r[2] ? '<li><div class="pv-private" title="Private repository">' + inner + LOCK_SVG + '</div></li>'
                      : '<li><a href="' + esc(repoUrl(r[1])) + '" target="_blank" rel="noopener">' + inner + GH_SVG + '</a></li>';
        }).join('') +
        (p.demo ? '<li><a href="' + esc(p.demo) + '" target="_blank" rel="noopener"><span class="pv-n">' + (p.repos.length + 1) + '</span>' +
          '<span class="pv-t"><b>Live demo</b><small>' + esc(p.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')) + '</small></span>' + LINK_SVG + '</a></li>' : '') +
      '</ol>';

    $$('.pv-thumb', pvBody).forEach(function (t) {
      t.addEventListener('click', function () { showShot(p, +t.dataset.shot); });
    });
    $('.pv-scroll', projModal).scrollTop = 0;
    openModal(projModal);
    setHash('#project-' + slug(p.title));
  }

  // Shareable links: #project-<slug>
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function setHash(h) {
    // Best effort: a failure here (e.g. unusual file:// setups) must never block opening/closing a viewer.
    try { history.replaceState(null, '', h || (location.pathname + location.search)); } catch (e) {}
  }
  function openFromHash() {
    var m = /^#project-(.+)$/.exec(location.hash);
    if (!m) return;
    for (var i = 0; i < PROJECTS.length; i++) if (slug(PROJECTS[i].title) === m[1]) { openProject(i); return; }
  }
  window.addEventListener('hashchange', openFromHash);

  // Screenshot gallery: main image in a browser frame (click = full size in a new tab), thumbnails when there are several.
  function galleryHTML(p) {
    var shots = p.shots || [];
    if (!shots.length) return '';
    var host = p.demo ? p.demo.replace(/^https?:\/\//, '').replace(/\/$/, '') : p.title;
    return '<h4>Screenshots</h4>' +
      '<figure class="pv-shot">' +
        '<div class="pv-shot-bar"><i></i><i></i><i></i><span>' + esc(host) + '</span></div>' +
        '<a id="pvShotLink" href="' + esc(shots[0]) + '" target="_blank" rel="noopener" title="Open full size">' +
          '<img id="pvShotImg" src="' + esc(shots[0]) + '" alt="Screenshot of ' + esc(p.title) + '" /></a>' +
      '</figure>' +
      (shots.length > 1 ? '<div class="pv-thumbs">' + shots.map(function (s, n) {
        return '<button class="pv-thumb' + (n ? '' : ' on') + '" data-shot="' + n + '" type="button" aria-label="Screenshot ' + (n + 1) + '">' +
          '<img src="' + esc(s) + '" alt="" loading="lazy" /></button>';
      }).join('') + '</div>' : '');
  }
  function showShot(p, n) {
    $('#pvShotImg').src = p.shots[n];
    $('#pvShotLink').href = p.shots[n];
    $$('.pv-thumb', pvBody).forEach(function (t) { t.classList.toggle('on', +t.dataset.shot === n); });
  }

  /* ---- Skill preview ---- */
  var skillModal = $('#skillModal');
  function openSkill(i) {
    var s = SKILLS[i];
    var items = s.items.split(/,\s*(?![^()]*\))/);  // ignore commas inside (...)
    var projs = skillProjects(s), certs = skillCerts(s);
    var head = $('#skHead');
    head.style.background = 'linear-gradient(180deg, ' + s.color + ' 0%, ' + s.color + 'aa 60%, var(--elev) 100%)';
    head.innerHTML =
      '<small>Skill</small><h3 id="skTitle">' + esc(s.name) + '</h3>' +
      '<p>' + [items.length + (items.length === 1 ? ' technology' : ' technologies'),
               projs.length || !certs.length ? plural(projs.length, 'project') : '',
               certs.length ? plural(certs.length, 'certificate') : ''].filter(Boolean).join(' · ') + '</p>' +
      '<span class="tilt" aria-hidden="true">' + esc(s.icon) + '</span>';

    var row = function (n, cover, title, sub, attr) {
      return '<li><button type="button" ' + attr + '><span class="pv-n">' + n + '</span>' +
        '<span class="sk-row">' + cover + '<span class="pv-t"><b>' + title + '</b><small>' + sub + '</small></span></span>' +
        PLAY_SVG + '</button></li>';
    };
    $('#skBody').innerHTML =
      '<h4>Technologies</h4>' +
      '<div class="pv-chips">' + items.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
      (projs.length || !certs.length ? '<h4>Projects</h4>' : '') +
      (projs.length ? '<ol class="pv-tracks">' + projs.map(function (x, n) {
        var used = x.hits.length ? x.hits : x.p.tech.slice(0, 3);
        return row(n + 1,
          '<span class="sk-cover ' + x.p.grad + '"><img class="art" src="assets/svg/' + x.p.art + '.svg" alt="" /></span>',
          esc(x.p.title), x.p.year + ' · ' + esc(used.join(', ')), 'data-open-project="' + x.i + '"');
      }).join('') + '</ol>'
        : certs.length ? '' : '<p class="muted sk-empty">No projects listed for this skill yet.</p>') +
      (certs.length ? '<h4>Certificates</h4><ol class="pv-tracks">' + certs.map(function (x, n) {
        return row(n + 1,
          '<span class="sk-cover ' + x.c.grad + '">' + (x.c.file ? '<img src="' + esc(x.c.file) + '" alt="" />' : '') + '</span>',
          esc(x.c.title), esc(x.c.type || 'Certificate') + ' · ' + esc(x.c.issuer) + ' · ' + esc(x.c.date), 'data-open-cert="' + x.i + '"');
      }).join('') + '</ol>' : '');

    $$('[data-open-project]', skillModal).forEach(function (b) {
      b.addEventListener('click', function () { openProject(+b.dataset.openProject); });
    });
    $$('[data-open-cert]', skillModal).forEach(function (b) {
      b.addEventListener('click', function () { openCert(+b.dataset.openCert); });
    });
    $('.sk-scroll', skillModal).scrollTop = 0;
    openModal(skillModal);
  }
  $$('.genre').forEach(function (g) {
    g.addEventListener('click', function () { openSkill(+g.dataset.skill); });
  });

  $('#pvPrev').addEventListener('click', function () { stepProject(-1); });
  $('#pvNext').addEventListener('click', function () { stepProject(1); });

  $$('.project', grid).forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;   // let direct repo/demo links work
      openProject(+card.dataset.i);
    });
    card.addEventListener('keydown', function (e) {
      if (e.target !== card) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(+card.dataset.i); }
    });
  });

  /* =========================================================
     NOW PLAYING
     ========================================================= */
  // Queue = experience roles, then featured projects.
  var queue = EXPERIENCE.map(function (e) {
    return { title: e.role, sub: e.org + ' · ' + e.when, dur: 30 };
  }).concat(featured.map(function (p) {
    return { title: p.title, sub: p.tech.slice(0, 3).join(', ') + ' · ' + p.year, dur: 30, project: p };
  }));
  var idx = 0, pos = 0, playing = false, timer = null, repeat = false, shuffle = false;

  var fmt = function (s) { s = Math.floor(s); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); };
  function render() {
    var t = queue[idx];
    $('#npTitle').textContent = t.title;
    $('#npTitle').classList.toggle('linkable', !!t.project);
    $('#npTitle').title = t.project ? 'View project' : '';
    $('#npSub').textContent = t.sub;
    $('#npDur').textContent = fmt(t.dur);
    $('#npTime').textContent = fmt(pos);
    $('#npFill').style.width = (pos / t.dur * 100) + '%';
    $$('.track').forEach(function (row) {
      row.classList.toggle('current', !!t.project && featured[+row.dataset.track] === t.project);
    });
  }
  function load(i) { idx = (i + queue.length) % queue.length; pos = 0; render(); }
  function next() {
    if (repeat) { pos = 0; render(); return; }
    load(shuffle ? Math.floor(Math.random() * queue.length) : idx + 1);
  }
  function setPlaying(on) {
    playing = on;
    document.body.classList.toggle('playing', on);
    $$('[data-play]').forEach(function (b) { b.setAttribute('aria-label', on ? 'Pause' : 'Play'); });
    clearInterval(timer);
    if (on) {
      timer = setInterval(function () {
        pos += 0.25;
        if (pos >= queue[idx].dur) next(); else render();
      }, 250);
    }
  }
  $$('[data-play]').forEach(function (b) { b.addEventListener('click', function () { setPlaying(!playing); }); });
  $('#npNext').addEventListener('click', next);
  $('#npPrev').addEventListener('click', function () { if (pos > 3) { pos = 0; render(); } else load(idx - 1); });
  $('#npRepeat').addEventListener('click', function () { repeat = !repeat; this.classList.toggle('on', repeat); });
  $('#npShuffle').addEventListener('click', function () { shuffle = !shuffle; this.classList.toggle('on', shuffle); });
  $('#npLike').addEventListener('click', function () {
    var on = this.getAttribute('aria-pressed') !== 'true';
    this.setAttribute('aria-pressed', on);
  });
  $('#npBar').addEventListener('click', function (e) {
    var r = this.getBoundingClientRect();
    pos = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * queue[idx].dur;
    render();
  });
  // Clicking a Popular track "plays" it.
  $$('.track').forEach(function (row) {
    var play = function () {
      var p = featured[+row.dataset.track];
      for (var i = 0; i < queue.length; i++) if (queue[i].project === p) { load(i); break; }
      setPlaying(true);
    };
    row.addEventListener('click', function (e) {
      // Title opens the project viewer (like Spotify's album link); the rest of the row plays.
      if (e.target.closest('.track-title')) { openProject(PROJECTS.indexOf(featured[+row.dataset.track])); return; }
      play();
    });
    row.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
  });
  $('#npTitle').addEventListener('click', function () {
    var p = queue[idx].project;
    if (p) openProject(PROJECTS.indexOf(p));
  });
  render();

  /* =========================================================
     SCROLL: sticky top bar + active nav
     ========================================================= */
  var main = $('#main');
  var topbar = $('#topbar');
  function onScroll() {
    var y = window.innerWidth <= 768 ? window.scrollY : main.scrollTop;
    topbar.classList.toggle('solid', y > 240);
  }
  main.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  var navLinks = $$('[data-nav]');
  function setActive(id) {
    navLinks.forEach(function (a) { a.classList.toggle('active', a.dataset.nav === id); });
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['home', 'popular', 'projects', 'experience', 'certificates', 'skills', 'about', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  $('#year').textContent = new Date().getFullYear();
  openFromHash();
})();
