import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "./components/Box.styled";
import { Image } from "./components/Image.styled";
import { Headline } from "./components/Headline.style";
import { Text } from "./components/Text.styled";
import { Button } from "./components/Button.styled";
function App() {
  return (
    <div className="App">
      <Box>
        <Image />
        <Headline>Headline</Headline>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit<br></br> tempusrisu ut. Sit
          molestie ornare in venen.
        </Text>
        <Button primary>See more</Button>
        <Button outlined>Save</Button>
      </Box>
    </div>
  );
}

export default App;
