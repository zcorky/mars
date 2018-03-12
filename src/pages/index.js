import { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'dva';

import createScrollBarStyle from 'elfen-component-beautiful-scrollbar';

import theme from '../../components/theme';

import Card from './_components/card';
import Chat from './_components/chat';

import saveMessages from '../services/saveMessages';

const mapState = state => {
  return {
    data: state.message.data,
  }
};

const mapActions = dispatch => ({
  onIncrease: () => dispatch({ type: 'app/+' }),
  onDecrease: () => dispatch({ type: 'app/-' }),
  onSave: (type) => saveMessages(type, dispatch),
});

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
`;

const SideBar = styled.div`
  position: relative;
  width: 360px;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
`;

const Content = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
`;

createScrollBarStyle();

class App extends PureComponent {

  // state = {
  //   load: false,
  // }
  
  render() {
    const { data, onSave }  = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <SideBar>
            <Card onSave={onSave}/>
          </SideBar>
          <Content>
            <Chat data={data}/>
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default connect(mapState, mapActions)(App);