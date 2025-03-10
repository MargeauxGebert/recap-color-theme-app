export function EditForm({ onEditTheme, theme, setDisplay }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedTheme = {
      id: theme.id,
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
    onEditTheme(editedTheme);
    setDisplay("details");
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h3 className="edit-form__title">Edit Form</h3>
      <input type="text" id="edit-name" name="name" defaultValue={theme.name} />
      <div className="edit-form__colors">
        {theme.colors.map((color) => (
          <input
            type="color"
            name={color.role}
            key={color.role}
            defaultValue={color.value}
          />
        ))}
      </div>

      <button className="save-button">Save Theme</button>
    </form>
  );
}
