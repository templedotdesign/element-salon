//Core
import React, { Component } from 'react';

//Components
import Column from '../shared/column/column';
import Row from '../shared/row/row';
import NavigationItem from './navigationItem/navigationItem';
import Bubble from '../bubble/bubble';

//CSS 
import classes from './navigation.css';

//Assets
import hairImg from '../../assets/hair-dryer.png';

class Navigation extends Component {
  state = {
    message: 'OMG! My Hair!'
  }

  changeMessage = (message) => {
    this.setState({...this.state, message: message})
  }

  render() {
    let navClasses = [classes.navigation];
  if(this.props.show) {
    navClasses.push(classes.show);
  }
  return (
    <div className={navClasses.join(' ')}>
      <p className={classes.close} onClick={this.props.closed}><i className="fas fa-times"></i></p>  
      <Row>
        <div style={{width: '50vw', height: '100vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{fontSize: '2em'}} className={classes.speechBubble}>
            <Bubble message={this.state.message}/>
          </div>
          <img src={hairImg} style={{height: '100%'}} alt='long haired girl'/>
        </div>
        <Column width="50%" height='100vh' justify='center'>
          <NavigationItem heading='HOME'  closed={this.props.closed} hover={() => {this.changeMessage('OMG! My Hair!')}} to='/'/>
          <NavigationItem heading='SERVICES' closed={this.props.closed} hover={() => {this.changeMessage('I Need It!')}} to='/services'/>
          <NavigationItem heading='GALLERY' closed={this.props.closed} to='/gallery' hover={() => {this.changeMessage('My Pics!')}} exact/>          
          <NavigationItem heading='RETAIL' closed={this.props.closed} to='/retail' hover={() => {this.changeMessage('I Need Products!')}} exact/>
          <NavigationItem heading='CONTACT' closed={this.props.closed} hover={() => {this.changeMessage('Call Me Maybe!')}} to='/contact'/>
        </Column>
      </Row>
    </div>
  );
  }
}


export default Navigation;