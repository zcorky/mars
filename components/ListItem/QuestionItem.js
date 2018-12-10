/*
 * @Author: zhaoxiaoqi
 * @Date: 2018-03-13 11:34:18
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-12-10 17:59:24
 */

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Absolute, View, Text, ListItem } from 'elfen';
import Icon from '../_internal/Icon';

const NOOP = () => null;

const QuestionIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 100%;
  color: #B6C0CC;
`;

const QuestionTextContent = styled(Text)`
  width: 100%;
  height: 100%;
  line-height: 2rem;
  
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

const QuestionTextWrapper = styled(View)`
  position: relative;
  width: calc(100% - 2.1rem);
  // padding: .9rem 0;
  // height: 4rem;
  min-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const QuestionTextAbsolute = styled(Absolute)`
  position: relative;
  // top: 0;
  // left: 0;
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
  padding: 6px 0;
  // border-bottom: 1px solid #ECECEC;
  // height: 4rem;
  // line-height: 4.4rem;
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