import { addBlock } from '../mutations';
import { SetPointSimple } from './SetPointSimple';
import { saveBlock } from '../actions';

import { RootStore } from '../../state';
import { BlocksContext } from '../state';

export const addSetPoint = (
  context: BlocksContext,
  { id, serviceId, settings }: SetPointSimple,
) => {
  addBlock(
    context,
    {
      id,
      serviceId,
      settings,
      type: 'SetPointSimple',
    },
  );
};

export const persist = async (store: RootStore, setPointSimple: SetPointSimple) => {
  try {
    await saveBlock(store, setPointSimple);
  } catch (e) {
    throw new Error(e);
  }
};