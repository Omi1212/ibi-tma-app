import { useNavigate } from 'react-router-dom';
import { backButton, settingsButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect } from 'react';

export function Page({ children, back = true, showSettings = false }: PropsWithChildren<{
  back?: boolean,
  showSettings?: boolean
}>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back, navigate]);

  useEffect(() => {
    if (showSettings) {
      settingsButton.show();
    } else {
      settingsButton.hide();
    }
  }, [showSettings]);

  return <>{children}</>;
}