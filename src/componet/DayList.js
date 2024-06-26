// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function DayList() {
  // const [days, setDays] = useState([]);
  const days = useFetch("http://localhost:3001/days");
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);
  // console.log(dummy);
  if (days.length === 0) {
    return <span>Loding...</span>;
  }
  return (
    <div>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
