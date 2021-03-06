import { autoRegister } from '@/helpers/component-ref';
import { featureStore } from '@/store/features';

import BrewKettle from './BrewKettle';
import Ferment from './Ferment';
import Fridge from './Fridge';
import Glycol from './Glycol';
import Herms from './Herms';
import Rims from './Rims';

export default {
  install() {
    autoRegister(require.context('./components', true));

    [
      Ferment,
      Glycol,
      Herms,
      Rims,
      BrewKettle,
      Fridge,
    ]
      .forEach(featureStore.registerQuickStart);
  },
};
