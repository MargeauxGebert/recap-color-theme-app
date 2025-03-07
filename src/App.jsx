
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
     
          <ColorCardSection title={themes[0].name}  />
      
      </main>
    </>
  );
}

export default App;
