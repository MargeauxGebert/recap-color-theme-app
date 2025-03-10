import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { ColorCard } from "../ColorCard/ColorCard.jsx";
import { ColorCardPreview } from "../ColorCardPreview/ColorCardPreview.jsx";
import { useState } from "react";


export function ColorCardSection({ title, colors, onDeleteTheme }) {
  const [showDetails, setShowDetails] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(<IconCaretDownFilled />);
  const cardPreview = colors.map((color) => (
    <ColorCardPreview key={color.value} role={color.role} value={color.value} />
  ));
  const cardDetails = colors.map((color) => (
    <ColorCard key={color.value} role={color.role} value={color.value} />
  ));
  function handleToggle() {
    if (showDetails === false) {
      setShowDetails(true);
      setToggleArrow(<IconCaretUpFilled />);
    } else {
      setShowDetails(!showDetails);
      setToggleArrow(<IconCaretDownFilled />);
    }
  }
  return (
    <>
      <div className="color-card__section-title" onClick={handleToggle}>
        <h2>{title}</h2>
        {toggleArrow}
      </div>
      {showDetails ? (
        <>
          {cardDetails}
          <button className="edit-button">Edit</button>
          <button className="delete-button" onClick={onDeleteTheme}>
            Delete
          </button>{" "}
        </>
      ) : (
        cardPreview
      )}
    </>
  );
}
