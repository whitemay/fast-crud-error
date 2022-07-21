// 这是一个加载FastCrud相关组件的启动配置
import type { App } from 'vue';
// FastCrud需要用到的NaiveUI组件，无法通过unplugin加载，需要这里手工加载。
import {
  create,
  NButton,
  NButtonGroup,
  NCard,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NCol,
  NCollapse,
  NCollapseItem,
  NDataTable,
  NDatePicker,
  NDivider,
  NDrawer,
  NDropdown,
  NForm,
  NFormItem,
  NImage,
  NImageGroup,
  NInput,
  NInputNumber,
  NMenu,
  NModal,
  NPagination,
  NPopover,
  NProgress,
  NRadio,
  NRadioGroup,
  NRow,
  NSelect,
  NSpin,
  NTabs,
  NTabPane,
  NTag,
  NTimePicker,
  NTooltip,
  NTreeSelect,
  NUpload,
  // NBreadcrumb,
  // NBreadcrumbItem,
  // NConfigProvider,
  // NDescriptions,
  // NDescriptionsItem,
  // NDialogProvider,
  // NMessageProvider,
  // NLayout,
  // NLayoutHeader,
  // NLayoutContent,
  // NLayoutFooter,
  // NThing,
  // NResult,
  // NSteps,
  // NStep,
  // NLoadingBarProvider,
  // NBackTop,
  // NSkeleton,
  // NNotificationProvider,
  // NLayoutSider,
  // NElement,
  // NGrid,
  // NGridItem,
  // NList,
  // NListItem,
  // NSpace,
  NAlert,
  NAvatar,
  NBadge,
  NDrawerContent,
  NIcon,
  NInputGroup,
  NSwitch,
  NTable,
  NTree,
  NRadioButton
} from 'naive-ui';
import { FastCrud } from '@fast-crud/fast-crud'; // 引入fast-crud
// <reference path="crud.d.ts"/>
import UiNaive from '@fast-crud/ui-naive'; // 引入NaiveUI支持
// import { request } from '@/service/request'; // 引入request
import '@fast-crud/fast-crud/dist/style.css'; // 相关的CSS文件

const naive = create({
  components: [
    /* NMessageProvider,
    NDialogProvider,
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NBreadcrumb,
    NBreadcrumbItem,
    NNotificationProvider,
    NThing,
    NSteps,
    NStep,
    NResult,
    NDescriptions,
    NDescriptionsItem,
    NLoadingBarProvider,
    NBackTop,
    NGrid,
    NGridItem,
    NList,
    NListItem,
    NElement,
    NSpace,
    NSkeleton, */
    NInput,
    NButton,
    NButtonGroup,
    NForm,
    NFormItem,
    NCheckboxGroup,
    NCheckbox,
    NIcon,
    NMenu,
    NDropdown,
    NTooltip,
    NAvatar,
    NTabs,
    NTabPane,
    NCard,
    NRow,
    NCol,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NBadge,
    NAlert,
    NTag,
    NProgress,
    NDatePicker,
    NDataTable,
    NPopover,
    NPagination,
    NSelect,
    NRadioGroup,
    NRadio,
    NInputGroup,
    NTable,
    NInputNumber,
    NModal,
    NUpload,
    NTree,
    NSpin,
    NTimePicker,
    NCascader,
    NRadioButton,
    NTreeSelect,
    NImageGroup,
    NImage,
    NCollapse,
    NCollapseItem
  ]
});

export function setupFastCrud(app: App<Element>) {
  app.use(naive);
  app.use(UiNaive);
  // 在此处全局载入组件，以便于给出一个全局的共享配置。
  app.use(FastCrud, {
    // 此处配置公共的dictRequest（字典请求）
    async dictRequest({ dict }: any) {
      return (await fetch(dict.url)).json(); // 根据dict的url，异步返回一个字典数组
    },
    // 公共crud配置
    commonOptions(_: any = {}) {
      return {
        table: {
          size: 'small',
          pagination: false
        },
        search: {
          options: {
            size: 'medium'
          }
        },
        rowHandle: {
          buttons: {
            view: { text: null, icon: 'EyeOutlined', size: 'small' },
            edit: { text: null, icon: 'EditOutlined', size: 'small' },
            remove: { type: 'error', text: null, icon: 'DeleteOutlined', size: 'small' }
          },
          dropdown: {
            more: { size: 'small' }
          }
        },
        form: {
          display: 'flex', // 表单布局
          labelWidth: '100px' // 表单label宽度
        },
        request: {
          // 接口请求配置
          // 你项目后台接口大概率与fast-crud所需要的返回结构不一致，所以需要配置此项
          // 请参考文档http://fast-crud.docmirror.cn/api/crud-options/request.html
          transformQuery: ({ page, form, sort }: any) => {
            // 转换为你pageRequest所需要的请求参数结构
            return { page, form, sort };
          },
          transformRes: ({ res }: any) => {
            // console.log(res);
            // 将pageRequest的返回数据，转换为fast-crud所需要的格式
            // return {records,currentPage,pageSize,total};
            return res.data;
          }
        }
        // 你可以在此处配置你的其他crudOptions公共配置
      };
    }
  });
}
