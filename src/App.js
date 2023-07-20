
import './App.css';
import Fotter from './Components/fotter/Fotter';
import Header from './Components/headers/Header';
import Products from './Components/products/Products';
import Summary from './Components/summary/Summary';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary/>
      <Products/>
      <Fotter/>
    </div>
  );
}

export default App;
