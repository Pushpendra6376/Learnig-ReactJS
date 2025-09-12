

function App(){
  return (
    <div>
      <h1>Hello world!</h1>
      <p>this is me.</p>
      <ul>
        <li className="furit-items">Apple</li>
        <li className="furit-items">Banana</li>
        <li className="furit-items">Kiwi</li>
      </ul><br /><br />
      <form>
        Name: <input type="text" /><br /><br />
        Email: <input type="email" /><br /><br />
        Phone: <input type="tel" /><br /><br />
        Write Your Message: <input type="textarea"/><br /><br />
        <button type="click">Send</button>
        <button type="submit">Submit</button><br /><br />

      </form>
    </div>
  )
}


export default App;