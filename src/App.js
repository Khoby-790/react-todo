import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-white py-2 flex justify-between items-center">
        <div className="w-1/4">
          <span>Forms</span>
        </div>
        <div className="flex-1">
          <div className="bg-gray-300 w-full flex  rounded-md overflow-hidden">
            <div></div>
            <input type="text" />
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
      <Route path="/" component={Welcome} />
    </BrowserRouter>
  );
}

export default App;
