interface State {
  titleData: {
    title: string;
    titleColor: string;
    titleBgColor: string;
    display: boolean;
  };
  subTitleData: {
    title?: string;
    titleColor?: string;
    titleBgColor?: string;
    display: boolean;
  };
  // textData: {
  //   text?: string;
  //   textColor?: string;
  //   textBgColor?: string;
  // };
  // textData2: {
  //   text?: string;
  //   textColor?: string;
  //   textBgColor?: string;
  // };
  // textData3: {
  //   text?: string;
  //   textColor?: string;
  //   textBgColor?: string;
  // };
  // borderData: {
  //   borderColor?: string;
  // };
  // backgroundData: {
  //   backgroundColor?: string;
  // };
  characterImageData: {
    characterImage?: string;
    display: boolean;
  };
}

type Action =
  | { type: 'CHANGE_TITLE'; payload: string }
  | { type: 'CHANGE_TITLE_COLOR'; payload: string }
  | { type: 'CHANGE_TITLE_BG_COLOR'; payload: string }
  | { type: 'CHANGE_SUBTITLE'; payload: string }
  | { type: 'CHANGE_SUBTITLE_COLOR'; payload: string }
  | { type: 'CHANGE_SUBTITLE_BG_COLOR'; payload: string }
  | { type: 'CHANGE_CHARACTER_IMAGE'; payload: string };

export const initialState = {
  titleData: {
    title: 'Title',
    titleColor: '#333333',
    titleBgColor: '#ffffff',
    display: true,
  },
  subTitleData: {
    title: 'Sub Title',
    titleColor: '#333333',
    titleBgColor: '#ffffff',
    display: true,
  },

  textData: {
    text: 'Text 1',
    textColor: '#333333',
    textBgColor: '',
    display: true,
  },
  textData2: {
    text: 'Text 2',
    textColor: '#333333',
    textBgColor: '#ffffff',
    display: true,
  },
  textData3: {
    text: 'Text 2',
    textColor: '#333333',
    textBgColor: '#ffffff',
    display: true,
  },
  borderData: {
    borderColor: '#333333',
    display: true,
  },
  backgroundData: {
    backgroundColor: '#333333',
    display: true,
  },
  characterImageData: {
    characterImage: '/character.png',
    display: true,
  },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        titleData: {
          ...state.titleData,
          title: action.payload,
        },
      };
    case 'CHANGE_TITLE_COLOR':
      return {
        ...state,
        titleData: {
          ...state.titleData,
          titleColor: action.payload,
        },
      };
    case 'CHANGE_TITLE_BG_COLOR':
      return {
        ...state,
        titleData: {
          ...state.titleData,
          titleBgColor: action.payload,
        },
      };

    case 'CHANGE_SUBTITLE':
      return {
        ...state,
        subTitleData: {
          ...state.subTitleData,
          title: action.payload,
        },
      };

    case 'CHANGE_SUBTITLE_COLOR':
      return {
        ...state,
        subTitleData: {
          ...state.subTitleData,
          titleColor: action.payload,
        },
      };

    case 'CHANGE_SUBTITLE_BG_COLOR':
      return {
        ...state,
        subTitleData: {
          ...state.subTitleData,
          titleBgColor: action.payload,
        },
      };

    case 'CHANGE_CHARACTER_IMAGE':
      return {
        ...state,
        characterImageData: {
          ...state.characterImageData,
          characterImage: action.payload,
        },
      };

    // case 'CHANGE_SUBTITLE':
    //   return {
    //     ...state,
    //     subTitleData: {
    //       ...state.subTitleData,
    //       title: action.payload,
    //     },
    //   };

    // case 'CHANGE_SUBTITLE_COLOR':
    //   return {
    //     ...state,
    //     subTitleData: {
    //       ...state.subTitleData,
    //       titleColor: action.payload,
    //     },
    //   };

    default:
      return state;
  }
};

export const isProperty = (obj: State, prop: string) => {
  return obj.hasOwnProperty(prop) ? true : false;
};
