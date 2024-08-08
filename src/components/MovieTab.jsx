import styles from './MovieTab.module.css';

const types = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieTab({ setType, type, setPage }) {

  function handleType(e) {
    if (e.target.innerText !== 'All') {
      setType(e.target.innerText);
      setPage(1);
    } else {
      setType('');
      setPage(1);
    }
  }

  return (
    <div className={styles.movie_tab}>
      {types.map((item)=> (
        <button
          type='button'
          key={item}
          onClick={handleType}
          // className={styles.active}
          className={type === (item === 'All' ? '' : item) ? styles.active : ''}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
