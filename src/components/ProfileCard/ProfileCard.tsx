import { useState } from 'react';
import { popup, qrScanner } from '@telegram-apps/sdk-react';
import { LargeTitle, Text, Headline, AppRoot, InlineButtons, Button, Modal, Section, Cell, List, ButtonCell } from '@telegram-apps/telegram-ui';
import { FaPlus, FaArrowUp, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';
import { Icon28AddCircle } from '@telegram-apps/telegram-ui/dist/icons/28/add_circle';
import { useNavigate } from 'react-router-dom';

const shareLink = () => {
  // Implementa la lógica para compartir el enlace
};

const getUserInfo = () => {
  qrScanner.open().then((content) => {
    popup.open({
      title: 'QR Code Result',
      message: content || 'No content available',
      buttons: [{ id: 'ok', type: 'default', text: 'OK' }],
    });
  });
};

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

const ProfileCard = () => {
  const [selectedWalletId, setSelectedWalletId] = useState<number>(wallets[0].id);
  const navigate = useNavigate();

  const handleWalletClick = (id: number) => {
    setSelectedWalletId(id);
  };

  const handleNavigation = () => {
    navigate('/send');
  };

  const selectedWallet = wallets.find(wallet => wallet.id === selectedWalletId);

  return (
    <AppRoot style={{ padding: '16px', textAlign: 'center' }}>
      <div>
        <Text weight="3">Total balance</Text>
        <LargeTitle weight="1">70 Sats</LargeTitle>
        <Headline weight="3">$0.03 USD</Headline>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
        <Modal
          header={<Modal.Header />}
          trigger={
            <Button
              before={<img src={selectedWallet?.icon} alt="Logo" style={{ width: 80 }} />}
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
          <List>
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
      <InlineButtons mode="bezeled" style={{ marginTop: '16px' }}>
        <InlineButtons.Item text="Add sats" onClick={shareLink}>
          <FaPlus size={24} />
        </InlineButtons.Item>
        <InlineButtons.Item text="Send" onClick={handleNavigation}>
          <FaArrowUp size={24} />
        </InlineButtons.Item>
        <InlineButtons.Item text="Scan" onClick={getUserInfo}>
          <MdOutlineQrCodeScanner size={24} />
        </InlineButtons.Item>
      </InlineButtons>
    </AppRoot>
  );
};

export default ProfileCard;