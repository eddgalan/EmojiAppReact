import React from 'react';
import styles from './emojipicker.module.scss';

function EmojiSearch({ onSearch }) {
  return(
    <input className={ styles.search } onChange={ onSearch } placeholder="Search emoji(s)"/>
  );
}

export default EmojiSearch;
