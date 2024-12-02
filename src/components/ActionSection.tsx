import { AppRoot, InlineButtons } from '@telegram-apps/telegram-ui';
import { FaPlus, FaArrowUp } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';


const ActionSection = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/send');
  };

  const shareLink = () => {
    const link = "https://example.com";
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(link);
    } else {
      console.error('Telegram WebApp no está disponible.');
    }
  };

  const getUserInfo = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      if (user) {
        console.log('User Info:', user);
        window.Telegram.WebApp.showAlert(`Usuario: ${user.username}`);
      } else {
        console.error('No se pudo obtener la información del usuario.');
      }
    } else {
      console.error('Telegram WebApp no está disponible.');
    }
  };

  return (
    <AppRoot style={{ padding: '16px', textAlign: 'center' }}>
      <InlineButtons mode="bezeled">
        <InlineButtons.Item text="Add sats" onClick={shareLink}>
          <FaPlus size={24}/>
        </InlineButtons.Item>
        <InlineButtons.Item text="Send" onClick={handleNavigation}>
          <FaArrowUp size={24} />
        </InlineButtons.Item>
        <InlineButtons.Item text="Settings" onClick={getUserInfo}>
          <FaGear size={24} />
        </InlineButtons.Item>
      </InlineButtons>
    </AppRoot>
  );
};

export default ActionSection;