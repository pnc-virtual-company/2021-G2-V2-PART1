import { createApp } from 'vue'
import App from './App.vue'

import CategoryForm from './components/pages/categories/CategoryForm';
import Search from './components/pages/categories/Search';
import CategoryCard from './components/pages/categories/CategoryCard';
import CategoryView from './components/pages/categories/CategoryView';

const app = createApp(App);
app.component("category-card", CategoryCard);
app.component("category-form", CategoryForm);
app.component("search", Search);
app.component("category-view", CategoryView);
app.mount('#app');