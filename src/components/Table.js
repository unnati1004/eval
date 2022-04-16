import axios from "axios";
import { useEffect } from "react";
import { useState,useDispatch } from "react";
import "./table.css";
import { addCity } from "../Redux/action";
import { Link } from "react-router-dom";
// import { update } from "./Update";
export const Table = () => {
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    getdata()
  }
}, [handle]);

const getdata =()=>{
  axios.get(`http://localhost:3001/City`).then((res) => {
    let final = dispatch(addCity)
    setHandle([...final.payload]);
  });
  const handleDel = (id) => {
    axios.delete(`http://localhost:3001/City/${id}`).then(() => {
      getdata()
    });
  };
  return (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "50px",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
                <td>
                  <button><Link to={`/update/${e.id}`}>Edit</Link></button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDel(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
