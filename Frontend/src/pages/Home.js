import React from 'react'
import './../css/home.scss'

function Home() {
  return (
    <div>
      <div className='banner'>
        <div className='overlay'>
          <h1>Smart Parking Solutions <br /> <span>Find Your Perfect Spot Instantly!</span></h1>
        </div>
      </div>

      <div className='container mt-5'>
        <section className='my-5'>
          <h2>How Car Parking Works</h2>

          <div className='row mt-4'>
            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='/map.avif' className='services-card-icon' alt='Map'></img>
                <div className='mt-4'>
                  <h3>Search</h3>
                  <p className='mt-3'>Search for a parking spot according to your needs.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='/book.png' className='services-card-icon' alt='Book'></img>
                <div className='mt-4'>
                  <h3>Book</h3>
                  <p className='mt-3'>Reserved Parking spot and pay desired amount..</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='/parking.png' className='services-card-icon' alt='Parking'></img>
                <div className='mt-4'>
                  <h3>Park</h3>
                  <p className='mt-3'>Follow the provided instructions and park your car.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='my-5'>
          <h2 className='mt-5'>Testimonial</h2>
          <div className='row'>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='/profile-1.jpeg' alt='Profile 1' />
                <p className='mt-4 mb-3'>"I recently used Car Parking, a parking booking website, and I was thoroughly impressed with the service. The Rent-A-Spot website was user-friendly and easy to navigate, allowing me to quickly find and book a parking spot for my trip. The process was seamless, and I received a confirmation email from Rent-A-Spot with all the necessary details. On the day of my arrival, the Rent-A-Spot parking lot was well-maintained and had ample space. I highly recommend Car Parking to anyone in need of convenient and reliable parking options."</p>
                <span><strong>Rupak</strong> Student at VIT Bhopal</span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='/profile-1.webp' alt='Profile 2' />
                <p className='mt-4 mb-3'>"I cannot express how grateful I am for Car Parking, the parking booking website. Car Parking has made the process incredibly convenient and stress-free. With just a few clicks on the Rent-A-Spot website, I can compare prices and book a parking spot in advance. Car Parking provides detailed information about each parking facility, including reviews from other users, which helped me make informed decisions. On multiple occasions, I arrived at my destination to find a reserved spot waiting for me, thanks to Rent A-Spot. This website is a game-changer for travellers like me"</p>
                <span><strong>John Doe</strong> Software Engineer at Microsoft</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home