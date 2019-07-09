import store from '../store'

export default class Secret {
    constructor() {
        this.loveTougne = ""
        this.secrets = [
            '你不喜欢猫猫狗狗,我很喜欢,你经常说,跟你在一起以后,我这辈子都不会有自己的宠物了,但是我不后悔,因为..........有你就够了💗',
            '最喜欢你的一点,不管吵架,不开心,闹矛盾,从来不会失联,再生气也会主动联系我,谢谢那么久以来的包容😊',
            '都说程序猿不懂浪漫,我想,或许这就是程序猿的浪漫吧...🌸',
            '明明不擅长算术,还要坚持做算术相关的工作,如果说这个项目是程序猿最后的倔强，那你的职业选择估计也是你最后的倔强了吧,不管是好是坏,努力过就好啦,加油吧,皮丘🍉',
            `我们已经相爱${this.getKnowTime()}天啦!要一直幸福下去噢💗`,
            this.getMarryTime() > 0 ? `还有${this.getMarryTime()}天,我们就要结婚啦!要让所有人见证我们的幸福呀💗` : `我们已经结婚啦!要一直幸福下去,直到永远噢🌸`,
            '虽然我很怂,一直都怂.....最大胆的一次,就是想让全世界都看到我对你的告白🎁',
            '你最喜欢的数字是369,发个动态都要等分针指向369才发,有的时候觉得很傻,有时候又觉得特别可爱🍄',
            '第一次去迪士尼的时候,你戴着仙女发箍,我们拍了很多很多照片,当时我的在想,如果这就是是现实中的城堡,那你一定就是我的公主了吧👰',
        ]
        this.badMemory = [
            '还记得那次在停车场哭,以后不想再发生了😪',
            '去韩国的时候,明明说要带我去牛岛玩,结果.......还是在屡次不开心之后在我的带领下来到了牛岛🐂',
        ]
        this.blue = [
            '还记得刚开始的时候大部分时候都可以在苏州陪着你,度过了我们人生中很快乐的一段时间,好景不长,很快就异地了,分开的时候偶尔会想念对方,但更多的是对未来美好的期待..🍦',
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

    getKnowTime() {
        var start = new Date(2018, 1, 26);
        var end = new Date();
        var delta = end.getTime() - start.getTime();
        return Math.floor(delta / (24 * 3600 * 1000)) + 30
    }

    getMarryTime() {
        var marry = new Date(2019, 11, 24);
        var start = new Date();
        var delta = marry.getTime() - start.getTime();
        return Math.ceil(delta / (24 * 3600 * 1000)) - 30
    }
}
