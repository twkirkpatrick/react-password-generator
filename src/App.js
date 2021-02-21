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
    <Container centerContent={true}>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem bg="teal" style={{ marginTop: "15rem", padding: "5rem" }}>
          <h1 style={{ textAlign: "center", fontSize: "60px" }}>
            Password Generator
          </h1>
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
            <Switch className="switch" colorScheme="purple" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Uppercase
            </FormLabel>
            <Switch className="switch" colorScheme="purple" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Lowercase
            </FormLabel>
            <Switch className="switch" colorScheme="purple" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Numbers
            </FormLabel>
            <Switch className="switch" colorScheme="purple" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Symbols
            </FormLabel>
          </FormControl>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
