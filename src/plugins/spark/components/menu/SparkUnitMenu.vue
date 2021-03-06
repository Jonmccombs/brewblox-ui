<script lang="ts">
import { Enum } from 'typescript-string-enums';
import { Component, Prop } from 'vue-property-decorator';

import DialogBase from '@/components/DialogBase';
import { typeMatchFilter } from '@/helpers/functional';
import { displayTempLabels } from '@/plugins/spark/getters';
import { SparkServiceModule, sparkStore } from '@/plugins/spark/store';
import { BlockType, DisplaySettingsBlock, DisplayTempUnit } from '@/plugins/spark/types';
import { UserUnits } from '@/plugins/spark/types';

const defaultMessage =
  `When changing the UI temperature unit, you will need to update existing graphs.
  The old name will disappear after 24h.`;

@Component
export default class SparkUnitMenu extends DialogBase {
  serviceOpts: SelectOption<UserUnits['Temp']>[] = [
    { label: 'Celsius', value: 'degC' },
    { label: 'Fahrenheit', value: 'degF' },
  ]
  displayOpts: SelectOption<DisplayTempUnit>[] =
    Enum.values(DisplayTempUnit)
      .map(value => ({ value, label: displayTempLabels[value] }))

  @Prop({ type: String, required: true })
  readonly serviceId!: string;

  @Prop({ type: String, default: 'Spark units' })
  public readonly title!: string;

  @Prop({ type: String, default: defaultMessage })
  public readonly message!: string;

  public get sparkModule(): SparkServiceModule {
    return sparkStore.moduleById(this.serviceId)!;
  }

  get units(): UserUnits {
    return this.sparkModule.units;
  }

  get displayBlock(): DisplaySettingsBlock | null {
    return this.sparkModule
      .blocks
      .find(typeMatchFilter<DisplaySettingsBlock>(BlockType.DisplaySettings))
      ?? null;
  }

  get displayTemp(): DisplayTempUnit {
    return this.displayBlock?.data.tempUnit ?? DisplayTempUnit.TEMP_CELSIUS;
  }

  set displayTemp(v: DisplayTempUnit) {
    if (this.displayBlock) {
      this.displayBlock.data.tempUnit = v;
      this.sparkModule.saveBlock(this.displayBlock);
    }
  }

  get serviceTemp(): UserUnits['Temp'] {
    return this.units.Temp;
  }

  set serviceTemp(v: UserUnits['Temp']) {
    this.units.Temp = v;
    this.sparkModule.saveUnits(this.units);
  }

}
</script>

<template>
  <q-dialog
    ref="dialog"
    v-bind="dialogProps"
    @hide="onDialogHide"
    @keyup.enter="onDialogOk"
  >
    <DialogCard v-bind="{title, message, html}">
      <q-select
        v-model="serviceTemp"
        :options="serviceOpts"
        label="UI temperature unit"
        map-options
        emit-value
        @keyup.enter.exact.stop
      />
      <q-select
        v-model="displayTemp"
        :options="displayOpts"
        label="Spark Display temperature unit"
        map-options
        emit-value
        @keyup.enter.exact.stop
      />
      <template #actions>
        <q-btn
          flat
          label="Cancel"
          color="primary"
          @click="onDialogCancel"
        />
        <q-btn
          flat
          label="OK"
          color="primary"
          @click="onDialogOk"
        />
      </template>
    </DialogCard>
  </q-dialog>
</template>
