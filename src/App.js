import React from 'react'
import useLocalStorage from './useLocalStorage' 
import useUpdateLogger from './useUpdateLogger'

function App() {
  const [name, setName] = useLocalStorage('name', 'Michael Andrew')
  useUpdateLogger(name)
  return (
    <>
      <h1>Hello Custom React Hook</h1>

      <input 
        type='text'
        value={name}
        onChange={e=>setName(e.target.value)}
      />
    </>
  );
}

export default App;
