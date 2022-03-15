import type { NextPage } from 'next';
import { MainLayout } from '@/components/layouts/main';
import { CardViewer } from '@/components/card-viewer';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CardViewer />
    </MainLayout>
  );
};

export default Home;
