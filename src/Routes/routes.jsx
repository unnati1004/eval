import {Route,Routes} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";
import { Country } from "../components/Country";
import { City } from "../components/City";
import { Update } from "../components/Update";
export const AllRoutes=() => {
    return (
       <div>
       <Navbar/>
       <Routes>
       <Route path={"/"} element={<Table />}></Route>
       <Route path={"/add-Country"} element={<Country />}></Route>
       <Route path={"/add-City"} element={<City />}></Route>
       <Route path={"/update/:id"} element={<Update />}></Route>
       
       </Routes>
       </div>
       
    )
}