import { Component, h, Prop, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'mini-toast',
  styleUrl: 'mini-toast.css',
  shadow: true,
})
export class MiniToast {
  @State() toasts: Array<{ message: string; type: string; id: number }> = [];
  private toastIdCounter: number = 0;

  // 组件的根元素
  @Element() el: HTMLElement;

  @Prop() message: string;

  @Prop() type: 'success' | 'error' | 'warning' | 'info' = 'info';

  @Prop() duration: number = 3000;

  @State() isVisible: boolean = false;

  // 定时器
  private timer: number;

  // // 生命周期：组件加载完成后执行
  componentDidLoad() {
    console.log('el', this.el);
  }

  @Method()
  async showToast(message: string, type: string = this.type) {
    const container = this.getContainer();
    if (!container) {
      console.error('Toast container not found');
      return;
    }

    const newToast = { message, type, id: this.toastIdCounter++ };
    this.toasts = [...this.toasts, newToast];

    // Set up auto-close for this toast
    // setTimeout(() => {
    //   this.removeToast(newToast.id);
    // }, this.duration);
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  private getContainer() {
    return this.el.shadowRoot.querySelector('.mini-toast');
  }

  render() {
    return (
      <div class="mini-toast">
        {this.toasts.map((toast, index) => (
          <div key={toast.id + index} class={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    );
  }
}
