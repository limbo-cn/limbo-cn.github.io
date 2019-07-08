import store from '../store'

export default class Secret {
    constructor() {
        this.loveTougne = ""
        this.secrets = [
            '你不喜欢猫猫狗狗,我很喜欢,你经常说,跟你在一起以后,我这辈子都不会有自己的宠物了,但是我不后悔,有你就够了💗',
            '最喜欢你的一点,不管吵架,不开心,闹矛盾,从来不会失联,再生气也会主动联系我😊',
            '都说程序猿不懂浪漫,我想,或许这就是程序猿的浪漫吧..🌸',
        ]
        this.badMemory = [
            'bad',
        ]
        this.blue = [
            'blue',
        ]
    }

    bind(object, func) {
        return function () {
            return func.apply(object, arguments);
        }
    }

    speak(id, i = 0) {
        let str = '';
        if (id === 0) {
            str = "所以..............................你愿意嫁给我吗？"
        }
        else if (id > 0 && id <= 10) {
            str = this.badMemory[id % this.badMemory.length];
        }
        else if (id > 10 && id <= 20) {
            str = this.blue[id % this.blue.length];
        }
        else {
            str = this.secrets[id % this.secrets.length];
        }
        if (i <= str.length) {
            store.dispatch('setSecret', str.slice(0, i++) + '_')
            const timer = setTimeout(this.bind(this, this.speak), Math.random() * 400, id, i)
            store.dispatch('setTimer', timer)
        } else {
            store.dispatch('setSecret', str)
        }
    }
}
