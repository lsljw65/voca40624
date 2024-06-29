import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch(
    "https://my-json-server.typicode.com/lsljw65/voca-json2/days"
  );
  const history = useNavigate();
  function addDay() {
    fetch("https://my-json-server.typicode.com/lsljw65/voca-json2/days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      alert("생성이 완료되었습니다.");
      history("/");
    });
  }
  return (
    <div>
      <h2>현재 일수 : {days.length}일</h2>
      <button onClick={addDay}>Day추가</button>
    </div>
  );
}
