import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from'../assets/data/products'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/images/heroim-removebg-preview.png';
import"../styles/home.css";
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import counterImg from'../assets/images/counter-timer-img1.png'
import Clock from '../components/UI/Clock';
export const Home = () => {

  const[trendingProducts,setTrendingProducts] = useState([])
  const[bestSalesProducts,setBestSalesProducts] = useState([])
  const[mobileProducts,setMobileProducts] = useState([])
  const[wirelessProducts,setWirelessProducts] = useState([])
  const[popularProducts,setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');
    const filteredMobileProducts = products.filter(item => item.category === 'mobile');
    const filteredWirelessProducts = products.filter(item => item.category === 'wireless');
    const filteredPopularProducts = products.filter(item => item.category === 'watch');
    
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);

  }, []);


  return (<Helmet title={"Home"}>
  <section className="hero__section">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year} </p>
              <h2>Make your Interior More Futurine & Modern</h2>
              <p>Lorem ipsum dolor sit amet consector, adiuoing
                elit.Quata nulla repallet quo eque alias corpiso
                sunt faci0e mease rem furmdad s!
              </p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn">
               <Link to='/shop'>MUA NGAY →</Link>
              </motion.button>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className='hero__img'>
              <img src={heroImg} alt=''/>
          </div>
        </Col>
       
      </Row>
    </Container>
  </section>
  <Services/>
  <section className="trending_products">
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Trending Products</h2>
        </Col>
        <ProductsList data={trendingProducts}/>
      </Row>
    </Container>
  </section>
  <section className="best__sales">
    <Container>
    <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Best Sales</h2>
        </Col>
        <ProductsList data={bestSalesProducts}/>
      </Row>
    </Container>
  </section>
  <section className="timer__count">
    <Container>
      <Row>
        <Col lg='6' md='12' className='count__down-col'>
          <div className="clock__top-content">
            <h4>Limited Offers</h4>
            <h3>Quality Armchair</h3>
          </div>
          
          <Clock/>

          <motion.button whileTap={{scale:1.2}} className='buy__btn'>
            <Link to='/shop'>Visit Store</Link>
          </motion.button>
        </Col>

        <Col lg='6' md='12' className='counter__img' >
         <img src={counterImg} alt=''/> 
        </Col>

      </Row>
    </Container>
  </section>
  <section className="new__arrivals">
    <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section__title'>New Arrivals</h2>
        </Col>
        <ProductsList data={mobileProducts}/>
        <ProductsList data={wirelessProducts}/>
      </Row>
    </Container>
  </section>
  <section className="popular__category">
  <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section__title'>Popular in Category</h2>
        </Col>
        <ProductsList data={popularProducts}/>
       
      </Row>
    </Container>
  </section>
  </Helmet>
  );
};
export default Home;

