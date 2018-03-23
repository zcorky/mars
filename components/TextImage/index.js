import React, { PureComponent } from 'react';
import { array, arrayOf, string, number, func, shape } from 'prop-types';
import styled from 'styled-components';

import { View, List as rList, ListItem, Avatar as rAvatar } from 'elfen';

import TextImageItem from './One';

import styles from './index.less';

const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  font-size: 1.4rem;
  color: #393939;
  letter-spacing: 0;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  width: 100%;
`;

const List = styled(rList)`
  border-radius: 1.2rem;
  padding: 1.2rem 1.4rem;
  background-color: #fff;
  box-shadow: 0 3px 5px 1px #E2E8EF;
`;

const CommandWrapper = styled.div`
  margin-top: 1rem;
  flex: 1;
`;

const Avatar = styled(rAvatar)`
  flexShrink: 0;
  margin-left: ${props => (props.client ? '1rem' : 'unset')};
  margin-right: ${props => (!props.client ? '1rem' : 'unset')};
`;

export default class TextImage extends PureComponent {
  static label = '产品卡片';
  static type = 'TEXTIMAGE';

  static propTypes = {
    products: arrayOf(shape({
      banner: string,
      title: string,
      tags: array,
      price: number,
      sellCount: number,
    })),
    commands: arrayOf(
      shape({
        icon: string,
        label: string,
        type: string,
        url: string,
      }),
    ),
    onSelect: func,
    onCommand: func,
  };

  static defaultProps = {
    commands: [{
      icon: 'more-suggestion',
      label: '查看更多方案',
    }],
    products: [
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '尊享e生百万医疗保险',
        tags: ['险种不够经验来凑', '老司机带带我'],
        price: 200,
        sellCount: 10000,
      },
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '尊享e生百万医疗保险',
        tags: ['险种不够经验来凑', '老司机带带我'],
        price: 200,
        sellCount: 10000,
      },
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '尊享e生百万医疗保险',
        tags: ['险种不够经验来凑', '老司机带带我'],
        price: 200,
        sellCount: 10000,
      },
    ],
  };

  render() {
    const { client, avatar, onSelect, products, commands, onCommand } = this.props;

    return (
      <Wrapper onClick={onSelect}>
        <Content>
          <List className={styles.products}>
            {products.map((e, i) => (
              <TextImageItem key={i} {...e} />
            ))}
          </List>
          <CommandWrapper>
            {/* {commands.map(e => (
              <Action onClick={() => onCommand(e)} {...e} />
            ))} */}
          </CommandWrapper>
        </Content>
      </Wrapper>
    );
  }
}