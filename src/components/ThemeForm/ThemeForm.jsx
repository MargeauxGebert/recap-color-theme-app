import { v4 as uuid } from "uuid";
export function ThemeForm({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const randomId = uuid();

    const newTheme = {
      id: `${randomId}`,
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data.surfaceon,
        },
      ],
    };
    onAddTheme(newTheme);
    console.log(newTheme);
    event.target.reset();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">
        <h2>Add a Theme</h2>
      </div>
      <label htmlFor="theme-name"></label>
      <input
        type="text"
        name="name"
        id="theme-name"
        placeholder="Name"
        required
      />
      <div className="form__color-section">
        <div className="form__color-input">
          <label htmlFor="color-primary"></label>
          <input
            type="color"
            id="color-primary"
            name="primary"
            defaultValue="#7F95D1"
          />
          <div className="form__color-input-info">
            <p>Primary</p>
            <label htmlFor="color-hex"></label>
            <input type="text" id="color-hex" defaultValue={"#7F95D1"} />
          </div>
        </div>
        <div className="form__color-input">
          <label htmlFor="color-secondary"></label>
          <input
            type="color"
            id="color-secondary"
            name="secondary"
            defaultValue="#FF82A9"
          />
          <div className="form__color-input-info">
            <p>Secondary</p>
            <label htmlFor="color-hex"></label>
            <input type="text" id="color-hex" defaultValue="#FF82A9" />
          </div>
        </div>
      </div>
      <div className="form__color-section">
        <div className="form__color-input">
          <label htmlFor="color-surface"></label>
          <input
            type="color"
            id="color-surface"
            name="surface"
            defaultValue="#CEF9F2"
          />
          <div className="form__color-input-info">
            <p>Surface</p>
            <label htmlFor="color-hex"></label>
            <input type="text" id="color-hex" defaultValue="#CEF9F2" />
          </div>
        </div>
        <div className="form__color-input">
          <label htmlFor="color-surface-on"></label>
          <input
            type="color"
            id="color-surface-on"
            name="surfaceon"
            defaultValue="#231F20"
          />
          <div className="form__color-input-info">
            <p>Surface-on</p>
            <label htmlFor="color-hex"></label>
            <input type="text" id="color-hex" defaultValue="#231F20" />
          </div>
        </div>
      </div>
      <button className="form__button">Add your Theme</button>
    </form>
  );
}
