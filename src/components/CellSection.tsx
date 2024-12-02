import { Cell, Section } from '@telegram-apps/telegram-ui';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


type TransactionCellProps = {
  id: number;
  type: 'Received' | 'Sent';
  amountUSD: string;
  amountSATS: string;
  time: string;
  date: string;
};

const transactions: TransactionCellProps[] = [
  {
    id: 1,
    type: 'Received',
    amountUSD: '+ $1.75 USD',
    amountSATS: '+3000 SATS',
    time: '03:54 PM',
    date: 'Sep 29',
  },
  {
    id: 2,
    type: 'Sent',
    amountUSD: '- $1.75 USD',
    amountSATS: '-3000 SATS',
    time: '03:54 PM',
    date: 'Sep 29',
  },
];

export const CellSection = () => (
  <div style={{ borderRadius: '3%', overflow: 'hidden' }}>
    <Section>
      {transactions.map((transaction) => (
        <Cell
          key={transaction.id}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          before={<div style={{ color: transaction.type === 'Received' ? 'green' : 'red' }}>
            {transaction.type === 'Received' ? <FaArrowDown /> : <FaArrowUp />}
          </div>}
          after={<div style={{ textAlign: 'right' }}>
            <div>{transaction.time}</div>
            <div style={{ color: '#888' }}>{transaction.date}</div>
          </div>}
        >
          <div style={{ fontWeight: 'bold' }}>{transaction.amountUSD}</div>
          <div style={{ color: '#888' }}>{transaction.amountSATS}</div>
        </Cell>
      ))}
    </Section>
  </div>
);