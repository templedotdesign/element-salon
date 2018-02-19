//Core
import React, { Component } from 'react';

//Components
import Row from '../../components/shared/row/row';
import Wrapper from '../../components/shared/wrapper/wrapper';

//CSS
import classes from './home.css';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <h1>Home</h1>
        </Row>
      </Wrapper>
    );
  }
}

export default Home;