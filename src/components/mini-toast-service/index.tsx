import { Component, h, State, Method } from '@stencil/core';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  id: number;
}

@Component({
  tag: 'mini-toast-service',
  styleUrl: 'index.css',
  shadow: true,
})
export class MiniToastService {
  @State() toasts: Toast[] = [];

  private idCounter = 0;

  @Method()
  async show(toast: Toast) {
    this.toasts.push({ ...toast, id: this.idCounter++ });
  }

  render() {
    return (
      <div class="mini-toast-service">
        <slot></slot>
      </div>
    );
  }
}
