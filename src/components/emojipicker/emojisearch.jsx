import React from 'react';

function EmojiSearch({ onSearch }) {
  return(
    <input onChange={ onSearch } />
  );
}

export default EmojiSearch;
