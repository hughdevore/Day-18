var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'PlayGame'
		);
	

		this.$textBox = $('#text-box');
		this.$clickButton = $('#click-button');

		this.$clickButton.on('click', this.PlayGame);

		this.$guess = this.$textBox.val();

		console.log(this.$guess);

	},

	PlayGame: function($guess) {

		var number = Math.round(Math.random() * (100 - 0) + 0);	

		var win = false;

		if (($guess >=0 || $guess <=100) === false) {
			alert("You must enter a number..");
		}

		else if (($guess >=0 || $guess <=100) === true && $guess > number) {
			alert("Sorry, it's LOWER than that.");
		} 

		else if (($guess >=0 || $guess <=100) === true && $guess < number) {
			alert("Sorry, it's HIGHER than that.");
		}

		else if ($guess === number) {
			alert("You found the number, well played!!");
		}

	}
});