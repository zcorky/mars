1. Text（文本）
```js
{
  type: 'TEXT', // 卡片类型
  content: {
    text: string, // 文本信息 (必须)
    commands: [ // 命令 (Optional 可选)
      {
        type: string, // 1 链接(link), 2 文本(text)
        icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
        label: string, // 文案
        value: string | number, // 值
      }
    ]
  }
}
```

2. TextImage (图文)
```js
{
  type: 'TEXT_IMAGE',
  content: {
    banner: string, // 首图链接
    title: string, // 提示文案
    subTitle: string, // 辅助文案
    keyDescription: string, // 关键信息，比如金额
    description: string, // 描述信息(设计稿原名: 描述详细)，比如销量
    url: string, // 跳转链接 (Optional)
    commands: [ // 命令 (Optional 可选)
        {
            type: string, // 1 链接(link), 2 文本(text)
            icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
            label: string, // 文案
            value: string | number, // 值
        }
    ]
  }
}

```

3. Radio（单选）
```js
{
    type: 'RADIO',
    content: {
        title: string, // 提示文案
        choices: [
            {
                icon: URL, // 自定义icon链接
                label: string, // 文案
                value: string | number, // 选择的实际值, 必须唯一
                description: string, // 描述
            }
        ]
    }
}
```
4. Checkbox（多选）
```js
{
    type: 'CHECKBOX',
    content: {
        title: string, // 提示文案
        choices: [
            {
                icon: URL, // 自定义icon链接
                label: string, // 文案
                value: string | number, // 选择的实际值, 唯一
                description: string, // 描述
            }
        ]
    }
}
```

5. Image (图片卡片类型)
```js
{
    type: 'IMAGE',
    content: {
        banner: string, // 首图链接
        commands: [ // 命令 (Optional 可选)
            {
                type: string, // 1 链接(link), 2 文本(text)
                icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                label: string, // 文案
                value: string | number, // 值
            }
        ]
    }
}
```
6. TextList (文本列表类型)
```js
{
 type: 'TEXT_LIST',
 content: {
    list: [{
      text: '文本',
      value: '文本隐藏值'
    }, ...],
    commands: [ // 命令 (Optional 可选)
      {
        type: string, // 1 链接(link), 2 文本(text)
        icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
        label: string, // 文案
        value: string | number, // 值
      }
    ]
  }
}
```

7. TextImageList (图文列表)
```js
{
  type: 'TEXT_IMAGE_LIST',
  content: {
    list: [{
       banner: string, // 首图链接
       title: string, // 提示文案,
       subTitle: string, // 辅助文案
       keyDescription: string, // 关键信息，比如金额
       description: string, // 描述信息(设计稿原名: 描述详细)，比如销量
       url: string, // 跳转链接 (Optional)
    }],
    commands: [ // 命令 (Optional 可选)
        {
            type: string, // 1 链接(link), 2 文本(text)
            icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
            label: string, // 文案
            value: string | number, // 值
        }
    ]
  }
}
```
<!-- 5. List（列表）
```js
{
     type: 'LIST',
     content: {
        title: string, // 提示文案
        data: [
            {
                type: string, // 类型: 1 纯文本(text) 2 富文本(richtext) (产品), 3 富文本(richtext) (其他...)

                label: string, // 文案 (文本)
                value: string | number, // 值 (文本)

                title: string, // 标题 (富文本: 产品标题)
                banner: string, // 图片链接 (富文本: 产品图)
                tags: [], // 标签 (富文本: 产品)
                price: number, // 价格 (富文本: 产品)
                count: number, // 销售数量 (富文本: 产品)
                url: string, // 产品链接 (富文本: 产品)
            }
        ],
        commands: [ // 命令 (Optional 可选)
            {
                type: string, // 1 链接(link), 2 文本(text)
                icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                label: string, // 文案
                value: string | number, // 值
            }
        ]
    }
 }
```

5. TextImage（图文）
```js
{
     type: 'TEXTIMAGE',
     content: {
        banner: string, // 首图链接
        title: string, // 提示文案
        commands: [ // 命令 (Optional 可选)
            {
                type: string, // 1 链接(link), 2 文本(text)
                icon: string, // 1 更多(more), 2 人工(man), 3 语音(voice), 4 拍照(camera) 等
                label: string, // 文案
                value: string | number, // 值
            }
        ]
    }
 }
 ``` -->
