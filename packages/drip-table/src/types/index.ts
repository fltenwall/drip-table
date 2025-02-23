/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

import React from 'react';

import { type DripTableBuiltInColumnSchema, type DripTableComponentSchema } from '../drip-table/components';
import { type DripTableHeaderElement } from '../drip-table/header';

export type DripTableColumnSchema<T, C extends DripTableComponentSchema> = {
  /**
   * 若自定义开发的业务组件以`命名空间::组件名称`格式填写；通过 components 属性传入组件库实现
   * 系统支持的通用组件目前有：文本组件、图文组件和自定义组件（通过代码实现的）
   */
  'ui:type': T;
  'ui:props'?: {
    [key: string]: unknown;
  };
} & C;

export type DripTableID = string | number | undefined;

export interface DripTableSchema<
  CustomComponentSchema extends DripTableComponentSchema = never,
  SubtableDataSourceKey extends React.Key = never,
> {
  '$schema': 'http://json-schema.org/draft/2019-09/schema#'
  | 'http://json-schema.org/draft-07/schema#'
  | 'http://json-schema.org/draft-06/schema#'
  | 'http://json-schema.org/draft-04/schema#';
  /**
   * 表格标识符，当存在子表嵌套渲染、回调时可用于区分不同层级表格
   */
  id?: DripTableID;
  /**
   * 是否展示表格边框
   */
  bordered?: boolean;
  /**
   * 是否显示表头
   */
  showHeader?: boolean;
  /**
   * 是否展示头部以及配置
   */
  header?: {
    /**
     * 头部自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 头部展示元素配置
     */
    elements?: DripTableHeaderElement[];
  } | boolean;
  /**
   * 是否展示分页以及配置
   */
  pagination?: false | {
    size?: 'small' | 'default';
    pageSize: number;
    position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    showLessItems?: boolean;
    showQuickJumper?: boolean;
    showSizeChanger?: boolean;
    hideOnSinglePage?: boolean;
  };
  size?: 'small' | 'middle' | 'large';
  /**
   * 粘性头部
   */
  sticky?: boolean;
  /**
   * 固定列、固定表头滚动设置
   */
  scroll?: {
    x?: number | true | string;
    y?: number | string;
    scrollToFirstRowOnChange?: boolean;
  };
  /**
   * 是否支持选择栏
   */
  rowSelection?: boolean;
  /**
   * 是否平均列宽
   */
  ellipsis?: boolean;
  /**
   * 无数据提示
   */
  placeholder?: {
    image: string;
    text: string;
  };
  /**
   * 是否开启虚拟滚动
   */
  virtual?: boolean;
  /**
   * 虚拟列表滚动高度
   * @deprecated 请使用 scroll.y
   */
  scrollY?: number;
  /**
   * 列定义
   */
  columns: (CustomComponentSchema | DripTableBuiltInColumnSchema)[];
  /**
   * 表格行主键
   */
  rowKey?: string;
  /**
   * 子表设置项
   */
  subtable?: {
    /**
     * 父表获取子表数据源键名
     */
    dataSourceKey: SubtableDataSourceKey;
  } & Omit<DripTableSchema<CustomComponentSchema, SubtableDataSourceKey>, '$schema'>;
}

export type DripTableRecordTypeBase = Record<string, unknown>;

export type DripTableRecordTypeWithSubtable<
  RecordType extends DripTableRecordTypeBase,
  SubtableDataSourceKey extends React.Key
> = RecordType & { [key in SubtableDataSourceKey]?: RecordType[]; }

export interface DripTableExtraOptions {
  CustomComponentSchema: DripTableComponentSchema;
  CustomComponentEvent: EventLike;
  CustomComponentExtraData: unknown;
  SubtableDataSourceKey: React.Key;
}

export interface DripTablePagination {
  onChange?: (page: number, pageSize?: number) => void;
  size?: 'small' | 'default';
  pageSize?: number;
  total?: number;
  current?: number;
  position?: ('topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight')[];
  showLessItems?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  hideOnSinglePage?: boolean;
}

export type DripTableFilters = Record<string, (React.Key | boolean)[] | null>;

export type { DripTableDriver, DripTableReactComponent, DripTableReactComponentProps } from './driver';

export type EventLike<T = { type: string }> = T extends { type: string } ? T : never;
export interface DripTableCustomEvent<TN> extends EventLike<{ type: 'custom' }> { name: TN }
