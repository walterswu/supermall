<template>
  <div id="Userinfo">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <img class="left" src="https://img1.baidu.com/it/u=2048642745,1378977913&fm=26&fmt=auto&gp=0.jpg">
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
	export default {
		name: "Userinfo"
	}
</script>

<style scoped>
  #Userinfo {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #Userinfo img {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
    
  }

  .left {
    float: left;
  }

  /* #Userinfo .jiantou {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  } */

  #Userinfo .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #Userinfo .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    font-weight: 300;
  }

  /* #Userinfo .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  } */
</style>
