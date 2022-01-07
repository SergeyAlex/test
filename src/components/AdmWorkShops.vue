<template>
	<h2>Цеха</h2>
	<div>
	<div>
	<table>
		<tr v-for="(item , index) in this.$store.state.workshop_names" v-bind:key=index>
		<td>{{item.wk_name}}</td>
		<td> <button value="item.id"  @click="del_workshop(item.id)">удалить</button></td> 
		</tr>
	</table>
	</div>
	<div>
		<h3>Добавить цех</h3><br>
		<input type="text" v-model="new_name" placeholder="новый цех">
		<button @click="add_new">Add</button>
	</div>
	</div>
	
	<button  @click="to_admins">Back</button>

</template>

<script>
export default {
	name: 'AdmWorkShops',
	data () {
		return {
			new_name: null,
				}
			},
	methods: {
		to_admins () {
			this.$store.commit('HideAdminWorkShops')
			this.$store.commit('ShowAdmins')
		},
		del_workshop (index) {
		//	alert("delete =>"+index )
			let findIndex =  this.$store.state.workshop_names.findIndex(x => x.id === index)			
			console.log("findIndex=="+findIndex)
			this.$store.state.workshop_names.splice(findIndex, 1)
		},
		add_new () {
			alert("new="+this.new_name)
		}
		
	}
}
</script>