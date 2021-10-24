const home = { template: `<component-home> </component-home>`, name: "home"
};
const contact = {template: `<component-contact> </component-contact>`, name:"contact"
};
const products = {template: `<component-products> </component-products>`, name:"products"
};
const notFound = {template: `<component-error> </component-error>`, name:"error"
};

const routes = [
    { path: '/', component: home },
    { path: '/contact', component: contact },
    { path: '/products', component: products },
    { path: '*', component: notFound}
];

const router = new VueRouter({
	  routes 
});

const app = new Vue({
	el: "#app",
  	router
});


