import { createBrowserRouter } from "react-router-dom";
import {SignUp} from "../components/SignUp.jsx";
import { Login } from "../components/Login.jsx";
import CustomerForm from "../components/customerForm.jsx";
import CustomerHomePage from "../components/CustomerHomePage.jsx";
import UpdateData from "../components/UpdateData.jsx";



const customer = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/HomePage",
    element:<CustomerHomePage/>
  },
  {
    path:"/customerForm",
    element:<CustomerForm/>
  },
  {
    path:"/updateData/:id",
    element:<UpdateData/>
  }
]);

export default customer;
