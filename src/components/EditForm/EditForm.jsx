export function EditForm() {
  return (
    <form className="edit-form">
      <h3 className="edit-form__title">Edit Form</h3>
      <label htmlFor="edit-name"></label>
      <input type="text" id="edit-name" defaultValue={name} />
      <div className="edit-form__colors">
        <label htmlFor="edit-color"></label>
        <input type="color" id="edit-color" />

        <label htmlFor="edit-color"></label>
        <input type="color" id="edit-color" />

        <label htmlFor="edit-color"></label>
        <input type="color" id="edit-color" />

        <label htmlFor="edit-color"></label>
        <input type="color" id="edit-color" />
      </div>

      <button className="save-button">Save Theme</button>
    </form>
  );
}
