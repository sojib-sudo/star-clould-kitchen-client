import React from 'react';
import logo from '../../../assets/icons/icons-logo.jpeg'

const Footer = () => {
    return (
    <footer className="footer p-32 bg-black mt-24  text-white">
        <div>
            <img className='rounded h-16'  src={logo} alt="Logo" />
            <p><span className='text-orange-600 font-bold text-2xl'>Star Clould Kitchen</span><br/>Providing reliable food since 2000</p>
        </div> 
        <div>
            <span className="footer-title">Services</span> 
            <a href="/" className="link link-hover">Branding</a> 
            <a href="/" className="link link-hover">Design</a> 
            <a href="/" className="link link-hover">Marketing</a> 
            <a href="/" className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <a href="/" className="link link-hover">About us</a> 
            <a href="/" className="link link-hover">Contact</a> 
            <a href="/" className="link link-hover">Jobs</a> 
            <a href="/" className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <a href="/" className="link link-hover">Terms of use</a> 
            <a href="/" className="link link-hover">Privacy policy</a> 
            <a href="/" className="link link-hover">Cookie policy</a>
        </div>
    </footer>
    );
};

export default Footer;