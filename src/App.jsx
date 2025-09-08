import Header from "./Header";

function App(){
  return (
    <div>
      <Header />
      <h1>Hello world!</h1>
      <p>this is me.</p>
      <Fruits></Fruits>
      <Colours />
    </div>
  )
}

function Fruits(){
  return (
    <div>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Kiwi</li>
        <li>Lichi</li>
      </ul>
    </div>
  )
}

function Colours(){
  return (
    <div>
      <ul>
        <li>Blue</li>
      </ul>
    </div>
  )
}

export default App;