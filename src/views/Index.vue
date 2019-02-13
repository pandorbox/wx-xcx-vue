<template><!--index.vue<body>-->
  <div id="container">
    <table></table>
    <div class="black">
      <table class="table">
        <tr>
          <td>
            <h4>登录小程序管理</h4>
          </td>
          <td>
            <a href="#" class="green">游客浏览</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="text" placeholder="请输入您的用户名" class="uname" v-model="uname">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" placeholder="请输入您的密码" class="upwd" 
            v-model="upwd">
          </td>
        </tr>
        <tr>
          <td class="autoLogin">
            <input type="checkbox">自动登录
          </td>
          <td>
            <a href="#">忘记密码？</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" value="登录" class="btn login btn-info" @click="signin()">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {uname:"qjk",upwd:"123456"}
    },
    methods:{
      signin(){
        this.axios.post(
         "http://127.0.0.1:3000/demo/login",
         `uname=${this.uname}&upwd=${this.upwd}`
        ).then(res=>{
           if(res.data==1){
            alert("登陆成功!");
           
            this.$router.push("/user/");
             //location.href=/
           }else{
             alert(res.data.msg);
           }
        })
      }
    }
  }
</script>
<style scoped>/*login.html <style>*/
  #container{
        width:100%;
        height:600px;
        background:url(/img/register/bg.png) no-repeat;
        margin:0 auto;
      }
      #container div.black{
        width:300px;
        height:300px;
        background:rgba(0,0,0,.3);
        margin:10% 0 0 60%;
      }
      #container div.black table{
        width:100%;
      }
      #container h4{
        color:#fff;
        margin:0;
      }
      #container a{
        color:#fff;
        text-decoration:none;
        font-size:12px;
      }
      input.uname,input.upwd{
        width:100%;
        height:35px;
        border:none;
        outline:0;
        padding-left:15px;
        box-sizing:border-box;
        background:#fff url(/img/register/yhm.png) no-repeat 97% center;
      }
      input.upwd{
        background-image:url(/img/register/mm.png);
      }
      input.login{
        width:100%;
        height:36px;
        margin-top:20px;
      }
      td.autoLogin{
        color:#fff;
        font-size:12px;
      }
</style>


