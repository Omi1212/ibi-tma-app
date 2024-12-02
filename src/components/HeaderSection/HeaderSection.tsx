import { Avatar, Button, Section, Text } from '@telegram-apps/telegram-ui';
import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';

export const HeaderSection = () => {
  const initDataState = useSignal(initData.state);

  if (!initDataState || !initDataState.user) {
    return null;
  }

  const { photoUrl, username } = initDataState.user;

  return (
    <Section>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size={40} src={photoUrl} alt="Foto de Perfil" />
            <span></span>
            <Text weight="3">{`Welcome ${username}!`}</Text>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              before={<Avatar size={24} src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png" alt="Foto de Perfil" />}
              mode="bezeled"
              size="s"
            >
              $60.3k
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};