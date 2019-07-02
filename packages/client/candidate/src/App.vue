<template>
	<div id="app">
		<section class="section">
			<div class="container">
				<h1 class="title">
					Section
				</h1>
				<h2 class="subtitle">
					A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
				</h2>
			</div>
		</section>
	</div>
</template>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
