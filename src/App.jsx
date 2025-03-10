import "./App.css";
import { ColorCardSection } from "./components/ColorCardSection/ColorCardSection.jsx";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.jsx";
import { initialThemes } from "./db.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

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
          <article key={theme.id} className="color-card__section">
            <ColorCardSection
              onDeleteTheme={() => handleDeleteTheme(theme.id)}
              title={theme.name}
              colors={theme.colors}
            />
          </article>
        ))}
      </main>
    </>
  );
}

export default App;
