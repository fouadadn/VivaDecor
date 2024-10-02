import Nav from './components/Nav/Nav'
import Inter from './components/interiorDesign/design'
import Service from './components/services/service';
import Customer from './components/Customer/Customer';
import Footer from './components/footer/foo';

function App() {
  return (
    <div className="App ">
      <div className='lg:px-[120px] px-2 '>
        <Nav />
        <Inter/>
        <Service />
        <Customer />
      </div>

      <Footer />
    </div>
  );
}

export default App;
