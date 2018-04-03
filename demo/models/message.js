import nanoid from 'nanoid';

export default {
  namespace: 'message',

  state: {
    'text': {
      id: 'text',
      type: 'TEXT',
      content: {
        text: '请问有什么可以帮助你的吗？',
      }
    },
    
    'textimage': {
      id: 'textimage',
      type: 'TEXT_IMAGE',
      content: {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
        title: '尊享e生百万医疗保险',
        subTitle: '险种不够经验来凑',
        keyDescription: '￥200',
        description: '月销 100 份',
        url: '',
      }
    },

    'radio': {
      id: 'radio',
      type: 'RADIO',
      content: {
        choices: [
          {
            key: 'c1',
            label: '新手上路',
            icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4',
            description: '1年驾龄',
          },
          {
            key: 'c2',
            label: '轻车熟路',
            icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',
            description: '2~10驾龄',
          },
          {
            key: 'c3',
            label: '老司机',
            icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
            description: '大于10年驾龄',
          },
        ]
      },
    },

    'checkbox': {
      id: 'checkbox',
      type: 'CHECKBOX',
      content: {
        choices: [
          {
            key: 'c1',
            label: '新手上路',
            icon: 'https://im2.zhongan.io/image/file/bc7edfd2-8b5c-4e87-b6a3-6a76ee87abb4',
            description: '1年驾龄',
          },
          {
            key: 'c2',
            label: '轻车熟路',
            icon: 'https://im2.zhongan.io/image/file/7dd866fd-b0a3-4adb-a2f3-e38296cd3a3a',
            description: '2~10驾龄',
          },
          {
            key: 'c3',
            label: '老司机',
            icon: 'https://im2.zhongan.io/image/file/e707384e-5d89-468c-a00a-7d5d178ea46c',
            description: '大于10年驾龄',
          },
        ]
      },
    }, 

    'image': {
      id: 'image',
      type: 'IMAGE',
      content: {
        banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/v2-953608ff58261bdf314d03996a995a8d_r.jpg',
      }
    },

    'textlist': {
      id: 'textlist',
      type: 'TEXT_LIST',
      content: {
        title: '也许您想问？',
        list: [
          {
            text: '什么是分期车险？',
            value: '什么是分期车险？',
          },  {
            text: '如何使用分期支付？',
            value: '如何使用分期支付？',
          },  {
            text: '我可不可以提前申请还款？怎么申请？后续怎么操作？',
            value: '我可不可以提前申请还款？怎么申请？后续怎么操作？',
          }
        ]
      }
    },

    'textimagelist': {
      id: 'textimagelist',
      type: 'TEXT_IMAGE_LIST',
      content: {
        list: [
          {
            banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
            title: '尊享e生百万医疗保险',
            subTitle: '险种不够经验来凑',
            keyDescription: '￥200',
            description: '月销 100 份',
            url: '',
          }, {
            banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
            title: '尊享e生百万医疗保险',
            subTitle: '险种不够经验来凑',
            keyDescription: '￥200',
            description: '月销 100 份',
            url: '',
          }, {
            banner: 'http://obzxlsphd.bkt.clouddn.com//zzz/images/product.png',
            title: '尊享e生百万医疗保险',
            subTitle: '险种不够经验来凑',
            keyDescription: '￥200',
            description: '月销 100 份',
            url: '',
          }
        ]
      }
    }
  },

  reducers: {
    add(state, { payload = {} }) {
      const id = nanoid();

      return {
        ...state,
        [id]: { id, ...payload },
      };
    },
  },
};
