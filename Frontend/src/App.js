import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";



function App() {
  return (
    <BrowserRouter className="App">
     <Header/>
     <main className='py-3'>
       <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/login'  />
       </Container>
     </main>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
