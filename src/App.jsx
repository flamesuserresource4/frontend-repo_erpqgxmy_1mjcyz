import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter bg-white text-gray-900">
      <Navbar />
      <Home />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
