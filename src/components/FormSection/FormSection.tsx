import { Section, Cell } from '@telegram-apps/telegram-ui';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const FormSection = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/transactions');
  };

  return (
    <div style={{ borderRadius: '3%', overflow: 'hidden' }}>
      <Section>
        <Cell
          after={<MdOutlineKeyboardArrowRight size={32} />}
          onClick={handleNavigation}
        >
          Transaction history
        </Cell>
      </Section>
    </div>
  );
};