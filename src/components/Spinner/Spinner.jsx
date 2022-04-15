import  { Oval, ThreeDots}  from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return <Oval type="Oval" color="#0ab38e" height={20} width={20} />;
};

export const LoaderSpinnerDots = () => {
  return <ThreeDots type="ThreeDots" color="#0ab38e" height={10} width={20} />;
};