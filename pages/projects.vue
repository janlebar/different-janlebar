<script setup>
import ProjectsGrid from '/components/projects/ProjectsGrid.vue';
import Header from '~/components/Header.vue'

const { data: projects } = await useAsyncData('projects', () => queryContent('projects').find());
</script>

<template>
    <Header />
	<div class="container mx-auto">
		<ProjectsGrid :allProjects="projects" />
	</div>
</template>
