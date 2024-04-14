import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function CityDetails() {
  const { cityName } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            cityName
          )}&appid=c5c42dd3f124e401c56a4a19aaaedbe1`
        );
        const data = await response.json();
      } catch (err) {
        console.log("Error fetching data :", err);
      }
    }
    fetchData();
  }, [cityName]);

  return(<div>
    
  </div>);
}
