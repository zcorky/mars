/*
 * @Author: zhaoxiaoqi 
 * @Date: 2018-06-25 14:45:51 
 * @Last Modified by: zero
 * @Last Modified time: 2018-06-27 10:38:44
 */
// import { SingleImgView } from 'react-imageview';
// import 'react-imageview/dist/react-imageview.min.css';

import { SingleImgView } from '@zcorky/react-gallery';
import '@zcorky/react-gallery/lib/index.less';

export default {
  open: (params = {}, isPC, selector = '.imageview') => {
    SingleImgView.show({
      ...params,
      close: () => SingleImgView.hide(),
    });
    if (!isPC || !selector) {
      return;
    }
    document.querySelector(selector).onclick = () => {
      SingleImgView.hide();
    };
  }
}