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
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Absolute, View, Text, List, ListItem, Avatar as rAvatar } from 'elfen';

// import { sendMessage } from 'services/message';

// import Icon from '../../Icon';
import Action from '../Action';
// import { Absolute } from 'elfen/lib/layout/Absolute';

const Wrapper = styled(View)`
  display: flex;
  padding-bottom: 0;
  // font-size: 1.4rem;
  // color: #393939;
  // color: ${props => props.theme.palette.color1};
  letter-spacing: 0;
  margin-bottom: 1rem;
`;

const Avatar = styled(rAvatar)`
  flexShrink: 0;
  margin-left: ${props => (props.client ? '1rem' : 'unset')};
  margin-right: ${props => (!props.client ? '1rem' : 'unset')};
`;

const QuestionCardWrapper = styled(View)`
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
  // color: #899099;
  // font-weight: bold;
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

const Questions = styled(List)`
  // color: ${props => props.theme.palette.color1};
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme[props.theme.current].question.contentColor};

  box-shadow: 0 3px 5px 1px ${props => props.theme[props.theme.current].question.shadowColor}; // #E2E8EF;
  overflow: hidden;

  width: 100%;
  background-color: #fff;
  border-radius: ${props => (props.disableTitle ? '1.2rem' : '0 0 1.2rem 1.2rem')};
`;

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
`;

const QuestionTextContent = styled(Text)`
  width: 100%;
  height: 100%;
  line-height: 4rem;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuestionText = ({ children }) => (
  <QuestionTextWrapper>
    <QuestionTextAbsolute>
      <QuestionTextContent>{children}</QuestionTextContent>
    </QuestionTextAbsolute>
  </QuestionTextWrapper>
);

const QuestionIcon = styled.div`
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

const Question = ({ title, onClick }) => (
  <QuestionWrapper onClick={onClick}>
    <QuestionText>{title}</QuestionText>
    <QuestionIcon name="more" size="1rem" style={{ marginRight: -12 }} />
  </QuestionWrapper>
);

export default class RList extends PureComponent {

  static label = '问题卡片';

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })).isRequired,
    commands: PropTypes.array.isRequired,
    onText: PropTypes.func.isRequired,
    onCommand: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '常见问题',
    data: [{
      key: 'a',
      title: '如何通过众安保险投保',
      link: '#aaaaa',
    }, {
      key: 'b',
      title: '理赔流程是什么样的？怎么操作？怎么操作？怎么操作？',
      link: '#aaaaa',
    }, {
      key: 'c',
      title: '怎么查看已购保险的保单？',
      link: '#aaaaa',
    }],
    commands: [],
  };

  render() {
    const { avatar, title, data, commands, onText, onCommand, onSelect } = this.props;
    const disableTitle = !title;

    return (
      <Wrapper onClick={onSelect}>
        {/* <Avatar src={avatar} /> */}
        <QuestionCardWrapper>
          {disableTitle ? null : <Title>{ title }</Title>}
          {disableTitle ? null : <Divide />}
          <Questions disableTitle={disableTitle}>
            {data.length === 0 ? <View style={{ textAlign: 'center', padding: '2rem' }}>尚未发现常见问题</View> : null}
            {data.map(({ key, title: t }) => (
              <Question key={key} title={t} onClick={() => onText(t)} />
            ))}
          </Questions>
          {commands.length > 0 ? (
            <ActionWrapper>
              {commands.map(e => (
                <Action
                  onClick={() => onCommand(e, 'http://12292-zis-microservices-za-im-image.test.za.net/oss/file/1f10bd5b-ceeb-49d8-a49f-117155961bdc')}
                  {...e}
                />
              ))}
            </ActionWrapper>
          ) : null}
        </QuestionCardWrapper>
      </Wrapper>
    );
  }
}
