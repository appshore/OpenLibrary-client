import React from 'react';

const List = ({ list }) => (
  <div>
    {list && list.map(l => (
      <div>
        <img src={`http://covers.openlibrary.org/b/OLID/${l.OLID}-S.jpg`} alt={l.title} />
        &nbsp;<a key={l.OLID} href={`https://openlibrary.org/books/${l.OLID}`} target="_book">
          {l.title} - {l.authors}
        </a>
      </div>
    ))}
  </div>
);

export default List;
