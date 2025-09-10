

function App(){
  return (
    <div>
      <h1>Hello world!</h1>
      <p>this is me.</p>
      <ul>
        <li className="furit-items">Apple</li>
        <li className="furit-items">Banana</li>
        <li className="furit-items">Kiwi</li>
        <button type ="submit"> Submit</button>

      </ul>

      <form action="onsubmit()">
          <input type="textarea"/>
          <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}


export default App;