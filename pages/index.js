import style from "styles/pages/index.module.css";
import Head from "heads/main.head";
import { Body, Section, SVG } from "components/timoideas/Timoideas.components";
import { useState } from "react";
import DailyTimeBar from "components/header/DailyTimeBar.component";
import DailySummary from "components/content/DailySummary.component";
import AccountAuth from "components/content/AccountAuth.component";
import ActivitiesList from "components/content/ActivitiesList.component";
import ActivitiesEditor from "components/content/ActivitiesEditor.component";
import AuthLogin from "components/Auth/AuthLogin.component";

export default function Index() {
  const [Auth, setAuth] = useState(true);
  const [Activities, setActivities] = useState([]);

  return (
    <>
      <Head />
      <Body>
        <Section size={1}>
          <div className={style.Container}>
            {!Auth ? (
              <AuthLogin />
            ) : (
              <>
                <DailyTimeBar />
                <AccountAuth />
                <DailySummary />
                <ActivitiesList activities={Activities} />
                <ActivitiesEditor activities={[Activities, setActivities]} />
              </>
            )}
          </div>
        </Section>
      </Body>
    </>
  );
}
export async function getServerSideProps(context) {
  const activities = await fetch("/api/activities").then((res) => res.json());
  return {
    props: {
      data: activities,
    },
  };
}
