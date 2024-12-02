import { AppRoot, LargeTitle, Text, Headline } from '@telegram-apps/telegram-ui';

const ProfileCard = () => (
  <AppRoot style={{ padding: '16px', textAlign: 'center' }}>
  <Text weight="3">
  Total balance
  </Text>
  <LargeTitle
    weight="1"
  >
    70 Sats
  </LargeTitle>
  <Headline
    weight="3"
  >
    $0.03 USD
  </Headline>
  </AppRoot>
);

export default ProfileCard;