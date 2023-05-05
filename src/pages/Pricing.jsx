import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div>
      <section className="pricing-main">
        <h1>PRICING</h1>
            <div className="boxes">
                <div className="box1">
                    <h2 className="box-heading">BASIC</h2>
                    <div className="price-container"><h6><div className="price">$19</div>/MONTH</h6></div>
                    <div className="box-contents">
                      <ul>
                        <li>Point 1</li>
                        <li className='not-available'>Point 2</li>
                        <li className='not-available'>Point 3</li>
                        <li className="not-available">Point 3</li>
                      </ul>
                    </div>
                </div>
                <div className="box2">
                    <h2 className="box-heading">PLUS </h2>
                    <div className="price-container"><h6><div className="price">$29</div>/MONTH</h6></div>
                    <div className="box-contents">
                      <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                        <li className="not-available">Point 3</li>
                      </ul>
                    </div>
                    <div className="best-value">Best Value</div>
                </div>

                <div className="box3">
                    <h2 className="box-heading">PRO</h2>
                    <div className="price-container"><h6><div className="price">$49</div>/MONTH</h6></div>
                    <div className="box-contents">
                      <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                        <li>Point 3</li>
                      </ul>
                    </div>
                    
                </div>
                
                
            </div>
      </section>
            
    </div>
  )
}

export default Pricing
