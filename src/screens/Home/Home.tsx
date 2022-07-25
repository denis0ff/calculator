import { FC } from 'react';

interface HomeProps {
  props?: string;
}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <div>Home FC</div>
    </div>
  );
};

export default Home;
