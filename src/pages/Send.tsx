import { ReactNode, FC } from 'react';
import { Cell, IconContainer, Section, AppRoot, Text, LargeTitle, Headline } from '@telegram-apps/telegram-ui';
import { popup, qrScanner } from '@telegram-apps/sdk-react';

type CellProps = {
  id: number;
  icon: ReactNode;
  text: string;
};

const cells: CellProps[] = [
  {
    id: 1,
    icon: null,
    text: 'Chat Settings',
  },
  {
    id: 2,
    icon: null,
    text: 'Data and Storage',
  },
  {
    id: 3,
    icon: null,
    text: 'Devices',
  },
];

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
      /* miniApp.requestContact().then(contact => {
        const contactInfo = `
          First Name: ${contact.contact.firstName}
          Phone Number: ${contact.contact.phoneNumber}
        `;
        popup.open({
          title: 'Contact Information',
          message: contactInfo,
          buttons: [{ id: 'ok', type: 'default', text: 'OK' }],
        });
      }); */
    } else if (id === 3) {
      /* utils.shareURL('https://t.me/mybot/myapp', 'Look! Some cool app here!'); */
    }
  };

  return (
    <AppRoot style={{ textAlign: 'center' }}>
      <Text weight="3">Total balance</Text>
      <LargeTitle weight="1">70 Sats</LargeTitle>
      <Headline weight="3">$0.03 USD</Headline>
      <Section header="This is section header" footer="And this is footer">
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            before={<IconContainer>{cell.icon}</IconContainer>}
            onClick={() => handleCellClick(cell.id)}
          >
            {cell.text}
          </Cell>
        ))}
      </Section>
    </AppRoot>
  );
};