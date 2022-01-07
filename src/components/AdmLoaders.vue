<template>
	<h2>Погрузчики</h2>
	<div>
	<div>
	<table>
		<tr v-for="(item , index) in this.$store.state.loaders_names" v-bind:key=index>
		<td>{{item.l_name}}</td>
		<td> <button value="item.id"  @click="del_loader(item.id)">удалить</button></td> 
		</tr>
	</table>
	</div>
	<div>
		<h3>Добавить погрузчик</h3><br>
		<input type="text" v-model="new_name" placeholder="новый погрузчик">
		<button @click="add_new">Add</button>
	</div>
	</div>
	
	<button  @click="to_admins">Back</button>

</template>

<script>
export default {
	name: 'AdmLoaders',
	data() {
		return {
			new_name:""
		}
	},	
	methods: {
		to_admins () {
			this.$store.commit('HideAdminLoaders')
			this.$store.commit('ShowAdmins')
		},
		add_new () {
			alert("new="+this.new_name)
		},
		del_loader (index) {
		//	alert("delete =>"+index )
			let findIndex =  this.$store.state.loaders_names.findIndex(x => x.id === index)			
			console.log("findIndex=="+findIndex)
			this.$store.state.loaders_names.splice(findIndex, 1)
		},
		
	}
}
</script>