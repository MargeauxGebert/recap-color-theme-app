export function ColorCard({ value, role }) {
  return (
    <section className="color-card">
      <label htmlFor="color-picker"></label>
      <input
        className="input-color"
        type="color"
        id="color-picker"
        value={value}
      />
      <div className="color-card__info">
        <h4>{role}</h4>
        <p className="color-card__hex">{value}</p>
      </div>
    </section>
  );
}
