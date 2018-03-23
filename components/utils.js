import { Text, Radio, Checkbox, TextImage, List } from './index';

const cards = {
  TEXT: Text,
  RADIO: Radio,
  CHECKBOX: Checkbox,
  TEXTIMAGE: TextImage,
  LIST: List,
};

export default function getComponent(type) {
    const component = cards[type];

    if (!component) {
        console.error(`Card:getComponent: ${type}`); // eslint-disable-line
        return null;
    }

    return component;
}
