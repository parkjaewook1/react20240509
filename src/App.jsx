import React, { createContext, useContext, useState } from "react";

// step1 : create the context
const MessageContext = createContext("");

function MyBox() {
  // step2 : use the context
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection({ message }) {
  return <MyBox message={message} />;
}

function MyContainer({ message }) {
  return <MySection message={message} />;
}

// context
// https://react.dev/learn/passing-data-deeply-with-context
function App(props) {
  return <div></div>;
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/*step3 : provide the context*/}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
