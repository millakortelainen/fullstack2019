import React from 'react'
import ReactDOM from 'react-dom'

//const App = () => (
// <div>
//  <p>Hello world</p>
// </div>
//)
/*const App = () => {
    console.log('Hello from komponentti')
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }*/

/*const App = () => {
    const now = new Date()
    const a = 10
    const b = 20

    return (
        <div>
            <p>Hello world, it is {now.toString()}</p>
            <p>
                {a} plus {b} is {a + b}
            </p>
        </div>
    )
}*/

/*const Hello = () => {
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }*/

 /* const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name}</p>
      </div>
    )
  }
  
  const App = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Milla"/>
        <Hello name="Saska"/>
        <Hello name="Papu"/>
      </div>
    )
  }*/

  const Hello = (props) => {
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
      </div>
    )
  }
  
  const App = () => {
    const nimi = 'Pekka'
    const ika = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
      </div>
    )
  }
  

ReactDOM.render(<App />, document.getElementById('root'))