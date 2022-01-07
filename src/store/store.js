import { createStore } from "vuex" 
import Axios from 'axios'


const store = createStore({
	state:{
		name: "Alex",
		backGraund: false,
		isAdminLogin: false,
		isButtonLogin: true,
		isButtonLogout: false,
		isAdminLoginForm: false,
		isButtonDrivers: true,
		isButtonAdmins: false,
		isButtonHome: false,
		isHome: true,
		isShowDrivers: false,
		isShowLoaders: false,
		isShowWorkshops: false,
		isShowRegisters: false,
		isShowAdmins: false,
		isShowInformStr: true,
		isShowSending: false,
		currentOrderId: 0,
		currentDate:"",
		currentAdminName: "",
		currentDriverName: "",
		choisedLoader: "",
		choisedWorkshop: "",
//		toSaveDriver:{},
		driversNames:[{}],
		loader_systems:[{}],
		workshop_names: [{}],
		loaders_names: [{}],
		isShowAdminDrivers: false,
		isShowAdminLoaders: false,
		isShowAdminWorkShops: false,
		isShowAdminReports: false,
		server_url: 'http://**************/'
	},
	mutations: {
		async initialiseStore (state) {
//			let {data} =
			state.currentDate = new Date().toLocaleString()
			console.log("state.currentDate==",state.currentDate)
			state.driversNames=[{}]
			await Axios.get(state.server_url+'driversall')
			.then((response) => {
				console.log(response.data)
				state.driversNames = response.data
				console.log("store list clients==",state.driversNames)
//				console.log("store list clients==",data)
			})
			.catch(error => console.log(error))

			Axios.get(state.server_url+'workshopsall')
			.then((response) => {
//				console.log(response.data)
				state.workshop_names = response.data
			})
			.catch(error => console.log(error))
			
			Axios.get(state.server_url+'loadersall')
			.then((response) => {
//				console.log(response.data)
				state.loaders_names = response.data
			})
			.catch(error => console.log(error))
			
			Axios.get(state.server_url+'systemsall')
			.then((response) => {
				console.log(response.data)
				state.loader_systems = response.data
				state.loader_systems.forEach(item => item.value = "BAD")
			})
			.catch(error => console.log(error))
		},
		SetCurrentDate (state) {
			state.currentDate = new Date().toLocaleString()
			console.log("state.currentDate==",state.currentDate)
		},
		SetAdminLogout (state) {
			state.isAdminLogin = false
			state.currentAdminName = ""
		},
		SetAdminLogin (state,is_true) {
			state.isAdminLogin = is_true
		},
		SetCurrentOrderId (state,new_id) {
			state.currentOrderId = new_id
		},
		SetCurrentAdminName (state,name) {
			state.currentAdminName = name
		},
		ShowAdminsLoginForm (state) {
			state.isAdminLoginForm = true
		},
		HideAdminsLoginForm (state) {
			state.isAdminLoginForm = false
		},
		ShowButtonLogin (state) {
			state.isButtonLogin = true
		},
		HideButtonLogin (state) {
			state.isButtonLogin = false
		},
		ShowButtonLogout (state) {
			state.isButtonLogout = true
		},
		HideButtonLogout (state) {
			state.isButtonLogout = false
		},
		HideHome (state) {
			state.isHome = false
		},
		ShowHome (state) {
			state.isHome = true
		},
		ShowDrivers (state) {
			state.isShowDrivers = true
		},
		HideDrivers (state) {
			state.isShowDrivers = false
		},
		ShowLoaders (state) {
			state.isShowLoaders = true
		},
		HideLoaders (state) {
			state.isShowLoaders = false
		},
		ShowWorkshops (state) {
			state.isShowWorkshops = true
		},
		HideWorkshops (state) {
			state.isShowWorkshops = false
		},
		ShowRegisters (state) {
			state.isShowRegisters = true
		},
		HideRegisters (state) {
			state.isShowRegisters = false
		},
		ShowAdmins	(state) {
			state.isShowAdmins = true
		},
		HideAdmins	(state) {
			state.isShowAdmins = false
		},
		SetDriverName	(state, number) {
			// state.currentDriverName = name
			state.currentDriverName = state.driversNames.find(x => x.id === number)
		},		
		ClearDriverName	(state) {
			state.currentDriverName = ""
		},		
		HideButtonDrivers (state) {
			state.isButtonDrivers = false
		},		
		ShowButtonDrivers (state) {
			state.isButtonDrivers = true
		},		
		HideButtonAdmins (state) {
			state.isButtonAdmins = false
		},
		ShowButtonAdmins (state) {
			state.isButtonAdmins = true
		},
		ShowButtonHome	(state) {
			state.isButtonHome = true
		},
		HideButtonHome	(state) {
			state.isButtonHome = false
		},
		SetLoader	(state, number) {
//			state.choisedLoader = number
			state.choisedLoader = state.loaders_names.find(x => x.id === number)
		},
		ClearLoader	(state) {
			state.choisedLoader = ""
		},
		SetWorkshop	(state, number) {
//			state.choisedWorkshop = number
			state.choisedWorkshop = state.workshop_names.find(x => x.id === number)
		},
		
		ClearWorkshop	(state) {
			state.choisedWorkshop = ""
		},
		ShowModal	(state) {
			state.isShowModal = true
		},
		HideModal	(state) {
			state.isShowModal = false
		},
		ShowSending	(state) {
			state.isShowSending = true
		},
		HideSending	(state) {
			state.isShowSending = false
		},
		InitSystems (state) {
			state.loader_systems.forEach(function(item) {
				item.value = "BAD"
			})
		},
		HideInformStr (state) {
			state.isShowInformStr = false
		},
		ShowInformStr (state) {
			state.isShowInformStr = true
		},
		ShowAdminDrivers (state) {
			state.isShowAdminDrivers = true
		},
		HideAdminDrivers (state) {
			state.isShowAdminDrivers = false
		},
		ShowAdminLoaders (state) {
			state.isShowAdminLoaders = true
		},
		HideAdminLoaders (state) {
			state.isShowAdminLoaders = false
		},
		ShowAdminWorkShops (state) {
			state.isShowAdminWorkShops = true
		},
		HideAdminWorkShops (state) {
			state.isShowAdminWorkShops = false
		},
		ShowAdminReports (state) {
			state.isShowAdminReports = true
		},
		HideAdminReports (state) {
			state.isShowAdminReports = false
		},
		async AddNewDriver (state , newname ) {
			console.log("in add driver==",newname)
			let serv = state.server_url+'newdriver'
			await Axios.post(serv,newname)
			.then((response) => {
					console.log("newdriver response==",response.data)
				})
				.catch(error => console.log(error))	
		},
		DelDriver (state, del_id) {
			console.log("in del driver==",del_id)
			let serv = state.server_url+'drivers/'
			Axios.put(serv + del_id)
				.then((response) => {
					console.log("newdriver response==",response.data)
				})
				.catch(error => console.log(error))				
		}
	},
	getters: {
		GetCurrentOrderId: state => {
			return state.currentOrderId
		},
		GetCurrentDate: state => {
			return state.currentDate
		},
		GetDrivers: state => {
			return state.driversNames
		},
		GetCurrentDriver: state => {
			return  state.currentDriverName.dl_name
		},
		GetCurrentLoader: state => {
			return  state.choisedLoader.l_name
		},
		GetCurrentWorkshop: state => {
//			return  state.choisedWorkshop 
			return  state.choisedWorkshop.wk_name 
		},
		GetSystems: state => {
			return state.loader_systems
		},
		GetInformDriver: state => {
			return (state.isShowInformStr) ? state.currentDriverName.dl_name : ""
		},
		GetInformLoader: state => {
			return (state.isShowInformStr) ? state.choisedLoader.l_name : ""
		},
		GetInformWorkshop: state => {
//			return (state.isShowInformStr) ? state.choisedWorkshop : ""
			return (state.isShowInformStr) ? state.choisedWorkshop.wk_name : ""
		},
		
	}
})

export default store