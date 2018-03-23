/**
 * @Author: zero
 * @Date:   2017-08-03T15:45:39+08:00
 * @Last modified by:   zero
 * @Last modified time: 2017-08-03T15:48:15+08:00
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from 'elfen/lib/general/Icon';

const TypedLabel = ({ type, url, children, ...others }) => (
  type === 'link'
    ? <a href={url} {...others}>{children}</a>
    : <span {...others}>{children}</span>
);

const Label = styled(TypedLabel)`
  // margin-left: .8rem;
  font-weight: bold;
  // color: #2AA5F9;
  // font-size: ${props => props.theme.palette.fontSize2};
  // color: ${props => props.theme.palette.color4};
`;

const Button = styled.button`
  // font-size: 1.2rem;
  // color: #2AA5F9;
  font-size: ${props => props.theme.palette.fontSize2};
  // color: ${props => props.theme.palette.color4};
  color: ${props => props.theme[props.theme.current].action.color};

  line-height: 1.6rem;
  border: none; // 1px solid #2AA5F9;
  padding: .7rem 1.4rem; // @Design 
  background-color: #fff;
  border-radius: 1.6rem;
  cursor: pointer;
  outline: none;
  margin-right: .5rem;
  box-shadow: 0 3px 5px 1px ${props => props.theme[props.theme.current].action.shadowColor};;
  display: flex;
  align-items: center;

  & > i {
    margin-right: .3rem;
  }
`;

const Action = ({ type, icon, label, url, onClick, ...others }) => (
  <Button {...others} onClick={type === 'link' ? null : onClick}>
    <Icon name={icon} />
    <Label type={type} url={url}>{label}</Label>
  </Button>
);

Action.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Action;
