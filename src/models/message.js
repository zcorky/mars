export default {
  namespace: 'message',

  state: {
    count: 0,
    data: [],
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
    save(state, { payload: message }) {
      const data = state.data.slice();
      return {
        ...state,
        data: [...data, message],
      }
    }
  },
};