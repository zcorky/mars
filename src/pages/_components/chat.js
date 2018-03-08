import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styled from 'styled-components';

import Simulator from 'elfen-component-simulator';
import Page, { PageHeader as rPageHeader, PageFooter as rPageFooter, PageBody as rPageBody } from 'elfen-component-page';

import Input from '../../components/Input';

import { getCard } from '../../../components/index';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageHeader = styled(rPageHeader)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-weight: bold;
`;

const PageBody = styled(rPageBody)`
  background-color: #f7f7f8;
  padding: 10px;
  padding-bottom: 0px;
`;

const PageFooter = styled(rPageFooter)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;

  &::before {
    transform: none;
  }
`;

const Item = styled.div`
  margin-bottom: 10px;
`;

class Chat extends PureComponent {
  render() {
    const { messages } = this.props;
  
    return (
      <Wrapper>
        <Simulator>
          <Page>
            <PageHeader>智能客服</PageHeader>
            <PageBody>
              {messages.map(({ id, type, content }) => {
                const Component = getCard(type);
                
                if (!Component) return null;

                return (
                  <Item key={id} >
                    <Component {...content} />
                  </Item>
                );
              })}
            </PageBody>
            <PageFooter>
              <Input />
            </PageFooter>
          </Page>
        </Simulator>
      </Wrapper>
    );
  }
}

const mapState = state => ({
  messages: Object.values(state.message),
});

export default connect(mapState)(Chat); 