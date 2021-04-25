import { InputLabel, Input, List, ListItem, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setUserValute } from '../../../../reducers/vaiutesReduser';

const useStyles = makeStyles({
  inputLabel: {
    position: "relative",
    paddingTop: "10px",
  },
  input: {
    marginBottom: "20px",
    width: "300px",
    maxWidth: "100%"
  },
  list: {
    position: "absolute", 
    left: "36%",
    top: "45px",
    backgroundColor: "#fff",
    border: "1px solid #2697FF",
    borderRadius: "5px",
    padding: "0 5px",
    zIndex: "1",
  },
  listItem: {
    borderBottom: "1px solid #2697FF",
    cursor: "pointer",
  },
});

export const SearchString = () => {
  const valutes = useSelector(state => state.valutes.valute, shallowEqual);
  const dispatch = useDispatch();
  const [searchValute, setSearchValute] = useState('');
  const [findedValute, setfindedValute] = useState([]);
  const styles = useStyles();

  const searchHandler = (e) => {
    setSearchValute(e.target.value.trim());
  };

  useEffect(() => {
    const findedString = searchValute.toUpperCase();

    if(findedString) {
      setfindedValute(valutes.filter(item => item.CharCode.slice(0, findedString.length) === findedString ||
                  item.NumCode.slice(0, findedString.length) === findedString));
    } else {
      setfindedValute([]);
    }

  }, [searchValute, valutes]);

  const resetSearchInput = () => {
    setSearchValute('');
    setfindedValute([]);
  };

  return (
    <InputLabel className={styles.inputLabel}>
      <Input className={styles.input}
        placeholder="введите название или код валюты"
        onChange={searchHandler}
        // onBlur={resetSearchInput}
        value={searchValute}
      />
      {findedValute.length !== 0 && <List className={styles.list}>
        {findedValute.map(elem => (<ListItem 
                                      key={elem.ID}
                                      className={styles.listItem}
                                      onClick={() => {
                                        dispatch(setUserValute(elem));
                                        resetSearchInput();
                                      }}
                                    >
          {`${elem.CharCode}: код валюты ${elem.NumCode}`}
        </ListItem>))}
      </List>}
    </InputLabel>
  )
}