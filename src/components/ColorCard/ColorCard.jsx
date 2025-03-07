export function ColorCard({ value, role }) {
  return (
    <section className="color-card">
      <div className="color-card__color" style={{backgroundColor: value}}></div>
      <div className="color-card__info">
        <h4>{role}</h4>
        <p className="color-card__hex">{value}</p>
      </div>
    </section>
  );
}
