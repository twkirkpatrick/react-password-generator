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

  const [password, setPassword] = useState("");

  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(symbols);

  const handleChange = (passwordLength) => {
    setPasswordLength(passwordLength);
    console.log(passwordLength);
  };

  const generatePassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("Please select at least one character type");
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijqlmnopqrstuvwxyz";
    const number = "123456789";
    const symbol = "!@#$%^&*()+";

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      if (uppercase) {
        generatedPassword += upper[Math.floor(Math.random() * upper.length)];
      }
      if (lowercase) {
        generatedPassword += lower[Math.floor(Math.random() * lower.length)];
      }
      if (numbers) {
        generatedPassword += number[Math.floor(Math.random() * number.length)];
      }
      if (symbols) {
        generatedPassword += symbol[Math.floor(Math.random() * symbol.length)];
      }
    }

    setPassword(generatedPassword.substring(0, passwordLength));
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
            <Input
              size="md"
              isDisabled={true}
              variant="filled"
              value={password}
            />
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
            <FormLabel htmlFor="uppercase" mb="0">
              Uppercase
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setLowercase(!lowercase)}
            />
            <FormLabel htmlFor="lowercase" mb="0">
              Lowercase
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setNumbers(!numbers)}
            />
            <FormLabel htmlFor="numbers" mb="0">
              Numbers
            </FormLabel>
            <Switch
              className="switch"
              colorScheme="purple"
              onChange={() => setSymbols(!symbols)}
            />
            <FormLabel htmlFor="symbols" mb="0">
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
              onClick={generatePassword}
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
