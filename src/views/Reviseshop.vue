<template>
    <div id="addshop">
        <div id="topclass" class="row">
            <div class="col-md-5"></div>
            <div id="thisclass" class="col-md-2">
            </div> 
            <div class="col-md-5">
            </div>
        </div>
        <div id="rshopmsg" class="text-center">
            <table class="table">
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入型号" class="size" v-model="size">
                </td>
                </tr>
                <tr>
                <td colspan="2">
                    <input type="text" placeholder="输入价格" class="price" 
                    v-model="price">
                </td>
                </tr>
                <tr>
                
                <tr>
                <td>
                    <input type="button" value="确认" class="btn login btn-info" @click="drop()">
                </td>
                <td>
                    <input type="button" value="取消" class="btn login btn-info">
                </td>
                </tr>
            </table>
        </div>     
    </div>
</template>
<script>
export default {
    data(){
      return {size:"",price:""}
    },
    methods:{
     drop(){
        
        this.axios.post(
         "http://127.0.0.1:3000/demo/change",
         `size=${this.size}&price=${this.price}`
        ).then(res=>{
             alert(JSON.stringify(res.data));
        })
      }
  }
  }
</script>
<style>

#rshopmsg{
    margin-top: 50px;
    padding-left: 40%;
}
#rshopmsg table{
    width:40%;
}

</style>