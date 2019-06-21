<template>
<div class="">
  <div class="component">
    <div class="left">
      <div class="content" :style="{ backgroundImage: 'url(' + content.first.bg + ')' }" @click="displayModal(content.first)">
        <div class="mask"></div>
        <div class="text">
          <h2>{{content.first.title}} :</h2>
          <p>{{content.first.description}} </p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="content" :style="{ backgroundImage: 'url(' + content.second.bg + ')' }" @click="displayModal(content.second)">
        <div class="mask"></div>
        <div class="text">
          <h2>{{content.second.title}} :</h2>
          <p>{{content.second.description}} </p>
        </div>
      </div>
      <div class="content" :style="{ backgroundImage: 'url(' + content.third.bg + ')' }" @click="displayModal(content.third)">
        <div class="mask"></div>
        <div class="text">
          <div class="img"></div>
          <h2>{{content.third.title}} :</h2>
          <p>{{content.third.description}} </p>
        </div>
      </div>
    </div>
  </div>


  <div class="modal" v-if="modalIsDisplay">
    <div class="mask" @click="modalIsDisplay = false"></div>
    <div class="modal-content">
      <div class="img" :style="{ backgroundImage: 'url(' + modalContent.img + ')' }"></div>
      <div class="text">
        <h2>{{modalContent.title}}</h2>
        <p>{{modalContent.description}}</p>
        <a :href="modalContent.url" target="_blank" class="redirectButton">Check amazing website</a>
        <a @click="modalIsDisplay = false">Close</a>
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
          bg: require('../assets/img1.jpg'),
          url: "http://www.republiquedesmangues.fr/"
        },
        second: {
          title: "Title 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
          bg: require('../assets/img2.jpg'),
          url: "http://randomcolour.com/"
        },
        third: {
          title: "Title 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
          bg: require('../assets/img3.jpg'),
          url: "http://tinytuba.com/"
        }
      },
      modalContent: {
        title: "",
        description: "",
        img: "",
        url: ""
      },
      modalIsDisplay: false
    }
  },
  methods: {
    displayModal(content) {
      this.modalContent.title = content.title
      this.modalContent.description = content.description
      this.modalContent.img = content.bg
      this.modalContent.url = content.url

      this.modalIsDisplay = true
    }
  }
}
</script>
