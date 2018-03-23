import nanoid from 'nanoid';

export default {
  namespace: 'message',

  state: {
    'xxxxasd': {
      id: 'xxxxasd',
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

    'xxxxase': {
      id: 'xxxxase',
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
