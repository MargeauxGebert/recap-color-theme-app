import { useEffect, useState } from "react";

export function ColorCard({ value, role }) {
  const [colorName, setColorName] = useState("");
  
  console.log(colorName);
  useEffect(() => {
    const hexValue = value.slice(1);
    async function getColorNames() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${hexValue}`
      );
      const colorNames = await response.json();

      setColorName(colorNames.name.value);

    }
    getColorNames();
  }, [value]);

console.log(colorName);
  return (
    <section className="color-card">
      <div
        className="color-card__color"
        style={{ backgroundColor: value }}
      ></div>
      <div className="color-card__info">
        <h4>{role}</h4>
        <p className="color-card__color-name"> {colorName} </p>
        <p className="color-card__hex">{value.toUpperCase()}</p>
      </div>
    </section>
  );
}
