import { DripTableComponentAttrConfig } from '../typing';
import { basicColumnAttrComponents } from './configs';

export default {
  $id: '$display_text',
  'ui:type': 'text',
  type: 'string',
  group: '基础组件',
  fieldKey: 'text_qywxDIIO',
  title: '文本组件',
  paramName: '',
  default: '',
  attrSchema: [
    ...basicColumnAttrComponents,
    {
      name: 'dataIndexMode',
      group: '组件属性',
      required: true,
      'ui:title': '字段读取模式',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '直接读取', value: 'direct' },
          { label: '嵌套路径', value: 'nested' },
        ],
      },
      type: 'string',
      default: 'direct',
      visible: (_1: string, formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'dataIndex',
      group: '组件属性',
      required: true,
      'ui:title': '字段选择',
      'ui:type': 'auto-complete',
      'ui:props': {
        optionsParam: '$$FIELD_KEY_OPTIONS$$',
      },
      type: 'string',
      visible: (_1: string, formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single' && formData.dataIndexMode !== 'nested',
    },
    {
      name: 'dataIndex',
      group: '组件属性',
      required: true,
      'ui:title': '字段选择',
      'ui:type': 'select',
      'ui:props': {
        optionsParam: '$$FIELD_KEY_OPTIONS$$',
        mode: 'tags',
        tokenSeparators: ['.', ',', '，'],
      },
      type: 'array',
      visible: (_1: string, formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single' && formData.dataIndexMode === 'nested',
    },
    {
      name: 'fontSize',
      group: '样式配置',
      'ui:title': '字体大小',
      'ui:type': 'number',
      'ui:description': {
        trigger: 'hover',
        type: 'icon',
        title: '控制表格该列默认字体大小，默认单位为“px”，支持手动指定单位后缀。',
      },
      default: 13,
      'ui:props': {
        min: 13,
      },
    },
    {
      name: 'ui:props.maxRow',
      group: '样式配置',
      'ui:title': '最大行数',
      'ui:type': 'number',
      'ui:description': {
        trigger: 'hover',
        type: 'icon',
        title: '文字展示的最大行数，超过该行数则展示...',
      },
      'ui:props': {
        min: 0,
      },
    },
    {
      name: 'ui:props.linHeight',
      group: '样式配置',
      'ui:title': '行高',
      'ui:type': 'number',
      'ui:props': {
        min: 1,
      },
    },
    {
      name: 'ui:props.mode',
      group: '组件属性',
      'ui:title': '模式',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '单行文本', value: 'single' },
          { label: '多行文本', value: 'multiple' },
          { label: '自定义文本', value: 'custom' },
        ],
      },
      type: 'string',
      default: 'single',
    },
    {
      name: 'ui:props.prefix',
      group: '组件属性',
      'ui:title': '前缀文案',
      'ui:type': 'input',
      default: '',
      visible: (_1: string, formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.suffix',
      group: '组件属性',
      'ui:title': '后缀文案',
      'ui:type': 'input',
      default: '',
      visible: (_1: string, formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.parts',
      group: '组件属性',
      'ui:title': '字段配置',
      'ui:type': 'array-list',
      'ui:props': {
        items: [
          {
            name: 'prefix',
            'ui:title': '前缀文案',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'dataIndexMode',
            required: true,
            'ui:title': '字段读取模式',
            'ui:type': 'radio',
            'ui:props': {
              options: [
                { label: '直接读取', value: 'direct' },
                { label: '嵌套路径', value: 'nested' },
              ],
            },
            type: 'string',
            default: 'direct',
          },
          {
            name: 'dataIndex',
            'ui:title': '字段选择',
            'ui:type': 'select',
            'ui:mode': 'tags',
            'ui:props': {
              optionsParam: '$$FIELD_KEY_OPTIONS$$',
            },
            type: 'array',
            visible: (_1: string, formData: Record<string, unknown>) => formData.dataIndexMode === 'nested',
          },
          {
            name: 'dataIndex',
            'ui:title': '字段选择',
            'ui:type': 'auto-complete',
            'ui:props': {
              optionsParam: '$$FIELD_KEY_OPTIONS$$',
            },
            type: 'string',
            visible: (_1: string, formData: Record<string, unknown>) => formData.dataIndexMode !== 'nested',
          },
          {
            name: 'suffix',
            'ui:title': '后缀文案',
            'ui:type': 'input',
            default: '',
            type: 'string',
          },
        ],
      },
      default: [] as unknown[],
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'multiple',
    },
    {
      name: 'defaultValue',
      group: '组件属性',
      'ui:title': '兜底文案',
      'ui:type': 'input',
      'ui:description': {
        trigger: 'hover',
        type: 'icon',
        title: '当数据不下发时展示的兜底文案',
      },
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single' || formData['ui:mode'] === 'multiple',
    },
    {
      name: 'ui:props.format',
      group: '组件属性',
      'ui:title': '模板',
      'ui:type': 'text',
      'ui:props': {
        minRows: 5,
      },
      default: '{{rec}}',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'custom',
    },
  ],
  icon: '<svg t="1627299991032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1990" width="48" height="48"><path d="M640.136533 896a42.666667 42.666667 0 0 1-39.253333-25.6L341.469867 277.333333 82.056533 870.4a42.666667 42.666667 0 1 1-78.506666-34.133333l298.666666-682.666667a42.666667 42.666667 0 0 1 78.506667 0l298.666667 682.666667a42.666667 42.666667 0 0 1-22.186667 56.32 48.64 48.64 0 0 1-17.066667 3.413333z" p-id="1991"></path><path d="M469.469867 554.666667H213.469867a42.666667 42.666667 0 0 1 0-85.333334h256a42.666667 42.666667 0 0 1 0 85.333334zM981.469867 896a42.666667 42.666667 0 0 1-42.666667-42.666667v-256a42.666667 42.666667 0 0 0-42.666667-42.666666h-128a42.666667 42.666667 0 0 1 0-85.333334h128a128 128 0 0 1 128 128v256a42.666667 42.666667 0 0 1-42.666666 42.666667z" p-id="1992"></path><path d="M896.136533 896h-42.666666a128 128 0 0 1 0-256h128a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a128 128 0 0 1-128 128z m-42.666666-170.666667a42.666667 42.666667 0 0 0 0 85.333334h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666667z" p-id="1993"></path></svg>',
} as DripTableComponentAttrConfig;
