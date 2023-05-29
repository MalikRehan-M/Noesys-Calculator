import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");
  const [showHistory, setShowHistory] = useState(false);


  const handleNumberClick = (value) => {
    setCalculation((prev) => prev + value);
  };

  const handleOperatorClick = (operator) => {
    setCalculation((prev) => prev + operator);
  };

  const handleClearClick = () => {
    setCalculation("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(calculation);
      setCalculation(calculatedResult);
      setHistory((prev) => [...prev, `${calculation}=${calculatedResult}`]);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleHistoryButtonClick = () => {
    setShowHistory(!showHistory);
  };

  return (
    <Box p={"45px"} maxWidth="450px" mx="auto" border={"1px"} mt={"150px"} borderRadius="md" bg="black">
        <Text textAlign={"center"} fontSize={"4xl"} color={"#faa10c"} fontWeight={"medium"}>Noesys Calculator</Text>
      

      {showHistory && (
        <Box
          border="1px"
          borderRadius="md"
          p={2}
          mt={2}
          maxHeight={"200px"}
          overflowY={"scroll"}
          color={"white"}
        >
          {history.map((calc, index) => (
            <Text key={index}>{calc}</Text>
          ))}
        </Box>
      )}



      <br />
      <InputGroup mb={4}>
        <Input color={"white"} value={calculation} placeholder="Enter calculation" readOnly />
      </InputGroup>
      <Button
        bg={"#faa10c"}
        color={"white"}
        mb={"10px"}
        onClick={handleHistoryButtonClick}
      >
        {showHistory ? "Hide History" : "Show History"}
      </Button>
      
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <Button bg={"#faa10c"} color={"white"} onClick={handleClearClick}>C</Button>
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
        <Button bg={"#faa10c"} color={"white"}  onClick={() => handleOperatorClick("/")}>/</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("4")}>4</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("5")}>5</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("6")}>6</Button>
        <Button bg={"#faa10c"}  color={"white"} onClick={() => handleOperatorClick("*")}>*</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("1")}>1</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("2")}>2</Button>
        <Button bg={"#333333"} color={"white"}  onClick={() => handleNumberClick("3")}>3</Button>
        <Button bg={"#faa10c"} color={"white"}  onClick={() => handleOperatorClick("-")}>-</Button>
        <Button bg={"#333333"} color={"white"} onClick={() => handleOperatorClick("+")}>+</Button>
        <Button bg={"#333333"} color={"white"} onClick={() => handleNumberClick("0")}>0</Button>
        <Button bg={"red"} color={"white"}  onClick={handleCalculate}>=</Button>
      </Grid>
    </Box>
  );
};

export default Calculator;
