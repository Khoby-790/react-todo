import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";
import Builder from "./pages/Builder";
import { PreviewWrapper } from "./pages/Preview";

function App() {
  return (
    <BrowserRouter >
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-full max-h-full bg-gray-200 flex-1 overflow-y-hidden">
          <Route path="/" exact component={Welcome} />
          <Route path="/builder" exact component={Builder} />
          <Route path="/preview" exact component={PreviewWrapper} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
