import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Simulator from 'elfen-component-simulator';
import Page, { PageHeader as rPageHeader, PageFooter as rPageFooter, PageBody as rPageBody } from 'elfen-component-page';

import Input from '../../components/Input';

import Text from '../../../components/Text';
import Radio from '../../../components/Radio';
import Checkbox from '../../../components/Checkbox';
import List from '../../../components/List';

import getComponent from '../../../components/utils'
import { get } from 'https';


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

export default class Chat extends PureComponent {
 
  render() {
    // console.log(this.props.data);
    // console.log(getComponent('TEXT'));
    const { data } = this.props;
    return (
      <Wrapper>
        <Simulator>
          <Page>
            <PageHeader>智能客服</PageHeader>
            <PageBody>
              {
                data.map((message, index) => {
                  const Component = getComponent(message.type);
                  return (
                    <Component
                      key={index}
                      avator="https://imadmin2.zhongan.io/image/file/83176b53-ab36-4dd4-a132-c03ec11d0aa3" 
                      choices={message.content.choices}
                    />
                  );
                })
              }
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