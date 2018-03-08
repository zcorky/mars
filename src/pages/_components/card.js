import styled from 'styled-components';

import Radio from '../../../components/Radio';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 32px 0px;
`;

const Card = styled.div`
  position: relative;
  box-shadow: 0 6px 15px rgba(36,37,38,.08);
  border: 1px solid rgba(36,37,38,.03);
  border-radius: 16px;
  width: 300px;
  // min-height: 185.4px;
  cursor: auto;
  margin-bottom: 12px;
  padding: 10px;
`;

export default () => (
  <Wrapper>
    {[Radio].map((Component, i) => (
      <Card key={i}>
        {Component && <Component />}
      </Card>
    ))}
  </Wrapper>
);