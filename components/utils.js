import { 
    Text, 
    TextImage, 
    Radio, 
    Checkbox,
    Image,
    TextList,
    TextImageList,
} from './index';

const cards = {
    TEXT: Text,
    TEXT_IMAGE: TextImage,
    RADIO: Radio,
    CHECKBOX: Checkbox,
    IMAGE: Image,
    TEXT_LIST: TextList,
    TEXT_IMAGE_LIST: TextImageList,
};

export default function getComponent(type) {
    const component = cards[type];

    if (!component) {
        console.error(`Card:getComponent: ${type}`); // eslint-disable-line
        return null;
    }

    return component;
}
