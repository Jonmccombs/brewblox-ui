import { sparkStore } from '@/plugins/spark/store';
import { BlockType } from '@/plugins/spark/types';

import { LEFT, RIGHT, UP } from '../getters';
import { settingsBlock } from '../helpers';
import { PartSpec, PartUpdater, PersistentPart, Transitions } from '../types';

const spec: PartSpec = {
  id: 'LValve',
  title: 'Valve: L',
  size: () => [1, 1],
  cards: [{
    component: 'BlockAddressCard',
    props: {
      settingsKey: 'valve',
      compatible: [BlockType.MotorValve, BlockType.DigitalActuator],
      label: 'Valve or Actuator',
    },
  }],
  transitions: (part: PersistentPart): Transitions => {
    const block = settingsBlock(part, 'valve');
    const closed = block !== null
      ? Boolean(block.data.state === 'Active')
      : Boolean(part.settings.closed);
    return closed
      ? {
        [UP]: [{ outCoords: LEFT }],
        [LEFT]: [{ outCoords: UP }],
      }
      : {
        [UP]: [{ outCoords: RIGHT }],
        [RIGHT]: [{ outCoords: UP }],
      };
  },
  interactHandler: (part: PersistentPart, updater: PartUpdater) => {
    const block = settingsBlock(part, 'valve');
    if (block) {
      block.data.desiredState = block.data.state === 'Active'
        ? 'Inactive'
        : 'Active';
      sparkStore.saveBlock(block);
    }
    else {
      part.settings.closed = !part.settings.closed;
      updater.updatePart(part);
    }
  },
};

export default spec;
