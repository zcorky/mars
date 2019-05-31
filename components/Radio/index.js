import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { string, number, array, arrayOf, func, shape, oneOfType, bool} from 'prop-types';

const NOOP = () => null;
const Wrapper = styled.div`
  width: 100%;
  float: left;
  position: relative;
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 3px 5px 1px #E2E8EF;
  // width: calc(100% - 5rem);
  // padding: 0 2.2rem 0 2.2rem;
  text-decoration: none;
  margin-bottom: 1rem;
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
  text-overflow: ellipsis;
  // white-space: nowrap;
`;

const ChoicesWrapper = styled.div`
  padding: 1.2rem 1.2rem 1.0rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  // width: 200px;

  // @media only screen and (min-device-width : 501px) {
  //   margin-right: -1.5rem;  
  // } 

  ${ props => {
    if (!props.isIFrame) {
       `
       @media only screen and (min-device-width : 501px) {
         margin-right: -1.5rem;  
       } 
      `
    } else {
      if (window.self.innerWidth > 500) {
        `margin-right: -1.5rem;`
      }
    }
  }}
`;

// const Button = styled.a`
//   font-size: 1.2rem;
//   color: #fff;
//   display: block;
//   height: 3.4rem;
//   line-height: 3.4rem;
//   text-align: center;
//   background-image: ${props => (props.disabled ? 'unset' : `linear-gradient(90deg, ${props.theme.palette.color3} 0%, ${props.theme.palette.color4} 99%)`)};
//   border-radius: 0  0 1.2rem 1.2rem;
//   background-color: ${props => (props.disabled ? props.theme.palette.color8 : 'none')};
// `;

const ChoiceWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 116px;
  height: 48px;
  // border: 1px solid ${props => (props.checked ? '#20ACF4' : '#EAEAEA')};
  border-radius: 6px;
  margin-bottom: 1.2rem;
  // box-shadow: ${props => (props.checked ? '0 1px 4px 0 rgba(32,172,244,0.56)' : 'none')};

  // @media only screen and (max-device-width : 320px) {
  //   width: 100%;
  // }
  // @media only screen and (min-device-width : 321px) and (max-device-width : 500px) {
  //   width: calc((100% - 1.5rem)/2 );
  // }
  // @media only screen and (min-device-width : 501px) {
  //   margin-right: 1.5rem;
  //   flex: 1;     //open in project
  // }

  ${ props => {
    if (!props.isIFrame) {
       `
        @media only screen and (max-device-width : 320px) {
          width: 100%;
        }
        @media only screen and (min-device-width : 321px) and (max-device-width : 500px) {
          width: calc((100% - 1.5rem)/2 );
        }
        @media only screen and (min-device-width : 501px) {
          margin-right: 1.5rem;
          flex: 1;     //open in project
        }
      `
    } else {
      if (window.self.innerWidth <= 320) {
        `width: 100%;`
      } else if(window.self.innerWidth > 320 && window.self.innerWidth <= 500) {
        `width: calc((100% - 1.5rem)/2 );`
      } else {
        `margin-right: 1.5rem;
         flex: 1;     //open in project
        `
      }
    }
  }}
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
    border: 1px solid ${props => props.theme[props.theme.current].action.color};
    box-shadow: 0 1px 4px 0 ${props => props.theme[props.theme.current].action.color};
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

const ChoiceRadio = ({ disable, checked, name, id, onChecked }) => (
  <ChoiceRadioWrapper>
    <ChoiceRadioInput
      type="radio"
      name={name}
      id={id}
      value={id}
      defaultChecked={checked}
      onClick={onChecked}
      disabled={disable}
    />
    <ChoiceRadioLabel htmlFor={id} className="radio-label" />
  </ChoiceRadioWrapper>
);

const Choice = ({ disable, id, group = 'choice', icon, label, value, description, checked, onChecked }) => (
  <ChoiceWrapper checked={checked}>
    <ChoiceTitle>{label}</ChoiceTitle>
    <ChoiceDescription>{description}</ChoiceDescription>
    <ChoiceLogo src={icon} />
    <ChoiceRadio disable={disable} name={group} id={id} checked={checked} onChecked={onChecked} />
  </ChoiceWrapper>
);

export default class Radio extends PureComponent {
  static type = 'RADIO';
  static label = '单选';

  static propTypes = {
    id: string,
    step: number,
    title: string,
    choices: arrayOf(
      shape({
        icon: string,
        label: string,
        value: oneOfType([string, number]),
        description: string,
      }),
    ),
    confirmLabel: string,
    confirmType: string,
    conformFields: array,
    disable: bool,
    onMessage: func,
  }

  static defaultProps = {
    title: '单选卡片标题',
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
    confirmType: 'dialog',
    confirmLabel: '确定',
    confirmFields: ['id', 'step', 'detailId'],
    disable: false,
  };

  state = {
    // checked: {},
    disable: this.props.disable,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.disable !== nextProps.disable) {
      this.setState({
        disable: nextProps.disable,
      });
    }
  }

  onConfirm = (checked) => {
    const {
      confirmType, confirmFields, flow = false,
      onMessage,
    } = this.props;
    this.setState({
      disable: true,
    });
    if (Object.keys(checked).length === 0) return false;

    const data = confirmFields.reduce((a, b) => Object.assign(a, { [b]: this.props[b] }), {});
    // console.log('confirm: ', data);
    onMessage(confirmType, {
      ...data,
      flow,
      // value: this.state.checked.key,
      // selection: checked.label, // @TODO Bad Backend
      label: checked.label,
      value: checked.value,
    }); 
  };

  render() {
    const {
      id, step,
      title, choices
    } = this.props;

    const group = `${id}:${step}.${Math.random()}`;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <ChoicesWrapper>
          {choices.map((e, index) => (
            <Choice 
              key={index.toString()}
              group={group}
              disable={this.state.disable}
              id={`${e.key}..${Math.random()}`}
              icon={e.icon}
              label={e.label}
              value={e.value}
              description={e.description}
              onChecked={() => this.state.disable ? NOOP : this.onConfirm(e)}
            />
          ))}
        </ChoicesWrapper>
      </Wrapper>
    );
  }
}
