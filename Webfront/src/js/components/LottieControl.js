import React from 'react'
import Lottie from 'react-lottie'
import animationData from '~/assets/lottie/anime.json'

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return <div>
      <Lottie options={defaultOptions}
              height={500}
              width={500}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
    </div>
  }
}
