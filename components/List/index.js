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

import { View, Text, List, ListItem } from 'elfen';

import getRenderItembyType from './utils';

const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  letter-spacing: 0;
  margin-bottom: 1rem;
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
  static type = 'LIST';
  static label = '问题卡片';

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })),
    commands: PropTypes.array,
    onText: PropTypes.func,
    onCommand: PropTypes.func,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    title: '常见问题',
    data: [
      {
          type: 'TEXT', // 类型: 1 纯文本(text) 2 富文本(richtext) (产品), 3 富文本(richtext) (其他...)

          label: '如何通过众安保险投保?', // 文案 (文本)
          value: 'string | number', // 值 (文本)

          title: '车险', // 标题 (富文本: 产品标题)
          banner: 'string', // 图片链接 (富文本: 产品图)
          tags: ['tag1', 'tag2'], // 标签 (富文本: 产品)
          price: 2333, // 价格 (富文本: 产品)
          count: 666, // 销售数量 (富文本: 产品)
          url: 'string', // 产品链接 (富文本: 产品)
      },  {
          type: 'TEXT', // 类型: 1 纯文本(text) 2 富文本(richtext) (产品), 3 富文本(richtext) (其他...)

          label: '理赔流程是什么样的？怎么操作？怎么操作？怎么操作？', // 文案 (文本)
          value: 'string | number', // 值 (文本)

          title: '车险', // 标题 (富文本: 产品标题)
          banner: 'string', // 图片链接 (富文本: 产品图)
          tags: ['tag1', 'tag2'], // 标签 (富文本: 产品)
          price: 666, // 价格 (富文本: 产品)
          count: 2333, // 销售数量 (富文本: 产品)
          url: 'string', // 产品链接 (富文本: 产品)
      },  {
          type: 'TEXT', // 类型: 1 纯文本(text) 2 富文本(richtext) (产品), 3 富文本(richtext) (其他...)

          label: '怎么查看已购保险的保单？', // 文案 (文本)
          value: 'string | number', // 值 (文本)

          title: '车险', // 标题 (富文本: 产品标题)
          banner: 'string', // 图片链接 (富文本: 产品图)
          tags: ['tag1', 'tag2tag22222222'], // 标签 (富文本: 产品)
          price: 345, // 价格 (富文本: 产品)
          count: 543, // 销售数量 (富文本: 产品)
          url: 'string', // 产品链接 (富文本: 产品)
      }
    ],
    commands: [],
  };

  render() {
    const { title = '这是标题', data = RList.content.data, commands = [], onSelect } = this.props;

    const disableTitle = !title;

    return (
      <Wrapper onClick={onSelect}>
        <CardWrapper>
          {disableTitle ? null : <Title>{ title }</Title>}
          {disableTitle ? null : <Divide />}
          <ListWrapper>
            {data.length === 0 ? <View style={{ textAlign: 'center', padding: '2rem' }}>尚未发现常见问题</View> : null}
            {
              data.map((item, index) => {
                const ItemComponent = getRenderItembyType(item.type);
                const { label, value } = item;                               // TEXT
                const { title, banner, tags, price, count, url } = item;     // TEXTIMAGE
          
                return (
                  <ItemComponent 
                    key={index} 
                    label={label} 
                    value={value}
                    title={title}
                    banner={banner}
                    tags={tags}
                    price={price}
                    count={count}
                    url={url}
                  />
                );
              }) 
            }
          </ListWrapper>
        </CardWrapper>
      </Wrapper>
    );
  }
}
