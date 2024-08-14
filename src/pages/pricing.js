// pages/pricing.js
import React from 'react';
import Navbar from './navbar';
import '../style/styles.css';

const ApiPricing = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="api-pricing">
      <h1>API Pricing</h1>
      <p>At URLScissors, we offer flexible pricing plans to suit the needs of all our users, from individuals to large enterprises. Choose the plan that's right for you and start streamlining your digital journey today.</p>

      <h2>Pricing Plans</h2>
      <div className="pricing-plans">
        <div className="plan">
          <h3>Free Plan</h3>
          <p>Perfect for individuals and small projects.</p>
          <ul>
            <li>Up to 1,000 shortened URLs per month</li>
            <li>Basic analytics</li>
            <li>Standard support</li>
            <li>Limited customization</li>
          </ul>
          <p className="price">Free</p>
        </div>

        <div className="plan">
          <h3>Pro Plan</h3>
          <p>Ideal for small businesses and growing teams.</p>
          <ul>
            <li>Up to 10,000 shortened URLs per month</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom domains</li>
            <li>QR code generation</li>
          </ul>
          <p className="price">$29/month</p>
        </div>

        <div className="plan">
          <h3>Business Plan</h3>
          <p>Designed for large enterprises and high-volume users.</p>
          <ul>
            <li>Up to 100,000 shortened URLs per month</li>
            <li>Comprehensive analytics</li>
            <li>Dedicated support</li>
            <li>Custom domains</li>
            <li>API access</li>
            <li>Link retargeting</li>
          </ul>
          <p className="price">$99/month</p>
        </div>

        <div className="plan">
          <h3>Enterprise Plan</h3>
          <p>For organizations with unique needs and large-scale operations.</p>
          <ul>
            <li>Unlimited shortened URLs per month</li>
            <li>Full analytics suite</li>
            <li>24/7 dedicated support</li>
            <li>Custom domains</li>
            <li>API access</li>
            <li>Link retargeting</li>
            <li>Advanced security features</li>
            <li>Custom solutions</li>
          </ul>
          <p className="price">Contact us for pricing</p>
        </div>
      </div>

      <h2>Additional Information</h2>
      <p>If you have any questions or need more information about our pricing plans, please <a href="#" style={{color:'white'}}>contact our sales team</a>. We're here to help you find the best solution for your needs.</p>
    </div>
    </>
  );
}

export default ApiPricing;
