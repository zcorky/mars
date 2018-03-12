/**
 * @Author: zero
 * @Date:   2017-07-28T10:57:28+08:00
 * @Last modified by:   zero
 * @Last modified time: 2017-10-20T14:26:07+08:00
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { View, Text as rText, Avatar as rAvatar } from 'elfen';

import Action from '../Action';
import { filterUrl } from './utils';

const Avatar = styled(rAvatar)`
  flexShrink: 0;
  margin-left: ${props => (props.client ? '1rem' : 'unset')};
  margin-right: ${props => (!props.client ? '1rem' : 'unset')};
`;

const Text = styled(rText)`
  text-align: justify;
  letter-spacing: 1px;
  
  position: relative;
  line-height: 2rem;
  padding: 1rem 1.4rem 1rem 1.4rem;
  display: inline-block;
  word-break: break-all;
  max-width: 70%;
  // max-width: 100%;
  user-select: text;
  // font-size: 1.4rem;
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => (props.client ? '#fff' : '')};
  font-weight: ${props => (props.client ? '200' : '')};
  border-radius: ${props => (props.client ? '1.2rem 0 1.2rem 1.2rem' : '0 1.2rem 1.2rem 1.2rem')};
  // background-color: ${props => (props.client ? '#2AA5F9' : '#fff')};
  // background-image: ${props => (props.client ? 'linear-gradient(90deg, #41C8F9 0%, #0BA5F5 99%)' : '')};
  background-color: ${props => (props.client ? props.theme[props.theme.current].text.backgroundColor : '#fff')};
  background-image: ${props => (props.client ? props.theme[props.theme.current].text.backgroundImage : '')};
  box-shadow: 0 3px 5px 1px ${props => props.theme[props.theme.current].text.shadowColor};

  & > a {
    color: ${props => (props.client ? '#fff' : '#1CA4FC')};
  }
`;

const TextWrapper = styled(View)`
  // color: #393939;
  color: ${props => props.theme.palette.color1};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: ${props => (props.client ? 'row-reverse' : 'unset')};
`;

const CommandWrapper = styled(View)`
  margin-top: 1rem;
  flex: 1;
`;

const LoadingWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  // background: red;
  top: .5rem;
  margin: 0 .5rem;
  display: ${props => (props.hide ? 'none' : 'block')};
`;

const WarningWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  // background: red;
  top: .5rem;
  margin: 0 .5rem;
  display: ${props => (props.hide ? 'none' : 'block')};
`;
const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  outline: none;
  border-width: 0;
  border-radius: 50%;
  background: transparent;
  display: ${props => (props.hide ? 'none' : 'block')};
`;

export default class RText extends PureComponent {
  static label = '文本消息';
  static WAITING_TIME = 1000;
  static LOADING_TIME = 1000 * 5;

  static propTypes = {
    text: PropTypes.string,
    avatar: PropTypes.string,
    // @other
    activeRichText: PropTypes.bool,
    ack: PropTypes.bool,
    activeAck: PropTypes.bool,
    commands: PropTypes.array,
    onSelect: PropTypes.func,
    onCommand: PropTypes.func,
  };

  static defaultProps = {
    activeRichText: false,
    activeAck: false,
    commands: [],
  };

  state = {
    ackSuccess: true,
    waitSuccess: true,
  }

  componentDidMount() {
    this.waitToCreateTimer(RText.WAITING_TIME);
  }

  onWarnClick = () => {
    this.resendMessage();
    this.waitToCreateTimer(RText.WAITING_TIME);
  };

  waitToCreateTimer = (time) => {
    if (this.props.activeAck) {
      setTimeout(() => {
        if (!this.props.ack) {
          this.setState({
            waitSuccess: false,
          });
          this.createTimer(RText.LOADING_TIME);
        }
      }, time);
    }
  }

  createTimer = (time) => {
    if (this.props.activeAck) {
      setTimeout(() => {
        if (!this.props.ack) {
          this.setState({
            ackSuccess: false,
          });
        } else {
          this.setState({
            waitSuccess: true,
          });
        }
      }, time);
    }
  }

  resendMessage = () => {
    const { type, ...others } = this.props;
    const isResend = true;
    const messages = { ...others, isResend };
    this.activeAck = false;
    this.setState({
      ackSuccess: true,
      waitSuccess: true,
    });
    this.props.onMessage(type, messages);
  }

  // turnManual = () => {
  //   this.props.dispatch({ type: 'app/robot->man' });
  // }

  render() {
    const {
      ack, activeAck, text = '123', avatar, onSelect, commands = [], onCommand, ...others
    } = this.props;
    const { client } = others;
    const ackSuccess = this.state.ackSuccess;
    const waitSuccess = this.state.waitSuccess;

    return (
      <TextWrapper client={client} onClick={onSelect}>
        {/* <Avatar client={client} size={40} src={avatar} /> */}
        {commands.length === 0 ? (
          <Text
            client={client}
            dangerouslySetInnerHTML={{ __html: filterUrl(text) }}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <Text
              client={client}
              dangerouslySetInnerHTML={{ __html: filterUrl(text) }}
            />
            <CommandWrapper>
              {commands.map(e => (
                <Action onClick={() => onCommand(e)} {...e} />
              ))}
            </CommandWrapper>
          </View>
        )}
        {(!activeAck || (client && ack) || waitSuccess || !ackSuccess) ? null : (
          <LoadingWrapper>
            {/* <style> {
              `@keyframes rotate_load {
                to {
                  transform: rotate(1turn);
                }
              }
              .loading {
                  animation: rotate_load 0.5s linear infinite;
              }`
            }
            </style> */}
            {/* <Loading style={{ width: '100%', height: '100%' }} color="rgba(0, 0, 0, .08)" /> */}
            {/* <Icon className="loading"
                      name="loading"
                      style={{ width: '20px', height: '20px' }}
                      color="rgba(0, 0, 0, 0.08)" /> */}
          </LoadingWrapper>
        )}
        {(!activeAck || waitSuccess || ackSuccess) ? null : (
          <WarningWrapper>
            <ButtonWrapper onClick={this.onWarnClick}>
              {/* <Icon name="warn"
                  style={{ width: '20px', height: '20px' }}
                  color="rgba(225, 0, 0, 0.75)" /> */}
            </ButtonWrapper>
          </WarningWrapper>
        )}
      </TextWrapper>
    );
  }
}

// export default () => (
//   <div>123</div>
// );