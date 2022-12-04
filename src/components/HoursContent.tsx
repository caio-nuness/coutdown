import { Clock } from './Clock';
import { DescriptionContent } from './DescriptionContent';

export const HoursContent = () => {
  return(

    <div className="main">
      <h2>READY TO LAUNCH IN...</h2>
      <Clock/>
      <DescriptionContent/>
    </div>
  );
};
