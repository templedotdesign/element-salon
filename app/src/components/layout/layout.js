//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Components
import Navigation from '../navigation/navigation';

//CSS
import classes from './layout.css';

class Layout extends Component {
  state = {
    showNavigation: false
  };
  
  showNavigation = () => {
    this.setState({...this.state, showNavigation: true});
  };

  hideNavigation = () => {
    this.setState({...this.state, showNavigation: false});
  };
  
  render() {
    let menuClasses = [classes.menu];
    if(this.props.history.location.pathname === '/') {
      menuClasses.push(classes.white)
    } else {
      menuClasses.push(classes.purple)
    }
    return (
      <div>
        <p className={menuClasses.join(' ')} onClick={this.showNavigation}><i className="fas fa-bars"></i></p>
        <Navigation show={this.state.showNavigation} closed={this.hideNavigation}/>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);