<template>
  <div class="header">
    <!-- <a href="#/Container" class="Каталог">Catalog </a> -->
    <a href="#/CompilationsContainer" >Compilation</a>
    <a href="#/WeightCoefficients" >Weight coefficients</a>
  </div>
  
</template>

<script>
  import mix from './Mixin.js'


export default {
  name: 'HelloWorld',
  mixins:[mix],
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header {
  height: 45px;
  width: 100%;
  background: #eef0f3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 20;
}

.filtBox {
  width: 100%;
  height: auto;
  background: #eef0f300;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  position: fixed;
  top: 45px;
  transition: transform .5s;
}

.filtBox span{
  font-family: 'ErmilovBold';
  padding: 0 20px;
  
  font-size: 18px;
  background: #eef0f3;
}
.row {
  height: 45px;
}

.mainminibox {
  display: flex;
  width: 100%;
  background:red
}


@keyframes moveGradient {
  0% {
    text-shadow: 0 5px hsl(224, 100%, 58%);
  }

  12.5% {
    text-shadow: 5px 5px hsl(269, 100%, 56%);
  }

  25% {
    text-shadow: 5px 5px hsl(314, 100%, 57%);
  }

  37.5% {
    text-shadow: 5px 5px hsl(359, 100%, 54%);
  }

  50% {
    text-shadow: 5px 5px hsl(44, 100%, 55%);
  }

  62.5% {
    text-shadow: 5px 5px hsl(89, 100%, 55%);
  }
  75% {
    text-shadow: 5px 5px hsl(134, 100%, 55%);
  }
  100% {
    text-shadow: 5px 5px hsl(179, 100%, 56%);
  }
   
}

a {
  text-decoration: none;
  color: black;
  font-size: 25px;
  text-shadow: 1px 1px 1px rgb(234, 234, 234);
  font-family: "CurrentRegular", Helvetica, Arial;
  transition: text-shadow .5s;
}

a:hover {
  transform: scale(1.02);
  animation: moveGradient 4s alternate infinite;
}

</style>
