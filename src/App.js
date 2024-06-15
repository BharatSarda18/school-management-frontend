import { RouterProvider } from "react-router-dom";
import router from "./component/routes/Routes";


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
