//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var donuts = parseInt(prompt('donuts:', '#'))
var guests = parseInt(prompt('guests:', '#'))
alert(
	`There are ${donuts} donuts and ${guests} guests. ${
	(function(){return guests <= donuts ? "Perfect!" : "That's not good at all..."}())}`
)

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
