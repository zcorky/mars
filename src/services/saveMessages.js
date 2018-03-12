function saveTextMessage(dispatch, text) {
    return dispatch({
      type: 'message/save',
      payload: {
        type: 'TEXT', // 卡片类型
        content: {
            text: "string", // 文本信息 (必须)
            commands: [ // 命令 (Optional 可选)
                {
                    type: "string", // 1 链接(link), 2 文本(text)
                    icon: "string", // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                    label: "string", // 文案
                    value: "string | number", // 值
                }
            ]
        }
      }  
    });
}

function saveRadioMessage(dispatch) {
    return dispatch({
        type: 'message/save',
        payload: {
            type: 'RADIO',
            content: {
                title: "string", // 提示文案
                choices: [
                    {
                        icon: "URL", // 自定义icon链接
                        label: "string", // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: "string", // 描述
                    },  {
                        icon: "URL", // 自定义icon链接
                        label: "string", // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: "string", // 描述
                    }
                ]
            }
        }
    });
}

function saveCheckboxMessage(dispatch) {
    return dispatch({
        type: 'message/save',
        payload: {
            type: 'CHECKBOX',
            content: {
                title: 'string', // 提示文案
                choices: [
                    {
                        icon: 'URL', // 自定义icon链接
                        label: 'string', // 文案
                        value: 'string | number', // 选择的实际值, 唯一
                        description: 'string', // 描述
                    }
                ]
            }
        }
    });
}

function saveListMessage(dispatch) {
    return dispatch({
        type: 'message/save',
        payload: {
            type: 'LIST',
            content: {
                title: 'string', // 提示文案
                data: [
                    {
                        type: 'string', // 类型: 1 纯文本(text) 2 富文本(richtext) (产品), 3 富文本(richtext) (其他...)

                        label: 'string', // 文案 (文本)
                        value: 'string | number', // 值 (文本)

                        title: 'string', // 标题 (富文本: 产品标题)
                        banner: 'string', // 图片链接 (富文本: 产品图)
                        tags: [], // 标签 (富文本: 产品)
                        price: 'number', // 价格 (富文本: 产品)
                        count: 'number', // 销售数量 (富文本: 产品)
                        url: 'string', // 产品链接 (富文本: 产品)
                    }
                ],
                commands: [ // 命令 (Optional 可选)
                    {
                        type: 'string', // 1 链接(link), 2 文本(text)
                        icon: 'string', // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                        label: 'string', // 文案
                        value: 'string | number', // 值
                    }
                ]
            }
        }
    });
}

function saveTextImageMessage(dispatch) {
    return {
        type: 'message/save',
        payload: {
            type: 'TEXTIMAGE',
            content: {
               banner: 'string', // 首图链接
               title: 'string', // 提示文案
               commands: [ // 命令 (Optional 可选)
                   {
                       type: 'string', // 1 链接(link), 2 文本(text)
                       icon: 'string', // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                       label: 'string', // 文案
                       value: 'string | number', // 值
                   }
               ]
           }
        }
    }
}

export default function saveMessages(type, dispatch) {
    console.log(type);
    const saveMessageType = {
        TEXT: saveTextMessage,
        RADIO: saveRadioMessage,
        CHECKBOX: saveCheckboxMessage,
        LIST: saveListMessage,
        TEXTIMAGE: saveTextImageMessage,
      };
    if (!saveMessageType[type]) {
    return console.error(`sendMessage: unknown sendMessageType (${type}) in ${Object.keys(sendMessageType)}`); // eslint-disable-line
    }

    return saveMessageType[type](dispatch);
}
