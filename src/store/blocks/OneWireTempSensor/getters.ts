import { allBlockFromService, blockById } from '../getters';

import { OneWireTempSensorBlock } from './OneWireTempSensor';

import { RootStore } from '../../state';

export function getById(store: RootStore, id: string): OneWireTempSensorBlock {
  const block = blockById(store, id);

  // force block type
  if (!block || block.type !== 'OneWireTempSensor') {
    throw new Error('Block is not a valid OneWireTempSensor');
  }

  return block;
}

export function getAll(store: RootStore, serviceId: string): OneWireTempSensorBlock[] {
  return allBlockFromService(store, serviceId)
    .filter(block => block.type === 'OneWireTempSensor') as OneWireTempSensorBlock[];
}
