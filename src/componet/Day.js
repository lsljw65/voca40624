// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const a = useParams();
  const day = a.day;

  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  // const [words, setWords] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const words = useFetch(
    `https://my-json-server.typicode.com/lsljw65/voca-json2/words?day=${day}`
  );
  return (
    <div>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loding...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
