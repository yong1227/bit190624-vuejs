var items=[{
    name : '연필',
    price : 300,
    quantity : 0
},
{
    name: '공책',
    price : 400,
    quantity : 0
},
{
    name:'지우개',
    price:500,
    quantity:0
},
]
var vm = new Vue({
    el: '#app',
    data: {
        //data 프로퍼티
        items: items
    }
})
//JSFiddle의 콘솔에서 vm에 접근할 수 있도록 함
window.vm = vm