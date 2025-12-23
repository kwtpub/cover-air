import './ComparisonTable.css';

const ComparisonTable = () => {
  const tableData = [
    {
      name: 'Возможность работы облачных решений со стационарной торговлей',
      udmpay: 'Все виды торговли',
      competitor: 'Только HoReCa',
      isHeader: false,
    },
    {
      name: 'Возможность работы облачных решений с интернет-торговлей',
      udmpay: 'Все виды торговли',
      competitor: 'Только онлайн-школы',
      isHeader: false,
    },
    {
      name: 'Запуск бизнеса',
      udmpay: '',
      competitor: '',
      isHeader: true,
    },
    {
      name: 'Кассовый аппарат',
      udmpay: '0 ₽ уже интегрировано',
      competitor: 'от 5 500 ₽',
      isHeader: false,
    },
    {
      name: 'Фискальный накопитель',
      udmpay: '0 ₽ уже интегрировано',
      competitor: 'от 12 000 ₽',
      isHeader: false,
    },
    {
      name: 'Настроить и запустить программное обеспечение',
      udmpay: '0 ₽ уже интегрировано',
      competitor: 'от 40 000 ₽',
      isHeader: false,
    },
    {
      name: 'Подключение',
      udmpay: '0 ₽',
      competitor: '9 500 ₽',
      isHeader: false,
    },
    {
      name: 'Итого на запуск бизнеса',
      udmpay: '0 ₽',
      competitor: '67 000 ₽',
      isHeader: false,
      isTotal: true,
    },
    {
      name: 'Ежемесячное обслуживание',
      udmpay: '',
      competitor: '',
      isHeader: true,
    },
    {
      name: 'Терминал и касса',
      udmpay: '0 ₽ уже интегрировано',
      competitor: '8 990 ₽ в месяц (0 ₽ от 1 млн оборота)',
      isHeader: false,
    },
    {
      name: 'Программное обеспечение',
      udmpay: '0 ₽ уже интегрировано',
      competitor: '3 500 ₽ в месяц',
      isHeader: false,
    },
    {
      name: 'Интернет-магазин, CRM',
      udmpay: '0 ₽ уже интегрировано',
      competitor: '1 990 ₽ в месяц',
      isHeader: false,
    },
    {
      name: 'Комиссия (из расчёта объёма платежей 300 000 ₽)',
      udmpay: '2% — 6 000 ₽ в месяц',
      competitor: '2,5% — 7 500 ₽ в месяц',
      isHeader: false,
    },
    {
      name: 'Итого обслуживание бизнеса в месяц (при обороте 300 000 ₽)',
      udmpay: '6 000 ₽',
      competitor: '21 980 ₽',
      isHeader: false,
      isTotal: true,
    },
  ];

  return (
    <section className="comparison-table" id="comparison-table">
      <div className="comparison-table__container">
        <h2 className="comparison-table__title">Сравнение с конкурентами</h2>
        
        <div className="comparison-table__wrapper">
          <table className="comparison-table__table">
            <thead>
              <tr>
                <th className="comparison-table__th comparison-table__th--name"></th>
                <th className="comparison-table__th comparison-table__th--udmpay">
                  <span className="comparison-table__header-text">UDMPAY всё включено!</span>
                </th>
                <th className="comparison-table__th comparison-table__th--competitor">
                  <span className="comparison-table__header-text">Конкуренты в России</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`comparison-table__row ${row.isHeader ? 'comparison-table__row--section' : ''} ${row.isTotal ? 'comparison-table__row--total' : ''}`}
                >
                  <td className="comparison-table__td comparison-table__td--name">
                    {row.name}
                  </td>
                  <td className="comparison-table__td comparison-table__td--udmpay">
                    <span className={row.udmpay ? 'comparison-table__value comparison-table__value--good' : ''}>
                      {row.udmpay}
                    </span>
                  </td>
                  <td className="comparison-table__td comparison-table__td--competitor">
                    <span className={row.competitor ? 'comparison-table__value comparison-table__value--bad' : ''}>
                      {row.competitor}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

