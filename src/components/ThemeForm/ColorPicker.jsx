import { useState } from "react";

export function ColorPicker({ initialValue, role }) {
  
  const [value, setValue] = useState(initialValue);
  function handleColorChange(event) {
    setValue(event.target.value)
  }
  return (
    <div className="form__color-input">
      <input
        type="color"
        name={role}
        value={value}
        onChange={handleColorChange}
      />
      <div className="form__color-input-info">
        <p>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
        <input
          type="text"
          name={role}
          value={value.toUpperCase()}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}
