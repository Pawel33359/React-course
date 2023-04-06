function App() {
  const inputType = "number";
  const minValue = 5;

  return <input type={inputType} min={minValue} max={10} />;
  // return <textarea autoFocus={true} />;
  // return <input maxLength={3} style={{ border: "1px solid blue" }} />;
}

export default App;
