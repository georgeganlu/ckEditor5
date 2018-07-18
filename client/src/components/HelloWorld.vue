<template>
  <div>
     <vue-ckeditor type="classic"  v-model="value1" :editors="editors1"
       :config='config'  @input="changeFun"></vue-ckeditor>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import VueCkeditor from 'vue-ckeditor5'
export default {
  name: 'HelloWorld',
  data () {
    return {
      value1: 'hello',
      value2: 'world',
      editors1: {
        classic: ClassicEditor,
        balloon: BalloonEditor
      },
      editors2: {
        inline: InlineEditor
      },
      config:{
        language:'en',
        ckfinder: {
            // uploadUrl: 'http://192.168.12.51:3002/ck/picture'
           uploadUrl: 'http://192.168.12.45:8181/file/uploads'
        }
      }
    }
  },
  methods:{
    changeFun () {
      console.log(this.value1);
    },
    _start () {

    }
  },
  created () {
    this._start();
  },
  components:{
    'vue-ckeditor': VueCkeditor.component
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
