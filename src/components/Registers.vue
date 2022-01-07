<template>
<div class="wrapper-reg">
	<div class="all-block">
		<div class="left-block">

	<h2>Выберите технику / <br>Ро интихоб кунед, техникаи:</h2>
	<div class="form_radio_btn"  v-for="item  in this.$store.state.loader_systems" :key="item.id">
		<input :id="item.id" type="checkbox" v-model="check_system"  v-bind:value="item" />
		<label :for="item.id">{{item.ldsys_name}}</label>
	</div>
	</div>
	<div class="right-block">
		<h2>Сегодня:</h2><br>
		<h2>{{ this.$store.getters.GetCurrentDate}}</h2>
		{{this.$store.getters.GetInformDriver}}
		{{this.$store.getters.GetInformLoader}}
		{{this.$store.getters.GetInformWorkshop}}
	</div>
	</div>
		

	<button class="big-red-btn"  @click="to_workshops">Back</button>
	<button  @click="to_save">Save</button>
	<br>
</div>

</template>

<script>
//import { ref } from 'vue'
export default {
  name: 'Registers',
	data() {
		return {
			check_system: [],
			sysoptions: []
		}
	},
	methods: {
		to_save () {
			var el = this
			this.$store.state.loader_systems.forEach(function(item) {
				if (el.check_system.find(x => x.id === item.id)) {
//					console.log("item.id=="+item.id)
					item.value="OK"
				}			
			})
			this.$store.commit('HideRegisters')
			this.$store.commit('HideInformStr')
			this.$store.commit('ShowSending')
//			console.log(this.$store.state.loader_systems)
		},
		to_workshops () {
			this.$store.commit('HideRegisters')
			this.$store.commit('ShowWorkshops')
			this.$store.commit('ClearWorkshop')
		},
		onChange () {
		}
	}
}
</script>
<style>
.all-block{
	display: flex;
}
.all-block div{
	    flex: 1 1 49%;
}
.all-block .left-block, .all-block .right-block{
	padding: 0 14px;
}
</style>

