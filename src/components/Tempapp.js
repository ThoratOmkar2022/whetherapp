import React from "react";
import "./css/style.css";
import { useState ,useEffect} from "react";


const Tempapp = () => {
  const [city, setCity] = useState(null);
  const[search,setSearch]=useState("");

  useEffect(()=>{
    const fetchApi=async()=>{
        
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6d055e39ee237af35ca066f35474e9df`

        const response= await fetch(url);
        const resJson= await response.json();
        console.log(resJson)
   
    setCity(resJson.main);
    }
    fetchApi();
  },[search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
                setSearch(event.target.value)
            }}
          />
        </div>
{!city ? (
    <p className="errorMsg"> No City Found</p>
):(
    <>
    <div className="info">
    <h2 className="location">
      <i className="fa fa-street-view" aria-hidden="true"></i>
      {search}
    </h2>
    <h1 className="temp">{city.temp}</h1>
    <h3 className="tempmin_max"> Min:{city.temp_min} | Max:{city.temp_max}</h3>
  </div>

<div className="wave1"> </div>
<div className="wave2"> </div>
<div className="wave3"> </div>
</>
)

}
</div>  
    </>
  );
};
export default Tempapp;
