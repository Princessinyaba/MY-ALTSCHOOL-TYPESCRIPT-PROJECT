// pages/about.js
import React from 'react';
import Navbar from './navbar';
import '../style/styles.css';

const AboutUs = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to URLScissors, the ultimate solution for streamlining your digital journey! At URLScissors, we are passionate about simplifying the web experience for individuals and businesses alike. Our innovative URL shortening API is designed to transform long, cumbersome URLs into short, manageable links, making sharing and managing web addresses easier than ever before.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to enhance the way people interact with the internet by providing a reliable, efficient, and secure URL shortening service. We aim to empower our users with the tools they need to optimize their online presence, improve user engagement, and track link performance effortlessly.</p>
      
      <h2>Why Choose URLScissors?</h2>
      <ul>
        <li><strong>Efficiency</strong>: Our powerful API ensures that your URLs are shortened in an instant, allowing you to focus on what matters most—creating and sharing great content.</li>
        <li><strong>Customization</strong>: With URLScissors, you can create custom short links that reflect your brand, making it easier to build recognition and trust with your audience.</li>
        <li><strong>Analytics</strong>: Gain valuable insights into how your links are performing with our detailed analytics dashboard. Track clicks, geographic data, and referral sources to make informed decisions.</li>
        <li><strong>Security</strong>: We prioritize the security of your data. Our advanced security measures ensure that your links are safe from malicious activity.</li>
        <li><strong>Scalability</strong>: Whether you're a solo entrepreneur or a large enterprise, our scalable API can handle your needs, no matter the volume of links you generate.</li>
        <li><strong>Link Management</strong>: Organize and manage your links with ease. Use our dashboard to edit, delete, or archive your links as needed.</li>
        <li><strong>Expiration Dates</strong>: Set expiration dates for your links to control how long they remain active. Perfect for time-sensitive campaigns and promotions.</li>
        <li><strong>QR Code Generation</strong>: Automatically generate QR codes for your shortened URLs, making it easy to share links offline and on print media.</li>
        <li><strong>Custom Domains</strong>: Use your own domain for shortened links to maintain brand consistency and improve trust with your audience.</li>
        <li><strong>API Integration</strong>: Seamlessly integrate our URL shortening service into your existing applications with our easy-to-use API.</li>
        <li><strong>Link Retargeting</strong>: Enhance your marketing strategies by adding retargeting pixels to your shortened URLs, allowing you to re-engage with your audience effectively.</li>
      </ul>
      
      <h2>Our Team</h2>
      <p>At URLScissors, we are a team of dedicated professionals with diverse backgrounds in web development, data analytics, and digital marketing. Our combined expertise drives our commitment to delivering a top-tier URL shortening service that meets the evolving needs of our users.</p>
      
      <h2>Join Us</h2>
      <p>Experience the power of simplicity with URLScissors. Join the growing community of users who trust us to optimize their online presence. Start shortening your URLs today and take the first step towards a more efficient and effective digital strategy.</p>
      
      <p>Discover more about what URLScissors can do for you by exploring our <a href="#">documentation</a> and <a href="#">API reference</a>. Have questions? Reach out to our <a href="#">support team</a> anytime—we're here to help!</p>
    </div>
    </>
  );
  
}

export default AboutUs;
