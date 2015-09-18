<nav-bar>
  <a href="/ex" onclick={ navigateToHref }>ex</a>
  <a href="/" onclick={ navigateToHref }>graph</a>

  this.navigateToHref = function(e){
    router.navigate(e.target.pathname)
  }
</nav-bar>