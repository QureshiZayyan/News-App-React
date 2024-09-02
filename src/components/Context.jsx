import { useState, createContext } from "react";
const StateContext = createContext();
console.log('this is a context');
console.log('this is a context');

function StateProvider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('india');
  const [input, setInput] = useState('');

  return (
    <StateContext.Provider value={{ query, setQuery, input, setInput, data, setData }}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };