import Vue from 'vue';
import Router from 'vue-router';

// 首页
import Index from '@/components/view/index';
// 车队
import Motorcade from '@/components/view/motorcade';
// 服务
import Service from '@/components/view/Service';
// 我的
import My from '@/components/view/my';
// 测试
import Test from '@/components/view/test';
// demo
import aMap from '@/components/view/test/amap';
import eCharts from '@/components/view/test/echarts';
import vueXlsxTable from '@/components/view/test/vue-xlsx-table';
import screenOrientation from '@/components/view/test/screen-orientation';
import promise from '@/components/view/test/promise';
// 404
import NotFoundComponent from '@/components/view/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: '/404',
      component: NotFoundComponent
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/motorcade',
      name: 'motorcade',
      component: Motorcade
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/vue-xlsx-table',
      name: 'vue-xlsx-table',
      component: vueXlsxTable
    },
    {
      path: '/amap',
      name: 'amap',
      component: aMap
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: eCharts
    },
    {
      path: '/screen-orientation',
      name: 'screen-orientation',
      component: screenOrientation
    },
    {
      path: '/promise',
      name: 'promise',
      component: promise
    }
  ]
});
