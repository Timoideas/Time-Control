import style from "./ActivitiesList.module.css";
export default function ActivitiesList({ activities }) {
  return (
    <div className={style.Container}>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
