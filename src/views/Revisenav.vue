<template>
    <div id="addshop">
        <div id="topclass" class="row">
            <div class="col-md-3"></div>
            <div id="thisclass" class="col-md-2">
            </div> 
            <div class="col-md-7">
            </div>
        </div>
        <div id="navmsg" class="text-center">
            <table class="table">
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入类型" class="name" v-model="name">
                </td>
                </tr>
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入品牌" class="classn" 
                    v-model="classn">
                </td>
                </tr>
                <tr>
                
                <tr>
                <td>
                    <input type="button" value="添加" class="btn login btn-info" @click="add()">
                </td>
                <td>
                    <input type="button" value="删除" class="btn login btn-info" @click="del()">
                </td>
                </tr>
            </table>
        </div>     
    </div>
</template>
<script>
export default {
    data(){
      return {name:"",classn:""}
    },
    methods:{
      add(){
        
        this.axios.post(
         "http://127.0.0.1:3000/demo/putin",
         `name=${this.name}&classn=${this.classn}`
        ).then(res=>{
             alert(JSON.stringify(res.data));
        })
      },
       del(){
        this.axios.post(
         "http://127.0.0.1:3000/demo/delete",
         `name=${this.name}&classn=${this.classn}`
        ).then(res=>{
          
           alert(JSON.stringify(res.data));
        })
      }
    }
  }
</script>
<style>

#navmsg{
    margin-top: 50px;
    padding-left: 20%;
}
#navmsg table{
    width: 30%;
}
</style>