<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';

import { createDialog } from '@/helpers/dialog';


@Component
export default class QuickStartNameField extends Vue {

  @Prop({ type: String, required: true })
  public readonly value!: string;

  @Prop({ type: Boolean, default: false })
  public readonly optional!: boolean;

  @Emit('clear')
  clear(): void { }

  get local(): string {
    return this.value;
  }

  set local(value: string) {
    this.$emit('input', value);
  }

  showKeyboard(): void {
    createDialog({
      component: 'KeyboardDialog',
      value: this.local,
    })
      .onOk(v => this.local = v);
  }
}
</script>

<template>
  <q-item dense>
    <q-input v-model="local" v-bind="$attrs" :error="!optional && !local" dense>
      <template #append>
        <q-btn
          icon="mdi-backup-restore"
          flat
          round
          size="sm"
          color="white"
          @click="clear"
        >
          <q-tooltip>Reset to default</q-tooltip>
        </q-btn>
        <KeyboardButton @click="showKeyboard" />
        <q-icon v-if="!!$scopedSlots.help" name="mdi-information" size="20px">
          <q-tooltip>
            <slot name="help" />
          </q-tooltip>
        </q-icon>
      </template>
    </q-input>
  </q-item>
</template>
