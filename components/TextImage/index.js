import React, { PureComponent } from 'react';
import { arrayOf, string, number, func, shape, oneOfType} from 'prop-types';
import styled from 'styled-components';

import { View } from 'elfen';

import { TextImageItem } from '../ListItem';
import Action from '../_internal/Action';
import Evaluation from '../_internal/Evaluation';
// import styles from './index.less';

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

// const List = styled(rList)`
//   border-radius: 1.2rem;
//   padding: 1.2rem 1.4rem;
//   background-color: #fff;
//   box-shadow: 0 3px 5px 1px #E2E8EF;
// `;

const TextImageWrapper = styled.div`
    width: 100%;
    border-radius: 1.2rem;
    padding: 1.2rem 1.4rem;
    background-color: #fff;
    box-shadow: 0 3px 5px 1px #E2E8EF;
`;

const CommandWrapper = styled.div`
  margin-top: 1rem;
  flex: 1;
`;

// const Avatar = styled(rAvatar)`
//   flexShrink: 0;
//   margin-left: ${props => (props.client ? '1rem' : 'unset')};
//   margin-right: ${props => (!props.client ? '1rem' : 'unset')};
// `;

export default class TextImage extends PureComponent {
  static type = 'TEXT_IMAGE';
  static label = '图文卡片';

  static propTypes = {
    // banner: string.isRequired,
    // title: string.isRequired,
    // subTitle: string,
    // keyDescription: string.isRequired,
    // description: string,
    // url: string,
    commands: arrayOf(
      shape({
        type: string,
        icon: string,
        label: string,
        value: oneOfType([string, number]),
      }),
    ),
    onSelect: func,
    onCommand: func,
  };

  static defaultProps = {
    // banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
    // title: '尊享e生百万医疗保险',
    // subTitle: '险种不够经验来凑',
    // keyDescription: '200',
    // description: '10000',
    // url: '',
    commands: [{
      type: 'link',
      icon: 'more-suggestion',
      label: '查看更多方案',
      value: '123',
    }],
    list: []
  };

  render() {
    const { commands, evaluate = false, evaluationType } = this.props;
    const { banner, title, subTitle, keyDescription, description, url } = this.props;
    const { onSelect, onCommand, onEvaluteDetail } = this.props;
    // console.log('props: ', this.props);
    return (
      <Wrapper onClick={onSelect}>
          <Content>
            <TextImageWrapper>
              <TextImageItem 
                banner={banner}
                title={title}
                subTitle={subTitle} 
                keyDescription={keyDescription}
                description={description}
                url={url} />
            </TextImageWrapper>
            {
              evaluate && commands.length > 0 &&
              <Evaluation
                selectKey={commands.length === 1 ? commands[0].icon : null}
                options={commands}
                // style={{ position: 'absolute', bottom: 0 }}
                onClick={val => onEvaluteDetail(val, evaluationType)}
                />
            }
            {
              !evaluate && commands.length > 0 && 
              <CommandWrapper>
                {commands.map((e, i) => (
                  <Action key={i} onClick={() => onCommand(e)} {...e} />
                ))}
              </CommandWrapper>
            }    
          </Content>
      </Wrapper>
    );
  }
}