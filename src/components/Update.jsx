import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";

export const Update =()=>{
    const [data,setData] = useState({})
    const [form,setForm] = useState({
        city:"",
        population:"",
        country:""
    });
        useEffect(()=>{
            if(id)
            {
                fetchdata()
            }

        })
       const handlechange=(e)=>{
            const {id,value} = e.target;
            setForm({...form, [id]:value})
        }


       const fetchdata = ()=>{
            axios.get(`http://localhost:3001/City/${id}`)
            .then((e)=>{
                setData(...e.data);
            })
        }


        const {id} = useParams();
       const handlesubmit =(e)=>{
            e.preventDefault();
            axios.patch(`http://localhost:3001/City/${id}`,form)
            .then(()=> alert('$form'))
            .then(()=>window.location.reload())
        }


    return (
            <div>
                <form action="" onSubmit={(e)=>{handlesubmit(e)}}>
                    <input type="text" 
                    id="city"
                    defaultValue={data.city}
                    onChange={(e)=>{handlechange(e)}}
                    placeholder="Enter a city" />

                    <input type="text" 
                    id="population"
                    defaultValue={data.population}
                    onChange={(e)=>{handlechange(e)}}
                    placeholder="Enter a population" />

                    <input type="text" 
                    id="country"
                    defaultValue={data.country}
                    onChange={(e)=>{handlechange(e)}}
                    placeholder="Enter a country" />
                </form>
            </div>
         

    )
}