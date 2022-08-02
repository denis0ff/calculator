import { Loader } from './components';

const LOADER_SIZE = 100;

export default () => {
  return (
    <Loader
      height={LOADER_SIZE}
      width={LOADER_SIZE}
      wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    />
  );
};
