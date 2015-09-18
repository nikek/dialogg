<app>
  <nav-bar trigger={opts.trigger}></nav-bar>

  <graph show={opts.route == '/graph'}></graph>
  <example show={opts.route == '/'} max={opts.max || 2} sample={opts.sample || 'bla'}></example>

</app>