import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//Add import for React-Router-Dom

function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
