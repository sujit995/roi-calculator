import React, { useState } from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import CloseIcon from '@mui/icons-material/Close';
import './app.css';

const days = ['1 Day', '7 Days', '30Days', '1 Year', '5 Year'];
const tier = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];

const App = () => {
  const [activeButton, setActiveButton] = useState('1 Day')
  const [newButton, setNewButton] = useState('Tier 1')

  return (
    <div className="app">
      <div className="header">
        <h2>ROI Calculator</h2>
        <CloseIcon style={{ margin: '5px' }} />
      </div>
      <div className="inputbox">
        <div className="keytags">
          <span>CAKE</span>
          <ToggleOnIcon style={{ fontSize: '30px', marginBottom: '-10px', color: 'orange' }} /><span>USD</span>
        </div>
        <input type="text" placeholder="0.000 USD" />
      </div>
      <div className="pricebtns">
        <div className="btns">
          <div className="price">$1000</div>
          <div className="price">$100</div>
        </div>
        <div className="tag">
          ~CAKE 0.000
        </div>
      </div>
      <div>
        <h4>Timeframe</h4>
        <div className="timeframeBtns">
          {
            days.map((item) => {
              return (
                <>
                  <button
                    item={item}
                    className={activeButton === item ? "active" : "btnbtn"}
                  >{item}</button>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="apisection">
        <div className="head">
          <h2>Enable Acelerated APY</h2>
          <ToggleOnIcon style={{ fontSize: '50px', margin: '5px', color: 'orange' }} />
        </div>
        <div className="timeframeBtns">
          {
            tier.map((item) => {
              return (
                <button
                  item={item}
                  className={newButton === item ? "active" : "btnbtn"}
                >{item}</button>
              )
            })
          }
        </div>
      </div>
      <div className="inputbox">
        <div className="roi">
          <span>ROI at Current Rates</span>
        </div>
        <input type="text" placeholder="0.00 USD" />
        <div className="tags">
          ~0.000 CAKE + 0.000000 DON
        </div>
      </div>
      <div className="details">
        <h5>Hide Details</h5>
        <div className="headdetail">
          <h3>APY</h3>
          <h3 style={{ color: 'orange' }}>9.0 %</h3>
        </div>
        <ui>
          <li>Calculated based on current rates</li>
          <li>All figures are estimates provided for your convenience only, and by no &nbsp;&nbsp;&nbsp;&nbsp; means represent guaranteed returns.</li>
        </ui>
      </div>
    </div>
  )
};

export default App;
