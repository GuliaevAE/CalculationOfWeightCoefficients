<template>
    <div @mouseenter="isHov=true" @mouseleave="isHov=false" class="item">


        <div class="data">

            <!-- <div class="img" v-if="isImage==='true' && type!=='Видеокарта'" >
                <img :src="image" />
            </div>
            <div class="img" v-if="isImage==='true' && type==='Видеокарта' && !isHov" >
                <img :src="image" />
            </div>
            <div class="img rotateZ" v-if="isImage==='true' && type==='Видеокарта' && isHov" >
                <img :src="image" />
            </div> -->
            <div class="divName">
                <div class="nameAndStore">
                    <span id="store">{{store}}</span>
                    <span class="title">{{name}}</span>
                </div>


                <div v-if="isHov" class="deskr">
                    <div class="hov" v-if="type==='Процессор'">
                        <span>Ядро: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Сокет: {{cpu['par3']}}</span>
                        <span>Число потоков: {{cpu['par4']}}</span>
                        <span>Тепловыделение: {{cpu['par5']}}</span>
                    </div>
                    <div class="hov" v-if="type==='Оперативная память'">
                        <span class="Гб">Объем: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Латентность: {{cpu['par3']}}</span>
                        <span>Задержки: {{cpu['par4']}}</span>
                        <span>Форм-фактор: {{cpu['par5']}}</span>
                    </div>
                    <div class="hov" v-if="type==='Видеокарта'">
                        <span>Видеочипсет: {{cpu['par1']}}</span>
                        <span class="Гб">Память: {{cpu['par2']}}</span>
                        <span class="МГц">Частота: {{cpu['par8']}}</span>
                        <span>Интерфейс: {{cpu['par3']}}</span>
                    </div>
                </div>
            </div>
            <div class="divOther">
                <span class="price">{{price}}₽</span>
                <div class="img " v-if="isImage==='true' && isHov">
                    <img :src="image" />

                </div>
                <!-- <a target="_blank" :href=link>
                    <div :class="thiseStore">{{store}}</div>
                    <img  src="../assets/store.svg" style="height:50px; width:150px" />
                </a> -->
            </div>
        </div>


        <div class="footer">
            <div v-if="type==='Видеокарта'">
                <div>
                    <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                    <div v-if="isHov" style="display:flex;flex-direction:column;">
                        <span>Частота: {{transformations.видеокартаНорм.частоставидеокарты.toFixed(5)}}</span>
                        <span>Число потоков: {{transformations.видеокартаНорм.памятьвидеокарты.toFixed(5)}}</span>
                    </div>
                </div>

            </div>
            <div v-if="type==='Процессор'">
                <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                <div v-if="isHov" style="display:flex;flex-direction:column;">
                    <span>Частота: {{transformations.процессорНорм.частостапроцессора.toFixed(5)}}</span>
                    <span>Число потоков: {{transformations.процессорНорм.числопотоков.toFixed(5)}}</span>
                </div>
            </div>
            <div v-if="type==='Оперативная память'">
                <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                <div v-if="isHov" style="display:flex;flex-direction:column;">
                    <span>Объём: {{transformations.оперативкаНорм.объем.toFixed(5)}}</span>
                    <span>Частота: {{transformations.оперативкаНорм.частотаоперативки.toFixed(5)}}</span>
                </div>
            </div>
            <span v-if="isHov" id="link" style="position:absolute;bottom:5px;right:15px; font-size:40px"><a
                    target="_blank" :href=link>+</a></span>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'CompsItemWeight',
    props: ['name', 'store', 'type', 'price', 'link', 'cpu', 'transformations', 'image', 'isImage'],
    data: function () {
        return {
            isHov: false
        }
    },
    computed: {
        thiseStore: function () {
            let cl
            switch (this.store) {
                case 'DNS':
                    return cl = 'st dns'

                case 'Ситилинк':
                    return cl = 'st citilink'

                default:
                    break;
            }
            return cl
        }
    }
}
</script>
  
<!-- eef0f3 -->
<style scoped>
.item {

    min-height: 50px;
    width: 100%;
    position: relative;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    transition: transform .5s, border-radius .5s;
    z-index: 2;
}

.data {
    display: flex;
    background: #ffffff;
    border-radius: 12px 12px 15px 15px;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    height: 100%;
}


.nameAndStore {
    display: flex;
    flex-direction: column;
}

#store {
    color: rgb(255, 136, 0)
}


@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}

a {
    text-decoration: none;
    color: white;
    transition: transform .3s;
}

#link {
    display: block;
    transition: transform .3s, text-shadow .3s;
    font-weight: 1000;
}

#link:hover {
    text-shadow: 0 0 5px black;
    transform: rotate(45deg);

}

.divName {
    width: auto;
    justify-content: center;
    align-self: center;
    font-family: 'AktivGroteskCorp';
    color: rgb(0, 0, 0);
    font-size: 15px;

}

.divOther {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 700;
    font-size: 25px;
    margin-left: 20px;

}

.st {
    background: wheat;
    width: 100%;
    box-sizing: border-box;
    padding: 5px 5px;
    border-radius: 10px;
    font-family: "AktivGroteskCorp";
    font-weight: bold;
    margin-top: 5px;
}

.dns {
    background: orange;
    color: white;
    border: 2px solid white;
}

.citilink {
    background: white;
    color: rgb(255, 115, 0);
    border: 2px solid rgb(255, 115, 0);
    font-size: 15px;
}

.price {
    font-size: 18px;
    color: black;
    font-family: "CurrentRegular";
}

.hov {
    display: flex;
    flex-direction: column;
}

.footer {
    background: rgba(138, 138, 138, 0);
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
    border-radius: 0 0 15px 15px;
}

.footer span {
    margin-left: 15px;
    font-family: "AktivGroteskCorp";
    font-size: 15px;
    color: white
}


.img img {
    height: 100px;
    width: 100px;
}

.rotateZ {
    transform: rotate(90deg)
}

.rotateZ img {
    transform: scale(1.2);
}

.МГц::after {
    content: 'МГц';
}

.ГГц::after {
    content: 'ГГц';
}

.Гб::after {
    content: 'Гб';
}

.₽::after {
    content: ' ₽';
    font-weight: 700;
    font-size: 20px;
}

.title {
    font-size: 15px;
    font-family: UncutSansRegular;
    font-weight: 600;
}

.deskr span {
    font-size: small;
}

.item:hover {
    transform: scale(1.02);
    background: linear-gradient(60deg, hsl(224, 100%, 58%),
            hsl(269, 100%, 56%),
            hsl(314, 100%, 57%),
            hsl(359, 100%, 54%),
            hsl(44, 100%, 55%),
            hsl(89, 100%, 55%),
            hsl(134, 100%, 55%),
            hsl(179, 100%, 56%));
    background-size: 300% 300%;
    background-position: 0 50%;
    box-shadow: 0 5px 5px rgb(136, 136, 136);
    animation: moveGradient 4s alternate infinite;
}
</style>
