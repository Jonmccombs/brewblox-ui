import { bloxQty } from '@/helpers/bloxfield';
import { genericBlockFeature } from '@/plugins/spark/generic';
import { blockWidgetSelector, enumHint, serviceTemp } from '@/plugins/spark/helpers';
import { BlockSpec, BlockType, SensorCombiFunc, TempSensorCombiBlock } from '@/plugins/spark/types';
import { WidgetFeature } from '@/store/features';

import widget from './TempSensorCombiWidget.vue';

const typeName = BlockType.TempSensorCombi;

const block: BlockSpec<TempSensorCombiBlock> = {
  id: typeName,
  generate: serviceId => ({
    sensors: [],
    combineFunc: SensorCombiFunc.SENSOR_COMBI_FUNC_AVG,
    value: bloxQty(20, 'degC').to(serviceTemp(serviceId)),
  }),
  fields: [
    {
      key: 'combineFunc',
      title: 'Sensor combination function',
      component: 'EnumValEdit',
      componentProps: { options: SensorCombiFunc },
      generate: () => SensorCombiFunc.SENSOR_COMBI_FUNC_AVG,
      valueHint: enumHint(SensorCombiFunc),
    },
    {
      key: 'value',
      title: 'Sensor value',
      component: 'QuantityValEdit',
      generate: serviceId => bloxQty(20, 'degC').to(serviceTemp(serviceId)),
      readonly: true,
      graphed: true,
    },
  ],
};

const feature: WidgetFeature = {
  ...genericBlockFeature,
  id: typeName,
  title: 'Temp Sensor (Combined)',
  role: 'Process',
  component: blockWidgetSelector(widget, typeName),
  widgetSize: {
    cols: 4,
    rows: 3,
  },
};

export default { feature, block };
