import Box from "./Box";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Box
        backgroundcolor="red"
        width="200px"
        height="200px"
        innertext="ㅅㅂ;"
      ></Box>
      <Box
        backgroundcolor="green"
        width="300px"
        height="300px"
        innertext="ㅋㅋ;"
      ></Box>
      <Box
        backgroundcolor="orange"
        width="400px"
        height="400px"
        innertext="ㅇㅇ;"
      ></Box>
      <Box
        backgroundcolor="blue"
        width="500px"
        height="500px"
        innertext="ㄹㅇ;"
      ></Box>
    </div>
  );
}

export default App;
