import { FC } from 'react';
import { Cell, IconContainer, Section } from '@telegram-apps/telegram-ui';
import { popup, qrScanner, shareURL, readTextFromClipboard } from '@telegram-apps/sdk-react';
import { Page } from '@/components/Page';
import { FaUserFriends, FaShareAlt } from 'react-icons/fa';
import { MdOutlineQrCodeScanner } from "react-icons/md";

export const Send: FC = () => {
  const handleCellClick = async (id: number) => {
    if (id === 1) {
      qrScanner.open().then((content) => {
        popup.open({
          title: 'QR Code Result',
          message: content || 'No content available',
          buttons: [{ id: 'ok', type: 'default', text: 'OK' }],
        });
      });
    } else if (id === 2) {
      if (readTextFromClipboard.isAvailable()) {
        const contents = await readTextFromClipboard();
        popup.open({
          title: 'Clipboard Contents',
          message: contents || 'No content available',
          buttons: [{ id: 'ok', type: 'default', text: 'OK' }],
        });
      }
    } else if (id === 3) {
      if (shareURL.isAvailable()) {
        shareURL('https://t.me/heyqbnk', 'Check out this cool group!');
      }
    }
  };

  return (
    <Page back={true}>
      <Section header="Select a method to send sats">
        <Cell
          key={1}
          before={<IconContainer><MdOutlineQrCodeScanner /></IconContainer>}
          onClick={() => handleCellClick(1)}
          subtitle="Send sats by scanning QR code"
        >
          Scan a QR code
        </Cell>
        <Cell
          key={2}
          before={<IconContainer><FaUserFriends /></IconContainer>}
          onClick={() => handleCellClick(2)}
          subtitle="Send sats to your contacts"
        >
          Recipient or lightning address
        </Cell>
        <Cell
          key={3}
          before={<IconContainer><FaShareAlt /></IconContainer>}
          onClick={() => handleCellClick(3)}
          subtitle="Invite a friend to use the app"
        >
          Invite a friend
        </Cell>
      </Section>
    </Page>
  );
};