import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={Welcome} />
    </BrowserRouter>
  );
}

export default App;
