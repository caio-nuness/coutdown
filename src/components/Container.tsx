import imageTop from '../assets/images/top-image.svg';
import imageBottom from '../assets/images/bottom-image.svg';

interface ContainerProps {
  children?: React.ReactNode,
}

export const Container = ({ children }:ContainerProps) => {
  return (

    <div id='container'>
      <img src={imageTop}/>
      { children }
      <img src={imageBottom}/>
    </div>
  );
};
