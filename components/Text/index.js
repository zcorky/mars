/*
 * @Author: zhaoxiaoqi
 * @Date: 2018-03-13 10:04:31
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-04-04 18:34:59
 */

import React, { PureComponent } from 'react';
import { string, array, bool, func } from 'prop-types';
import styled from 'styled-components';

import { View, Text as rText } from 'elfen';

import Action from '../_internal/Action';
import { filterUrl } from './utils';

const NOOP = () => null;

const Text = styled(rText)`
  text-align: justify;
  letter-spacing: 1px;
  
  position: relative;
  line-height: 2rem;
  padding: 1rem 1.4rem 1rem 1.4rem;
  display: inline-block;
  word-break: break-all;
  max-width: 85%;
  user-select: text;
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => (props.client ? '#fff' : '')};
  // font-weight: ${props => (props.client ? '200' : '')};
  border-radius: ${props => (props.client ? '1.2rem 0 1.2rem 1.2rem' : '0 1.2rem 1.2rem 1.2rem')};
  background-color: ${props => (props.client ? props.theme[props.theme.current].text.backgroundColor : '#fff')};
  background-image: ${props => (props.client ? props.theme[props.theme.current].text.backgroundImage : '')};
  box-shadow: 0 3px 5px 1px ${props => props.theme[props.theme.current].text.shadowColor};

  & > a {
    color: ${props => (props.client ? '#fff' : '#1CA4FC')};
  }
`;

const TextWrapper = styled(View)`
  width: 100%;
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
  static type = 'TEXT';
  static label = '文本卡片';

  static propTypes = {
    text: string.isRequired,
    commands: array,

    ack: bool,
    activeAck: bool,
    onSelect: func,
    onCommand: func,
  };

  static defaultProps = {
    text: '这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本',
    commands: [],
    
    activeRichText: false,
    activeAck: false,
  };

  state = {
    ackSuccess: true,
    waitSuccess: true,
  }

  componentDidMount() {
    // this.waitToCreateTimer(RText.WAITING_TIME);
  }

  render() {
    const {
      text, commands, 
      ack, activeAck, onSelect = NOOP, onCommand = NOOP,
      ...others
    } = this.props;

    const { client } = others;

    const ackSuccess = this.state.ackSuccess;
    const waitSuccess = this.state.waitSuccess;

    return (
      <TextWrapper client={client} onClick={onSelect}>
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