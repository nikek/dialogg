<nav-bar>
  <a href="/" onclick={ navigateToHref }>ex</a>
  <a href="/graph" onclick={ navigateToHref }>graph</a>

  this.navigateToHref = function(e){
    opts.trigger('routeTo', e.target.pathname)
  }
</nav-bar>