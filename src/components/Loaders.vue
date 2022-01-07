<template>
<div class="wrapper-loader">
	<div class="all-block">
		<div class="left-block">
		<h2>Выберите технику / <br>Ро интихоб кунед, техникаи:</h2>
		<div  id="loader_choice">
			<div class="form_radio_btn" v-for="(item , index) in this.$store.state.loaders_names" v-bind:key=index>
				<input :id="item.id" type="radio" :value="item.id"  @change="to_workshop(item.id)">
				<label :for="item.id">
					<img  src="pp.png" alt="" srcset="">
					{{item.l_name}}
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
		
	
	<button class="big-red-btn"  @click="to_drname">Back</button>
</div>
	
	
</template>
<style>
#loader_choice{
	height: 40vh;
	overflow: scroll;
	padding: 21px;
}
.form_radio_btn {
	display: inline-block;
	margin-right: 10px;
	min-width: 25%;
	max-width: 25%;
	min-height: 100px;
}
.form_radio_btn input[type=radio] {
	display: none;
}
.form_radio_btn label {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	user-select: none;
}
.form_radio_btn label img{
	margin: 0 auto;
	width: 100%;
}
 
/* Checked */
.form_radio_btn input[type=radio]:checked + label {
	background: #ffe0a6;
}
 
/* Hover */
.form_radio_btn label:hover {
	color: #666;
}
</style>
<script>
export default {
  name: 'Loaders',
	data() {
		return {
			activeColor: 'white',
			loader_number: 0
		}
	},
	mounted(){
		if(this.$store.state.isShowLoaders == true){
		//	console.log("It`s work " + this.$store.state.isShowLoaders)
			document.getElementById('one').classList.add('gopaaTwo')
		}
		if(this.$store.state.isShowDrivers == false){
			document.getElementById('one').classList.remove('gopaaa')
		}
	},
	methods: {
		to_workshop (index) {
			this.loader_number = index
			if (this.loader_number > 0) {
				this.$store.commit('SetLoader',this.loader_number)
				this.$store.commit('ShowWorkshops')
				this.$store.commit('HideLoaders')
			} else {
				alert("Choose loader !!!")
			}
			
		},
		to_drname () {
			this.$store.commit('ClearLoader')
			this.$store.commit('HideLoaders')
			this.$store.commit('ShowDrivers')
			this.$store.commit('ClearDriverName')
		}
	}
}
</script>


