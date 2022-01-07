<template>
<div class="wrapper-name">
	<div class="all-block">
		<div class="left-block">
		<h2>Выберите водителя / <br>Интихоб ронанда:</h2>
	<div  id="loader_choice">
	<div class="form_radio_btn" v-for="(item , index) in this.$store.state.driversNames" v-bind:key=index >
				<input :id="item.id" type="radio" :value="item.id"  @change="asign_driver(item.id)" >
				<label :for="item.id">
					<img  src="face.png" alt="" srcset="">
					<span>
						{{item.dl_name}}
					</span>
					
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
		

</div>
	

</template>

<script>
import { ref } from 'vue'
import 'vue-next-select/dist/index.min.css'
export default {
  name: 'DrName',
  components: {
	// VueSelect
  },
  setup() {
    const model = ref(null)
	const options = ref [null]
    return {
      model,
      options
    }
  },
	data() {
		return {
			drname:0,
			timeStamp: new Date().toLocaleString(),
			ch_name:"",
			
		}
	},
	mounted() {

		for (const [key, value] of Object.entries(this.$store.getters.GetDrivers)) {
			console.log(`${key}: ${value}`);
		}
		if (this.$store.state.isShowDrivers == true) {
			console.log( this.$store.state.isShowDrivers)
			document.getElementById('one').classList.add('gopaaa')
		}
		if (this.$store.state.isShowLoaders == false){
			document.getElementById('one').classList.remove('gopaaTwo')
		}
	},
	methods: {
		asign_driver (index) {
			console.log(index)
			this.drname = index
			if (this.drname > 0) {
				this.$store.commit('SetDriverName',this.drname)
	///			this.$store.commit('ShowButtonHome')
				this.$store.commit('HideDrivers')
				this.$store.commit('ShowLoaders')
			}
			
			
		}
		
	}
}
</script>


