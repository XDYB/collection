function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = ['Hello', 'webpack'].join('');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.addEventListener('click', () => {
    import(/* webpackChunkName: "async" */ './async').then((module) => {
      const print = module.getInfo;
      print('onclick:');
    });
  });

  return element;
}

document.body.appendChild(component());
