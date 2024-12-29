import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Use our Calculate Weather tool to easily determine the feasibility of your plans or decisions',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Find the best tour guides for an unforgettable experience. Specialists, local knowledge –book today!',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Tailor your journey to perfection! Customize your travel experience to match your preferences and needs.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
