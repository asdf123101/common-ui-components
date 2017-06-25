import React from 'react'
import {TransitionMotion, spring} from 'react-motion'

export default class FadeInOut extends React.Component {
  willEnter = () => ({opacity: 0.01})
  willLeave = () => ({opacity: spring(0)})
  render() {
    return (
      <TransitionMotion
        styles={this.props.content ? this.props.content.map(({key    ,data,...rest}) => ({
      key: key,
          data: data,
      style: rest
    })) : []}
    willEnter={this.willEnter}
    willLeave={this.willLeave}
    >
        {(styles) => {
          return (
      <div>
        { styles.map(({ key, data, style}) => (
          <div key={key} style={{...style}}>{ data }</div>
        ))}
            </div>)
        }}
  </TransitionMotion>
    )
  }
}
