'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

const services = [
  { id: 'mini', name: 'Mini Valet', note: 'Maintenance clean', from: 60 },
  { id: 'full', name: 'Full Valet', note: 'Complete inside & out', from: 80 },
  { id: 'detail', name: 'Detailing', note: 'Deep clean & paint care', from: 170 },
];

const sizes = [
  { id: 'small', name: 'Small', note: 'Hatchbacks · city cars' },
  { id: 'medium', name: 'Medium', note: 'Saloons · estates' },
  { id: 'large', name: 'Large', note: 'SUVs · 4x4s · vans' },
];

const prices: Record<string, Record<string, number>> = {
  mini: { small: 60, medium: 70, large: 80 },
  full: { small: 80, medium: 90, large: 90 },
  detail: { small: 170, medium: 180, large: 190 },
};

function makeDates() {
  const dates: { value: string; day: string; date: string; long: string }[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (dates.length < 8) {
    if (cursor.getDay() !== 0) {
      dates.push({
        value: cursor.toISOString().slice(0, 10),
        day: cursor.toLocaleDateString('en-GB', { weekday: 'short' }),
        date: cursor.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
        long: cursor.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

export default function BookingPage() {
  const [service, setService] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [vehicle, setVehicle] = useState('');
  const dates = useMemo(makeDates, []);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('service');
    if (selected && services.some((item) => item.id === selected)) setService(selected);
  }, []);

  const selectedService = services.find((item) => item.id === service);
  const selectedSize = sizes.find((item) => item.id === size);
  const selectedDate = dates.find((item) => item.value === date);
  const price = service && size ? prices[service][size] : null;

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      'Hi Tyler, I would like to request a booking with Conwy Car Care.',
      '',
      `Name: ${name}`,
      `Service: ${selectedService?.name}`,
      `Vehicle size: ${selectedSize?.name}`,
      `Vehicle: ${vehicle}`,
      `Preferred date: ${selectedDate?.long}`,
      `Preferred time: ${time}`,
      `Postcode: ${postcode}`,
      `Quoted price: £${price}`,
      '',
      'Please confirm availability and payment details. Thanks!',
    ].join('\n');
    window.location.href = `sms:+447301847820?&body=${encodeURIComponent(message)}`;
  }

  return (
    <main className="bookingPage">
      <header className="bookingNav shell">
        <a className="brand logoCrop" href="/" aria-label="Back to Conwy Car Care home"><img src="/conwy-logo-full.jpg" alt="Conwy Car Care" /></a>
        <a className="backLink" href="/">← Back to site</a>
      </header>

      <div className="bookingHero shell">
        <p className="eyebrow"><span /> Book your valet</p>
        <h1>Choose your<br/><em>finish.</em></h1>
        <p>Select your service, vehicle and preferred slot. Tyler will personally confirm availability before payment.</p>
      </div>

      <form className="bookingGrid shell" onSubmit={submitBooking}>
        <div className="bookingSteps">
          <fieldset>
            <legend><b>01</b><span>Choose a service</span></legend>
            <div className="choiceGrid serviceChoices">{services.map((item) => <label className={service === item.id ? 'selected' : ''} key={item.id}><input type="radio" name="service" value={item.id} checked={service === item.id} onChange={() => setService(item.id)} required/><span><strong>{item.name}</strong><small>{item.note}</small></span><b>from £{item.from}</b></label>)}</div>
          </fieldset>

          <fieldset>
            <legend><b>02</b><span>Choose vehicle size</span></legend>
            <div className="choiceGrid sizeChoices">{sizes.map((item) => <label className={size === item.id ? 'selected' : ''} key={item.id}><input type="radio" name="size" value={item.id} checked={size === item.id} onChange={() => setSize(item.id)} required/><span><strong>{item.name}</strong><small>{item.note}</small></span>{service && <b>£{prices[service][item.id]}</b>}</label>)}</div>
          </fieldset>

          <fieldset>
            <legend><b>03</b><span>Pick a preferred date</span></legend>
            <div className="dateScroller">{dates.map((item) => <label className={date === item.value ? 'selected' : ''} key={item.value}><input type="radio" name="date" value={item.value} checked={date === item.value} onChange={() => setDate(item.value)} required/><small>{item.day}</small><strong>{item.date}</strong></label>)}</div>
            <div className="timeChoices">{['Morning · 8–11', 'Midday · 11–2', 'Afternoon · 2–5'].map((item) => <label className={time === item ? 'selected' : ''} key={item}><input type="radio" name="time" value={item} checked={time === item} onChange={() => setTime(item)} required/><span>{item}</span></label>)}</div>
          </fieldset>

          <fieldset>
            <legend><b>04</b><span>Your details</span></legend>
            <div className="detailsGrid"><label><span>Name</span><input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your full name" /></label><label><span>Postcode</span><input value={postcode} onChange={(e) => setPostcode(e.target.value)} required placeholder="e.g. LL32 8LD" /></label><label className="wide"><span>Vehicle make & model</span><input value={vehicle} onChange={(e) => setVehicle(e.target.value)} required placeholder="e.g. BMW 3 Series" /></label></div>
          </fieldset>
        </div>

        <aside className="bookingSummary">
          <p className="summaryLabel">YOUR BOOKING</p>
          <h2>{selectedService?.name || 'Select a service'}</h2>
          <dl><div><dt>Vehicle</dt><dd>{selectedSize?.name || 'Not selected'}</dd></div><div><dt>Date</dt><dd>{selectedDate?.date || 'Not selected'}</dd></div><div><dt>Time</dt><dd>{time || 'Not selected'}</dd></div></dl>
          <div className="total"><span>Estimated total</span><strong>{price ? `£${price}` : '—'}</strong></div>
          <button type="submit">Send booking request <span>→</span></button>
          <small className="summaryNote">No payment is taken yet. Tyler will confirm your slot and send payment details.</small>
          <a href="tel:+447301847820">Prefer to call? +44 7301 847820</a>
        </aside>
      </form>
    </main>
  );
}
