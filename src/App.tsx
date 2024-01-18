import './App.css';
import {Person, Country} from "./components/Person"

function App() {
  return (
    <div className="App">
      <Person 
      name = "Pranish"
      email = "pranish@gmail.com"
      age = {21}
      isMarried = {false}
      friends = {["Ram" , "Hari" ,"Shya"]}
      country = {Country.nepal}
      />
    </div>
  );
}

export default App;
