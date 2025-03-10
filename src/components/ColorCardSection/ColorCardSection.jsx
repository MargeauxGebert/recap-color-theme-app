import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { ColorCard } from "../ColorCard/ColorCard.jsx";
import { ColorCardPreview } from "../ColorCardPreview/ColorCardPreview.jsx";
import { useState } from "react";
import { EditForm } from "../EditForm/EditForm.jsx";

const displayState = {
  preview: "preview",
  details: "details",
  edit: "edit",
};

export function ColorCardSection({ theme, onDeleteTheme, onEditTheme }) {
  const cardPreview = theme.colors.map((color) => (
    <ColorCardPreview key={color.value} role={color.role} value={color.value} />
  ));
  const cardDetails = theme.colors.map((color) => (
    <ColorCard key={color.value} role={color.role} value={color.value} />
  ));

  const [display, setDisplay] = useState(displayState.preview);

  return (
    <>
      <div
        className="color-card__section-title"
        onClick={() =>
          setDisplay(
            display === displayState.preview
              ? displayState.details
              : displayState.preview
          )
        }
      >
        <h2>{theme.name}</h2>
        {display === displayState.preview ? (
          <IconCaretDownFilled />
        ) : (
          <IconCaretUpFilled />
        )}
      </div>
      {display === displayState.preview && cardPreview}

      {display === displayState.details && (
        <>
          <button
            className="edit-button"
            onClick={() => setDisplay(displayState.edit)}
          >
            Edit
          </button>
          <button className="delete-button" onClick={onDeleteTheme}>
            Delete
          </button>
          {cardDetails}
        </>
      )}
      {display === displayState.edit && (
        <EditForm
          theme={theme}
          onEditTheme={onEditTheme}
          setDisplay={setDisplay}
        />
      )}
    </>
  );
}
