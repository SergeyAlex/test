<template>
<div id="wrapper-login">
<div class="block-admin">
	 <h2>Login:</h2>
	<div class="block-form-admin">
		<label for="admname">Имя :</label>
		<input id="admname" v-model="adm_name" placeholder="введите имя">  
		<label for="admpass">Пароль :</label>
		<input id="admpass" type="password" v-model="adm_pass" placeholder="введите пароль">  <br>
	</div>
	<div class="block-form-btn">
		<button class="btn-negreen"  @click="to_cancel">Cancel</button>
		<button class="btn-green"  @click="to_login">Login</button>
		
	</div>
	<div>
		{{str_err_login}}
	</div>

 </div>
</div>
 
	
</template>

<script>
import Axios from 'axios'
export default {
  name: 'AdminLogin',
  components: {
  },
	data() {
		return {
			adm_name: "",
			adm_pass:"",
			str_err_login:""
		}
	},
	methods: {
		to_cancel () {
			this.$store.commit('HideAdminsLoginForm')
			this.$store.commit('HideButtonLogout')
			this.$store.commit('ShowButtonLogin')
			this.$store.commit('ShowButtonDrivers')
			this.$store.commit('ShowHome')
			this.$store.commit('ShowButtonHome')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('InitSystems')
			this.$store.commit('HideSending')
			this.$store.commit('ClearDriverName')
			this.$store.commit('HideLoaders')
			this.$store.commit('ClearLoader')
			this.$store.commit('HideWorkshops')
			this.$store.commit('ClearWorkshop')
			this.$store.commit('HideRegisters')
			this.$store.commit('HideDrivers')
			this.$store.commit('ShowInformStr')
		},
		to_login () {
		Axios.get(this.$store.state.server_url+'loginadmin/'+this.adm_name+'/'+this.adm_pass)
			.then((response) => {
			console.log('ret after login ==',response)
			if (response.data) {
				this.$store.commit('SetAdminLogin',response.data)
				this.str_err_login=""
				this.$store.commit('SetCurrentAdminName',this.adm_name)
				this.$store.commit('HideAdminsLoginForm')
				this.$store.commit('ShowButtonLogin')
				this.$store.commit('ShowButtonLogout')
				this.$store.commit('ShowButtonAdmins')
				this.$store.commit('ShowAdmins')
		console.log('show admins ==',this.$store.state.isShowAdmins)			
			}
			else{
				this.str_err_login="Ошибка в имени или пароле!!"
			}
			})
			.catch(error => console.log(error))
			
		}
	}
}
</script>
<style>
.block-form-admin{
	display: flex;
	flex-direction: column;
	text-align: left;
	color: white;
}
.block-form-admin input{
	border-radius: 7px;
    border: 1px solid #aaa;
    height: 34px;
    padding: 0 14px;
}
.block-form-btn{
	display: flex;
	justify-content: space-between;
}
.block-form-btn button{
	border: none;
	padding: 7px;
	border-radius: 7px;
	color: #fff;
}
.btn-green{
	background: yellowgreen;
}
.btn-negreen{
	border:1px solid red !important;
	background: none;
}
</style>

