/*
 * @Author: zhaoxiaoqi
 * @Date: 2018-03-13 11:34:18
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-04-19 20:22:01
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Absolute, View, Text, List, ListItem, Avatar as rAvatar } from 'elfen';
import Icon from '../_internal/Icon';

const NOOP = () => null;

const QuestionIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  color: #B6C0CC;
`;

const ActionWrapper = styled(View)`
  margin-top: 1rem;
`;

const QuestionTextContent = styled(Text)`
  width: 100%;
  height: 100%;
  line-height: 4rem;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuestionTextWrapper = styled(View)`
  position: relative;
  width: calc(100% - 4rem);
  // padding: .9rem 0;
  height: 4rem;
`;

const QuestionTextAbsolute = styled(Absolute)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: left;
`;

const QuestionText = ({ children }) => (
  <QuestionTextWrapper>
    <QuestionTextAbsolute>
      <QuestionTextContent>{children}</QuestionTextContent>
    </QuestionTextAbsolute>
  </QuestionTextWrapper>
);

const QuestionWrapper = styled(ListItem)`
  position: relative;
  margin: 0 1.4rem;
  // border-bottom: 1px solid #ECECEC;
  // height: 4rem;
  line-height: 4.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default class QuestionItem extends PureComponent {
  render() {
    const { text, value, onClick = NOOP } = this.props;
    return (
      <QuestionWrapper onClick={() => onClick('text', {text: text, value: value})}>
        <QuestionText>{text}</QuestionText>
        <QuestionIcon name="more" size="1rem" style={{ marginRight: -12 }} />
      </QuestionWrapper>
    )
  }
}