<template>
  <div class="container">
    <div class="minicont" v-if="isOpen==='Видеокарта'">
      <div class="rows">
        <img class="row left" src="../assets/downArrow.svg" @click="selectpart" />
        <span>Видеокарта</span>
        <img class="row right" src="../assets/downArrow.svg" @click='selectpart' />
      </div>
      <div class="filters">
        <span>Вес</span>
        <input type="number" v-model="w1" />
        <input type="range" min="0.01" max="0.99" step="0.01" v-model="w1" />
      </div>
      <div class="filters">
        <span>Цена</span>
        <input type="number" v-model="f1.price" />
        <input type="range" min="0" max="150000" v-model="f1.price" />
      </div>
      <div class="blockForType">
        <CompsItemWeight
          v-for="(it, key) in allItems2.filter(x => x['type'] == 'Видеокарта' &&prfilt(x, f1)&&stfilt(x, f1)).sort((a,b)=>b.transformations.рейтинг - a.transformations.рейтинг)"
          :key="key" :name="it['name']" :store="it['store']" :type="it['type']" :price="it['price']" :link="it['link']"
          :cpu="it['cpu']" :transformations='it.transformations' :w='w1' :image="it['image']" isImage='true' />
      </div>

    </div>
    <div class="minicont" v-if="isOpen==='Процессор'">
      <div class="rows">
        <img class="row left" src="../assets/downArrow.svg" @click="selectpart" />
        <span>Процессор</span>
        <img class="row right" src="../assets/downArrow.svg" @click='selectpart' />
      </div>
      <div class="filters">
        <span>Вес</span>
        <input type="number" v-model="w2" />
        <input type="range" min="0.01" max="0.99" step="0.01" v-model="w2" />
      </div>
      <div class="filters">
        <span>Цена</span>
        <input type="number" v-model="f2.price" />
        <input type="range" min="0" max="150000" v-model="f2.price" />
      </div>

      <div class="blockForType">
        <CompsItemWeight
          v-for="(it, key) in allItems2.filter(x => x['type'] == 'Процессор' &&prfilt(x, f2)&&stfilt(x, f2)).sort((a,b)=>b.transformations.рейтинг - a.transformations.рейтинг)"
          :key="key" :name="it['name']" :store="it['store']" :type="it['type']" :price="it['price']" :link="it['link']"
          :cpu="it['cpu']" :transformations='it.transformations' :w='w2' :image="it['image']" isImage='true' />
      </div>
    </div>
    <div class="minicont" v-if="isOpen==='Оперативная память'">
      <div class="rows">
        <img class="row left" src="../assets/downArrow.svg" @click="selectpart" />
        <span>Оперативная память</span>
        <img class="row right" src="../assets/downArrow.svg" @click='selectpart' />
      </div>

      <div class="filters">
        <span>Вес</span>
        <input type="number" v-model="w3" />
        <input type="range" min="0.01" max="0.99" step="0.01" v-model="w3" />
      </div>
      <div class="filters">
        <span>Цена</span>
        <input type="number" v-model="f3.price" />
        <input type="range" min="0" max="150000" v-model="f3.price" />
      </div>
      <div class="blockForType">
        <CompsItemWeight
          v-for="(it, key) in allItems2.filter(x => x['type'] == 'Оперативная память'&&prfilt(x, f3)&&stfilt(x, f3)).sort((a,b)=>b.transformations.рейтинг - a.transformations.рейтинг)"
          :key="key" :name="it['name']" :store="it['store']" :type="it['type']" :price="it['price']" :link="it['link']"
          :cpu="it['cpu']" :transformations='it.transformations' :w='w3' :image="it['image']" isImage='true' />
      </div>
    </div>


  </div>
</template>
  
<script>

import { toNumber } from '@vue/shared'
import CompsItemWeight from './CompsItemWeight2.vue'
import mix from './Mixin.js'
import { ref } from 'vue'


