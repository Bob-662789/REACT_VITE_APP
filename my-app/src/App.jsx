import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from 'SVG.svg'
import './App.css'
  function App() {
  const [count, setCount] = useState(0)
  if (count === 20) {
    const img = document.createElement("img");
    img.src = "image.jpg";
    img.alt = "Image";    
    document.body.appendChild(img);
  // <img src={image.jpg} className="congrats" alt="Image" /> 

}

return (
  <>
    <div>
      <a href="https://vite.dev" target="_blank">
        {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      </a>
      <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Yootube</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite logo to not get scammed!
    </p>
  </>
)
}

export default App
