'use strict';
const player = LivePhotosKit.Player(document.getElementById('livePhotoElement'));
player.photoSrc = 'http://localhost:3001/image';
player.videoSrc = 'http://localhost:3001/file';

// 
player.addEventListener('canplay', (e) => console.log('player ready', e)); // dispatch after 'ended' event ???
player.addEventListener('error', (e) => console.log('player load error', e));
player.addEventListener('ended', (e) => console.log('player finished playing through', e));

document.getElementById('play').addEventListener("click", () => player.play());
document.getElementById('stop').addEventListener("click", () => player.stop());
