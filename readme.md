# Mini-Toast 组件设计文档

## 1. 概述

Mini-Toast 是一个轻量级的消息提示组件，用于在用户界面上显示简短的、非阻塞的通知信息。它可以用于显示成功消息、错误警告、一般信息等。

## 2. 功能点

### 2.1 基本功能

- 显示文本消息
- 支持多种消息类型（如成功、错误、警告、信息）
- 自动关闭功能
- 支持同时显示多个 toast

### 2.2 高级功能

- 可自定义显示位置（顶部、底部、左侧、右侧）
- 支持图标显示
- 可手动关闭 toast
- 支持 HTML 内容
- 动画效果（淡入淡出）

## 3. API 设计

### 3.1 属性（Props）

- `message`: string - 要显示的消息内容
- `type`: 'success' | 'error' | 'warning' | 'info' - toast 类型
- `duration`: number - 显示时间（毫秒）
- `position`: 'top' | 'bottom' | 'left' | 'right' - 显示位置
- `icon`: string - 图标（可选）
- `showClose`: boolean - 是否显示关闭按钮
- `closeable`: boolean - 是否可以手动关闭

### 3.2 方法（Methods）

- `showToast(message: string, type: string): void` - 显示一个新的 toast
- `closeToast(id: number): void` - 关闭指定的 toast
- `closeAllToasts(): void` - 关闭所有 toast

## 4. 实现细节

### 4.1 组件结构

- 使用 Stencil.js 创建 Web Component
- 使用 Shadow DOM 进行样式隔离
- 使用 CSS 动画实现淡入淡出效果

### 4.2 状态管理

- 使用内部状态数组管理多个 toast

### 4.3 自动关闭机制

- 使用 `setTimeout` 实现自动关闭功能

### 4.4 样式设计

- 为不同类型的 toast 设计不同的样式
- 确保组件在不同位置显示时的正确定位

## 5. 使用示例

## 6. 后续优化

- 支持自定义主题
- 添加可访问性支持（ARIA 属性）
- 支持 Toast 队列管理
- 添加单元测试和集成测试

## 7. 实现任务列表

- [x] 基础结构搭建

  - [x] 创建 Stencil.js 组件
  - [x] 设置 Shadow DOM
  - [x] 创建基本的 CSS 样式文件

- [ ] 核心功能实现

  - [x] 实现 `showToast` 方法
  - [ ] 添加多种消息类型支持
  - [ ] 实现自动关闭功能
  - [ ] 支持同时显示多个 toast

- [ ] 高级功能实现

  - [ ] 添加自定义显示位置选项
  - [ ] 实现图标显示功能
  - [ ] 添加手动关闭 toast 功能
  - [ ] 支持 HTML 内容
  - [ ] 实现淡入淡出动画效果

- [ ] API 完善

  - [ ] 实现 `closeToast` 方法
  - [ ] 实现 `closeAllToasts` 方法
  - [ ] 添加所有计划的属性（Props）支持

- [ ] 测试和文档

  - [ ] 编写单元测试
  - [ ] 编写集成测试
  - [ ] 创建使用文档和示例

- [ ] 优化和扩展
  - [ ] 实现自定义主题支持
  - [ ] 添加 ARIA 属性以提高可访问性
  - [ ] 实现 Toast 队列管理
  - [ ] 性能优化和代码重构
