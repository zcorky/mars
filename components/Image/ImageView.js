/*
 * @Author: zhaoxiaoqi 
 * @Date: 2018-06-25 14:45:51 
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-06-25 17:23:36
 */
import { SingleImgView } from 'react-imageview';
import 'react-imageview/dist/react-imageview.min.css';

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