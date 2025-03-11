import { useState } from "react";

export function ColorPicker({ inititalValue, role }) {
  const [value, setValue] = useState(inititalValue);
  return (
    <div className="form__color-input">
      <input
        type="color"
        name={role}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="form__color-input-info">
        <p>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
        <input
          type="text"
          name={role}
          value={value.toUpperCase()}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
}
