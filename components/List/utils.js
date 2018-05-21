import QuestionItem from '../Question/One';
import TextImageItem from '../TextImage/One';

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