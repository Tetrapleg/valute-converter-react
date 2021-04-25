import { InputLabel } from '@material-ui/core';
import { shallowEqual, useSelector } from 'react-redux';
import { setUserValute } from '../../../../reducers/vaiutesReduser';
import { SelectUserValute } from '../../layoutComponents/SelectUserValute';

export const SelectValute = () => {
  const userValute = useSelector(state => state.valutes.userValute, shallowEqual);
  const abbreviationIsRevealed = true;

  return(
    <>
      <InputLabel id="label">Выберите валюту</InputLabel>
      <SelectUserValute 
        userValute={userValute}
        setUserValute={setUserValute}
        abbreviationIsRevealed={abbreviationIsRevealed}
      />
    </>
  )
}