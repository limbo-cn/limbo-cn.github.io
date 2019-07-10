<template>
  <div>
    <div id="audio" class="icon" @click.stop="playAudio">
      <span data-descr="若浏览器不自动播放音乐>.<，请点击我开启告白模式">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lingdang"></use>
        </svg>
      </span>
    </div>
    <div id="heart" class="icon" @click.stop="empty">
      <span data-descr=" dtl💗zyd  --->  forever🎉">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xin"></use>
        </svg>
      </span>
    </div>
    <div id="letter" class="icon" @click.stop="empty">
      <span data-descr="每一颗爱心都代表了我对你的告白，不同的颜色象征着我们的爱情之路，时而甜蜜，时而心酸，虽然聚少离多，但我们最终还是坚持到了最后，汇聚成了这片海洋，探索这片海洋，发现更多只属于我们的秘密,找到那颗唯一的红色小心心吧😃">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qingtie"></use>
        </svg>
      </span>
    </div>
    <div id="info" class="icon" @click.stop="empty">
      <span data-descr="作者:dtl(limbo),这个项目是我自己一点点撸出来的,为了向张老板求婚可以说是很拼了,需要源码或者技术交流的同学可以加我微信firelimbo1992,电脑端比手机端好看的多>.<建议电脑登录,不支持IE">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lipao-"></use>
        </svg>
      </span>
    </div>
    <transition name="fade">
      <div class="dialog" v-show="showDialog">
        <div class="mask"></div>
        <div class="dialog-content">
          <div class="close" @click.stop="closeDialog"><span>✖</span>
          </div>
          <div id='text'>
            <p>{{ secret }}</p>
            <br />
            <div align="center">
              <img v-show="!!imgSrc" :src="imgSrc" />
            </div>
          </div>
          <svg t="1562565497488" viewBox="0 0 1024 1024" width="200" height="200">
            <path d="M511.3 511.5m-295.2 0a295.2 295.2 0 1 0 590.4 0 295.2 295.2 0 1 0-590.4 0Z" fill="#9FE2CD" p-id="6304"></path>
            <path d="M462.2 602.4l49.1-181.9 49.2 181.9z" fill="#F9AFBD" p-id="6305"></path>
            <path d="M560.5 608.4h-98.4c-1.9 0-3.6-0.9-4.8-2.4-1.1-1.5-1.5-3.4-1-5.2L505.5 419c0.7-2.6 3.1-4.4 5.8-4.4s5.1 1.8 5.8 4.4l49.2 181.8c0.5 1.8 0.1 3.7-1 5.2-1.2 1.5-2.9 2.4-4.8 2.4z m-90.5-12h82.7l-41.3-152.9L470 596.4z" fill="#0C0C0C" p-id="6306"></path>
            <path d="M667.5 15.4c-71.8 0-132.9 47.1-156.2 113.1-23.3-66-84.4-113.1-156.2-113.1-91.8 0-168 77.1-166.2 172.1 2.8 153.6 254.6 350.1 322.4 350.1s320.8-180.3 322.4-350.1c1-95-74.4-172.1-166.2-172.1z" fill="#F9AFBD" p-id="6307"></path>
            <path d="M511.3 543.7c-36.8 0-118.4-51.2-189.7-119.1-39.2-37.3-72.3-76.8-95.8-114.3-27.8-44.4-42.3-85.7-42.9-122.6-0.9-47.7 17-92.7 50.3-126.6 32.7-33.3 76-51.6 121.9-51.6 36.1 0 70.6 11.4 99.8 33 24.5 18.1 43.8 42.1 56.3 70 12.5-27.9 31.8-51.9 56.3-70 29.3-21.6 63.8-33 99.8-33 45.5 0 88.4 18.1 120.9 50.9 33.6 33.9 51.8 79.1 51.3 127.3-0.4 40.6-14.7 84.2-42.4 129.4-23.3 38-56.5 77.3-95.9 113.7-68.5 63.3-152 112.9-189.9 112.9zM355.1 21.4c-42.7 0-82.9 17.1-113.3 48-31 31.6-47.7 73.5-46.9 118 0.6 34.7 14.5 73.9 41.1 116.5 23 36.7 55.4 75.4 93.9 112C406 488.4 482 531.7 511.4 531.7c30.2 0 108.4-42 182-109.8 38.6-35.6 71.1-74.1 93.8-111.1 26.6-43.4 40.3-84.9 40.7-123.3 0.4-44.9-16.6-87.1-47.9-118.7-30.2-30.5-70.2-47.4-112.4-47.4-33.5 0-65.5 10.6-92.7 30.6-26.6 19.6-46.6 46.8-57.8 78.4-0.8 2.4-3.1 4-5.7 4s-4.8-1.6-5.7-4c-11.2-31.7-31.2-58.8-57.8-78.4-27.2-20-59.3-30.6-92.8-30.6z" fill="#0C0C0C" p-id="6308"></path>
            <path d="M254.3 212.8c-3.3 0-5.9-2.6-6-5.9-0.5-28.7 7-56.7 21.7-81.1 14.2-23.6 34.5-42.8 58.6-55.6 2.9-1.6 6.6-0.4 8.1 2.5s0.4 6.6-2.5 8.1c-22.2 11.7-40.9 29.4-53.9 51.1-13.5 22.4-20.4 48.3-19.9 74.6 0.1 3.3-2.6 6-5.9 6.1-0.1 0.2-0.1 0.2-0.2 0.2z" fill="#FFFFFF" p-id="6309"></path>
            <path d="M523.5 1017c-1.8 0-3.6-0.8-4.8-2.3-2-2.6-1.5-6.4 1.1-8.4 16.8-13 39.9-71.4 39-108.8-0.3-11.8-3-19.8-7.8-23.2-1.7-1.2-3.6-2.5-5.7-3.9-22.3-15.3-59.5-40.9-57.2-68 1.2-13.8 12.2-25.5 32.8-35 17.6-8.1 26.8-16.7 27.5-25.6 1.5-20.1-37.7-45.6-72.3-68.1l-5.2-3.4c-14.4-9.4-20.8-19.5-19-30.1 2-11.9 14.7-23 37.8-32.8 16.1-6.9 31.5-10.7 32.2-10.9 3.2-0.8 6.5 1.2 7.3 4.4 0.8 3.2-1.2 6.5-4.4 7.3-0.2 0-15.2 3.8-30.5 10.3-18.2 7.8-29.3 16.4-30.6 23.7-1.1 6.8 6.8 13.6 13.7 18.1l5.2 3.4c41 26.7 79.7 51.9 77.7 79.1-1 13.8-12.3 25.5-34.4 35.6-16.4 7.5-25.1 16-25.9 25.1-1.7 20.1 33.3 44.1 52 57 2.1 1.4 4 2.8 5.8 4 8.2 5.7 12.5 16.7 12.9 32.7 0.4 18.5-4.6 43.3-13.7 67.9-12.9 34.8-25.3 47-30 50.6-0.9 0.9-2.2 1.3-3.5 1.3z" fill="#0C0C0C" p-id="6310"></path>
            <path d="M327.5 516l14.9 30.2 33.4 4.9-24.1 23.5 5.6 33.2-29.8-15.7-29.8 15.7 5.7-33.2-24.2-23.5 33.4-4.9z" fill="#F7C6B0" p-id="6311"></path>
            <path d="M297.7 613.8c-1.2 0-2.5-0.4-3.5-1.1-1.8-1.3-2.8-3.6-2.4-5.9l5.2-30.1-21.9-21.3c-1.6-1.6-2.2-4-1.5-6.2 0.7-2.2 2.6-3.8 4.8-4.1l30.2-4.4 13.5-27.4c1-2 3.1-3.3 5.4-3.3s4.4 1.3 5.4 3.3l13.5 27.4 30.2 4.4c2.3 0.3 4.1 1.9 4.8 4.1 0.7 2.2 0.1 4.6-1.5 6.2L358 576.7l5.2 30.1c0.4 2.3-0.5 4.5-2.4 5.9-1.8 1.3-4.3 1.5-6.3 0.5l-27-14.2-27 14.2c-0.9 0.4-1.9 0.6-2.8 0.6z m29.8-27.7c1 0 1.9 0.2 2.8 0.7l19.1 10-3.6-21.2c-0.3-1.9 0.3-3.9 1.7-5.3l15.4-15-21.3-3.1c-2-0.3-3.6-1.5-4.5-3.3l-9.5-19.3-9.5 19.3c-0.9 1.8-2.6 3-4.5 3.3l-21.3 3.1 15.4 15c1.4 1.4 2.1 3.4 1.7 5.3l-3.6 21.2 19.1-10c0.7-0.4 1.7-0.7 2.6-0.7z" fill="#0C0C0C" p-id="6312"></path>
            <path d="M656.8 641.5l14.9 30.2 33.4 4.9-24.2 23.5 5.7 33.2-29.8-15.7-29.8 15.7 5.7-33.2-24.2-23.5 33.4-4.9z" fill="#F7C6B0" p-id="6313"></path>
            <path d="M686.6 739.3c-1 0-1.9-0.2-2.8-0.7l-27-14.2-27 14.2c-2 1.1-4.5 0.9-6.3-0.5-1.8-1.3-2.8-3.6-2.4-5.9l5.2-30.1-21.9-21.3c-1.6-1.6-2.2-4-1.5-6.2 0.7-2.2 2.6-3.8 4.8-4.1l30.2-4.4 13.5-27.4c1-2 3.1-3.3 5.4-3.3 2.3 0 4.4 1.3 5.4 3.3l13.5 27.4 30.2 4.4c2.3 0.3 4.1 1.9 4.8 4.1 0.7 2.2 0.1 4.6-1.5 6.2l-21.9 21.3 5.2 30.1c0.4 2.3-0.5 4.5-2.4 5.9-1 0.8-2.2 1.2-3.5 1.2z m-65.2-58.5l15.4 15c1.4 1.4 2.1 3.4 1.7 5.3l-3.6 21.2 19.1-10c1.7-0.9 3.8-0.9 5.6 0l19.1 10-3.6-21.2c-0.3-1.9 0.3-3.9 1.7-5.3l15.4-15-21.3-3.1c-2-0.3-3.6-1.5-4.5-3.3l-9.5-19.3-9.5 19.3c-0.9 1.8-2.6 3-4.5 3.3l-21.5 3.1z" fill="#0C0C0C" p-id="6314"></path>
            <path d="M753.3 433.4l15 30.2 33.3 4.9-24.1 23.5 5.7 33.2-29.9-15.7-29.8 15.7 5.7-33.2-24.1-23.5 33.3-4.9z" fill="#F7C6B0" p-id="6315"></path>
            <path d="M783.2 531.2c-1 0-1.9-0.2-2.8-0.7l-27-14.2-27 14.2c-2 1.1-4.5 0.9-6.3-0.5-1.8-1.3-2.8-3.6-2.4-5.9l5.2-30.1-21.9-21.3c-1.6-1.6-2.2-4-1.5-6.2 0.7-2.2 2.6-3.8 4.8-4.1l30.2-4.4 13.5-27.4c1-2 3.1-3.3 5.4-3.3 2.3 0 4.4 1.3 5.4 3.3l13.5 27.4 30.2 4.4c2.3 0.3 4.1 1.9 4.8 4.1 0.7 2.2 0.1 4.6-1.5 6.2L783.9 494l5.2 30.1c0.4 2.3-0.5 4.5-2.4 5.9-1 0.8-2.3 1.2-3.5 1.2z m-29.9-27.7c1 0 1.9 0.2 2.8 0.7l19.1 10-3.6-21.2c-0.3-1.9 0.3-3.9 1.7-5.3l15.4-15-21.3-3.1c-2-0.3-3.6-1.5-4.5-3.3l-9.5-19.3-9.5 19.3c-0.9 1.8-2.6 3-4.5 3.3l-21.3 3.1 15.4 15c1.4 1.4 2.1 3.4 1.7 5.3l-3.6 21.2 19.1-10c0.7-0.5 1.7-0.7 2.6-0.7z" fill="#0C0C0C" p-id="6316"></path>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '../js/Proposal.js';
