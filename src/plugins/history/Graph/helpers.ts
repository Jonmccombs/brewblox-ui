import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';
import uniq from 'lodash/uniq';

import { createDialog } from '@/helpers/dialog';
import { GraphConfig, QueryTarget } from '@/plugins/history/types';
import { BlockAddress } from '@/plugins/spark/types';
import { dashboardStore, Widget } from '@/store/dashboards';

export function mergeTargets(a: QueryTarget[], b: QueryTarget[]): QueryTarget[] {
  return uniq([...a, ...b].map(v => v.measurement))
    .map(m => {
      const fields = [...a, ...b]
        .filter(target => target.measurement === m)
        .flatMap(target => target.fields);
      return {
        measurement: m,
        fields: uniq(fields),
      };
    });
}

export function addBlockGraph(
  widgetId: string,
  blockAddress: BlockAddress | null
): void {
  createDialog({
    component: 'SelectBlockGraphDialog',
    address: blockAddress,
  })
    .onOk((cfg: GraphConfig) => {
      const widget: Widget<GraphConfig> | null = dashboardStore.widgetById(widgetId);
      if (!widget) {
        return;
      }
      const merged = mergeWith(widget.config, cfg, (a, b) => {
        return (isArray(b) && b.length && 'measurement' in b[0])
          ? mergeTargets(a, b)
          : undefined;
      });
      dashboardStore.saveWidget({ ...widget, config: merged });
    });
}
