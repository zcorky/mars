import React, { PureComponent } from 'react';
import { arrayOf, string, number, func, shape } from 'prop-types';
import styled from 'styled-components';

import { View, List as rList, ListItem, Avatar as rAvatar } from 'elfen';

// import Action from 'components/Action';

import One from './One';

import styles from './index.less';

const Wrapper = styled(View)`
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

export default class Product extends PureComponent {
  static label = '产品卡片';

  static propTypes = {
    avatar: string.isRequired,
    products: arrayOf(shape({
      banner: string.isRequired,
      title: string.isRequired,
      // tagOne: string,
      // tagTwo: string,
      // tags: arrayOf(string),
      tags: string.isRequired,
      price: number.isRequired,
      sellCount: number.isRequired,
    })).isRequired,
    commands: arrayOf(
      shape({
        icon: string.isRequired,
        label: string.isRequired,
        type: string.isRequired,
        url: string.isRequired,
      }),
    ).isRequired,
    onSelect: func.isRequired,
    onCommand: func.isRequired,
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
        {/* <Avatar client={client} size={40} src={avatar} /> */}
        <Content>
          <List className={styles.products}>
            {products.map((e, i) => (
              <ListItem key={i} className={styles.product}>
                <One {...e} />
              </ListItem>
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

/* Before
      <View className={styles.normal} onClick={onSelect}>
        <List className={styles.products}>
          {data.map((e, i) => (
            <ListItem key={i} className={styles.product}>
              <img className={styles.banner} role="presentation" src={e.banner} />
              <View className={styles.info}>
                <Text className={styles.title}>{e.title}</Text>
                <Flex className={styles.tags}>
                  <Text className={styles.tag}>{e.tagOne}</Text>
                  <Text className={styles.tag}>{e.tagTwo}</Text>
                </Flex>
                <Flex className={styles.prices}>
                  <View className={styles.price}>
                    <Text className={styles.seq}>¥</Text>
                    <Text className={styles.num}>{e.price}</Text>
                    <Text className={styles.extra}>起</Text>
                  </View>
                  <Text className={styles.sell}>月销{e.sellCount}份</Text>
                </Flex>
              </View>
            </ListItem>
          ))}
        </List>
        <View className={styles.btns}>
          <button>不喜欢，换一批</button>
        </View>
      </View>
*/
