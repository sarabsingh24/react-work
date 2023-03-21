import React, { useState } from "react";
import ChangeText from "./ChangeText";

export default function RendomError() {
  const [text, setText] = useState("Hello world");

  return (
    <div>
      <ChangeText text={text} setText={setText} />
    </div>
  );
}
