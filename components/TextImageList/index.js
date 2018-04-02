import React, { PureComponent } from 'react';
import { array, arrayOf, string, number, func, shape } from 'prop-types';
import styled from 'styled-components';

import { View, List as rList, ListItem as rListItem, Avatar as rAvatar } from 'elfen';

import { TextImageItem } from '../ListItem';
import Action from '../_internal/Action';
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
  padding: 1.2rem 1.4rem 0;
  background-color: #fff;
  box-shadow: 0 3px 5px 1px #E2E8EF;
`;

const ListItem = styled(rListItem)`
  width: 100%;
  padding-bottom: 1.2rem;
`

const CommandWrapper = styled.div`
  margin-top: 1rem;
  flex: 1;
`;

const Avatar = styled(rAvatar)`
  flexShrink: 0;
  margin-left: ${props => (props.client ? '1rem' : 'unset')};
  margin-right: ${props => (!props.client ? '1rem' : 'unset')};
`;

export default class TextImageList extends PureComponent {
  static label = '图文卡片';
  static type = 'TEXT_IMAGE_LIST';

  static propTypes = {
    list: arrayOf(
      shape({
        banner: string,
        title: string,
        subTitle: string,
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
    commands: [
      // {
      //   type: 'link',
      //   icon: 'more-suggestion',
      //   label: '查看更多方案',
      //   value: '123',
      // }
    ],
    list: [
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '标题',
        subTitle: '子标题',
        keyDescription: '关键信息',
        description: '详细信息',
        url: '',
      },
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '标题',
        subTitle: '子标题',
        keyDescription: '关键信息',
        description: '详细信息',
        url: '',
      },
      {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '标题',
        subTitle: '子标题',
        keyDescription: '关键信息',
        description: '详细信息',
        url: '',
      },
    ],
  };

  render() {
    const { client, avatar, list, commands, onCommand, onSelect } = this.props;

    return (
      <Wrapper onClick={onSelect}>
        <Content>
          <List className={styles.products}>
            {list.map((e, i) => (
              <ListItem key={i}><TextImageItem {...e} /></ListItem>
            ))}
          </List>
          <CommandWrapper>
            {commands.map((e, i) => (
              <Action key={i} onClick={() => onCommand(e)} {...e} />
            ))}
          </CommandWrapper>
        </Content>
      </Wrapper>
    );
  }
}