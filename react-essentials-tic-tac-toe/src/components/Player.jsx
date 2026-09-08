import { useState } from 'react';

export default function Player({ name, symbol, ...rest }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(name);

  function handleEditClick() {
    setIsEditing(prev => !prev);
  }

  function handleInputChange(evt) {
    setUsername(evt.target.value);
  }

  const userName = isEditing ? <input type="text" value={username} onChange={handleInputChange} required /> : <span className="player-name">{username}</span>;

  return (
    <li {...rest}>
      <span className="player">
        {userName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}