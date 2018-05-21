import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ListItem } from 'elfen'; 
import styles from './index.less';

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 70px;
  // color: #889099;
  color: ${props => props.theme.palette.color2};
`;

const Banner = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 7rem;
  height: 7rem;
  border-radius: .6rem;
`;

const Title = styled.div`
  // font-size: 1.4rem;
  // color: #000;
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme.palette.color1};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tags = styled.div`
  // font-size: 1.2rem;
  // color: #889099;
  font-size: ${props => props.theme.palette.fontSize2};
  color: ${props => props.theme.palette.color2};

  margin-top: .25rem;
`;

const Sells = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2.6rem;
`;

const Price = styled.span`
  // font-size: 1.6rem;
  // color: #F5A623;
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme.palette.color9};
`;

const Divide = styled.div`
  width: 1px;
  height: 1.2rem;
  // background-color: #889099;
  background-color: ${props => props.theme.palette.color2};
  margin: 0 1rem;
`;

const Count = styled.span``;

export default class TextImageItem extends PureComponent {
  render() {
    const { banner, title, tags = [], price, count, url } = this.props;
    return (
      <ListItem className={styles.product}>
        <Wrapper href={url}>
          <Title>{title}</Title>
          <Banner role="presentation" src={banner} />
          <Tags>{tags}</Tags>
          <Sells>
            <Price>¥{price}</Price>起
            <Divide />
            <Count>{`月销 ${count} 份`}</Count>
          </Sells>
        </Wrapper>
      </ListItem>
    )
  }
}

// export default ({ banner, title, tags = [], price, count, url }) => (
//   <Wrapper href={url}>
//     <Title>{title}</Title>
//     <Banner role="presentation" src={banner} />
//     <Tags>{tags}</Tags>
//     <Sells>
//       <Price>¥{price}</Price>起
//       <Divide />
//       <Count>{count}</Count>月销1000份
//     </Sells>
//   </Wrapper>
// );
