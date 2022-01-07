<template>
	<div>
		<h2>Данные для менеджера:</h2>
		<br>
		Водитель:{{$store.getters.GetCurrentDriver}}
		{{$store.state.currentDriverName}}
		<br>
		Погрузчик №:  {{$store.getters.GetCurrentLoader}}
		{{$store.state.choisedLoader}}
		<br>
		Цех: {{$store.getters.GetCurrentWorkshop}}
		{{$store.state.choisedWorkshop}}
		<br>
		<ol id="list_registers" >
			<li v-for="item in $store.state.loader_systems" :key="item.id" style="text-align:left">
			{{item.ldsys_name}} - {{item.value}}
			</li>
		</ol>
	</div>
	<div>
	<button  @click="to_cancel">Отмена</button>
	<button  @click="to_send">Отослать</button>
	</div>
</template>

<script>
import Axios from 'axios'
export default {
	name: 'InformSend',
	data() {
		return {
		}
	},
	methods: {
		to_cancel () {
			this.$store.commit('HideSending')
			this.$store.commit('InitSystems')
			this.$store.commit('ShowRegisters')
			this.$store.commit('ShowInformStr')
		},
		async to_send ()	{
			console.log("to_send==",this.$store.getters.GetCurrentDriver,
			this.$store.getters.GetCurrentLoader,this.$store.getters.GetCurrentWorkshop,
			this.$store.state.loader_systems)
			const data = {
				id_driver: this.$store.state.currentDriverName.id,
				id_loader: this.$store.state.choisedLoader.id,
				id_workshop: this.$store.state.choisedWorkshop.id
			}
			var id_order=0
			let serv = this.$store.state.server_url+'orders'
			await Axios.post(serv,data)
			.then((response) => {
					console.log("AddNewOrder response111==",response.data)
					this.$store.state.currentOrderId = response.data
					//this.SetCurrentOrderId (response.data)
					id_order = response.data
					console.log("state.currentOrderId response==",id_order)
					this.$store.state.loader_systems.forEach( item=> {
						const data1 = {
							id_dr_order: id_order,
							id_loader_sys: item.id,
							value_sys: item.value
						}
						let serv = this.$store.state.server_url+'tablesys'
						Axios.post(serv,data1)
						.then((response) => {
							console.log(" AddNewInTableSys response==",response.data)
						})
						.catch(error => console.log(error))
					})
			})
			.catch(error => console.log(error))	
			
			
			
			this.$store.commit('HideSending')
			this.$store.commit('HideButtonHome')
			this.$store.commit('ShowButtonDrivers')
			this.$store.commit('HideButtonAdmins')
			this.$store.commit('ShowHome')
			//// code... sendind then clear systems
			this.$store.commit('ShowInformStr')
			this.$store.commit('ClearLoader')
			this.$store.commit('ClearWorkshop')
			this.$store.commit('ClearDriverName')
			this.$store.commit('InitSystems')
		}
	}
}
</script>