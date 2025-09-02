import React from 'react'

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
</div>
<div className='row'>
    <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }}  />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ZerodhaFundhouse.png" 
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }} />
          <p className="text-small text-muted">Assest Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }}  />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

</div>
<div className='row'>
    <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }}  />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5"
        >
          <img src="media/images/goldenpiLogo.png"
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }}  />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" 
          className="img-fluid" 
  style={{ height: "50px", objectFit: "contain" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>

        
        
        <button
          className="p-2 btn btn-primary fs-5 mb-5 text-center mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
      </div>
    
     );
}

export default Universe;