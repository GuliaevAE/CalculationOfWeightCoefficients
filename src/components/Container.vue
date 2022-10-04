<template>
    <div class="container">
        <select v-model="f1.store">
            <option value="">Все</option>
            <option value="DNS">DNS</option>
            <option value="Citilink">Citilink</option>
            
        </select>
        <select v-model="f1.type">
            <option value="">Все</option>
            <option value="Видеокарта">Видеокарта</option>
            <option value="Оперативная память">Оперативная память</option>
            <option value="Процессор">Процессор</option>
        </select>
       
        <CompsItem v-for="(it, key) in allItems.filter(x => typefilt(x, f1)&&prfilt(x, f1)&&stfilt(x, f1))" :key="key" :name="it['name']" :store="it['store']" :type="it['type']"
            :price="it['price']" :link="it['link']" />
    </div>
</template>
  
<script>
import { toNumber } from '@vue/shared'
import CompsItem from './CompsItem.vue'
import mix from './Mixin.js'
import { ref } from 'vue'

export default {
    name: 'ContainerForItems',
    mixins: [mix],
    components: {
        CompsItem
    },
    setup() {
        let f1 = ref({ store: '', price: 30000, type:'' })
        function prfilt(x, f) {
            return toNumber(x['price'].replace(' ', '')) <= f.price
        }
        function stfilt(x, f) {
            if (f.store === '') { return x }
            return x['store'] == f.store
        }
        function typefilt(x, f) {
            if (f.type === '') { return x }
            return x['type'] == f.type
        }

        return { stfilt, prfilt, typefilt, f1 }
    },
    // data: function () {
    //     return {
    //         allItems: [
    //             { 'store': 'ДНС', 'type': 'Оперативная память', 'name': 'Оперативная память SODIMM Kingston FURY Impact [KF432S20IBK2/32] 32 ГБ [DDR4, 16 ГБx2, 3200 МГц, PC25600, тайминги: 20-22-22]', 'price': '12 999 ₽', 'link': 'https://www.dns-shop.ru/product/51cc0bd8dc94d763/operativnaa-pamat-sodimm-kingston-fury-impact-kf432s20ibk232-32-gb/' },
    //             { 'store': 'ДНС', 'type': 'Оперативная память', 'name': 'Оперативная память SODIMM AMD Radeon R5 Entertainment Series [R538G1601S2S-U] 8 ГБ [DDR3, 8 ГБx1, 1600 МГц, PC12800, тайминги: 11-11-11-28]', 'price': '1 599 ₽', 'link': 'https://www.dns-shop.ru/product/be349d4bb7e73330/operativnaa-pamat-sodimm-amd-radeon-r5-entertainment-series-r538g1601s2s-u-8-gb/' },
    //             { 'store': 'ДНС', 'type': 'Процессор', 'name': 'Процессор Intel Core i5-11400F BOX [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2хDDR4-3200 МГц, TDP 65 Вт, кулер]', 'price': '12 599 ₽', 'link': 'https://www.dns-shop.ru/product/00c1301d6c303332/processor-intel-core-i5-11400f-box/' },
    //             { 'store': 'ДНС', 'type': 'Процессор', 'name': 'Процессор Intel Core i5-11400 BOX [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2хDDR4-3200 МГц, Intel UHD Graphics 730, TDP 65 Вт, кулер]', 'price': '14 899 ₽', 'link': 'https://www.dns-shop.ru/product/450088926c2f3332/processor-intel-core-i5-11400-box/' },
    //             { 'store': 'ДНС', 'type': 'Видеокарта', 'name': 'Видеокарта KFA2 GeForce RTX 3070 Ti (1-Click OC) [37ISM6MD4COK] [PCI-E 4.0, 8 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI, GPU 1575 МГц]', 'price': '69 499 ₽', 'link': 'https://www.dns-shop.ru/product/6507c0fd35f6ed20/videokarta-kfa2-geforce-rtx-3070-ti-1-click-oc-37ism6md4cok/' },
    //             { 'store': 'ДНС', 'type': 'Видеокарта', 'name': 'Видеокарта Palit GeForce RTX 3060 DUAL OC (LHR) [NE63060T19K9-190AD] [PCI-E 4.0, 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]', 'price': '32 999 ₽', 'link': 'https://www.dns-shop.ru/product/73c504d55af71b80/videokarta-palit-geforce-rtx-3060-dual-oc-lhr-ne63060t19k9-190ad/' },
    //             { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Модуль памяти NETAC Basic NTBSD4P26SP-04 DDR4 - 4ГБ', 'price': '1050₽', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-4gb-2666mhz-netac-ntbsd4p26sp-04-basic-rtl-cl19-dimm-288-p-1740125/' },
    //             { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Модуль памяти Patriot PSD34G160081 DDR3 - 4ГБ', 'price': '1050₽', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g160081-ddr3-4gb-1600-dimm-ret-422564/' }
    //         ]
    //     }
    // }
    computed: {
        filtItems: function () {
            let i
            if (this.filt1 === 'DNS') { i = this.allItems.filter(x => x['store'] == 'DNS') }
            if (this.filt1 === 'Citilink') { i = this.allItems.filter(x => x['store'] == 'Citilink') }
            if (this.filt1 === 'Видеокарта') { i = this.allItems.filter(x => x['type'] == 'Видеокарта') }
            if (this.filt1 === 'Оперативная память') { i = this.allItems.filter(x => x['type'] == 'Оперативная память') }
            if (this.filt1 === 'Процессор') { i = this.allItems.filter(x => x['type'] == 'Процессор') }
            if (this.filt1 === '') { i = this.allItems }
            return i
        }
    }
}
</script>
  
<style scoped>
.container {
    height: auto;
    width: 100%;
    background: rgb(62, 62, 62);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
}
</style>
  