import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Avatar as rAvatar } from 'elfen';

const Card = styled.div`
  // height: 90px;
  // margin-bottom: 1rem;
  // overflow: hidden;

  // display: flex;
  // justify-content: center;

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Avatar = styled(rAvatar)`
  margin-left: ${props => (props.client ? '1rem' : 'unset')};
  margin-right: ${props => (!props.client ? '1rem' : 'unset')};
  float: left;
`;

const Wrapper = styled.div`
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

const ChoiceRadioWrapper = styled.div`

`;

const ChoiceRadioLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ChoiceRadioInput = styled.input`
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

const ChoiceRadio = ({ checked, name, id, onChecked }) => (
  <ChoiceRadioWrapper>
    <ChoiceRadioInput
      type="radio"
      name={name}
      id={id}
      value={id}
      defaultChecked={checked}
      onClick={onChecked}
    />
    <ChoiceRadioLabel htmlFor={id} className="radio-label" />
  </ChoiceRadioWrapper>
);

const Choice = ({ id, group = 'choice', title, description, icon, checked, onChecked }) => (
  <ChoiceWrapper checked={checked}>
    <ChoiceTitle>{title}</ChoiceTitle>
    <ChoiceDescription>{description}</ChoiceDescription>
    <ChoiceLogo src={icon} />
    <ChoiceRadio name={group} id={id} checked={checked} onChecked={onChecked} />
  </ChoiceWrapper>
);

export default class Choices extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      }),
    ),
    confirmLabel: PropTypes.string.isRequired,
    confirmType: PropTypes.string.isRequired,
    conformFields: PropTypes.array.isRequired,
    onMessage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    choices: [
      {
        key: 'c1',
        title: '选项一',
        icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4',
        description: '1年驾龄',
      },
      {
        key: 'c2',
        title: '选项二',
        icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',
        description: '2~10驾龄',
      },
      {
        key: 'c3',
        title: '选项三',
        icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
        description: '大于10年驾龄',
      },
    ],
    confirmType: 'dialog',
    confirmLabel: '确定',
    confirmFields: ['id', 'step', 'detailId'],
  };

  state = {
    checked: {}, // this.props.choices ? this.props.choices[0] : {},
  };

  onChecked = (checked) => {
    this.setState({ checked });
  }
  // onChecked = key => (this.state.checked = key);

  onConfirm = () => {
    const {
      confirmType, confirmFields,
      onMessage,
    } = this.props;

    if (Object.keys(this.state.checked).length === 0) return false;

    const data = confirmFields.reduce((a, b) => Object.assign(a, { [b]: this.props[b] }), {});
    onMessage(confirmType, {
      ...data,
      // value: this.state.checked.key,
      selection: this.state.checked.title, // @TODO Bad Backend
      label: this.state.checked.title,
    });
  };

  render() {
    const {
      id, step, avatar, title, choices,
      confirmLabel, ...rest
    } = this.props;
    const group = `${id}:${step}.${Math.random()}`;
    const disabled = Object.keys(this.state.checked).length === 0;

    return (
      <Card {...rest} key={id}>
        {/* <Avatar src={avatar} /> */}
        <Wrapper>
          <Title>{title}</Title>
          <ChoicesWrapper>
            {choices.map((e, index) => (
              <Choice
                key={index.toString()}
                group={group}
                id={`${e.key}..${Math.random()}`}
                title={e.title}
                description={e.description}
                icon={e.icon}
                onChecked={() => this.onChecked(e, index)}
              />
            ))}
          </ChoicesWrapper>
          <Button onClick={this.onConfirm} disabled={disabled}>{confirmLabel}</Button>
        </Wrapper>
      </Card>
    );
  }
}
