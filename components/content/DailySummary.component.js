import { useEffect, useState } from "react";
import style from "./DailySummary.module.css";
export default function DailySummary() {
  const [Hora, setHora] = useState(
    new Intl.DateTimeFormat("es-ES", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date())
  );
  useEffect(() => {
    const UpdateTime = setInterval(() => {
      setHora(
        new Intl.DateTimeFormat("es-ES", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(new Date())
      );
    }, 1000);
    return () => {
      clearInterval(UpdateTime);
    };
  }, []);
  return (
    <div className={style.Container}>
      <h2>
        {
          // Mes de hoy, abreviado en mayúsculas :
          new Intl.DateTimeFormat("es-ES", {
            month: "long",
            day: "numeric",
          }).format(new Date())
        }
      </h2>
      <h2>
        {
          // Día de hoy, : "Martes"
          new Intl.DateTimeFormat("es-ES", {
            weekday: "long",
          }).format(new Date())
        }
      </h2>
      <h2>{Hora}</h2>
    </div>
  );
}
