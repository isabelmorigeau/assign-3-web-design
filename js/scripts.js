

console.log("Hello from scripts.js!");


$('#happy').on("click", function() {
    $('#sentence').html('<h2>Thanks for returning my book in such good condition!</h2>')
    $('#picture').html('<img src="images/Happy.png">');
});

$('#mad').on("click", function() {
    $('#sentence').html('<h3>Please never dog ear my books again. You can use a bookmark if you want to save your page in my books. In your own books it is fine but not when someone else lets you borrow their favourite book.</h3>')
    $('#picture').html('<img src="images/Mad.png">');
});

$('#extreme-mad').on("click", function() {
    $('#sentence').html('<h2>Are you kidding me? YOU WROTE IN MY ALREADY ANNOTATED BOOK?! I will not be lending you any other books anytime soon.</h2>')
    $('#picture').html('<img src="images/ExtremeMad.png">');
});

$('#extreme-happy').on("click", function() {
    $('#sentence').html('<h2>So happy you loved it! Now we can share a favouirte book! Thanks for taking such good care of it!</h2>')
    $('#picture').html('<img src="images/ExtremeHappy.png">');
});

$('#neutral').on("click", function() {
    $('#sentence').html('<h2>Sorry to hear you did not like it. Glad you read it anyways!</h2>')
    $('#picture').html('<img src="images/Neutral.png">');
});