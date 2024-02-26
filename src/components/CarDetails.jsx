import React from 'react'
import img1 from './images/car1.png'
import img2 from './images/car2.png'
import img3 from './images/car3.png'
import img4 from './images/car4.png'
import img5 from './images/car5.png'
import imgX1 from './images/carx1.png'
import imgX2 from './images/carx2.png'
import imgX3 from './images/carx3.png'




import { Carousel } from 'react-bootstrap'


function CarDetails() {

    return (

        <>
            <h1 className='text-white ms-4
             mb-5'>Find Your BMW</h1>
            <div style={{ height: '115vh' }}>



                <div>
                    <Carousel >

                        <Carousel.Item style={{ height: '115vh' }}>

                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE FULLY ELECTRIC BMW i7</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 20,300,000</h3>
                            </div>


                            <img style={{ height: '100vh' }}
                                className="d-block w-100"
                                src={img5}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE FIRST-EVER BMW i7 M70 xDrive</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 25,000,000</h3>
                            </div>


                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE ALL-ELECTRIC BMW iX</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 12,100,000</h3>
                            </div>


                            <img style={{ height: '100vh' }}
                                className="d-block w-100"
                                src={img3}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE FULLY ELECTRIC BMW i4</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 7,250,000</h3>
                            </div>

                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={img4}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE FULLY ELECTRIC BMW i7</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 20,300,000</h3>

                            </div>

                            <img style={{ height: '100vh' }}
                                className="d-block w-100"
                                src={img5}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>BMWi</h1>
                                <h2 className='text-center'>THE FIRST-EVER BMW i7 M70 xDrive</h2>
                                <p className='text-primary text-center'>FULL-ELECTRIC</p>
                                <h3 className='text-center'>Starting from ₹ 6,690,000</h3>
                            </div>
                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>X</h1>
                                <h2 className='text-center'>THE FIRST-EVER BMW X3 xDRIVE M40i</h2>
                                <p className='text-primary text-center'>PETROL</p>
                                <h3 className='text-center'>Starting from ₹ 8,770,000</h3>
                            </div>
                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={imgX1}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>X</h1>
                                <h2 className='text-center'>THE BMW X7</h2>
                                <p className='text-primary text-center'>PETROL / DIESEL</p>
                                <h3 className='text-center'>Starting from ₹ 12,700,000</h3>
                            </div>
                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={imgX2}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ height: '115vh' }}>
                            <div style={{ marginBottom: "-100px" }}>
                                <h1 className='text-primary ms-5'>X</h1>
                                <h2 className='text-center'>THE FIRST-EVER BMW X4 xDRIVE M40i</h2>
                                <p className='text-primary text-center'>PETROL</p>
                                <h3 className='text-center'>Starting from ₹ 9,620,000</h3>
                            </div>
                            <img style={{ height: '90vh' }}
                                className="d-block w-100"
                                src={imgX3}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <div style={{ margin: "0% 0% 0% 0%" }}>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </>

    )
}

export default CarDetails
