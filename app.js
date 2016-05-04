$(document).ready(function() {
    var colors = [];
    var result = '';
    var j = randomNumber(0, 11);

// Append colored containers to DOM and push data-ids to colors[] array
    colors.push($('.container').append(
        '<div id="box" class="red" data-id="0"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="green" data-id="1"></div>'));
    colors.push($('.container').append(
        '<div id="box"class="yellow" data-id="2"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="blue" data-id="3"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="purple" data-id="4"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="black" data-id="5"></div>'));
    colors.push($('.container').append(
        '<div id="box"class="brown" data-id="6"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="grey" data-id="7"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="teal" data-id="8"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="orange" data-id="9"></div>'));
    colors.push($('.container').append(
        '<div id="box"class="pink" data-id="10"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="peachpuff" data-id="11"></div>'));

// Set color[i] index to the preferred colors of game
    colors[0] = 'red';
    colors[1] = 'green';
    colors[2] = 'yellow';
    colors[3] = 'blue';
    colors[4] = 'purple';
    colors[5] = 'black';
    colors[6] = 'brown';
    colors[7] = 'grey';
    colors[8] = 'teal';
    colors[9] = 'orange';
    colors[10] = 'pink';
    colors[11] = 'peachpuff';

// Call the function to send color that is to be selected to DOM
    colorPick();

    $(this).on('click', '#box', function() {
        if (j == $(this).data('id')) {
            location.reload();
            alert('Sucess!');
        } else {
            alert('Sorry, choose again.');
        }
        return;
    });

// Generate random number
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

 // Append color that is to be selected to DOM
    function colorPick() {
        $('.pick-container').append('<div class="pickRandom">' +
            colors[j] + '</div>');
        return;
    }

});
