import React, { useState, forwardRef, useRef, useEffect } from 'react';
import { data as emojiList } from './data';
import EmojiSearch from './emojisearch';
import EmojiButton from './emojibutton';
import styles from './emojipicker.module.scss';

export function EmojiPicker(props, inputRef) {

  const[emojis, setEmojis] = useState(emojiList);
  const[isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis(emojiList);
      }
    });
  }, []);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }


  function handleSearch(event) {
    const q = event.target.value.toLowerCase();
    if( !!q ) {
      const search = emojiList.filter((emoji)=> {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  // function EmojiPickerContainer() {
  //   return (
  //     <div>
  //       <EmojiSearch onSearch={ handleSearch } />
  //       <div>
  //         { emojis.map((emoji) => <div key={ emoji.name }>{ emoji.emoji }</div>) }
  //       </div>
  //     </div>
  //   );
  // }

  function handleOnClickEmoji(emoji) {
    const cursor_pos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursor_pos);
    const next = text.slice(cursor_pos);
    inputRef.current.value = prev + emoji.emoji + next;
    inputRef.current.selectionStart = cursor_pos + emoji.emoji.length;
    inputRef.current.selectionEnd = cursor_pos + emoji.emoji.length;
    inputRef.current.focus();
  }

  return (
    <div className={ styles.inputContainer } ref={ containerRef }>
      <button className={ styles.emojiPickerButton } onClick={ handleClickOpen }> Emoji </button>
      { isOpen ? (
        <div className={ styles.emojiPickerContainer }>
          <EmojiSearch onSearch={ handleSearch } />
          <div className={ styles.emojiList }>
            { emojis.map((emoji) => <EmojiButton key={ emoji.name } emoji={ emoji } onClick={ handleOnClickEmoji } />) }
          </div>
        </div> ) : '' }
    </div>
  );
}

export default forwardRef(EmojiPicker);

// Other way to do
// export default forwardRef((props, inputRef) => {
//
// });
