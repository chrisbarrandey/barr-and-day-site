export function EventsSection() {
  const subject = encodeURIComponent("Event Quote Request — Barr & Day Coffee Co.");
  const body = encodeURIComponent(
    "Hi Barr & Day team,\n\nI'd like a quote for:\n\nEvent type (wedding / party / market / other):\nDate:\nLocation:\nEstimated guest count:\n\nThanks!"
  );
  const mailto = `mailto:chris@barranddaycoffee.com?subject=${subject}&body=${body}`;

  return (
    <section className="events" id="events">
      <div className="events__inner">
        <h2 className="events__title">Weddings, parties &amp; events</h2>
        <p className="events__text">
          Bring Barr &amp; Day to your next event — weddings, private parties,
          markets and more. Tell us the details and we&apos;ll send you a quote.
        </p>
        <div className="events__actions">
          <a className="btn btn--primary" href={mailto}>
            Request a quote
          </a>
          <a className="events__phone" href="tel:+19159772655">
            (915) 977-2655
          </a>
        </div>
      </div>
    </section>
  );
}
