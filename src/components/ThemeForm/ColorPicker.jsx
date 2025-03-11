import { useEffect, useState } from "react";

export function ColorPicker({ color, role, resetSignal }) {
  const [value, setValue] = useState(color.value);

  useEffect(() => {
    setValue(color.value);
  }, [resetSignal, color.value]);

  function handleColorChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="form__color-input">
      <input
        type="color"
        name={role}
        defaultValue={value}
        onChange={handleColorChange}
      />
      <div className="form__color-input-info">
        <p>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
        <input
          type="text"
          name={role}
          defaultValue={value.toUpperCase()}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}
