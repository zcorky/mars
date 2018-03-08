import { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'dva';

import createScrollBarStyle from 'elfen-component-beautiful-scrollbar';

import theme from '../../components/theme';

import Card from './_components/card';
import Chat from './_components/chat';

const mapState = state => state.app;

const mapActions = dispatch => ({
  onIncrease: () => dispatch({ type: 'app/+' }),
  onDecrease: () => dispatch({ type: 'app/-' }),
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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <SideBar>
            <Card />
          </SideBar>
          <Content>
            <Chat />
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default connect(mapState, mapActions)(App);