interface State {
  textData: {
    text?: string;
    textColor?: string;
    textBgColor?: string;
    display: boolean;
  };
  textData2: {
    text?: string;
    textColor?: string;
    textBgColor?: string;
    display: boolean;
  };
  textData3: {
    text?: string;
    textColor?: string;
    textBgColor?: string;
    display: boolean;
  };
}

type Action =
  | { type: 'CHANGE_TEXT'; payload: string }
  | { type: 'CHANGE_TEXT_COLOR'; payload: string }
  | { type: 'CHANGE_TEXT_BG_COLOR'; payload: string };

export const initialTextState = {
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
};

export const textReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        textData: {
          ...state.textData,
          text: action.payload,
        },
      };
    case 'CHANGE_TEXT_COLOR':
      return {
        ...state,
        textData: {
          ...state.textData,
          textColor: action.payload,
        },
      };
    case 'CHANGE_TEXT_BG_COLOR':
      return {
        ...state,
        textData: {
          ...state.textData,
          textBgColor: action.payload,
        },
      };

    default:
      return state;
  }
};
