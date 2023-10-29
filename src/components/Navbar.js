import React from 'react'

export default function Navbar(props) {
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#03C04A"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"#880085"}}><b>News Stream</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("general")}>General</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" aria-current="page" href="#" onClick={()=>props.changeCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={()=>props.changeCategory("technology")}>Technology</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
