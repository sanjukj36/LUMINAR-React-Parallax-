import React, { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarDetails from './components/CarDetails';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const handleBMWCar = () => {
    console.log("sdsdsddsd");

    navigate('/home')
  }
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      var mustang = document.querySelector(".mustang");

      var mustangTop = mustang.getBoundingClientRect().top;
      var mustangVisible = window.innerHeight - 150;

      if (mustangTop < mustangVisible) {
        for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.add("active");
        }
        mustang.style.marginLeft = (window.scrollY * 1.2) + 'px';
      } else {
        for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.remove("active");
        }
      }
    }

    reveal();
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  useEffect(() => {
    AOS.init()
    function revealImage() {
      var frontImage = document.querySelector('.front');
      var secPart = document.querySelector('.secpart');

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      if (isElementInViewport(secPart)) {
        frontImage.style.opacity = '1';
      }
    }

    revealImage();
    window.addEventListener('scroll', revealImage);

    return () => {
      window.removeEventListener('scroll', revealImage);
    };
  }, []);

  


  return (
    <>
      <div className="fullbody">
        <div className="homepage" id="home">
          <header>
            
            <nav className="navbar navbar-expand-lg navi">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><img data-aos="fade-right" data-aos-delay="100" className="logo" src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg" alt="" /></a>
              
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav link mt-3">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-light" href="#">Models</a>
                    <a className="nav-link text-light" href="#">Services</a>
                    <a className="nav-link text-light" href="#">Dealerships</a>
                    <a className="nav-link text-light" href="#">About</a>
                    <a className="nav-link text-light" href="#">Contect</a>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <img src="https://dribbble.com/shots/16859963-BMW-Logo-Animation/attachments/11921473?mode=media" alt="" />

          

          <div className="completebanner">
            <div className="banner">
              <img src="" alt=""/>
              
              <img className="mustang reveal" src="https://pngimg.com/d/bmw_PNG99543.png" alt="" />
              <div className="btext">
                <h1 data-aos="fade-up" data-aos-delay="300" className="tagline">WE'LL FIND YOU THE <br />BEST CAR FOR LEASING</h1>
                <button onClick={handleBMWCar} data-aos="fade-right" data-aos-delay="800" className="check ">FIND YOUR BMW  <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></button>
              </div>
             
            </div>

        
          </div>
        </div>
        <div className="secpart">
        <CarDetails/>

        </div>


        
        <div className="third">
          <div className="ttext text-center">
            <h1 data-aos="fade-right" data-aos-delay="100" className="text-light thhead mt-5">COULDN'T DECIDE?</h1>
            <p className="text-light text-center fw-bolder t5">Make your appointment with us and Decide after experiencing the premium feel with the test drive!</p>
            <button className="btn btn-secondary text-light mt-5">GET APPOINTMENT</button>
          </div>
        </div>
      </div>

 
      <div className="secpart">
          <div className="sectxt ms-5">
            <h3 className=" sechead">BMW FINANCIAL SERVICES</h3>
            <h1>BMW Special Offers</h1>
            <p className="text-light seccont">Check out a variety of BMW finance offers available across the BMW range.</p>
            <button className="testride btn btn-primary text-light">Know More</button>
          </div>
          <div className="frontcar">
            <div className="g1"><img src="./images/graysq.jpeg" alt="bb" className="grey1" /></div>
            <img src="https://bmw.scene7.com/is/image/BMW/2560x1440:16to9?fmt=webp&wid=600&hei=338" alt="" className="front reveal2" />
          </div>
        </div>
      

      

      
      <footer>
        <div className="footer">
    
          <div className="row">
            <div className="col">
              <a href="#">Contact us</a>
              <a href="#">About us</a>
            </div>
            <div className="col">
              <a href="#">Find a Dealer</a>
              <a href="#">Build your BMW</a>
            </div>
            <div className="col">
              <a href="#">Legal Disclaimer/Imprint</a>
            </div>
            <div className="col">
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          
         
        </div>
        <a href="#home">
          <div className="totop">
            <i className="fa-solid fa-angle-up fa-2xl faicon" style={{ color: '#ffffff' }}></i>
          </div>
        </a>
      </footer>
      

    </>
  )
}

export default App
