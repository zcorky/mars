/*
 * @Author: zero (uniquecolesmith@gmail.com>)
 * @Date: Friday, 16th March 2018 2:51:51 pm
 * Author: zero (uniquecolesmith@gmail.com)
 * Last Modified: Friday, 23rd March 2018 1:37:10 pm
 * Modified By: zero (uniquecolesmith@gmail.com>)
 * Copyright 2017 - 2018 Your Company, Your Company
 */

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  float: left;
  position: relative;
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 3px 5px 1px #E2E8EF;
  width: calc(100% - 5rem);
  // padding: 0 2.2rem 0 2.2rem;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme.palette.color2};

  padding: 1.2rem 2.2rem .8rem 2.2rem;
  // padding: .5rem;
  // position: absolute;
  // left: 0;
  // top: 0;
  // width: 100%;
  overflow: hidden;
  text-overflow: hidden;
  white-space: nowrap;
`;

const ChoicesWrapper = styled.div`
  padding: 1.2rem 2.2rem 0 2.2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.a`
  font-size: 1.2rem;
  color: #fff;
  display: block;
  height: 3.4rem;
  line-height: 3.4rem;
  text-align: center;
  background-image: ${props => (props.disabled ? 'unset' : `linear-gradient(90deg, ${props.theme.palette.color3} 0%, ${props.theme.palette.color4} 99%)`)};
  border-radius: 0  0 1.2rem 1.2rem;
  background-color: ${props => (props.disabled ? props.theme.palette.color8 : 'none')};
`;

const ChoiceWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 116px;
  height: 48px;
  // border: 1px solid ${props => (props.checked ? '#20ACF4' : '#EAEAEA')};
  border-radius: 6px;
  margin-bottom: 1.2rem;
  // box-shadow: ${props => (props.checked ? '0 1px 4px 0 rgba(32,172,244,0.56)' : 'none')};
`;

const ChoiceCheckboxWrapper = styled.div`

`;

const ChoiceCheckboxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ChoiceCheckboxInput = styled.input`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  & + label {
    border: 1px solid #EAEAEA;
  }

  &:checked + label {
    margin-bottom: 1.2rem;
    border: 1px solid ${props => props.theme.palette.color4};
    box-shadow: 0 1px 4px 0 ${props => props.theme.palette.color4};
  }
`;

const ChoiceTitle = styled.div`
  font-size: ${props => props.theme.palette.fontSize3};
  font-weight: bold;
  color: ${props => props.theme.palette.color1};

  position: absolute;
  top: 10px;
  left: 40px;
  width: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChoiceDescription = styled.div`
  font-size: ${props => props.theme.palette.fontSize3};
  color: ${props => props.theme.palette.color2};

  position: absolute;
  top: 24px;
  left: 40px;
  width: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChoiceLogo = styled.img`
  position: absolute;
  top: 14px;
  left: 12px;
  width: 20px;
  height: 21px;
`;

const ChoiceCheckbox = ({ checked, name, id, onChecked }) => (
  <ChoiceCheckboxWrapper>
    <ChoiceCheckboxInput
      type="checkbox"
      name={name}
      id={id}
      value={id}
      defaultChecked={checked}
      onClick={onChecked}
    />
    <ChoiceCheckboxLabel htmlFor={id} className="radio-label" />
  </ChoiceCheckboxWrapper>
);

const Choice = ({ id, group = 'choice', title, description, icon, checked, onChecked }) => (
  <ChoiceWrapper checked={checked}>
    <ChoiceTitle>{title}</ChoiceTitle>
    <ChoiceDescription>{description}</ChoiceDescription>
    <ChoiceLogo src={icon} />
    <ChoiceCheckbox name={group} id={id} checked={checked} onChecked={onChecked} />
  </ChoiceWrapper>
);

export default class Checkbox extends PureComponent {
  static type = 'CHECKBOX';
  static label = '多选';

  static propTypes = {
    id: PropTypes.string,
    step: PropTypes.number,
    title: PropTypes.string,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        key: PropTypes.string,
      }),
    ),
    confirmLabel: PropTypes.string,
    confirmType: PropTypes.string,
    conformFields: PropTypes.array,
    // onMessage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    confirmType: 'dialog',
    confirmLabel: '确定',
    confirmFields: ['id', 'step', 'detailId'],
    choices: [
      {
        icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4', // 自定义icon链接
        label: '选项一', // 文案
        value: "string | number", // 选择的实际值, 必须唯一
        description: '描述一', // 描述
      }, {
          icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',  // 自定义icon链接
          label: '选项二', // 文案
          value: "string | number", // 选择的实际值, 必须唯一
          description: '描述二', // 描述
      }, {
          icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
          label: '选项三', // 文案
          value: "string | number", // 选择的实际值, 必须唯一
          description: '描述三', // 描述
      }
    ],
  };

  state = {
    checked: {}, // this.props.choices ? this.props.choices[0] : {},
    group: [],
  };

  onChecked = (checked) => {
    this.setState({ checked });
    if (this.state.group.indexOf(checked) < 0) {
      this.state.group.push(checked);
    } else {
      this.state.group.splice(this.state.group.indexOf(checked), 1); // uncheck
      this.setState({
        checked: {},
      });
    }
  }

  onConfirm = () => {
    const {
      confirmType, confirmFields,
      onMessage,
    } = this.props;

    if (Object.keys(this.state.group).length === 0) return false;

    const data = confirmFields.reduce((a, b) => Object.assign(a, { [b]: this.props[b] }), {});
  };

  render() {
    const {
      id, step, avatar, content, confirmLabel,
      title = "多选卡片标题" , choices = Checkbox.choices,
      ...rest
    } = this.props;

    const group = `${id}:${step}.${Math.random()}`;
    const disabled = Object.keys(this.state.group).length === 0;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <ChoicesWrapper>
          {choices.map((e, index) => (
            <Choice
              key={index.toString()}
              group={group}
              id={`${e.key}..${Math.random()}`}
              title={e.label}
              description={e.description}
              icon={e.icon}
              onChecked={() => this.onChecked(e)}
            />
          ))}
        </ChoicesWrapper>
        <Button onClick={this.onConfirm} disabled={disabled}>{confirmLabel}</Button>
      </Wrapper>
    );
  }
}
