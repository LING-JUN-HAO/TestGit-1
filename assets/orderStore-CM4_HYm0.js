import{u as i,k as r}from"./index-DPmcGQ0K.js";var d={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"luminous",BASE_URL:"/TestGit-1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:s,VITE_PATH:a}=d,n=i("orderStore",{state:()=>({userOrders:{},orderItem:{},isLoading:!0,orderTotal:0,userData:{}}),actions:{getOrders(){const o=`${s}api/${a}/orders`;r.get(o).then(t=>{this.userOrders=t.data.orders,this.isLoading=!1}).catch(t=>{console.log(t),this.isLoading=!1})},getOrderItem(o){const t=`${s}api/${a}/order/${o}`;r.get(t).then(e=>{console.log(e),this.orderItem=e.data.order.products,this.orderTotal=e.data.order.total,this.userData=e.data.order.user,this.isLoading=!1}).catch(e=>{console.log(e),this.isLoading=!1})}}});export{n as o};
