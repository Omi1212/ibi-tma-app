import { FC } from 'react';
import { TransactionSection } from '../components/TransactionSection/TransactionSection';
import { FormSection } from '../components/FormSection/FormSection';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import { Page } from '@/components/Page';
import TabBarComponent from '@/components/TabBar/TabBar';
import { List, Section } from '@telegram-apps/telegram-ui';

const Home: FC = () => {

  return (
    <Page back={true} showSettings={true}>
      <List>
      <Section>
      <HeaderSection/>
      <ProfileCard/>
      </Section>
      <TransactionSection numTransaction={2}/> 
      <FormSection/>
      </List>
      <TabBarComponent/>
    </Page>
  );
};

export default Home;