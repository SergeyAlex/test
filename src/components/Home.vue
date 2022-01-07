<template>
<div class="wrapper" >
	<h1>{{ msg }}</h1>
	<h3>{{hi_message}} </h3>
	<!-- <button v-if="this.$store.state.isButtonHome" @click="view_home">Home</button>
	<button v-if="this.$store.state.isButtonLogin" @click="view_login">Login</button>
	<button v-if="this.$store.state.isButtonLogout" @click="hide_login">Logout</button> -->
	<div class="button-group-go">
		<button v-if="this.$store.state.isButtonDrivers" @click="view_drivers" class="btn-big-green">GO</button>
		<img src="Arrow_right.svg" alt="" srcset="" width="40">
	</div>	
	<button v-if="this.$store.state.isButtonAdmins" @click="view_admins">Admins</button>
	</div>

</template>
<style>
h1, h2{
	color: #fff;
}
.wrapper{
	height: 100%;
	width: 100%;
	background-color: bisque;
	overflow: hidden;
	background-image: url(/bg-1.png);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
.gopaaa{	
	background-image: url(/bg-2.png);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
.wrapper-name{
	display: flex;
}
#wrapper-login, #wrapper-parts-chois{
	height: 100%;
	width: 100%;
	background-color: bisque;
	overflow: hidden;
	background-image: url(/bg-3.jpg);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
 #wrapper-parts-chois{
	 flex-direction: column;
 }
.wrapper-loader{
	height: 100%;
	width: 100%;
	background-color: bisque;
	overflow: hidden;
	background-image: url(/bg-3.jpg);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
.wrapper-loader > div, .wrapper-name > div{
	flex: 1 1 49%
}
.wrapper-shops{
	height: 100%;
	width: 100%;
	background-color: bisque;
	overflow: hidden;
	background-image: url(/bg-4.jpg);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
.wrapper-reg{
	height: 100%;
	width: 100%;
	background-color: bisque;
	overflow: hidden;
	background-image: url(/bg-5.jpg);
	background-repeat: no-repeat;
    background-size: cover;
	display:flex;
	justify-content: center;
	align-items: center;
}
.button-group-go img{
	margin-left: 14px;
}
.top-line::before{
	content: "";
    height: 20px;
    width: 100%;
    display: block;
    background: linear-gradient(
90deg
, #0e2b63 30.4785%, rgba(0, 0, 0, 0) 30.4785%), linear-gradient(
90deg
, #004f9f 52.15788%, rgba(0, 0, 0, 0) 52.15788%), linear-gradient(
90deg
, #00b1eb 64.72807%, rgba(0, 0, 0, 0) 64.72807%), linear-gradient(
90deg
, #ef7d00 73.22551%, rgba(0, 0, 0, 0) 73.22551%), linear-gradient(
90deg
, #ffbb00 79.62792%, rgba(0, 0, 0, 0) 79.62792%), linear-gradient(
90deg
, #50af47 86.69237%, rgba(0, 0, 0, 0) 86.69237%), linear-gradient(
90deg
, #afca0b 92.0305%, rgba(0, 0, 0, 0) 92.0305%), linear-gradient(
90deg
, #5a328a 97.0083%, rgba(0, 0, 0, 0) 97.0083%), linear-gradient(
90deg
, #e72582 100%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    top: 0px;
    left: 0px;

}
.btn-big-green{
	background-color: #50af47;
	color: #fff;
	border-radius: 50px;
    width: 100px;
    height: 100px;
    border: none;
	font-size: 2.5rem;
    font-weight: 700;
	text-align: center;
	margin: 0 auto;
}
.big-red-btn{
	background-color: #E72582;
	color: #fff;
	border-radius: 50px;
    width: 100px;
    height: 100px;
    border: none;
	font-size: 1.5rem;
    font-weight: 700;
	text-align: center;
	margin: 0 auto;
	position: absolute;
	bottom: 21px;
	right: 21px;
}
.btn-navi{
	background: transparent;
	border: none;
	color: white;
	font-size: 1.1rem;
	display: flex;
    align-items: flex-end;
}
.btn-navi span{
	font-size: 0.9rem;
	padding: 0 7px;
}
.navi{
	display: flex;
	justify-content: space-between;
	padding: 0 14px;
	margin-top: 30px;
	position: absolute;
	width: 100%;
}
/* INPUT BUTTONS */
.form_radio_btn {
	display: inline-block;
	margin: 4px;
	background: white;
}
.form_radio_btn input[type=radio] {
	display: none;
}
.form_radio_btn label {
	display: inline-block;
	cursor: pointer;
	user-select: none;
}
 
/* Checked */
.form_radio_btn input[type=radio]:checked + label {
	background: #ffe0a6;
}
 
/* Hover */
.form_radio_btn label:hover {
	color: #666;
}
.top-line{
	position:absolute;
	top:0;
	width: 100%;
}

</style>
<script>

export default {
	name: 'Home',
	props: {
	msg: String
	},
	data() {
		return {
		count: 0,
		backGraund:true
		
		}
	},
	computed: { 
		hi_message () {
			if (this.$store.state.isAdminLogin) {
				return "Администратор " + this.$store.state.currentAdminName
			} else {
				return ""
			}
		}
	},
	mounted(){
		if (this.$store.state.isHome == true) {
			this.$store.state.backGraund == true
			console.log("gopaaaaaaa" + this.$store.state.backGraund)
		}
		
		console.log(this.$store.state.isHome)
	},
	methods: {
		view_drivers() {
			this.$store.commit('HideHome')
			this.$store.commit('HideButtonDrivers')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('ShowDrivers')
			this.$store.commit('ShowButtonHome')
			if (this.$store.state.isHome == true) {
				console.log("Ooo da")
			}
		},
		view_admins() {
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
			this.$store.commit('HideButtonDrivers')
			this.$store.commit('ShowAdminsLoginForm')
		},
		hide_login () {
			this.view_home ()
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
