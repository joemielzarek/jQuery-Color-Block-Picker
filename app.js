$(document).ready(function() {
    var colors = [];
    var result = '';
    var j = 0;
    // Random Index position in the array
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    j = randomNumber(0, 3);
    colors.push($('.container').append(
        '<div id="box" class="red" data-id="0"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="green" data-id="1"></div>'));
    colors.push($('.container').append(
        '<div id="box"class="yellow" data-id="2"></div>'));
    colors.push($('.container').append(
        '<div id="box" class="blue" data-id="3"></div>'));
    colors[0] = 'red';
    colors[1] = 'green';
    colors[2] = 'yellow';
    colors[3] = 'blue';

    function colorPick() {
        $('.pick-container').append('<div class="pickRandom">' +
            colors[j] + '</div>');
        return;
    }
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
});
