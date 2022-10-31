import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Month from './Month';
import Month18 from './18Month';
import Month24 from './24Month';
import Month36 from './36Month';
import Month48 from './48Month';
import Month60 from './60Month';
import Month72 from './72Month';
import Month84 from './84Month';

const Months = ({id, selects, callback}) => {
  const month = useSelector(state => state.credit.month);

  const checkMonth = () => {
    if (month === 18) {
      return <Month18 id={id} selects={selects} callback={callback} />;
    } else if (month === 24) {
      return <Month24 id={id} selects={selects} callback={callback} />;
    } else if (month === 36) {
      return (
        <>
          <Month24 id={id} selects={selects} callback={callback} />
          <Month36 id={id} selects={selects} callback={callback} />
        </>
      );
    } else if (month === 48) {
      return (
        <>
          <Month24 id={id} selects={selects} callback={callback} />
          <Month36 id={id} selects={selects} callback={callback} />
          <Month48 id={id} selects={selects} callback={callback} />
        </>
      );
    } else if (month === 60) {
      return (
        <>
          <Month24 id={id} selects={selects} callback={callback} />
          <Month36 id={id} selects={selects} callback={callback} />
          <Month48 id={id} selects={selects} callback={callback} />
          <Month60 id={id} selects={selects} callback={callback} />
        </>
      );
    } else if (month === 72) {
      return (
        <>
          <Month24 id={id} selects={selects} callback={callback} />
          <Month36 id={id} selects={selects} callback={callback} />
          <Month48 id={id} selects={selects} callback={callback} />
          <Month60 id={id} selects={selects} callback={callback} />
          <Month72 id={id} selects={selects} callback={callback} />
        </>
      );
    } else if (month === 84) {
      return (
        <>
          <Month24 id={id} selects={selects} callback={callback} />
          <Month36 id={id} selects={selects} callback={callback} />
          <Month48 id={id} selects={selects} callback={callback} />
          <Month60 id={id} selects={selects} callback={callback} />
          <Month72 id={id} selects={selects} callback={callback} />
          <Month84 id={id} selects={selects} callback={callback} />
        </>
      );
    } else {
      return '';
    }
  };

  return (
    <>
      <Month id={id} selects={selects} callback={callback} />
      {checkMonth()}
    </>
  );
};
export default Months;
