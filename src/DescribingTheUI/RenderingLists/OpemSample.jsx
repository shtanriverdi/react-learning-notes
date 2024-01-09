const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  const poemListItem = [];
  for (const [index, line] of poem.lines.entries()) {
    if (poemListItem.length > 0) {
       poemListItem.push(<hr key={"-" + index} />);
    }
    poemListItem.push(<p key={"+" + index}>{line}</p>);
  }
  
  return (
    <article>
      {poemListItem}
    </article>
  );
}

/**the <>...</> shorthand syntax doesn’t support passing keys
 *  so you’d have to write <Fragment> explicitly: */
import { Fragment } from 'react';

function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return <Fragment key={index}>
          {index > 0 && <hr key={"-" + index} />}
          <p key={"+" + index}>{line}</p>
        </Fragment>
      })}
    </article>
  );
}