<template>
    <div @mouseenter="isHov=true" @mouseleave="isHov=false" class="item">
        <div class="divName">

            <span>{{name}}</span>

            <div v-if="isHov">
                <div class="hov" v-if="type==='Процессор'">
                    <span>Ядро: {{cpu['par1']}}</span>
                    <span>Частота: {{cpu['par2']}}</span>
                    <span>Сокет: {{cpu['par3']}}</span>
                    <span>Число потоков: {{cpu['par4']}}</span>
                    <span>Тепловыделение: {{cpu['par5']}}</span>
                   
                </div>
                <div class="hov" v-if="type==='Оперативная память'">
                    <span>Объем: {{cpu['par1']}}</span>
                    <span>Частота: {{cpu['par2']}}</span>
                    <span>Латентность: {{cpu['par3']}}</span>
                    <span>Задержки: {{cpu['par4']}}</span>
                    <span>Форм-фактор: {{cpu['par5']}}</span>
                  
                </div>
                <div class="hov" v-if="type==='Видеокарта'">
                    <span>Видеочипсет: {{cpu['par1']}}</span>
                    <span>Память: {{cpu['par2']}}</span>
                    <span class="lkj">Частота: {{cpu['par8']}}</span>
                    <span>Интерфейс: {{cpu['par3']}}</span>
                   

                    
                </div>


            </div>
        </div>
        <!-- <div class="divOther">
            <span>{{type}}</span>
            <div :class="thiseStore">{{store}}</div>
        </div> -->
        <div class="divOther">
            <span class="price">{{price}}</span>
           
            <a target="_blank" :href=link>
                <div :class="thiseStore">{{store}}</div>
            </a>
        </div>



    </div>
</template>
  
<script>
export default {
    name: 'CompsItem',
    props: ['name', 'store', 'type', 'price', 'link', 'cpu'],
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
  
<!-- background: linear-gradient(90deg, #1e1c2200 , #000000 ); -->
<style scoped>
.item {
    min-height: 50px;
    width: 100%;

    background: rgb(162, 162, 162);
    display: flex;
    margin-top: 5px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    transition: transform .5s, border-radius .5s;
}

.item:hover {
    transform: scale(1.03);
    background: linear-gradient(60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%));
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 0;
    animation: moveGradient 4s alternate infinite;

}

@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}

a {
    text-decoration: none;
    color: red
}

.divName {
    width: 70%;
    justify-content: center;
    align-self: center;
    font-family: 'AktivGroteskCorp';
    color: rgb(0, 0, 0);
    font-size: 15px;

}

.divOther {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.st {
    background: wheat;
    width: auto;
    padding: 5px 10px;
    border-radius: 10px;
    font-family: "CurrentRegular";
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



.lkj::after {
    content: 'МГц';
}
</style>
  