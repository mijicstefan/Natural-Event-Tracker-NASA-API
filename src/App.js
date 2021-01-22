import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader"
import Header from "./components/Header"

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        //This is a NASA API
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []);

  return (
    <div>
    <Header/>
      {loading ? <Loader/> : <Map eventData={eventData}/>}
    </div>
  );
}

export default App;
