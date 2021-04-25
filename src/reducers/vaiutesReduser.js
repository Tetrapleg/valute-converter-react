const SET_VALUTE_LIST = "SET_VALUTE_LIST";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const UPLOAD_USER_VALUTE = "UPLOAD_USER_VALUTE";
const SET_NUMBER_OF_CONVERTION = "SET_NUMBER_OF_CONVERTION";
const SET_VALUTE_OF_CONVERTION = "SET_VALUTE_OF_CONVERTION";



const defaultState = {
  valute: null,
  isFetching: true,
  userValute: {CharCode: "USD"},
  convertValute: {CharCode: "EUR"},
  numOfConvert: '',
};

export const valutesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VALUTE_LIST:
      return {
        ...state,
        valute: action.payload,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case UPLOAD_USER_VALUTE:
      return {
        ...state,
        userValute: action.payload
      };
    case SET_NUMBER_OF_CONVERTION:
      return {
        ...state,
        numOfConvert: action.payload
      }
    case SET_VALUTE_OF_CONVERTION:
      return {
        ...state,
        convertValute: action.payload
      }
    default:
      return state
  }
};


export const setValute = (valute) => ({type:SET_VALUTE_LIST, payload:valute});
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool});
export const setUserValute = (userValute) => ({type:UPLOAD_USER_VALUTE, payload:userValute});
export const setNumOfConvert = (number) => ({type:SET_NUMBER_OF_CONVERTION, payload:number});
export const setConvertValute = (convertValute) => ({type:SET_VALUTE_OF_CONVERTION, payload:convertValute});