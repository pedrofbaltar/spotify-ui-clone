function likeUnlike() {
  const likeButton = document.querySelector('.likeButton');

  if (likeButton.innerHTML === 'favorite_border') {
    likeButton.innerHTML = 'favorite';
  } else {
    likeButton.innerHTML = 'favorite_border';
  };
}; // Like/Unlike

function playPause() {
  const playButton = document.querySelector('.playButton');

  if (playButton.innerHTML === 'play_circle_outline') {
    playButton.innerHTML = 'pause_circle_outline';
  } else {
    playButton.innerHTML = 'play_circle_outline';
  };
}; // Pause/Play

function muteUnmute() {
  const volumeControl = document.querySelector('.volumeControl');

  if (volumeControl.innerHTML === 'volume_up') {
    volumeControl.innerHTML = 'volume_off';
  } else {
    volumeControl.innerHTML = 'volume_up';
  };
}; // Mute/Unmute