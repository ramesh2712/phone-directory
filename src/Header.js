import React  from 'react';
import './Header.css'


// Functional Component

const Header = function(props){
   
    return(
        <div className="header">
          {props.heading}
         </div>
    )
}


// Class Component 
/*
class Header extends Component {
    render(){
        return(
            <div className="header">
              {this.props.heading}
             </div>
        )
    }
}
*/

export default Header;