
import './App.css';

function WhoAmI({name, surname, link}) { 
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => {return 'Jhon'}} surname="Smith" link="vk.com"/>
      <WhoAmI name={() => {return 'Alex'}} surname="Shepard" link="facebook.com"/>
    </div>
  );
}

export default App;
