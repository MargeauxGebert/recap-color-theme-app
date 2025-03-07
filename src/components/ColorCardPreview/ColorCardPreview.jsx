export function ColorCardPreview({ value }) {
  return (
    <section className="color-card__preview">
      <label htmlFor="color-picker"></label>
      <input
        className="input-color__preview"
        type="color"
        id="color-picker"
        value={value}
      />
    </section>
  );
}
