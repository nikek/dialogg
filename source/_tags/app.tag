<app>
  <example max={opts.max || 2} sample={opts.sample || 'bla'}></example>

  this.on('update', function() {
    console.log('update')
  })
</app>