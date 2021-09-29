import React  from "react"; 
import "./ServiceBox.css"; 

 
  
 
 
  
  class ServiceCard extends React.Component {
  

    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }

   
    render() {
      return (
        <div className="main_card">
             
              <div className="card_body">
                    <div className="card_icon">{this.props.Icon} </div>
                    <div className="card_detail">
                    <h3>{this.props.num}</h3>
                    <p className="body-content">{this.props.name}</p>
                    </div>
                    
                </div>
           
        </div>
      )
    }
  }
 
 
export default ServiceCard;