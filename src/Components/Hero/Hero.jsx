import React from 'react'
import './Hero.css'
import profile_img from '../../assets/self-image.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Amandeep Saini,</span> frontend developer based in Navi Mumbai.</h1>
      <p>I am a frontend developer from Navi Mumbai, India with 1.5+ years of experience.</p>
      <div className="hero-action">
        {/* <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div> */}
        {/* <div className="hero-resume">My resume</div> */}
      </div>
    </div>
  )
}

export default Hero
