import { createApp } from 'vue'
import './style.css'
import { setupFastCrud } from './plugins';
import App from './App.vue'

async function setupApp() {
  const app = createApp(App);

  // fast crud
  setupFastCrud(app);

  // mount app
  app.mount('#app');
}

setupApp();
