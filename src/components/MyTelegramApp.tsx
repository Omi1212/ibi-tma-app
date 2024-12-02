import { useState } from 'react';
import { Button, Modal, Section, Cell, List, ButtonCell } from '@telegram-apps/telegram-ui';
import { IoIosArrowDown } from 'react-icons/io';
import { Icon28AddCircle } from '@telegram-apps/telegram-ui/dist/icons/28/add_circle';
import { FaCheckCircle } from 'react-icons/fa';

type WalletProps = {
  id: number;
  icon: string;
  accountName: string;
  isSelected?: boolean;
}

const wallets: WalletProps[] = [
  {
    id: 1,
    icon: 'https://go.ibi.me/wallets/lnbits.svg',
    accountName: 'oleiva12',
    isSelected: true,
  },
  {
    id: 2,
    icon: 'https://go.ibi.me/wallets/blink.svg',
    accountName: 'o1ling',
  },
  {
    id: 3,
    icon: 'https://go.ibi.me/wallets/logo02-Color.svg',
    accountName: '7kgmgh',
  },
];

export const ChangeWallet = () => {
  const [selectedWalletId, setSelectedWalletId] = useState<number>(wallets[0].id);

  const handleWalletClick = (id: number) => {
    setSelectedWalletId(id);
  };

  const selectedWallet = wallets.find(wallet => wallet.id === selectedWalletId);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        header={<Modal.Header />}
        trigger={
          <Button
            before={<img src={selectedWallet?.icon} alt="Logo" style={{ width: 80}} />}
            mode="bezeled"
            size="s"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <IoIosArrowDown size={24} />
            </div>
          </Button>
        }
      >
        <List
          style={{
            background: 'var(--tgui--secondary_bg_color)',
          }}
        >
          <Section>
            {wallets.map((wallet) => (
              <Cell
                key={wallet.id}
                before={<img src={wallet.icon} alt="Wallet Icon" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
                after={selectedWalletId === wallet.id ? <FaCheckCircle /> : null}
                onClick={() => handleWalletClick(wallet.id)}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{wallet.accountName}</span>
                </div>
              </Cell>
            ))}
            <ButtonCell before={<Icon28AddCircle />}>
              Connect
            </ButtonCell>
          </Section>
        </List>
      </Modal>
    </div>
  );
};