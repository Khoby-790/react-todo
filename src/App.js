import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter >
      <div className="h-screen max-h-screen">
        <Navbar />
        <Route path="/" component={Welcome} />
      </div>
    </BrowserRouter>
  );
}

export default App;
