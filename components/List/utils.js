/*
 * @Author: zhaoxiaoqi
 * @Date: 2018-03-13 13:44:53
 * @Last Modified by: zhaoxiaoqi
 * @Last Modified time: 2018-03-13 16:46:08
 */

import QuestionItem from '../Question/One';
import TextImageItem from '../TextImage/One';



// const RenderItemProps = {
//     TEXT: [
//         'label',
//         'value',
//     ],
//     TEXTIMAGE: [
//         'title',
//         'banner',
//         'tags',
//         'price',
//         'count',
//         'url',
//     ]
// }

// TEXT: 文本列表Item
// TEXTIMAGE: 富文本列表Item

export default function getRenderItemByType(type) {

    const RenderItem = {
        TEXT: QuestionItem,
        TEXTIMAGE: TextImageItem,
    }

    if (!RenderItem[type]) {
        return console.error(`RenderItem: unknown RenderItem (${type}) in ${Object.keys(RenderItem)}`); // eslint-disable-line
    }
    
    return RenderItem[type];
}

// export function getRenderItemPropsByType(type) {
//     return RenderItemProps[type];
// }

// export default {
//     getRenderItemByType,
//     getRenderItemPropsByType,
// }