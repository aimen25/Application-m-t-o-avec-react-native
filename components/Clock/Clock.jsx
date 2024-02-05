import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/date-service";
import Txt from "../Txt/Txt";
import { s } from "./Clock.style";

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
}
