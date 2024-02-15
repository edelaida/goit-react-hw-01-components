import s from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  const isOpen = false;
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <section class="statistics">
      {isOpen && <h2 class="title">{title}</h2>}
      <ul className={s.statlist}>
        {data.map((item, idx) => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor }}
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
