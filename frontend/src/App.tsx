import React from 'react';
import Dropdown from "./dropdown";

function App() {
  const handleSelect = (value: string) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <div className="flex justify-center">
      <h1 className="text-4xl"> Tubender Bare Bones </h1>
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
