import React from 'react';
import styled from 'styled-components';

import { connect } from 'dva';

import TextImage from '../../../components/TextImage';
import Radio from '../../../components/Radio';
import Checkbox from '../../../components/Checkbox';
import Image from '../../../components/Image';
import TextList from '../../../components/TextList';
import TextImageList from '../../../components/TextImageList';
import Text from '../../../components/Text';

// import List from '../../../components/List';

// import * as CardTemplates from '../../../components';


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
  background-color: #ddd;
`;

const Root = (props) => (
  <Wrapper>
    {[Text, TextImage, Radio, Checkbox, Image, TextList, TextImageList].map((Component, i) => (
      <Card key={i} onClick={() => props.onAdd(Component.type)}>
        {Component && <Component />}
      </Card>
    ))}
  </Wrapper>
);

const mapState = (state) => ({});

const mapActions = (dispatch) => ({
  onAdd(type) {
    console.log(type);
    dispatch({ type: 'message/add', payload: { type } });
  },
});

export default connect(mapState, mapActions)(Root);