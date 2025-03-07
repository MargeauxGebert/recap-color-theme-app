import { themes } from "../../db.js";
import { ColorCard } from "../ColorCard/ColorCard.jsx";
import { ColorCardPreview } from "../ColorCardPreview/ColorCardPreview.jsx";

export function ColorCardSection({ title }) {
  return (
    <article className="color-card__section">
      <h2 className="color-card__section-title">{title}</h2>
      {themes[0].colors.map((colors) => (
        <ColorCard
          value={colors.value}
          role={
            colors.role //.charAt(0).toUpperCase() + colors.role.slice(1)
          }
        />

      ))}
        {themes[1].colors.map((colors) => (
          <ColorCardPreview value={colors.value} />
        ))}
    </article>
  );
}
