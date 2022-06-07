import React from 'react';
import styles from './emojipicker.module.scss';

function EmojiButton({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }

  return (
    <button className={ styles.emojiButton } onClick={ handleClick }> { emoji.emoji } </button>
  );
}

export default EmojiButton;
