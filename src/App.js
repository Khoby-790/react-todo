import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";
import Builder from "./pages/Builder";
import { PreviewWrapper } from "./pages/Preview";
import BuilderProvider from "./pages/Builder/context/BuilderContext";

function App() {
  return (
    <BrowserRouter >
      <div className="h-screen overflow-hidden">
        <Navbar />
        <BuilderProvider>
          <div className="h-full max-h-full bg-gray-200 flex-1 overflow-y-hidden">
            <Route path="/" exact component={Welcome} />
            <Route path="/builder" exact component={Builder} />
            <Route path="/preview" exact component={PreviewWrapper} />
          </div>
        </BuilderProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
