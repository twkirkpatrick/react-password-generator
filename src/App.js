import { useState } from "react";
import "./App.css";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputRightAddon,
  GridItem,
  InputGroup,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useToast,
  Box,
  MdGraphicEq
} from "@chakra-ui/react";

import { CopyIcon, LockIcon } from "@chakra-ui/icons";

function App() {
  const toast = useToast();
  const [passwordLength, setPasswordLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(symbols);

  const handleChange = (passwordLength) => {
    setPasswordLength(passwordLength);
    console.log(passwordLength);
  };

  return (
    <Container centerContent={true}>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem
          style={{
            backgroundColor: "teal",
            marginTop: "15rem",
            padding: "3rem",
            borderRadius: "0.5rem"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "60px",
              color: "black"
            }}
          >
            Password <LockIcon w={5} h={5} /> Generator
          </h1>
          <InputGroup style={{ marginBottom: "1rem" }}>
            <Input size="md" isDisabled={true} variant="filled" value={"hi"} />
            <InputRightAddon
              children={
                <IconButton
                  onClick={() =>
                    toast({
                      title: "Copied to clipboard",
                      duration: 2000,
                      position: "top-right"
                    })
                  }
                  icon={<CopyIcon />}
                />
              }
            />
          </InputGroup>

          <Slider
            min={8}
            max={50}
            value={passwordLength}
            onChange={handleChange}
            flex="1"
            focusThumbOnChange={false}
          >
            <SliderTrack bg="purple.100">
              <SliderFilledTrack bg="purple" />
            </SliderTrack>
            <SliderThumb
              children={passwordLength}
              fontSize="sm"
              boxSize="32px"
            />
          </Slider>

          <FormControl display="flex" alignItems="center">
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setUppercase(!uppercase)}
            />
            <FormLabel htmlFor="email-alerts" mb="0">
              Uppercase
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setLowercase(!lowercase)}
            />
            <FormLabel htmlFor="email-alerts" mb="0">
              Lowercase
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setNumbers(!numbers)}
            />
            <FormLabel htmlFor="email-alerts" mb="0">
              Numbers
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setSymbols(!symbols)}
            />
            <FormLabel htmlFor="email-alerts" mb="0">
              Symbols
            </FormLabel>
          </FormControl>
          {
            <Button
              className="button"
              isFullWidth
              variant="solid"
              colorScheme="whiteAlpha"
              size="lg"
            >
              Generate
            </Button>
          }
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
