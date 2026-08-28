const services = [
  { n: '01', title: 'Mini Valet', copy: 'The smart maintenance clean. Exterior wash, wheel clean, interior vacuum and a crisp final finish.', price: 'from £60', icon: '↗' },
  { n: '02', title: 'Full Valet', copy: 'A complete inside-and-out reset, restoring the details that make your car feel properly cared for.', price: 'from £80', icon: '✦' },
  { n: '03', title: 'Detailing', copy: 'Deep decontamination and precision finishing for paintwork with clarity, gloss and lasting protection.', price: 'from £170', icon: '◇' },
];

const pricing = [
  { size: 'Small cars', example: 'Hatchbacks · city cars', mini: '£60', full: '£80', detail: '£170' },
  { size: 'Medium cars', example: 'Saloons · estates', mini: '£70', full: '£90', detail: '£180', featured: true },
  { size: 'Large cars', example: 'SUVs · 4x4s · vans', mini: '£80', full: '£90', detail: '£190' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Conwy Car Care home"><span>CONWY</span><small>CAR CARE</small></a>
        <div className="navLinks"><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#about">About</a></div>
        <a className="navCta" href="tel:+447301847820">Call Tyler</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow"><span /> Mobile valeting & detailing · Conwy</p>
            <h1>Your car.<br/><em>Reimagined.</em></h1>
            <p className="lead">Enthusiast-led car care with an uncompromising eye for detail. We bring the studio finish to your driveway.</p>
            <div className="heroActions"><a className="button primary" href="tel:+447301847820">Book your valet <b>↗</b></a><a className="textLink" href="#services">Explore services <span>↓</span></a></div>
            <div className="trust"><b>5.0</b><span className="stars">★★★★★</span><small>Local, owner-operated care</small></div>
          </div>
          <div className="heroVisual">
            <div className="imageFrame"><img src="/conwy-van.jpg" alt="The distinctive yellow Conwy Car Care detailing van" /><span className="cornerLabel">01 — MOBILE STUDIO</span></div>
            <div className="floatingCard"><span>DETAIL<br/>DRIVEN</span><b>CC</b></div>
          </div>
        </div>
        <div className="ticker"><div>VALETING <i>✦</i> DETAILING <i>✦</i> PAINT CARE <i>✦</i> CONWY <i>✦</i> VALETING <i>✦</i> DETAILING <i>✦</i> PAINT CARE</div></div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <div className="sectionHead"><div><p className="eyebrow"><span /> What we do</p><h2>Care at every<br/><em>level.</em></h2></div><p>From a sharp weekly refresh to a complete paintwork transformation, every service gets the same enthusiast&apos;s eye.</p></div>
          <div className="serviceGrid">{services.map((item) => <article className="serviceCard" key={item.n}><div className="cardTop"><small>{item.n}</small><b>{item.icon}</b></div><h3>{item.title}</h3><p>{item.copy}</p><div className="cardFoot"><strong>{item.price}</strong><a href="tel:+447301847820" aria-label={`Book ${item.title}`}>BOOK <span>→</span></a></div></article>)}</div>
        </div>
      </section>

      <section className="section proof">
        <div className="shell proofGrid"><div className="proofImage"><img src="/conwy-van.jpg" alt="Conwy Car Care mobile detailing van on location"/><span>BUILT TO COME TO YOU</span></div><div className="proofCopy"><p className="eyebrow"><span /> Why Conwy Car Care</p><h2>More than<br/>just a <em>clean.</em></h2><p className="bigCopy">Your car is never just transport. Tyler treats every vehicle with the patience, products and precision he&apos;d demand for his own.</p><div className="statGrid"><div><b>01</b><strong>Fully mobile</strong><p>Professional car care, wherever your car lives.</p></div><div><b>02</b><strong>Owner operated</strong><p>One point of contact, one standard of finish.</p></div><div><b>03</b><strong>Enthusiast led</strong><p>Real care from someone who genuinely gets cars.</p></div><div><b>04</b><strong>Clear pricing</strong><p>Straightforward packages with no mystery extras.</p></div></div></div></div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="shell"><div className="sectionHead"><div><p className="eyebrow"><span /> Simple pricing</p><h2>Choose your<br/><em>finish.</em></h2></div><p>Prices are based on vehicle size. For unusual vehicles or specific detailing requirements, call Tyler for a tailored quote.</p></div>
          <div className="priceTable"><div className="priceRow labels"><span>Vehicle</span><span>Mini valet</span><span>Full valet</span><span>Detailing</span><span></span></div>{pricing.map((row) => <div className={`priceRow ${row.featured ? 'featured' : ''}`} key={row.size}><span><strong>{row.size}</strong><small>{row.example}</small></span><b>{row.mini}</b><b>{row.full}</b><b>{row.detail}</b><a href="tel:+447301847820" aria-label={`Book for ${row.size}`}>→</a></div>)}</div>
          <p className="priceNote">Not sure which size or service fits? <a href="tel:+447301847820">Call Tyler on +44 7301 847820</a></p>
        </div>
      </section>

      <section className="section owner" id="about"><div className="shell ownerGrid"><div><p className="eyebrow"><span /> Meet the owner</p><h2>Tyler<br/><em>Channer.</em></h2></div><div><p className="quote">“I&apos;m a car enthusiast first. Conwy Car Care exists to give every customer the finish I&apos;d want on my own vehicle.”</p><p className="ownerText">No rushed handovers, no conveyor-belt cleans. Tyler personally looks after your car from first call to final walk-around—bringing honest advice and a proper standard of care to every booking.</p><a className="textLink ownerLink" href="tel:+447301847820">Speak to Tyler <span>↗</span></a></div></div></section>

      <section className="book"><div className="shell bookInner"><p>READY WHEN YOU ARE</p><h2>Give your car the care<br/>it <em>deserves.</em></h2><a className="button yellow" href="tel:+447301847820">Call +44 7301 847820 <b>↗</b></a></div></section>

      <footer><div className="shell footerGrid"><div className="brand footerBrand"><span>CONWY</span><small>CAR CARE</small></div><div><small>SERVICES</small><a href="#services">Mini valet</a><a href="#services">Full valet</a><a href="#services">Detailing</a></div><div><small>CONTACT</small><a href="tel:+447301847820">+44 7301 847820</a><span>Conwy & surrounding areas</span></div><div className="footerEnd"><span>Owner operated by<br/>Tyler Channer</span><a href="#top">BACK TO TOP ↑</a></div></div><div className="shell copyright">© 2026 CONWY CAR CARE <span>VALETING & DETAILING</span></div></footer>
      <a className="mobileCall" href="tel:+447301847820">Call to book <span>↗</span></a>
    </main>
  );
}
