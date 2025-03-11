import { v4 as uuid } from "uuid";
import { ColorPicker } from "./ColorPicker";

const initialData = [
  {
    role: "primary",
    value: "#7F95D1",
  },
  {
    role: "secondary",
    value: "#FF82A9",
  },
  {
    role: "surface",
    value: "#CEF9F2",
  },
  {
    role: "surface-on",
    value: "#231F20",
  },
];

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
          value: data["surface-on"],
        },
      ],
    };
    onAddTheme(newTheme);
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
      <fieldset className="form__color-section">
        {initialData.map((color) => (
          <ColorPicker key={color.role} color={color} role={color.role} />
        ))}
      </fieldset>
      <button type="submit" className="form__button">
        Add your Theme
      </button>
    </form>
  );
}
