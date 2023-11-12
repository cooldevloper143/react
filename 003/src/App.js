// import logo from './logo.svg';

import "./App.css";

function App() {
  return (
    <>
      <div className="fullpage">
        <div className="container">
          <div className="from">
            <div className="head">
              <div>
                <div>
                  <h>From</h>
                </div>
                <h>Currency Type</h>
                <div></div>
              </div>
            </div>
            <div className="frominput"></div>
            <div className="fromct"></div>
          </div>
          <div className="swap2">
            <div className="swap">swap</div>
          </div>
          <div className="to">
            <div className="head">
              <div>
                <div id="from">
                  <h>From</h>
                </div>
                <div id="fromtype">
                  <h>Currency Type</h>
                </div>
              </div>
            </div>
            <div className="frominput"></div>
            <div className="fromct"></div>
          </div>
          <div className="button"></div>
        </div>
      </div>
    </>
  );
}

export default App;
