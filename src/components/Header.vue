<template>
  <header>
    <div id="head" class="row">
      <div class="col-md-8 text-center">欢迎xx登录您的小程序管理</div>
      <div class="col-md-2">
        <router-link to="/">
          <button class="btn ">退出</button>
        </router-link>
        
      </div>
      <div class="col-md-2">
        <button class="btn ">修改密码</button>
      </div>
    </div>
    <div id="choose" class="row">
      <div class="col-md-1"></div>
      <div class="col-md-2">
        <router-link to="/user/addshop">
          <button class="btn btn-info">上传商品</button>
        </router-link>
      </div>
      <div class="col-md-2">
        <router-link to="/user/rnav">
          <button class="btn btn-success">修改导航</button>
        </router-link>
        
      </div>
      <div class="col-md-2">
        <router-link to="/user/rshop">
        <button class="btn btn-primary">修改商品</button>
        </router-link>
      </div>
      <div class="col-md-2">
        <router-link to="/user/rhot">
        <button class="btn btn-danger">修改热销</button>
        </router-link>
      </div>
      <div class="col-md-2">
        <router-link to="/user/rbanner">
          <button class="btn btn-warning">修改轮播</button>
        </router-link>
      </div>
      <div class="col-md-1">
      </div>
    </div>
  </header>
</template>

<style>
  #head{
    padding-top: 10px;
    height: 50px;
    background-color: aliceblue;
  }
  #choose{
    padding-top: 10px;
    height:60px;
    background-color: rgb(170, 164, 164);
  }
  #choose .btn{
    width: 100%;
  }
 
</style>
  