import { useEffect, useState } from 'react';
import { Avatar, Button, IconButton } from '@telegram-apps/telegram-ui';
import { MdOutlineQrCodeScanner } from "react-icons/md";

const getUserInfo = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    const user = window.Telegram.WebApp.initDataUnsafe?.user;
    if (user) {
      return user.username;
    } else {
      console.error('No se pudo obtener la información del usuario.');
      return null;
    }
  } else {
    console.error('Telegram WebApp no está disponible.');
    return null;
  }
};

export const HeaderSection = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const username = getUserInfo();
    if (username) {
      setUsername(username);
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Avatar size={40} src="https://lh3.googleusercontent.com/p/AF1QipMaKokS0ksrK0qD6ASEdgL9vFq-fyycNIEDNyGn=s680-w680-h510" alt="Foto de Perfil" />
        {username && <span>{username}</span>}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          before={<Avatar size={24} src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png" alt="Foto de Perfil" />}
          mode="bezeled"
          size="s"
        >
          $60.3k
        </Button>
        <IconButton mode="bezeled" size="s">
          <MdOutlineQrCodeScanner size={24} />
        </IconButton>
      </div>
    </div>
  );
};