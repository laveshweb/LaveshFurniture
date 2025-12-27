import Footer from "./components/Footer";
import Getinspired from "./components/Getinspired";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import ShopbyRoom from "./components/ShopbyRoom";
import Trending from "./components/Trending";

const App = () => {
  return <div className="min-h-screen overflow-clip">
    {/* Header */}
    <Header/>
    <hr className="text-zinc-300 -mt-4"/>
    {/* MAIN */}
    <main>
      <Hero/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <Trending/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <NewArrival/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <ShopbyRoom/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <Getinspired/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>

    </main>
    {/* Footer */}
    <Footer/>

  </div>;
};

export default App;
