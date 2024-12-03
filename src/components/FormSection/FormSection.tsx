import { Section, Cell } from '@telegram-apps/telegram-ui';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from '../Link/Link';

export const FormSection = () => {

  return (

      <Section>
        <Link to="/transaction">
        <Cell
          after={<MdOutlineKeyboardArrowRight size={32} />}
        >
          Transaction history
        </Cell></Link>
      </Section>


  );
};