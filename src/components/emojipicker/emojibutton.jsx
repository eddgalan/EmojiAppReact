import React from 'react';

function EmojiButton({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }

  return (
    <button onClick={ handleClick }> { emoji.emoji } </button>
  );
}

export default EmojiButton;
