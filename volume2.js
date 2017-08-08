window.SetVolume2 = function(val)
{
    var player = document.getElementById('song2');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}