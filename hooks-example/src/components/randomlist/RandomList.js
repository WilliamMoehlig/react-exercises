import React from 'react';
import UseClear from './UseClear';
import UseRandomList from './UseRandomList';

const RandomList = () => {
  const randomNumbers = [];
  const [list, generateRandom, clearList] = UseRandomList(randomNumbers);
  const [timesCleared, clear] = UseClear(0);

  console.log(list);

  return (
    <div>
      <button type="button" onClick={generateRandom}>
        Add a number
      </button>
      {list.length > 0 || timesCleared > 0 ? (
        <button
          type="button"
          onClick={() => {
            clear();
            clearList();
          }}
        >
          Clear list (times cleared: {timesCleared})
        </button>
      ) : null}
      <ul>
        {list.map(element => (
          <li key={element.id}>{element.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomList;
