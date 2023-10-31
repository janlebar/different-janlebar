<script>
import ProjectsGrid from '/components/projects/ProjectsGrid.vue';
import Header from '~/components/Header.vue'

export default {
    components: {
      Header,
    },
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
};
</script>

<template>
    <Header />
	<div class="container mx-auto">
		<ProjectsGrid />
	</div>
</template>
