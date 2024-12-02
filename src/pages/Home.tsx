import { AppRoot, List } from '@telegram-apps/telegram-ui';
import { CellSection } from '../components/CellSection';
import { FormSection } from '../components/FormSection/FormSection';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import ActionSection from '../components/ActionSection';
import { ChangeWallet } from '../components/MyTelegramApp';
import { backButton, settingsButton } from '@telegram-apps/sdk-react';

const Home = () => {
  backButton.hide();
  settingsButton.show();


  return (
    <AppRoot>
      <List 
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: '16px',
        }}
      >
        <HeaderSection />
        <ProfileCard />
        <ChangeWallet />
        <ActionSection />
        <CellSection />
        <FormSection />
      </List>
    </AppRoot>
  );
};

export default Home;