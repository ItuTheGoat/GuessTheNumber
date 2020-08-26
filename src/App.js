import React from "react";
import "./App.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container>
      <Row className="justify-content">guess the number game</Row>
      <div>
        <p>Guess a number between 1 and 20</p>
      </div>
    </Container>
  );
}

export default App;
