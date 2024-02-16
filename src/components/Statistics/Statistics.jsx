import s from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <section class="statistics">
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statlist}>
        {data.map((item, idx) => (
          <li
            className={s.item}
            style={{ backgroundColor: getRandomColor() }}
            key={item.id}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
