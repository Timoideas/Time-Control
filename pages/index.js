import style from "styles/pages/index.module.css";
import Head from "heads/main.head";
import { Body, Section, SVG } from "components/timoideas/Timoideas.components";
import Sockets from "components/timoideas/Sockets.component";
import Timoideas from "public/svg/global/timoideas.svg";
import GitHub from "public/svg/global/github.svg";
import { useState } from "react";
import DailTimeBar from "components/Header/DailTimeBar.component";

export default function Index() {
  return (
    <>
      <Head />
      <Body>
        <Section size={1}>
          <div className={style.Container}>
            <DailTimeBar />
          </div>
        </Section>
      </Body>
    </>
  );
}
