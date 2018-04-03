/**
* @Author: eason
* @Date:   2017-07-24T15:50:51+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   zero
 * @Last modified time: 2017-10-20T14:25:06+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';
import { string, number, func, array, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import { View, Text, List, ListItem } from 'elfen';
import { QuestionItem } from '../ListItem';

// import getRenderItembyType from './utils';

const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  letter-spacing: 0;
  margin-bottom: 1rem;
  border-radius: 1.2rem;
`;

const CardWrapper = styled(View)`
  flex: 1;
  border-radius: 1.2rem;
`;

const Title = styled(Text)`
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme[props.theme.current].question.titleColor};

  background-color: #fff;
  border-radius: 1.2rem 1.2rem 0 0;
  display: block;
  padding: 1.2rem 1.4rem 1rem 1.4rem;
`;

const Divide = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2rem);
    margin-left: 1.4rem;
    height: 100%;
    // background-color: #889099; // color by design, error
    background-color: #ECECEC;
    transform: scaleY(.5);
  }
`;


const ListWrapper = styled(List)`
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme[props.theme.current].question.contentColor};

  box-shadow: 0 3px 5px 1px ${props => props.theme[props.theme.current].question.shadowColor}; // #E2E8EF;
  overflow: hidden;

  width: 100%;
  background-color: #fff;
  border-radius: ${props => (props.disableTitle ? '1.2rem' : '0 0 1.2rem 1.2rem')};
`;

export default class RList extends PureComponent {
  static type = 'TEXT_LIST';
  static label = '文本列表';

  static propTypes = {
    title: string,
    list: arrayOf(shape({
      title: string,
      link: string,
    })),
    commands: array,
    onText: func,
    onCommand: func,
    onSelect: func,
  };

  static defaultProps = {
    title: '',
    list: [
        {
            text: '文本一',
            value: '文本一隐藏值',
        },  {
            text: '文本二',
            value: '文本二隐藏值',
        },  {
            text: '文本三',
            value: '文本三隐藏值',
        }
    ],
    commands: [],
  };

  render() {
    const {title, list, commands = [], onSelect } = this.props;
    const disableTitle = !title;

    return (
      <Wrapper onClick={onSelect}>
        <CardWrapper>
          {disableTitle ? null : <Title>{ title }</Title>}
          {disableTitle ? null : <Divide />}
          <ListWrapper disableTitle={disableTitle}>
            {list.length === 0 ? <View style={{ textAlign: 'center', padding: '2rem' }}>尚未发现常见问题</View> : null}
            {
                list.map((e, i) => <QuestionItem key={i} text={e.text} value={e.value}/>)
            }
          </ListWrapper>
        </CardWrapper>
    </Wrapper>
    );
  }
}
