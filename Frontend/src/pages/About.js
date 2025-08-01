import React from 'react'
import './../css/about.scss'

const About = () => {
    return (
        <div>
            <div className='overlay'>
                <h1>About</h1>
            </div>
            <div className='container'>
                <div className='row py-5 my-5'>
                    <h2 className='mb-3'>About Us</h2>
                    <p>Car Parking aims to establish a platform that connects parking admins within the community with users in search of affordable parking spaces. Our web application assists parking admins in effectively renting out their additional parking spaces, providing them with an opportunity to earn extra income. Additionally, Car Parking facilitates users in finding cost-effective parking spaces.</p>
                </div>

                <div className='row mt-5 mb-5'>
                    <div className='col-md-6'>
                        <img src='/seeker.jpg' className='services-img' alt='Parking Seeker'></img>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div>
                            <h3>Parking seekers</h3>
                            <p>Parking seekers can utilize the Car Parking web application to search for available parking spots that meet their specific needs. By selecting a suitable parking spot, users can reserve it by making the desired payment. Once the reservation is confirmed, users can park their cars by following the provided instructions. Our user-friendly platform ensures a seamless and convenient experience for Parking seekers, allowing them to easily find and secure parking spaces that suit their requirements.</p>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div className='text-right'>
                            <h3>Parking Admin</h3>
                            <p>The Car Parking web application offers a professional service for parking admins from the community, enabling them to efficiently rent out their extra parking spaces and generate additional income. Our platform lets parking admins easily list their available spots, provide essential details, and set competitive rental prices. Our user-friendly interface ensures a seamless experience, allowing admins to manage their listings, communicate with potential renters, and finalize bookings. With Car Parking, parking admins can maximize the utilization of their parking spaces and unlock a new source of revenue. Start utilizing our platform today and experience the benefits of hassle-free and profitable parking space management.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='/owner.jpg' className='services-img' alt='Parking Owner'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About