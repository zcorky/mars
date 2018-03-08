/**
 * @Author: zero
 * @Date:   2017-09-11T17:35:43+08:00
 * @Last modified by:   zero
 * @Last modified time: 2017-09-11T17:35:44+08:00
 */
const palette = {
  fontSize1: '14px',
  fontSize2: '12px',
  fontSize3: '10px',

  color1: '#343C48',
  color2: '#889099',
  color3: '#40C7F9',
  color4: '#20ACF4',
  color5: '#F0F3F5',
  color6: '#EBEFF2',
  color7: '#C1DCEA',
  color8: '#CDD3DB',
  color9: '#F5A623',
  color10: '#E5ECEA',
  color11: '#E2E8EF',
};

export default {
  palette,

  current: 'default',

  default: {
    avatar: {
      backgroundColor: palette.color4,
      shadowColor: palette.color11,
    },
    text: {
      backgroundColor: 'none',
      backgroundImage: 'linear-gradient(90deg, #41C8F9 0%, #0BA5F5 99%)',
      shadowColor: palette.color11,
    },
    action: {
      color: palette.color4,
      shadowColor: palette.color11,
    },
    board: {
      backgroundColor: '#EEF2F4',
      backgroundImage: 'linear-gradient(-180deg, #F0F3F5 0%, #EBEFF2 100%)',
    },
    question: {
      titleColor: palette.color2,
      contentColor: palette.color1,
      shadowColor: palette.color11,
    },
    icon: {
      // color: palette.color4,
      color: '#20A6F2',
    },
    navigation: {
      backgroundImage: 'linear-gradient(-180deg, rgba(235,239,242,0.11) 0%, rgba(193,220,234,0.82) 100%)',
    },
    input: {
      backgroundColor: '#F3F6F9',
    },
  },

  blue: {
    avatar: {
      backgroundColor: palette.color4,
      shadowColor: palette.color11,
    },
    text: {
      backgroundColor: 'none',
      backgroundImage: 'linear-gradient(90deg, #41C8F9 0%, #0BA5F5 99%)',
      shadowColor: palette.color11,
    },
    action: {
      color: palette.color4,
      shadowColor: palette.color11,
    },
    board: {
      backgroundColor: '#EEF2F4',
      backgroundImage: 'linear-gradient(-180deg, #F0F3F5 0%, #EBEFF2 100%)',
    },
    question: {
      titleColor: palette.color2,
      contentColor: palette.color1,
      shadowColor: palette.color11,
    },
    icon: {
      // color: palette.color4,
      color: '#20A6F2',
    },
    navigation: {
      backgroundImage: 'linear-gradient(-180deg, rgba(235,239,242,0.11) 0%, rgba(193,220,234,0.82) 100%)',
    },
    input: {
      backgroundColor: '#F3F6F9',
    },
  },

  green: {
    avatar: {
      backgroundColor: '#00C384',
      shadowColor: palette.color10,
    },
    text: {
      backgroundColor: '#00C384',
      backgroundImage: 'none',
      shadowColor: palette.color10,
    },
    action: {
      color: '#00C384',
      shadowColor: palette.color10,
    },
    board: {
      backgroundColor: '#F5F5F6',
      backgroundImage: 'none',
    },
    question: {
      titleColor: '#8B8B8B',
      contentColor: 'rgba(0, 0, 0, .7)',
      shadowColor: palette.color10,
    },
    icon: {
      color: '#00C384',
    },
    navigation: {
      backgroundImage: 'linear-gradient(-180deg, rgba(235,242,238,0.11) 0%, rgba(167,212,197,0.20) 99%)',
    },
    input: {
      backgroundColor: '#F5F6F6',
    },
  },
};
