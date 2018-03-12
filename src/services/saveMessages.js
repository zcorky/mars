function saveTextMessage(dispatch, text) {
    return dispatch({
      type: 'message/save',
      payload: {
        type: 'TEXT', // 卡片类型
        content: {
            text: "这是文本消息这是文本消息这是文本消息", // 文本信息 (必须)
            commands: [ // 命令 (Optional 可选)
                {
                    type: "string", // 1 链接(link), 2 文本(text)
                    icon: "string", // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                    label: "more", // 文案
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
                title: "单选卡片标题", // 提示文案
                choices: [
                    {
                        icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4', // 自定义icon链接
                        label: '选项一', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '1年驾龄', // 描述
                    }, {
                        icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',  // 自定义icon链接
                        label: '选项二', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '2~10驾龄', // 描述
                    }, {
                        icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
                        label: '选项三', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '大于10年驾龄', // 描述
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
                title: '多选卡片标题', // 提示文案
                choices: [
                    {
                        icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4', // 自定义icon链接
                        label: '选项一', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '1年驾龄', // 描述
                    }, {
                        icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',  // 自定义icon链接
                        label: '选项二', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '2~10驾龄', // 描述
                    }, {
                        icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
                        label: '选项三', // 文案
                        value: "string | number", // 选择的实际值, 必须唯一
                        description: '大于10年驾龄', // 描述
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
    console.log('card-type: ', type);
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
