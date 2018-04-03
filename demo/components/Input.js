/**
* @Author: eason
* @Date:   2017-07-07T11:29:49+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   zero
 * @Last modified time: 2017-08-27T19:05:20+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  // box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.10);
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  height: 100%;
  border: none;
  // font-size: 1.4rem;
  // background-color: #F3F6F9;
  background-color: ${props => props.theme[props.theme.current].input.backgroundColor};
  // border-radius: 1.6rem;
  // height: 3.2rem;
  // padding: 0 1.5rem;
  // font-size: 1.2rem; // @with-two-line
  // font-size: 1.4rem; 

  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default class Footer extends PureComponent {
  static defaultProps = {
    onSendText: () => null,
    onUploadImage: () => null,
  };

  onSendText = () => {
    this.props.onSendText(this.text.value);

    setTimeout(() => {
      this.text.value = '';
    }, 0);
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSendText();
    }
  };

  handleUploadImage = (event) => {
    const files = event.target.files;
    this.props.onUploadImage(files);
  };

  render() {
    return (
      <Wrapper>
        <span style={{ cursor: 'pointer', position: 'relative', width: 40, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0 }}
            type="file"
            onChange={this.handleUploadImage}
            accept="image/*"
            value=""
          />
          <Icon name="camera_full" style={{ width: '4rem' }} />
        </span>
        <Icon name="emoji" onClick={this.openEmoji} style={{ display: 'none' }} color="#20A6F2" />
        <Input
          key={'@error/why'}
          innerRef={ref => (this.text = ref)}
          placeholder="说点什么吧..."
          onKeyPress={this.onKeyPress}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
        <Icon name="send" onClick={this.onSendText} style={{ position: 'relative', width: 40, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
        {this.props.children}
      </Wrapper>
    );
  }
}
