
import './App.css';
import Btn from './btn'
import Prof from './prof'
import Art from './art'

function App() {
  let name="ramu"
  return (
    <div>
      <h1 className="h1">welcome to sunil {name}</h1>
      <Btn/>
      <Btn/>
      <Btn/>
      <Prof/>
      <Art/>
    </div>
  );
}

export default App;
