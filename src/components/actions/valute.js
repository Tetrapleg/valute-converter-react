import axios from 'axios';
import { setConvertValute, setIsFetching, setUserValute, setValute } from '../../reducers/vaiutesReduser';  

const valuteNameArray = ["AMD", "AUD", "AZN", "BGN", "BRL", "BYN", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "INR", "JPY", "KGS", "KRW", "KZT", "MDL", "NOK", "PLN", "RON", "SEK", "SGD", "TJS", "TMT", "TRY", "UAH", "USD", "UZS", "XDR", "ZAR"];

export const getValuteList = () => {

  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js"); 

    const valuteData = valuteNameArray.map(item => response.data.Valute[item]);
    dispatch(setValute(valuteData));
    dispatch(setUserValute(valuteData[0]));
    dispatch(setConvertValute(valuteData[1]));
  };
};