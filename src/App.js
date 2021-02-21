import { useState } from "react";
import "./App.css";
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  MdGraphicEq
} from "@chakra-ui/react";

function App() {
  const [value, setValue] = useState(8);
  const handleChange = (value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <Container>
      <Grid>
        <GridItem bg="grey" style={{ marginTop: "10rem", padding: "20px" }}>
          <Heading as="h1" style={{ textAlign: "center" }}>
            Password Generator
          </Heading>
          <Input size="md" isDisabled={true} variant="filled" />

          <Slider
            min={8}
            max={100}
            value={value}
            onChange={handleChange}
            flex="1"
            focusThumbOnChange={false}
          >
            <SliderTrack bg="red.100">
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb children={value} fontSize="sm" boxSize="32px" />
          </Slider>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable email alerts?
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
