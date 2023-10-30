

<template>
	<div>
		<!-- About me -->
		<div><Header /></div>
		<div class="container mx-auto">
			<About />
		</div>

		<!-- About counter -->
		<!-- <AboutCounter /> -->

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutClients /> 
		</div>
	</div>
</template>



<script>
import About from '@/components/About';
import Header from '@/components/Header';
import AboutClients from '@/components/AboutClients';





// import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';

export default {
  components: {
    About,
  
		// AboutCounter,
	AboutClients,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>