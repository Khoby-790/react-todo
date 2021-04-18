import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import {GiHamburgerMenu} from 'react-icons/gi'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white py-2 flex justify-between items-center">
        <div className="w-1/4 flex px-4">
          <span className="mr-5">
            <GiHamburgerMenu size={30} />
          </span>
          <span>Form Builder</span>
        </div>
        <div className="flex-1">
          <div className="bg-gray-300 w-full flex  rounded-md overflow-hidden">
            <div>

            </div>
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
