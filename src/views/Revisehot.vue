<template>
    <div id="addshop">
        <div id="topclass" class="row">
            <div class="col-md-7"></div>
            <div id="thisclass" class="col-md-2">
            </div> 
            <div class="col-md-3">
            </div>
        </div>
        <div id="hotmsg" class="text-center">   
           <table class="table">
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入类型" class="name" v-model="name">
                </td>
                </tr>
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入型号" class="size" 
                    v-model="size">
                </td>
                </tr>
                <tr>
                
                <tr>
                <td>
                    <input type="button" value="添加" class="btn login btn-info" @click="add()">
                </td>
                <td>
                    <input type="button" value="移除" class="btn login btn-info" @click="del()">
                </td>
                </tr>
            </table>
        </div>     
    </div>
</template>
<script>
export default {
    data(){
      return {name:"",size:""}
    },
    methods:{
      add(){
        
        this.axios.post(
         "http://localhost:3000/demo/addshophot",
         `name=${this.name}&size=${this.size}`
        ).then(res=>{
             alert(JSON.stringify(res.data));
        })
      },
       del(){
        this.axios.post(
         "http://localhost:3000/demo/removeshophot",
         `name=${this.name}&size=${this.size}`
        ).then(res=>{
          
           alert(JSON.stringify(res.data));
        })
      }
    }
  }
</script>
<style>

#hotmsg{
    margin-top: 50px;
    padding-left: 55%;
}
#hotmsg table{
    width: 50%;
}

</style>