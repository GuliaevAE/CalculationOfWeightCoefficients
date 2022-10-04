<template>

  <HelloWorld />

  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Container from './components/Container.vue'
// import CompilationsContainer from './components/CompilationsContainer.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    // Container,
    // CompilationsContainer
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  
}
html::-webkit-scrollbar {
    width: 0;
  }
@font-face {
  font-family: "CurrentRegular";
  src: url(./fonts/Current-Regular.otf) format("truetype");
}
@font-face {
  font-family: "ErmilovBold";
  src: url(./fonts/Ermilov-bold.otf) format("truetype");
}

@font-face {
  font-family: "AktivGroteskCorp";
  src: url(./fonts/AktivGroteskCorp-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "UncutSansRegular";
  src: url(./fonts/ua-BRAND-regular.otf) format("truetype");
}

</style>
