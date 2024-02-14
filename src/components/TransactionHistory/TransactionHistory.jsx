import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionhistory}>
      <thead className={s.title}>
        <tr>
          <th className={s.titlename}>Type</th>
          <th className={s.titlename}>Amount</th>
          <th className={s.titlename}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item, idx) => (
          <tr
            style={
              idx % 2 === 0
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'lightblue' }
            }
            key={item.id}
          >
            <td className={s.itemname}>{item.type}</td>
            <td className={s.itemname}>{item.amount}</td>
            <td className={s.itemname}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
