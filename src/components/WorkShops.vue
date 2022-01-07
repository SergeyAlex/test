<template>
<div class="wrapper-shops">
	<div class="all-block">
		<div class="left-block">
		<h2>Выберите склад / <br>Ро интихоб кунед, склад:</h2>
		<div id="workshop_choice_choice">
		<div id="workshop_choice" class="form_radio_btn" v-for="(item , index) in this.$store.state.workshop_names" v-bind:key=index>
			<input type="radio" value="item.id" :id="item.id" @change="to_register(item.id)">
			<label :for="item.id">
				<h6>
					{{item.wk_name}}
				</h6>
			</label>
		</div>
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
	
		
	<button class="big-red-btn"  @click="to_loaders">Back</button>
</div>
	
	
</template>

<script>
export default {
  name: 'Workshops',
	data() {
		return {
			workshop_number: 0
		}
	},
	methods: {
		to_register (index) {
			this.workshop_number = index
		///	console.log("workshop_number=="+this.workshop_number)
			if (this.workshop_number > 0) {
				this.$store.commit('SetWorkshop',this.workshop_number)
				this.$store.commit('HideWorkshops')
				this.$store.commit('ShowRegisters')
			} else {
				alert("Choose Workshop !!!")
			}
		},
		to_loaders () {
			this.$store.commit('ClearWorkshop')
			this.$store.commit('ClearLoader')
			this.$store.commit('HideWorkshops')
			this.$store.commit('ShowLoaders')
		}
	}
}
</script>

<style>
#workshop_choice_choice{
	display: flex;
	flex-direction: column;
	padding: 0 21px;
	height:40vh;
	overflow: scroll;
}
#workshop_choice_choice .form_radio_btn{
	min-width: 100%;
	min-height: 40px;
    display: flex;
    text-align: left;
    padding: 0 14px
	
}
#workshop_choice_choice .form_radio_btn label{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
}
</style>
