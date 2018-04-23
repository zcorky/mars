import { genMessageId, getRequestMessageType, getMessageTimestamp } from '../utils';

function sendTextMessage(dispatch, text) {
  const { id: resendId, text: resendText, isResend = false } = !text.isResend ? {} : text;
  return dispatch({
    type: 'message/sync',
    client: true,
    payload: {
      id: resendId || genMessageId(),
      type: 'text',
      who: 'client',
      isResend: isResend,
      content: {
        client: true,
        text: resendText || text,
        activeAck: true,
        type: 'text',
      },
      contentType: getRequestMessageType('text'),
      timestamps: getMessageTimestamp(),
    },
  });
}

function sendImageMessage(dispatch, image) {
  return dispatch({
    type: 'message/sync',
    payload: {
      id: genMessageId(),
      who: 'client',
      type: 'image',
      content: {
        client: true,
        src: image,
        activeAck: true,
      },
      contentType: getRequestMessageType('image'),
      timestamps: getMessageTimestamp(),
    },
  });
}

function sendCommandMessage(dispatch, text) {
  const { id: resendId, text: resendText, isResend = false } = !text.isResend ? {} : text;
  return dispatch({
    type: 'message/sync',
    client: true,
    isResend: isResend,
    payload: {
      id: resendId || genMessageId(),
      type: 'text',
      who: 'client',
      content: {
        client: true,
        text: resendText || text,
        activeAck: true,
        type: 'command',
      },
      contentType: getRequestMessageType('command'),
      timestamps: getMessageTimestamp(),
    },
  });
}

function sendDialogMessage(dispatch, data = {}) {
  const { id: resendId, isResend = false } = !data.isResend ? {} : data;
  return dispatch({
    type: 'message/sync',
    client: true,
    payload: {
      id: resendId || genMessageId(),
      type: 'text',
      who: 'client',
      isResend: isResend,
      content: {
        client: true,
        text: data.label,
        ...data,
        activeAck: true,
        type: 'dialog',
      },
      contentType: getRequestMessageType('dialog'),
      timestamps: getMessageTimestamp(),
    },
  });
}

function sendNavMessage(dispatch, data = {}) {
  const { label, detailId, text } = data;
  const { id: resendId, isResend = false } = !data.isResend ? {} : data;
  return dispatch({
    type: 'message/sync',
    client: true,
    payload: {
      id: resendId || genMessageId(),
      type: 'text',
      who: 'client',
      isResend,
      content: {
        client: true,
        text: label || text,
        description: label || text,
        // service,
        detailId,
        activeAck: true,
        type: 'nav',
      },
      contentType: getRequestMessageType('nav'),
      timestamps: getMessageTimestamp(),
    },
  });
}

// @TODO Just replace
function sendReplaceImageMessage(dispatch, id, image) {
  return dispatch({
    type: 'message/replace',
    payload: {
      id: id,
      replaceId: id,
      type: 'image',
      content: {
        src: image,
        activeAck: true,
      },
    },
  });
}

function sendNetworkErrorMessage(dispatch, errorMessageId, originMessageId) {
  return dispatch({
    type: 'message/500',
    payload: { id: genMessageId(), eid: errorMessageId, mid: originMessageId },
  });
}

function sendWaitingMessage(dispatch) {
  return dispatch({
    type: 'message/sync',
    payload: { id: genMessageId(), type: 'waiting' },
  });
}

export default function sendMessage(type, dispatch, ...args) {
  const sendMessageType = {
    text: sendTextMessage,
    image: sendImageMessage,
    command: sendCommandMessage,
    dialog: sendDialogMessage,
    nav: sendNavMessage,
    'image:replace': sendReplaceImageMessage,
    'network-error': sendNetworkErrorMessage,
    waiting: sendWaitingMessage,
  };

  if (!sendMessageType[type]) {
    return console.error(`sendMessage: unknown sendMessageType (${type}) in ${Object.keys(sendMessageType)}`); // eslint-disable-line
  }

  return sendMessageType[type](dispatch, ...args);
}
