/** @format */

import React, { Component } from 'react';
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from 'mdbreact';
import Title from '../components/Title';
import Caption from '../components/Caption';
import data from '../data';
import Portfolios from '../components/Portfolios';

const { portfolioCaption, portfolios } = data;

class ModalPortfolio extends Component {
  vidRef = null;

  state = {
    active: null,
    data: {},
    isVideo: false,
    video: null,
    isPlay: false,
  };

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const active = data.img ? data.img.list[0] : null;
    const video = data.videos ? data.videos : null;
    this.setState({ data, active, video, isPlay: false, isVideo: false });
  }

  onActive = (active, isLast) => {
    const { video } = this.state;
    if (isLast && video) {
      this.setState({ isVideo: true });
    } else {
      this.setState({ active, isVideo: false });
    }
  };

  onPlay = () => {
    this.vidRef.play();
    this.setState({ isPlay: true });
  };

  onPause = () => {
    this.vidRef.pause();
    this.setState({ isPlay: false });
  };

  onStop = () => {
    this.vidRef.stop();
    this.setState({ isPlay: false });
  };

  componentWillMount() {
    this.setState({ isPlay: false, isVideo: false, active: null });
  }

  componentWillUnmount() {
    this.setState({ isPlay: false, isVideo: false, active: null });
    this.onStop();
  }

  componentDidMount() {}

  render() {
    const { onShow, isOpen } = this.props;
    const { data, active, video, isVideo, isPlay } = this.state;
    const { title, description, isMobile, img } = data;

    return (
      <MDBContainer MDBContainer>
        <MDBModal
          size='lg'
          isOpen={isOpen}
          toggle={onShow}
          centered
          className='bg-transparent'
        >
          <MDBModalHeader
            toggle={onShow}
            className='text-lighter elegant-color m-0 pb-0'
          >
            {title}
          </MDBModalHeader>
          <MDBModalBody className='elegant-color text-center'>
            <p className='text-lighter text-justify elegant-color m-0 mb-3'>
              {description}.
            </p>
            {!isVideo && (
              <img
                src={active}
                className={`w-100 h-100 ${isMobile ? 'mobile-modal' : ''}`}
                alt='img'
              />
            )}
            {isVideo && (
              <div className='video-wrapper'>
                <video
                  muted
                  ref={ref => (this.vidRef = ref)}
                  src={video}
                  type='video/mp4'
                  onClick={() => this.onPause()}
                ></video>
                {!isPlay && (
                  <MDBIcon
                    icon='play'
                    className='text-lighter btn-video'
                    onClick={() => this.onPlay()}
                  />
                )}
                {isPlay && (
                  <MDBIcon
                    icon='pause'
                    className='text-lighter btn-video'
                    onClick={() => this.onPause()}
                  />
                )}
              </div>
            )}
          </MDBModalBody>
          <MDBModalFooter className='elegant-color'>
            <div className='modal-footer'>
              {img &&
                img.list.map((e, i) => (
                  <img
                    src={e}
                    key={i}
                    alt={i}
                    className='img-list'
                    onClick={() =>
                      this.onActive(e, i === data.img.list.length - 1)
                    }
                  />
                ))}
            </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

class PortfolioSection extends Component {
  state = {
    isOpen: false,
    data: [],
  };

  onToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  onShowModal = data => {
    this.setState({ isOpen: true, data });
  };

  render() {
    const { isOpen, data } = this.state;
    return (
      <section
        id='portfolio'
        className='p-5 w-100 p-0 d-flex flex-row justify-content-center align-items-center elegant-color'
      >
        <MDBContainer className='p-0 m-0 min-w-100'>
          <Title>Portfolio</Title>
          <Portfolios data={portfolios} onShow={this.onShowModal} />
          <ModalPortfolio onShow={this.onToggle} isOpen={isOpen} data={data} />
        </MDBContainer>
      </section>
    );
  }
}

export default PortfolioSection;
