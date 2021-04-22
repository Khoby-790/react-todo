import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";
import Builder from "./pages/Builder";

function App() {
  return (
    <BrowserRouter >
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-full max-h-full flex-1 overflow-hidden">
          <Route path="/" exact component={Welcome} />
          <Route path="/builder" exact component={Builder} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
