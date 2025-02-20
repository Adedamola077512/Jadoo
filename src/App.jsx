import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
// import Header from './component/Navbar'
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Category from "./component/Category";
import TopSelling from "./component/TopSelling";
import Easy from "./component/Easy";
import Testimonials from "./component/Testimonials";
import Image from "./component/image";
import Information from "./component/Information";
import Footer from "./component/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <TopSelling />
      <Easy />
      <Testimonials />
      <Image />
      <Information />
      <Footer />
    </>
  )
}

export default App
