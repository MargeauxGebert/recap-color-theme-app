import { useState } from "react";
import "./App.css";
import { ColorCardSection } from "./components/ColorCardSection/ColorCardSection.jsx";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.jsx";
import { initialThemes } from "./db.js";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
  }
  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);
    setThemes(updatedThemes);
  }

  return (
    <>
      <header className="header">
        <h1>Color Theme Creator</h1>
      </header>
      <main>
        <ThemeForm onAddTheme={handleAddTheme} />
        {themes.map((theme) => (
          <ColorCardSection onDeleteTheme={handleDeleteTheme}
            key={theme.id}
            title={theme.name}
            colors={theme.colors}
          />
        ))}
      </main>
    </>
  );
}

export default App;
