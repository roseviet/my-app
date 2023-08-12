import { IS_SERVER } from '@/config/constants';
import { seedDb } from './seed-db';

const initializeMocks = () => {
  if (IS_SERVER) {
    import('./server').then(({ server }) => {
      server.listen();
    });
  } else {
    import('./browser').then(({ worker }) => {
      worker.start();
    });
  }
  seedDb();
};

initializeMocks();