import '../js/icons';

@Component
export default class Proposal extends Vue {

  get showDialog(): boolean {
    return this.$store.getters.getShowDialog;
  }

  get secret(): boolean {
    return this.$store.getters.getSecret;
  }

  get imgSrc(): boolean {
    return this.$store.getters.getImgSrc;
  }

  private playAudio(): void {
    const audio: HTMLAudioElement | null = document.querySelector('audio');
    if (audio) {
      audio.play();
    }
  }

  private empty(): void {
    const audio: HTMLAudioElement | null = document.querySelector('audio');
    if (audio) {
      audio.play();
    }
  }

  private closeDialog(): void {
    this.$store.dispatch('setShowDialog', false);
    this.$store.dispatch('setImg', '');
    clearInterval(this.$store.getters.getTimer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon{
  position: absolute;
  top: 0;
  left: 0;
  &:hover{
    cursor: pointer;
    font-size: 1.1em;
  }
}
#heart{
  left: 2rem;
}
#letter{
  left: 4rem;
}
#info{
  left: 6rem;
}
svg{
    bottom: 0;
    right: 0;
    position: absolute;
    width: 400px;
    height: 400px;
    @media screen and (max-width: 800px) { 
      width: 300px;
      height: 300px; 
    }
}
#text{
  font-size: 2rem;
  word-break: break-all;
  width: 50%;
  @media screen and (max-width: 800px) { font-size: 1rem }
  img{
    border-radius: 5px;
    width: 22rem;
    height: 22rem;
    transition: 1s;
    z-index: 20;
  }
}
span[data-descr]:hover::after{
    content: attr(data-descr);
    position: absolute;
    left: 0;
    top: 24px;
    min-width: 200px;
    border-radius: 10px;
    background-color:#ffddf1aa;
    padding: 12px;
    color: #555;
    font-size: 14px;
    z-index: 1;
}
.dialog {
	position: relative;
    .dialog-content {
        position: fixed;
        box-sizing: border-box;
        padding: 20px;
        width: 50%;
        min-height: 600px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background: rgb(238, 193, 219);
        box-shadow: 0px 0px 30px #f3d0de;
        transition: 0.3s ;
        z-index: 50002;
        .close{
          position: absolute;
          top: 0;
          right: .5em;
          cursor: pointer;
        }
        &:hover{
          box-shadow: 0px 0px 30px #ee82f1;
        }
         @media screen and (max-width: 800px) { width: 100%; }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 50001;
        background: rgba(0,0,0,.5);
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.icon {
  width: 1.5em; height: 1.5em;
  fill: currentColor;
}
</style>
