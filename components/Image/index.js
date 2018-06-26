/*
 * @Author: zhaoxiaoqi
 * @Date: 2018-04-02 16:22:05
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-06-26 13:24:13
 */

import React, { PureComponent } from 'react';
import { string, bool, func, array } from 'prop-types';
// import classnames from 'classnames';
import styled from 'styled-components';
import { Flex as rFlex, View as rView, Avatar, Icon } from 'elfen';
import Action from '../_internal/Action';

import { SingleImgView } from 'react-imageview';
import 'react-imageview/dist/react-imageview.min.css';

import * as ImageView from './ImageView';
// import { getImagePrefix } from 'utils';

// import classes from './index.less';
// const classes = {};

// const IMAGE = getImagePrefix();

const NOOP = () => null;

const Flex = styled(rFlex)`
  margin-bottom: 1rem;
`;

const View = styled(rView)`
  max-width: 20rem;
`;

const CommandWrapper = styled(View)`
  margin-top: 1rem;
  flex: 1;
`;

export default class Image extends React.Component {
  static label = '图片卡片';
  static type = 'IMAGE';

  static propTypes = {
    banner: string.isRequired,
    client: bool,
    commands: array,
    onSelect: func,
    animation: bool,
  };

  static defaultProps = {
    banner: null, // 'http://obzxlsphd.bkt.clouddn.com//zzz/images/v2-953608ff58261bdf314d03996a995a8d_r.jpg',
    client: false,
    commands: [],
    onSelect: () => {},
    animation: true,

    // getImagePrefix: this.props.getImagePrefix,
    getImagePrefix: () => {},
    getPrefix: () => {},
  };

  state = {
    progress: 0,
    error: false,
  };

  componentDidMount() {
    // if (this.props.client && this.props.uploadFile) {
    //   this.upload();
    // }
    // if (!this.props.client) {
    //   this.upload();
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.banner !== nextProps.banner) {
      this.complete = true;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props, nextProps, this.props === nextProps);
    // console.log(this.state, nextState, this.state === nextState);
    return this.props.banner !== nextProps.banner || this.state !== nextState;
  }


  // @TODO
  // complete = false;
  complete = true;

  handleClickImage = () => {
    // SingleImgView.show({
    //   maxScale: 3,
    //   // imagelist: [this.addPrefix(this.props.banner)],
    //   imagelist: [this.props.banner],
    //   close: () => {SingleImgView.hide();},
    // });
    ImageView.default.open({
      maxScale: 3,
      imagelist: this.getImageList(this.props.imageList),
      current: this.getCurrentImage(this.props.imageList),
    }, true, '.imageview');
  };

  getImageList = (images) => {
    let imageList = [];
    imageList = images.map(image => image.content.banner);
    return imageList;
  };

  getCurrentImage = (images) => {
    let current = 0;
    images.map((image, index) => {
      if(image.content.banner === this.props.banner) {
        current = index;
      }
    });
    return current;
  }

  replaceImage = (image) => {
    // this.props.onMessage('image:replace', this.props.dispatch, this.props.id, image);
    this.props.onMessage('image:replace', this.props.id, image);
  };

  upload = () => {
    const self = this;
    const replaceImage = this.replaceImage;
    const xhr = new XMLHttpRequest(); // eslint-disable-line
    const getImagePrefix = this.props.getImagePrefix;
    const IMAGE = getImagePrefix();
    // xhr.open('POST', 'http://12292-zis-microservices-za-im-image.test.za.net/oss/file/upload/', true);
    xhr.open('POST', `${IMAGE}/upload/`, true);
    xhr.onload = () => {};

    xhr.onerror = () => {
      this.setState({ error: true });
    };
    xhr.onreadystatechange = function onreadystatechange() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        const json = JSON.parse(xhr.responseText);
        // replaceImage(`http://12292-zis-microservices-za-im-image.test.za.net/oss/file/${json.token}`);
        replaceImage(`${IMAGE}/${json.token}`);
        console.log('ready');

      } else {
        self.setState({ error: true });
      }
    };

    // disable progress
    // xhr.upload.onprogress = (e) => {
    //   if (e.lengthComputable) {
    //     this.setState({ progress: (e.loaded / e.total) * 100 });
    //   }
    // };

    const formData = new FormData(); // eslint-disable-line
    formData.append('file', this.props.banner);
    xhr.send(formData);
  };

  addPrefix = (banner) => {
    const getPrefix = this.props.getPrefix;
    const IMAGE = getPrefix();
    return `${IMAGE}${banner}`;
  }

  count = 1;

  render() {
    const { error, progress } = this.state;
    const { client, banner, commands, animation, onSelect, onCommand = NOOP } = this.props;
    const flow = client ? 'row-reverse' : 'row';
    // const avatarClass = client ? classes.avatarClient : classes.avatar;
    // const getPrefix = this.props.getPrefix;
    // const IMAGE = getPrefix();
    // const fullBanner = this.addPrefix(banner);
    
    return (
      <Flex align="flex-start" justify="flex-start" flow={flow} onClick={onSelect}>
        <View style={{ position: 'relative' }}>
          <img
            style={{
              zIndex: 1,
              filter: !this.complete ? 'blur(4px)' : 'blur(0px)',
              transition: 'filter .7s cubic-bezier(1, 0.1, 1, 1)',
              width: '100%',
              borderRadius: '.6rem',
            }}
            role="presentation"
            src={banner}
            onClick={this.handleClickImage}
            onLoad={this.props.onLoad}
          />
          <CommandWrapper>
            {commands.map((e, i) => (
              <Action key={i} onClick={() => onCommand(e)} {...e} />
            ))}
          </CommandWrapper>
          <div
            style={{
              flex: 1,
              position: 'absolute',
              pointerEvents: 'none',
              height: `${progress}%`,
              transition: 'all .3s ease',
              opacity: animation && (progress !== 100) ? 1 : 0,
            }}
            // className={classes.mask}
          />
          {!error ? (<div
            style={{
              position: 'absolute',
              opacity: animation && (progress !== 100) ? 1 : 0,
              pointerEvents: this.props.uploadFile && animation && (progress !== 100) ? 'auto' : 'none',
            }}
            // className={classes.data}
          >
            {/* parseInt(progress, 10) */}
          </div>) : (
            <div
              style={{
                position: 'absolute',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, .38)',
                pointerEvents: this.props.uploadFile && (progress !== 100) ? 'auto' : 'none',
              }}
              // className={classes.data}
            >
              <Icon name="error" color="#F76260" size={64} />
            </div>
          )}
        </View>
      </Flex>
    );
  }
}
