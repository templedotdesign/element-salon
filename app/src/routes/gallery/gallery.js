import React, { Component } from 'react';

import Wrapper from '../../components/shared/wrapper/wrapper';
import Row from '../../components/shared/row/row';
import GalleryItem from './galleryItem/galleryItem';
import ImageOverlay from '../../components/imageOverlay/imageOverlay';

import bigHairImg from '../../assets/big-hair.jpeg';
import blonde1Img from '../../assets/blonde-small.jpeg';
import blonde2Img from '../../assets/blonde2-small.jpeg';
import brunette1Img from '../../assets/brunette1.jpeg';
import brunette2Img from '../../assets/brunette2.jpeg';
import sunglassesImg from '../../assets/sunglasses-small.jpeg';
import beardImg from '../../assets/beard.jpeg';
import headPhonesImg from '../../assets/headphones.jpeg';
import lipstickImg from '../../assets/lipstick.jpeg';
import scarfImg from '../../assets/scarf.jpeg';
import earringImg from '../../assets/earring.jpeg';
import robeImg from '../../assets/robe.jpeg';

import classes from './gallery.css'

import galleryConstants from '../../constants/gallery';

class Gallery extends Component {
  state = {
    hideOverlay: true,
    images: [
      { src: bigHairImg, statements: galleryConstants.desc1},
      { src: blonde1Img, statements: galleryConstants.desc2},
      { src: brunette1Img, statements: galleryConstants.desc3},
      { src: blonde2Img, statements: galleryConstants.desc4},
      { src: brunette2Img, statements: galleryConstants.desc5},
      { src: sunglassesImg, statements: galleryConstants.desc6},
      { src: lipstickImg, statements: galleryConstants.desc7},
      { src: beardImg, statements: galleryConstants.desc8},
      { src: headPhonesImg, statements: galleryConstants.desc9},
      { src: scarfImg, statements: galleryConstants.desc10},
      { src: earringImg, statements: galleryConstants.desc11},
      { src: robeImg, statements: galleryConstants.desc12},
    ],
    currentIndex: 0
  }

  hideOverlay = () => {
    this.setState({...this.state, hideOverlay: true})
  }

  showOverlay = (index) => {
    this.setState({...this.state, currentIndex: index, hideOverlay: false})
  }

  incrementIndex = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      this.setState({...this.state, currentIndex: 0})
    } else {
      this.setState({...this.state, currentIndex: this.state.currentIndex + 1});
    }
  }

  decrementIndex = () => {
    if(this.state.currentIndex === 0) {
      this.setState({...this.state, currentIndex: this.state.images.length - 1})
    } else {
      this.setState({...this.state, currentIndex: this.state.currentIndex - 1});
    }
  }

  render() {
    return (
      <Wrapper>
        <div style={{paddingTop: '50px'}}>
          <div className={classes.heading}>
            <h1>Selfies & Such</h1>
          </div>
          <Row justify='center' space='25px'>
            {this.state.images.map((image, index) => {
              return (
                <GalleryItem src={this.state.images[index].src} clicked={() => this.showOverlay(index)}/>
              );
            })}
          </Row>
        </div>
        <ImageOverlay data={this.state.images[this.state.currentIndex]} hidden={this.state.hideOverlay} clicked={this.hideOverlay} increment={this.incrementIndex} decrement={this.decrementIndex}/>
      </Wrapper>
    );
  }
}

export default Gallery;