import React, {Component, Fragment} from 'react';


class Popup extends Component {
    render () {

      let dialog = (
        <div className="overlay">
            <div className="popup">
                <div className="popup-header">
                  <h4>Edit</h4>
                  <a href="#" className="close" onClick={this.props.onClose}> </a>
                </div>
                <div className="popup-body">
                  <div className="form-row">
                      <label>Name</label>
                      <input type="text" defaultValue={this.props.name} />
                  </div>
                  <div className="form-row">
                      <label>Username</label>
                      <input type="text" />
                  </div>
                  <div className="form-row">
                      <label>Email</label>
                      <input type="email" />
                  </div>
                </div>
                <div className="popup-footer"> 
                  <button className="cancel" onClick={this.props.onClose}>Cancel</button>
                  <button>Save</button>
                </div>
                
            </div>
        </div>
      );

      if(!this.props.isOpen){
        
        dialog = null;
      }
      return (
        <div>
          {dialog}
        </div>
      )
    }
  }

  export default Popup;