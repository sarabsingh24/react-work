import React from "react";
import Box from "@material-ui/core/Box";
import Data from "./Data";
import QuestionAns from "./QuestionAns";
import { ResponsiveCheck } from "../../components/responsive/ResponsiveCheck";
import "./Style.css";

export default function Accordion() {
  const { IsDesktop } = ResponsiveCheck();
  // const [questions, setQuestions] = React.useState(Data);

  return (
    <main>
      <div className="container">
        <h3 className="qaHeading">Questions & Answers</h3>
        <section className="info">
          {Data.map((quest) => {
            return <QuestionAns key={quest.id} {...quest} />;
          })}
        </section>
      </div>
    </main>
  );
}
