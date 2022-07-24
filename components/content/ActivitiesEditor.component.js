import useSWR from "swr";
import style from "./ActivitiesEditor.module.css";

export default function ActivitiesEditor({ activities }) {
  return (
    <div
      className={style.Container}
      onClick={() => {
        //  change the state of the activities with swr
        fetch("/api/user", {
          method: "post",
          body: JSON.stringify({ activities: ["cocinar"] }),
        }).then((res) => res.json());
      }}
    ></div>
  );
}
