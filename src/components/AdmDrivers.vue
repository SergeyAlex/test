<template>
	<h2>Водители</h2>
	<div>
	<div>
	<table :key="componentKey">
		<tr v-for="(item) in this.$store.state.driversNames" v-bind:key=item.id> 
		<td>{{item.dl_name}}</td>
		<td> <button value="item.id"  @click="del_driver(item.id)">удалить</button></td> 
		</tr>
	</table>
	</div>
	<div>
		<h3>Добавить водителя</h3><br>
		<input type="text" v-model="new_name.dl_name" placeholder="новый водитель">
		<button @click="add_new">Add</button>
	</div>
	</div>
	<button  @click="to_admins">Back</button>
	
</template>

<script>
export default {
	name: 'AdmDrivers',
	data() {
		return {
			componentKey: 0,
			new_name:{
			"dl_name":null,
			"dr_del" : 0
			}
		}
	},
	methods: {
		forceRerender() {
			this.componentKey += 1;  
		},
		async updateMessage () {
			await this.$nextTick(function () {
				this.$store.commit('initialiseStore') // => 'обновлено'
			})	
		this.forceRerender()

		},
		to_admins () {
			this.$store.commit('HideAdminDrivers')
			this.$store.commit('ShowAdmins')
		},
		del_driver (index) {
			alert("delete =>"+index )
			let findIndex =  this.$store.state.driversNames.findIndex(x => x.id === index)			
			console.log("findIndex=="+findIndex)
			this.$store.state.driversNames.splice(findIndex, 1)
			this.$store.commit('DelDriver',index)
		},
		async add_new () {
///			alert("new="+this.new_name.dl_name)
			await this.$store.commit('AddNewDriver',this.new_name)
			await this.$store.commit('initialiseStore')
//			console.log("this.drivers==",this.drivers)
			this.new_name.dl_name = null
			this.updateMessage()

		}
	}
}
</script>