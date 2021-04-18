import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter >
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-full max-h-full flex-1 bg-red-200 overflow-y-scroll">
          <Route path="/" component={Welcome} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
