<template>
<div id="one"  >
<div class="top-line">
	<div class="navi">
		<button class="btn-navi" @click="view_home">
			<img src="home.svg" alt="" srcset=""> <span>Главная</span> </button>
		<button class="btn-navi" v-if="this.$store.state.isButtonLogin" @click="view_login">
			<span>Login</span>
			
			<img src="user.svg" alt="" srcset="">
		</button>
		<button class="btn-navi" v-if="this.$store.state.isButtonLogout" @click="hide_login">
			Logout
			<img src="user.svg" alt="" srcset="">
		</button>
	</div>
</div>
	
	
	<Home v-if="this.$store.state.isHome" />
	<DrName v-if="this.$store.state.isShowDrivers" msg="hi"/>
	<Loaders v-if="this.$store.state.isShowLoaders" msg="hi"/>
	<Workshops v-if="this.$store.state.isShowWorkshops"/>	
	<Registers v-if="this.$store.state.isShowRegisters"/>
	<InformSend v-if="this.$store.state.isShowSending"/>
	<Admins v-if="this.$store.state.isShowAdmins"/>
	<AdmDrivers v-if="this.$store.state.isShowAdminDrivers"/>
	<AdmLoaders v-if="this.$store.state.isShowAdminLoaders"/>
	<AdmWorkShops v-if="this.$store.state.isShowAdminWorkShops"/>
	<AdmReports v-if="this.$store.state.isShowAdminReports"/>
	<AdminLogin v-if="this.$store.state.isAdminLoginForm"/>
</div>

</template>

<script>
import Home from './components/Home.vue'
import DrName from './components/DrName.vue'
import Loaders from './components/Loaders.vue'
import Workshops from './components/WorkShops.vue'
import Registers from './components/Registers.vue'
import InformSend from './components/InformSend.vue'
import Admins from './components/Admins.vue'
import AdmDrivers from './components/AdmDrivers.vue'
import AdmLoaders from './components/AdmLoaders.vue'
import AdmWorkShops from './components/AdmWorkShops.vue'
import AdmReports from './components/AdmReports.vue'
import AdminLogin from './components/AdminLogin.vue'

export default {
  name: 'App',
  components: {
	Home,
	DrName,
	Loaders,
	Workshops,
	Registers,
	InformSend,
	Admins,
	AdmDrivers,
	AdmLoaders,
	AdmWorkShops,
	AdmReports,
	AdminLogin
  },
	data () {
	return {
    showModal: true
	}
  },
	mounted() {
		this.$store.commit('initialiseStore')
		console.log(this.$store.state.isHome)
		
	},
	methods:{
		view_drivers() {
			this.$store.commit('HideHome')
			this.$store.commit('HideButtonDrivers')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('ShowDrivers')
			this.$store.commit('ShowButtonHome')
		},
		view_admins() {
			this.$store.commit('HideHome')
			this.$store.commit('HideButtonDrivers')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('ShowButtonHome')
			this.$store.commit('ShowAdmins')
		},
		view_home () {
			this.$store.commit('ShowHome')
			this.$store.commit('ShowButtonHome')
			this.$store.commit('ShowButtonDrivers')
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
//// admins
			this.$store.commit('HideAdmins')
			this.$store.commit('HideAdminDrivers')
			this.$store.commit('HideAdminLoaders')
			this.$store.commit('HideAdminWorkShops')
			this.$store.commit('HideAdminReports')
			this.$store.commit('HideAdminsLoginForm')
			this.$store.commit('HideButtonLogout')
			this.$store.commit('ShowButtonLogin')
			this.$store.commit('SetAdminLogout')

		},
		view_login () {
			this.view_home ()
			this.$store.commit('HideHome')
			this.$store.commit('HideButtonDrivers')
			this.$store.commit('ShowAdminsLoginForm')
		},
		hide_login () {
			this.view_home ()
			this.$store.commit('HideHome')
			this.$store.commit('SetAdminLogout')
			this.$store.commit('HideAdminsLoginForm')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('HideButtonLogout')
			this.$store.commit('ShowButtonLogin')
			this.$store.commit('ShowButtonDrivers')
		}

	} 	
}  
</script>

<style>
html, body{
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}
#one{
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.btn-navi{
	display: flex;
}
.btn-navi img{
	margin-bottom: 3px;
}
</style>
