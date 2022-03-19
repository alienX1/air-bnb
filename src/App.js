import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Data from './components/Data';

const cards = Data.map((item) => {
  return (
    <Cards
      key={item.id}
      img={item.coverImg}
      rating={item.rating}
      location={item.location}
      price={item.price}
    />
  );
});
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="Card">{cards}</div>
      <Footer />
    </div>
  );
}

export default App;
