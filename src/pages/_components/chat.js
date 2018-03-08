import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Simulator from 'elfen-component-simulator';
import Page, { PageHeader as rPageHeader, PageFooter as rPageFooter, PageBody as rPageBody } from 'elfen-component-page';

import Input from '../../components/Input';

import Text from '../../../components/Text';
import Radio from '../../../components/Radio';

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
    return (
      <Wrapper>
        <Simulator>
          <Page>
            <PageHeader>智能客服</PageHeader>
            <PageBody>
              <Radio
                avatar="https://imadmin2.zhongan.io/image/file/83176b53-ab36-4dd4-a132-c03ec11d0aa3"
                choices={[
                  {
                    key: 'c1',
                    title: '新手上路',
                    icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4',
                    description: '1年驾龄',
                  },
                  {
                    key: 'c2',
                    title: '轻车熟路',
                    icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',
                    description: '2~10驾龄',
                  },
                  {
                    key: 'c3',
                    title: '老司机',
                    icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
                    description: '大于10年驾龄',
                  },
                ]}
              />
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