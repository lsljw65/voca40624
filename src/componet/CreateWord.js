import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const days = useFetch(
    "https://my-json-server.typicode.com/lsljw65/voca-json2/days"
  );
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  function onSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      console.log(isLoading);
      fetch(`https://my-json-server.typicode.com/lsljw65/voca-json2/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다.");
          history(`/day/${dayRef.current.value}`);
          setIsLoading(false);
          console.log(isLoading);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>Eng</label>
          <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
          <label>Kor</label>
          <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
        >
          {isLoading ? "Saving..." : "저장"}
        </button>
      </form>
    </>
  );
}
