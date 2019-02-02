/*
 * @Author: zhaoxiaoqi
 * @Date: 2019-01-09 16:34:28
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2019-02-02 15:19:19
 */

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
  width: 80px;
  height: 32px;
  display: inline-flex;
  flex-direction: row;
  margin-top: 0.8rem;
`;

const Appraisal = styled(Icon)`
  width: 36px;
  height: 24px;
  margin-right: 8px;
  color: ${props => (
    props.selected ?
    props.theme[props.theme.current].icon.color : props.theme.palette.color1
  )};
  background: #fff;
  border-radius: 23px;
  text-align: center;
  line-height: 24px;
  & > i {
    width: 100%;
    height: 100%;
    font-size: 1.5rem !important;
  }
`;

export default class Evaluation extends React.Component {
  state = {
    selectKey: this.props.selectKey,
  }

  handleClick = (key) => {
    if (this.state.selectKey) return;
    this.setState({
      selectKey: key,
    });
    this.props.onClick(key);
  }

  render() {
    const { style, options } = this.props;

    return (
      <Wrapper style={style}>
        {
          options.map((value, index) => (
            <Appraisal
              key={index}
              name={`${value.icon}-h5`}
              selected={this.state.selectKey === value.icon}
              onClick={() => this.handleClick(value.icon)}
            />
          ))
        }
      </Wrapper>
    );
  }
}
