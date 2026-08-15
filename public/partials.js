// Shared nav + footer, injected so all pages stay in sync.
// Page content itself lives in each page's HTML (crawlable); only chrome is injected.
(function () {
  const PAGES = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/ppp', label: 'The Deal', key: 'ppp' },
    { href: '/tolls', label: 'Toll Roads', key: 'tolls' },
    { href: '/super', label: 'Your Own Money', key: 'super' },
    { href: '/losses', label: 'Socialised Losses', key: 'losses' },
    { href: '/power', label: 'Power Bills', key: 'power' },
    { href: '/assets', label: 'The Sell-Off', key: 'assets' },
    { href: '/hospitals', label: 'Sick PPPs', key: 'hospitals' },
    { href: '/inflation', label: 'The Inflation Machine', key: 'inflation' },
    { href: '/ledger', label: 'The Ledger', key: 'ledger' },
    { href: '/cashes', label: 'Who Cashes In', key: 'cashes' },
    { href: '/secrecy', label: 'The Secrecy', key: 'secrecy' },
    { href: '/world', label: 'The World', key: 'world' },
    { href: '/solutions', label: 'What Works', key: 'solutions' },
    { href: '/act', label: 'Take Action', key: 'act' },
    { href: '/sources', label: 'Sources', key: 'sources' },
  ];
  const current = document.body.getAttribute('data-page') || 'home';

  const links = PAGES.map(
    (p) => `<a href="${p.href}"${p.key === current ? ' class="active"' : ''}>${p.label}</a>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'nav';
  header.innerHTML =
    `<a class="brand" href="/">THE<span>&nbsp;</span>RORT</a>` +
    `<button class="navtoggle" aria-label="Menu" aria-expanded="false" aria-controls="site-nav">` +
    `<span></span><span></span><span></span></button>` +
    `<nav id="site-nav">${links}</nav>`;
  document.body.insertBefore(header, document.body.firstChild);

  // Mobile hamburger: toggle the collapsed nav panel.
  const toggle = header.querySelector('.navtoggle');
  const navEl = header.querySelector('nav');
  const setOpen = (open) => {
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('open')));
  // Close after tapping a link, or on Escape.
  navEl.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  // Reset if the viewport grows back to desktop.
  window.addEventListener('resize', () => { if (window.innerWidth > 880) setOpen(false); });

  // Site-wide consent / direct-democracy call-to-action (before the footer, every page).
  const cta = document.createElement('section');
  cta.className = 'consent-cta';
  cta.innerHTML = `
    <div class="consent-inner">
      <p class="k">You were never asked</p>
      <h2>Nobody voted to sell it — or to buy it back.</h2>
      <p>The toll roads, the power poles, the ports, the land registry, the hospital: assets your
         parents' taxes paid to build were <a href="/ppp">handed to private consortia</a> on
         decades-long, <a href="/inflation">CPI-locked</a> terms — then those same assets were bought
         back with <a href="/super">your compulsory super</a>. Heads they win; tails you pay. Almost none
         of it was ever put to a vote, and the contracts are <a href="/secrecy">stamped "commercial-in-confidence"</a>
         so you can't even read them.</p>
      <p><strong>The Radical Party exists to fix exactly that.</strong> Direct, radical democracy: you
         vote on the <em>policies</em>, not just the politicians — propose them, vote them in, and
         <em>veto</em> the ones done to you without consent. This site is one receipt; the point is to
         change who gets to decide what's sold, to whom, and on what terms.</p>
      <div class="btnrow">
        <a class="btn" href="https://theradicalparty.com/join">Join the Radical Party →</a>
        <a class="btn ghost" href="https://theradicalparty.com">What is direct democracy?</a>
      </div>
      <p class="whistle"><b>Work inside this system?</b> We work with whistleblowers. If you have
         documents, data or insight that could help end this — from inside a treasury, a super fund, an
         infrastructure manager, a toll operator or a minister's office — reach us confidentially at
         <a href="mailto:whistle@theradicalparty.com">whistle@theradicalparty.com</a>. Every figure on
         this site came from the public record; the next one could come from you.</p>
    </div>`;
  document.body.appendChild(cta);

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p class="foot-brand">THE<span> </span>RORT</p>
    <p>An independent, fact-checkable exposé of how Australia privatises the profit and socialises the
       loss — public monopolies sold off, bought back with your own retirement savings, and billed to
       you forever.</p>
    <div class="footlinks">
      ${PAGES.filter((p) => p.key !== 'home').map((p) => `<a href="${p.href}">${p.label}</a>`).join('')}
      <a href="https://github.com/kingomarwashere/the-rort">Source / corrections</a>
    </div>
    <p class="fine">Public-record analysis and opinion — not legal or financial advice. Every figure is
       drawn from auditors-general, the ACCC, AER, IPART, ABS, budget papers, company filings, and
       reputable reporting; see <a href="/sources">Sources</a>. Where a number is a government or company
       claim, contested, or illustrative, it is labelled as such. Verify against the primary source before
       relying on it. Naming a fund, firm or person as a beneficiary of a policy is not an allegation of
       any wrongdoing by them.</p>`;
  document.body.appendChild(footer);

  // Radical Party shared cross-subdomain wayfinding footer (so this site isn't a dead end).
  var rf = document.createElement('script');
  rf.src = 'https://theradicalparty.com/footer.js';
  rf.defer = true;
  document.body.appendChild(rf);
})();
