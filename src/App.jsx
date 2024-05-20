import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // use... : hook
  // if / for 내에서 사용하지 말 것

  // 안전하게 hook은 컴포넌트 가장 상단에 순서대로 작성할 것
  if (true) {
    const [text, setText] = useState("");
  }

  <FontAwesomeIcon icon={faApple} />;

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
