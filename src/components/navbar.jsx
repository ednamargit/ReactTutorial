import React, { Component } from 'react';


//Stateless Functional COmponent

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
        </a>
      </div>
    </nav>
  );
}


// class NavBar extends Component {
//     render() { 
//         return (
//           <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#">
//this.props only works in class components, in functional components you need a param props and use it inside the function                  
//                 Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span> 
//               </a>
//             </div>
//           </nav>
//         );
//     }
// }
 
export default NavBar;