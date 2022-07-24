import style from "./ActivitiesList.module.css";
import Activity from "./resources/Activity.component";
export default function ActivitiesList({ activities }) {
  return (
    <div className={style.Container}>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
