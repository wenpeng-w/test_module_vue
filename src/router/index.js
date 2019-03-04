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
import animation from '@/components/view/test/animation';
import SVG from '@/components/view/test/SVG';
import uploadImg from '@/components/view/test/upload-img';
import form from '@/components/view/test/formSubmit';
import screen from '@/components/view/test/screen';
import githubUserinfo from '@/components/view/test/githubUserinfo';

const overscroll = () => import('@/components/view/test/overscroll');
// 绘图
const Draw = () => import('@/components/view/draw');
// 404
const NotFoundComponent = () => import('@/components/view/404');

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'index', component: Index },
    { path: '/motorcade', name: 'motorcade', component: Motorcade },
    { path: '/service', name: 'service', component: Service },
    { path: '/my', name: 'my', component: My },
    { path: '/test', name: 'test', component: Test },
    { path: '/vue-xlsx-table', name: 'vue-xlsx-table', component: vueXlsxTable },
    { path: '/amap', name: 'amap', component: aMap },
    { path: '/echarts', name: 'echarts', component: eCharts },
    { path: '/screen-orientation', name: 'screen-orientation', component: screenOrientation },
    { path: '/promise', name: 'promise', component: promise },
    { path: '/animation', name: 'animation', component: animation },
    { path: '/SVG', name: 'SVG', component: SVG },
    { path: '/upload-img', name: 'upload-img', component: uploadImg },
    { path: '/form', name: 'form', component: form },
    { path: '/screen', name: 'screen', component: screen },
    { path: '/draw', name: 'Draw', component: Draw },
    { path: '/github-userinfo', name: 'githubUserinfo', component: githubUserinfo },
    { path: '/overscroll', name: 'overscroll', component: overscroll },
    { path: '*', name: 'error', component: NotFoundComponent }
  ]
});
