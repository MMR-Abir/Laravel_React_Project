<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link href="favicon.png" type="image/x-icon" rel="shortcut icon">
		<link href="assets/css/master.css" rel="stylesheet">

		<script src="assets/plugins/jquery/jquery-1.11.3.min.js"></script>
		<script src="assets/js/modernizr.custom.js"></script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

<!-- SCRIPTS MAIN -->

<script src="assets/js/jquery-migrate-1.2.1.js"></script>
		<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
		<script src="assets/js/waypoints.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
		<script src="assets/js/modernizr.custom.js"></script>
		<script src="assets/js/cssua.min.js"></script>


		<!--SCRIPTS THEME-->

		<!-- Home slider -->
		<script src="assets/plugins/slider-pro/dist/js/jquery.sliderPro.js"></script>
		<!-- Sliders -->
		<script src="assets/plugins/owl-carousel/owl.carousel.min.js"></script>

		<script src="assets/plugins/flexslider/jquery.flexslider.js"></script>
		<!-- Modal -->
		<script src="assets/plugins/prettyphoto/js/jquery.prettyPhoto.js"></script>
		<!-- Select customization -->
		<script src="assets/plugins/bootstrap-select/dist/js/bootstrap-select.js"></script>
		<!-- Chart -->
		<script src="assets/plugins/rendro-easy-pie-chart/dist/jquery.easypiechart.min.js"></script>
		<!-- Animation -->
		<script src="assets/plugins/scrollreveal/dist/scrollreveal.min.js"></script>
		<!-- Menu for android-->
		<script src="assets/js/doubletaptogo.js"></script>

		<!-- Custom -->
		<script src="assets/js/custom.js"></script>
    </body>
</html>
