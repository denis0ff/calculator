import { theme } from '@theme/index';

import { Loader } from './components';

const LOADER_SIZE = 100;

export default () => {
  return <Loader color={theme.colors.secondary} height={LOADER_SIZE} width={LOADER_SIZE} />;
};