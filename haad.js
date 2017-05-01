var chromecasts = require('./index.js')()

chromecasts.on('update', (player) => {
  console.log('all players: ', player)
  player.play('file:///Users/richard/Downloads/Monty.Python.and.the.Holy.Grail.1975.1080p.BluRay.x264.anoXmous/Monty.Python.and.the.Holy.Grail.1975.1080p.BluRay.x264.anoXmous_.mp4', {title: 'my video', type: 'video/mp4'})
})
