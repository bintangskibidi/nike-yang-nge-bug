import Hero from './component/Hero';
import Navbar from './component/Navbar';

const App = () => {
  return <main className="overflow-x-hidden">
    <Navbar />
    <Hero />
  </main>;
};

export default App