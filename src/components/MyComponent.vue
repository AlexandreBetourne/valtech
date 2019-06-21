<template>
<div class="component">
  <div class="left">
    <div class="content" :style="{ backgroundImage: 'url(' + content.first.bg + ')' }">
      <div class="mask"></div>
      <div class="text">
        <h2>{{content.first.title}} :</h2>
        <p>{{content.first.description}} </p>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="content" :style="{ backgroundImage: 'url(' + content.second.bg + ')' }">
      <div class="mask"></div>
      <div class="text">
        <h2>{{content.second.title}} :</h2>
        <p>{{content.second.description}} </p>
      </div>
    </div>
    <div class="content" :style="{ backgroundImage: 'url(' + content.third.bg + ')' }">
      <div class="mask"></div>
      <div class="text">
        <h2>{{content.third.title}} :</h2>
        <p>{{content.third.description}} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function() {
    return {
      content: {
        first: {
          title: "Title 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
          bg: require('../assets/img1.jpg')
        },
        second: {
          title: "Title 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
          bg: require('../assets/img2.jpg')
        },
        third: {
          title: "Title 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
          bg: require('../assets/img3.jpg')
        }
      }
    }
  },
}
</script>