export default {
  name: 'CompilationsContainer',
  mixins: [mix],
  components: {
    CompsItemWeight
  },

  setup() {
    let f1 = ref({ store: '', price: 300000 })
    let f2 = ref({ store: '', price: 300000 })
    let f3 = ref({ store: '', price: 300000 })
    function prfilt(x, f) {
      return x['price'] <= f.price
    }
    function stfilt(x, f) {
      if (f.store === '') { return x }
      return x['store'] == f.store
    }

    return { stfilt, prfilt, f1, f2, f3 }
  },
  methods: {
    selectpart: function () {
      console.log(this.isOpen)
      if (this.isOpen === 'Оперативная память') return this.isOpen = 'Видеокарта'
      if (this.isOpen === 'Видеокарта') return this.isOpen = 'Процессор'
      if (this.isOpen === 'Процессор') return this.isOpen = 'Оперативная память'

    }
  },
  computed: {
    allItems2: function () {

      /////////////////////////видеокарта///////////////////////////////////
      let толькочастотавидеокарты = { список: [] }
      let толькопамятьвидеокарты = { список: [] }

      /////////////////////////Процессор///////////////////////////////////
      let толькочастотапроцессора = { список: [] }
      let толькочислопотоков = { список: [] }

      // /////////////////////////Оперативная память///////////////////////////////////
      let толькообъем = { список: [] }
      let толькочастотаоперативки = { список: [] }

      let allItems1 = this.allItems.map(x => {
        if (x['type'] === 'Видеокарта') {
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])
          x['cpu']['par8'] = toNumber(x['cpu']['par8'])
        }
        if (x['type'] === 'Процессор') {
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])
          x['cpu']['par4'] = toNumber(x['cpu']['par4'])
        }
        if (x['type'] === 'Оперативная память') {
          x['cpu']['par1'] = toNumber(x['cpu']['par1'])
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])

        }
        x['price'] = toNumber(x['price'])
        return x
      })
      allItems1.map(x => {

        if (x['type'] === 'Видеокарта') {
          толькочастотавидеокарты.список.push(Number(x['cpu']['par8']))
          толькопамятьвидеокарты.список.push(Number(x['cpu']['par2']))
          x.transformations = { видеокартаНорм: { частоставидеокарты: 0, памятьвидеокарты: 0 }, рейтинг: 0 }
        }

        if (x['type'] === 'Процессор') {
          толькочастотапроцессора.список.push(Number(x['cpu']['par2']))
          толькочислопотоков.список.push(Number(x['cpu']['par4']))
          x.transformations = { процессорНорм: { частостапроцессора: 0, числопотоков: 0 }, рейтинг: 0 }
        }

        if (x['type'] === 'Оперативная память') {
          толькообъем.список.push(Number(x['cpu']['par1']))
          толькочастотаоперативки.список.push(Number(x['cpu']['par2']))
          x.transformations = { оперативкаНорм: { объем: 0, частотаоперативки: 0 }, рейтинг: 0 }
        }
        return x
      })
      function getOfArray(numArray) {
        let max = 0
        let min = numArray[0]

        numArray.forEach(x => {
          if (x > max) { max = x }
          if (x < min) {

            min = x
          }
        })
        return { max: max, min: min }
      }
      толькочастотавидеокарты.мах = getOfArray(толькочастотавидеокарты.список).max
      толькочастотавидеокарты.мин = getOfArray(толькочастотавидеокарты.список).min
      толькопамятьвидеокарты.мах = getOfArray(толькопамятьвидеокарты.список).max
      толькопамятьвидеокарты.мин = getOfArray(толькопамятьвидеокарты.список).min

      толькочастотапроцессора.мах = getOfArray(толькочастотапроцессора.список).max
      толькочастотапроцессора.мин = getOfArray(толькочастотапроцессора.список).min
      толькочислопотоков.мах = getOfArray(толькочислопотоков.список).max
      толькочислопотоков.мин = getOfArray(толькочислопотоков.список).min

      толькообъем.мах = getOfArray(толькообъем.список).max
      толькообъем.мин = getOfArray(толькообъем.список).min
      толькочастотаоперативки.мах = getOfArray(толькочастотаоперативки.список).max
      толькочастотаоперативки.мин = getOfArray(толькочастотаоперативки.список).min




      allItems1.map(x => {
        if (x['type'] === 'Видеокарта') {
          x.transformations.видеокартаНорм.частоставидеокарты = x['cpu']['par8'] / толькочастотавидеокарты.мах
          x.transformations.видеокартаНорм.памятьвидеокарты = x['cpu']['par2'] / толькопамятьвидеокарты.мах
          x.transformations.рейтинг = (x.transformations.видеокартаНорм.частоставидеокарты + x.transformations.видеокартаНорм.памятьвидеокарты) * this.w1
        }

        if (x['type'] === 'Процессор') {
          x.transformations.процессорНорм.частостапроцессора = x['cpu']['par2'] / толькочастотапроцессора.мах
          x.transformations.процессорНорм.числопотоков = x['cpu']['par4'] / толькочислопотоков.мах
          x.transformations.рейтинг = (x.transformations.процессорНорм.частостапроцессора + x.transformations.процессорНорм.числопотоков) * this.w2
        }

        if (x['type'] === 'Оперативная память') {
          x.transformations.оперативкаНорм.объем = x['cpu']['par1'] / толькообъем.мах
          x.transformations.оперативкаНорм.частотаоперативки = x['cpu']['par2'] / толькочастотаоперативки.мах
          x.transformations.рейтинг = (x.transformations.оперативкаНорм.объем + x.transformations.оперативкаНорм.частотаоперативки) * this.w3
        }


        return x
      })



      return allItems1

    }

  }
}
</script>
  
<style scoped>
.container {
  height: auto;
  width: 100%;
  background: #eef0f3;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-top: 70px;
}


.minicont {
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 5px;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
}

.minicont span {
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  transition: text-shadow .5s;
}

.miniBox {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
}

input {
  border: 3px solid black;
  font-family: 'ErmilovBold';
}

input,
select {
  width: 99%;
}

select {
  font-family: 'AktivGroteskCorp';
  font-size: 18px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid black;
  border-radius: 5px;
}

.rows {
  position: fixed;
  top: 45px;
  background: #eef0f3;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
  box-sizing: border-box;
  padding: 0 10px;
}

.rows span {
  width: auto;
  margin: 0;
}

.row {
  height: 25px;
  padding: 5px 0;

}

.left {
  transform: rotate(90deg);
}

.right {
  transform: rotate(-90deg);
}

.mainminibox {
  display: flex;
  width: 100%;
}

.blockForType {
  height: auto;
  width: 100%;
  overflow-y: auto;
  padding: 0 17px;
  box-sizing:border-box;
  

}

.blockForType::-webkit-scrollbar {
  width: 0;
}

.filters {
  width: 100%;
}
</style>
  
  
  
  