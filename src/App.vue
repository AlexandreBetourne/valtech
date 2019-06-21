<template>
<div id="app">
  <header>
    <h1>TEST VALTECH</h1>
  </header>
  <section>
    <MyComponent />
  </section>
</div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'app',
  components: {
    MyComponent
  }
}
</script>
