document.addEventListener('DOMContentLoaded', function () {
  document.title = "Glam Up My Markup by @ayusudi";
  let metaTag = document.createElement('meta');
  let link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './asset/logo.png';
  document.getElementsByTagName('head')[0].appendChild(link);
  metaTag.setAttribute('name', 'DEV Challenge Frontend Challenge by @ayusudi');
  metaTag.setAttribute('content', 'Glam Up My Markup by @ayusudi ; Frontend Challenge ; DEV Challenge');
  document.head.appendChild(metaTag);

  function watcher() {
    let selectElement = document.getElementById('activity-select');
    selectElement.addEventListener('change', function () {
      let selectedValue = document.getElementById('activity-select').value;
      let list = ['hiking', 'canoeing', 'fishing', 'crafts', 'archery'];
      if (!list.includes(selectedValue)) selectedValue = 'default';
      document.body.style.backgroundImage = `url('./asset/${selectedValue}.gif')`;
    });
  }

  watcher();
});