/*
 * @Author: zhaoxiaoqi 
 * @Date: 2018-06-25 14:45:51 
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-06-25 16:04:10
 */
import { SingleImgView } from 'react-imageview';
import 'react-imageview/dist/react-imageview.min.css';

export default {
  open: (params = {}, isPC, node) => {
    SingleImgView.show({
      ...params,
      close: () => SingleImgView.hide(),
    });
    (function() {
      if(!isPC || !node) {
        return;
      } 
      document.getElementsByClassName(node)[0].onclick = () => {
        SingleImgView.hide();
      };
    })();
  }
}