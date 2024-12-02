import { Tabbar } from '@telegram-apps/telegram-ui';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { useState } from 'react';

const tabs = [
  { id: 'profile', text: 'Profile', Icon: FaUser },
  { id: 'home', text: 'Home', Icon: FaHome },
  { id: 'settings', text: 'Settings', Icon: FaCog },
];

const TabBarComponent = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <Tabbar>
      {tabs.map(({ id, text, Icon }) => (
        <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
          <Icon size={20} />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};

export default TabBarComponent;