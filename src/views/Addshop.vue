<template>
    <div id="addshop">
        <div id="topclass" class="row">
            <div class="col-md-1"></div>
            <div id="thisclass" class="col-md-2">
            </div> 
            <div class="col-md-9">
            </div>
        </div>
        <div id="addshopmsg">
            <table class="table">
                <tr>
                <td>
                 <input type="file" multiple id="inputFile"  name='myimg'>
                </td>
                </tr>

                <tr>
                <td>
                <label>类别：</label>
                <input type="text"  name='name' id="inputName">
                <!-- <div class="select">
                    <button>电视</button>
                    <button>冰箱</button>
                    <button>空调</button>
                    <button>洗衣机</button>
                </div> -->
                </td>
                </tr>

                <tr>
                <td>
                <label>品牌：</label>
                <input type="text"  name='classn' id="inputClassn">
                <!-- <div class="choose">
                    <button>电视</button>
                    <button>冰箱</button>
                    <button>空调</button>
                    <button>洗衣机</button>
                </div> -->
                </td>
                </tr>

                <tr>
                <td>
                <label>型号：</label>
                <input type="text" name='size' id="inputSize">
                </td>
                </tr>

                <tr>
                <td >
                <label> 价格：</label>
                <input type="text"  name='price' id="inputPrice">
                </td>
                </tr>

                <tr>
                <td >
                <label> 介绍：</label>
                <input  type="text" name='title' id="inputTitle">
                </td>
                </tr>
            
            <tr>
            <td>
                <button type="button" id="bt1" @click="add()" class="btn btn-info" >提交</button> 
            </td>
            
            </tr>
            </table>
            
        </div>     
    </div>
</template>
<script>
export default {
    methods:{
      add(){
            var data=new FormData();
          
             data.append('name',inputName.value);
             data.append('classn',inputClassn.value);
             data.append('size',inputSize.value);
             data.append('price',inputPrice.value);
             data.append('title',inputTitle.value);
            var files=inputFile.files;
          for(let item of files){data.append('myimg',item);
          }
         
          this.axios.post('http://127.0.0.1:3000/demo/addshopp',data).then((res)=>{
              alert( JSON.stringify(res.data));
          }).catch((err)=>{
              alert(err);
          })
      } 
    }
}     
</script>

<style>
#addshop{
    background-color:rgb(170, 164, 164);
    height:550px;
}
#topclass{
    height: 50px;
    background-color: white;
}
#thisclass{
    background-color: rgb(170, 164, 164);
}
#addshopmsg{
    margin-top: 50px;
    padding-left: 2%;
}
#addshopmsg table{
    width: 20%;
}
</style>  