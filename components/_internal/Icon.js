import React from 'react';
import styled from 'styled-components';

const Wrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 4rem;
  // height: 4rem;
  cursor: pointer;
  color: ${props => (props.color || props.theme[props.theme.current].icon.color)};
`;

export default function Icon({ name, size = 16, color, onClick, ...others }) {
  return (
    <Wrap color={color} onClick={onClick} {...others}>
      <i className={`elfen elfen-${name}`} style={{ fontSize: size }} />
    </Wrap>
  );
}