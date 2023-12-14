import React from "react";
import { Button } from "antd";

import { useAppSelector } from "./app/hooks";
import { selectTheme } from "./app/configSlice";

function App() {
  const theme = useAppSelector(selectTheme);

  return (
    <div>
      <Button type="primary">Button</Button>
      <p>Football World Cup scoreboard</p>
      <p>{theme}</p>
    </div>
  );
}

export default App;
