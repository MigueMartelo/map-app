import LogoReact from '../logo.svg';
export const ReactLogo = () => {
  return (
    <img
      src={LogoReact}
      alt='React Logo'
      style={{
        bottom: '20px',
        position: 'fixed',
        right: '20px',
        width: '130px',
      }}
    />
  );
};
