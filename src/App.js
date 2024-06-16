import { RouterProvider } from "react-router-dom";
import router from "./component/routes/Routes";
import NavBar from "./component/common/NavBar";


function App() {
  return (
    <>
    
      <RouterProvider router={router}>
      
      </RouterProvider>
    </>
  );
}

export default App;
