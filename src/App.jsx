import "./App.css";
import { ColorCardSection } from "./components/ColorCardSection/ColorCardSection.jsx";
import { themes } from "./db.js";


function App() {
  return (
    <>
      <header className="header">
        <h1>Color Theme Creator</h1>
      </header>
      <main>
        {themes.map(theme => 
          <ColorCardSection key={theme.id} title={theme.name} colors={theme.colors} />
        )}
      
      
      </main>
    </>
  );
}

export default App;
