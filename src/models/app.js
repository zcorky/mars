export default {
  namespace: 'app',

  state: {
    count: 0,
  },

  reducers: {
    '+'({ count, ...rest }) {
      return {
        ...rest,
        count: count + 1,
      };
    },
    '-'({ count, ...rest }) {
      return {
        ...rest,
        count: count - 1,
      };
    },
  },
};