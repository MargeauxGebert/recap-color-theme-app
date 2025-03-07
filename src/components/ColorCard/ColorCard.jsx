export function ColorCard() {
  return (
    <article className="color-card">
      <h2 className="color-card__title">Title</h2>
      <section className="color-card__section">
        <label htmlFor="primary__color-picker"></label>
        <input className="input-color" type="color" id="primary__color-picker"/>
        <div className="color-card__info">
            <p>Primary</p>
            <label htmlFor="primary__hex-color"></label>
            <input  type="text" id="primary__hex-color" placeholder="#000000"/>
        </div>
      </section>
      <section className="color-card__section">
        <label htmlFor="secondary__color-picker"></label>
        <input className="input-color" type="color" id="secondary__color-picker"/>
        <div>
            <p>Secondary</p>
            <label htmlFor="secondary__hex-color"></label>
            <input type="text" id="secondary__hex-color" placeholder="#000000"/>
        </div>
      </section>
      <section className="color-card__section">
        <label htmlFor="surface__color-picker"></label>
        <input className="input-color" type="color" id="surface__color-picker"/>
        <div>
            <p>Surface</p>
            <label htmlFor="surface__hex-color"></label>
            <input type="text" id="surface__hex-color" placeholder="#000000"/>
        </div>
      </section>
      <section className="color-card__section">
        <label htmlFor="onsurface__color-picker"></label>
        <input className="input-color" type="color" id="onsurface__color-picker"/>
        <div>
            <p>On Surface</p>
            <label htmlFor="onsurface__hex-color"></label>
            <input type="text" id="onsurface__hex-color" placeholder="#000000"/>
        </div>
      </section>
    </article>
  );
}
