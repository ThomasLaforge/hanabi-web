<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Hanabie - the guy</title>
	<link rel="stylesheet" href="assets/css/app.css">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"> -->
</head>
<body>

	<!-- Header -->

	<header>
		<img class="header-img" src="assets/img/HanabiHeader-600x148.jpg" alt="Bannière du jeu hanabi avec de jolis feux d'artifice.">
	</header>
	

	<!-- Container -->

	<div class="container">	
		<div class="board row">
			
			<!-- Console -->

			<div class="row">
				<div class="col-xs-12" id="console"></div>
			</div>
			
			<!-- Discard -->

			<div class="col-xs-12 col-md-6 discard">
				<div id="discard-red" class="discard-color discard-color-red">
					<div class="discard-head discard-head-red">&nbsp;</div>
				</div>
				<div id="discard-blue" class="discard-color discard-color-blue">
					<div class="discard-head discard-head-blue">&nbsp;</div>
				</div>
				<div id="discard-green" class="discard-color discard-color-green">
					<div class="discard-head discard-head-green">&nbsp;</div>
				</div>
				<div id="discard-yellow" class="discard-color discard-color-yellow">
					<div class="discard-head discard-head-yellow">&nbsp;</div>
				</div>
				<div id="discard-white" class="discard-color discard-color-white">
					<div class="discard-head discard-head-white">&nbsp;</div>
				</div>
			</div>

			<!-- Hands of each players -->

			<div class="col-xs-6 hands">
				<div class="row deck-player-1">
					<div class="col-xs-2 col-xs-offset-1 card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
				</div>
				<div class="row deck-player-2">
					<div class="col-xs-2 col-xs-offset-1 card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>
					<div class="col-xs-2  card" color=""></div>			
				</div>
			</div>

		</div>

		<!-- Field : all cards played -->
		<div class="row col-xs-12 field">
			<div class="field-elt field-red" id="field-red">&nbsp;</div>
			<div class="field-elt field-blue" id="field-blue">&nbsp;</div>
			<div class="field-elt field-green" id="field-green">&nbsp;</div>
			<div class="field-elt field-yellow" id="field-yellow">&nbsp;</div>
			<div class="field-elt field-white" id="field-white">&nbsp;</div>
		</div>

		<!-- Info : all others informations -->
		<div class="row col-xs-12 field">
			
			<!-- Errors -->
			<div class="col-xs-6 error">
				<div class="error-title">Nombre d'erreurs : </div>
				<div class="error-value" id="error-value">0</div>
			</div>

			<!-- Number of cards into the deck -->
			<div class="col-xs-6 nb-deck-cards">
				<div class="nb-deck-cards-title">Nombre de cartes restantes : </div>
				<div class="nb-deck-cards-value" id="nb-deck-cards-value"></div>
			</div>

		</div>

	</div>
	
	
	<!-- Footer -->
	
	<footer>Hi my name is Thomas Laforge and i developped this app for people who love to play Hanabie :)</footer>

	<!-- Scripts -->
	
		<!-- Jquery -->
			<!-- Local -->
		    <script src="assets/js/jquery.min.js"></script>
		    
		    <!-- cdn -->
		    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> -->
		
		<!-- Bootstrap -->
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha256-Sk3nkD6mLTMOF0EOpNtsIry+s1CsaqQC1rVLTAy+0yc= sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		
		<!-- code spécifique -->
		<script src="assets/js/app.js"></script>
</body>
</html>