import Text from './Text';
import Radio from './Radio';
import Checkbox from './Checkbox';
import List from './List';
// import TextImage from './TextImage';

const cards = {
    TEXT: Text,
    RADIO: Radio,
    CHECKBOX: Checkbox,
    LIST: List,
    // TEXTIMAGE: TextImage,
}
export default function getComponent(type) {
    const component = cards[type];

    if (!component) {
        console.error(`Card:getComponent: ${type}`); // eslint-disable-line
        return null;
    }

    return component;
}