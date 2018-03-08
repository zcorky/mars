import Radio from './Radio';

const CARDS = {
  RADIO: Radio
};

export function getCard(type, content) {
  if (!(type in CARDS)) {
    console.error(`[Card] invalid card type`);
    return null;
  }
  
  return CARDS[type];
}