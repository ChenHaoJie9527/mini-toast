import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'mini-toast',
  styleUrl: 'mini-toast.css',
  shadow: true,
})
export class MiniToast {
  // 组件的根元素
  @Element() el: HTMLElement;

  @Prop() message: string;

  @Prop() type: 'success' | 'error' | 'warning' | 'info' = 'info';

  @Prop() duration: number = 3000;

  @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @Prop() icon: string = '';

  @Prop() showClose: boolean = false;

  @Prop() closeable: boolean = false;

  @State() isVisible: boolean = false;

  // 定时器
  private timer: number;

  // 生命周期：组件加载完成后执行
  componentDidLoad() {
    this.setupAutoClose();
  }

  // 设置定时器，自动关闭
  private setupAutoClose() {
    this.timer = window.setTimeout(() => {
      this.isVisible = false;
      window.setTimeout(() => this.el.remove(), 300);
    }, this.duration);
  }

  // 生命周期：组件卸载前执行
  disconnectedCallback() {
    window.clearTimeout(this.timer);
  }

  render() {
    return (
      <div class={`mini-toast ${this.type}`}>
        <div class="mini-toast-content">
          {this.message}
        </div>
      </div>
    );
  }
}
