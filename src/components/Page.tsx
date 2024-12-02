import { useNavigate } from 'react-router-dom';
import { backButton, settingsButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect } from 'react';

export function Page({ children, back = true, showSettings = false }: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   */
  back?: boolean,
  /**
   * True if the settings button should be shown.
   */
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