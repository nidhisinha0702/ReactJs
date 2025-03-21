import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent as FC, SecondComponent } from './components/MyComponent';
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
function App() {

  //  const student = {
  //    firstName: "Nidhi",
  //    lastName: "Kumari",
  //    email:"nk@gmail.com"
  //  }
  const skills = ['HTML','CSS','JavaScript'];
  return (
    <div className="App">
      {/* <Welcome name="Nidhi"/>
      <Welcome name="Kumari"/> */}
      {/* <Greeting name="Nidhi" />
      <FC />
      <SecondComponent />
      <MC />
      <HelloWorld /> */}
      {/* <Student 
      data = {skills}
      /> */}
       {/* <Student 
      firstName = "Akash"
      lastName = "Sinha"
      email = "as@gmail.com"
      /> */}
      {/* <Employee /> */}
      <User />
    </div>
  );
}

export default App;
