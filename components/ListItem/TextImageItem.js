import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ListItem } from 'elfen'; 
import { array, arrayOf, string, number, func, shape } from 'prop-types';

// import styles from './index.less';
const ListItemWrapper = styled.div`
    background-color: #fff;
    border-radius: 1.2rem;
    // padding: 0 1.2rem;
`
const Wrapper = styled.a`
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
  width: 5rem;
  height: 5rem;
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

const SubTitle = styled.div`
  // font-size: 1.2rem;
  // color: #889099;
  font-size: ${props => props.theme.palette.fontSize2};
  color: ${props => props.theme.palette.color2};
  margin-top: .25rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
// const Tags = styled.div`
//   // font-size: 1.2rem;
//   // color: #889099;
//   font-size: ${props => props.theme.palette.fontSize2};
//   color: ${props => props.theme.palette.color2};
//   margin-top: .25rem;
// `;

// const Sells = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 2.6rem;
// `;
const DescriptionWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2.6rem;
`;

// const Price = styled.span`
//   // font-size: 1.6rem;
//   // color: #F5A623;
//   font-size: ${props => props.theme.palette.fontSize1};
//   color: ${props => props.theme.palette.color9};
// `;
const KeyDescription = styled.span`
  font-size: ${props => props.theme.palette.fontSize1};
  color: ${props => props.theme.palette.color9};

  display: line-block;
  width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Divide = styled.div`
  width: 1px;
  height: 1.2rem;
  // background-color: #889099;
  background-color: ${props => props.theme.palette.color2};
  margin: 0 1rem;
`;

// const Count = styled.span``;
const Description = styled.span`
  display: line-block;
  width: 5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export default class TextImageItem extends PureComponent {

  static defaultProps = {
    banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
    title: '标题',
    subTitle: '子标题',
    keyDescription: '关键信息关键信息',
    description: '详细信息详细信息',
    url: '',
  }

  static propTypes = {
    banner: string.isRequired,
    title: string.isRequired,
    subTitle: string,
    keyDescription: string,
    description: string,
    url: string,
  }

  render() {
    // const { banner, title, tags = [], price, count, url } = this.props;
    const { banner, title, subTitle, keyDescription, description, url } = this.props;
    return (
      <ListItemWrapper>
        <Wrapper href={url}>
          <Title>{title}</Title>
          <Banner role="presentation" src={banner} />
          <SubTitle>{subTitle}</SubTitle>
          <DescriptionWrapper>
            <KeyDescription>{keyDescription}</KeyDescription>
            <Divide />
            <Description>{description}</Description>
          </DescriptionWrapper>
        </Wrapper>
      </ListItemWrapper>
    )
  }
}
