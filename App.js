import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Container1 from './component/container1';
import Container2 from './component/container2';
import Data from "./component/data"


function App() {
  const cardselements = Data.map(items => {
    return (
      <Container2  
      key={items.id}
      items={items}


      />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <Container1/>
     <div className="contacts">
     {cardselements}
  
     </div>
     
  


    </div>
  );
}

export default App;
