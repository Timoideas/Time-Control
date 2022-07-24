import style from "styles/pages/index.module.css";
import Head from "heads/main.head";
import { Body, Section, SVG } from "components/timoideas/Timoideas.components";
import { useState } from "react";
import DailyTimeBar from "components/header/DailyTimeBar.component";
import DailySummary from "components/content/DailySummary.component";

export default function Index() {
  return (
    <>
      <Head />
      <Body>
        <Section size={1}>
          <div className={style.Container}>
            <DailyTimeBar />
            <DailySummary />
          </div>
        </Section>
      </Body>
    </>
  );
}
