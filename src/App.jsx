import "./App.css";
import { ColorCardSection } from "./components/ColorCardSection/ColorCardSection.jsx";
import { EditForm } from "./components/EditForm/EditForm.jsx";
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

  function handleEditTheme(modifiedTheme) {
    const modifiedElement = themes.map((theme) => {
      if (theme.id !== modifiedTheme.id) {
        return theme;
      }
      return modifiedTheme;
    });
    setThemes(modifiedElement);
  }

  return (
    <>
      <header className="header">
        <h1>Color Theme Creator</h1>
      </header>
      <main>
        <ThemeForm onAddTheme={handleAddTheme} />
        {themes.map((theme) => (
          <section key={theme.id} className="color-card__section">
            <ColorCardSection
              onEditTheme={handleEditTheme}
              onDeleteTheme={() => handleDeleteTheme(theme.id)}
              theme={theme}
            />
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
