import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter >
      <div className="h-full max-h-screen flex flex-col bg-red-200">
        <Navbar />
        <div className="h-full bg-red-200">
          <Route path="/" component={Welcome} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
