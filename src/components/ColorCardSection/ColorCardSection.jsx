import { themes } from "../../db.js";
import { ColorCard } from "../ColorCard/ColorCard.jsx";

export function ColorCardSection({ title }) {
  return (
    <article className="color-card">
      <h2 className="color-card__title">{title}</h2>
      {themes[0].colors.map((colors) => (
        <ColorCard
          value={colors.value}
          role={
            colors.role //.charAt(0).toUpperCase() + colors.role.slice(1)
          }
        />
      ))}
    </article>
  );
}
