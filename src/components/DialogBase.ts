import Vue from 'vue';
import { Component, Prop, Ref, Watch } from 'vue-property-decorator';

import { WidgetContext } from '@/store/features';

@Component
export default class DialogBase extends Vue {
  public readonly _uid!: number;

  public dialogProps = {
    noRouteDismiss: true,
    noBackdropDismiss: true,
  };

  @Ref()
  public readonly dialog!: any;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly message!: string;

  @Prop({ type: Boolean, default: false })
  public readonly html!: boolean;

  @Watch('$route')
  public async onRouteChange(): Promise<void> {
    await this.$nextTick();
    if (!this.isDialogInQuery()) {
      this.dialog.hide();
    }
  }

  private isDialogInQuery(): boolean {
    return this.$route.query?.dialog?.includes(`.${this._uid}.`);
  }

  public created(): void {
    const query = this.$route.query ?? {};
    const dialog = `${query.dialog ?? ''}.${this._uid}.`;
    this.$router.push({ query: { ...query, dialog } }).catch(() => { });
  }

  public beforeDestroy(): void {
    if (this.isDialogInQuery()) {
      this.$router.back();
    }
  }

  public get context(): WidgetContext {
    return {
      container: 'Dialog',
      size: 'Fixed',
      mode: 'Basic',
    };
  }

  // following method is REQUIRED
  // (don't change its name --> "show")
  public show(): void {
    this.dialog.show();
  }

  // following method is REQUIRED
  // (don't change its name --> "hide")
  public hide(): void {
    this.dialog.hide();
  }

  public onDialogHide(): void {
    // required to be emitted
    // when QDialog emits "hide" event
    this.$emit('hide');
  }

  public onDialogOk(...arg: any[]): void {
    // on OK, it is REQUIRED to
    // emit "ok" event (with optional payload)
    // before hiding the QDialog
    this.$emit('ok', ...arg);

    // then hiding dialog
    this.hide();
  }

  public onDialogCancel(): void {
    // we just need to hide dialog
    this.hide();
  }
}
