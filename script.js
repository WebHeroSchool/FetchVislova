let url = 'https://api.github.com/users/KseniaVislova';

let userName = (url) => {
  let split = url.split('/');
  let name = split[4];
  if (name === undefined || name === null) {
    name = 'Информация о пользователе не доступна';
  }
  return name;
};

console.log(userName(url));

let createInfo = (url) => {
  fetch(url)
    .then((result) => result.json())
    .then((json) => {
      console.log(json.avatar_url);
      console.log(json.name);
      console.log(json.bio);
      console.log(json.html_url);

      let img = document.createElement('img');
      img.src = json.avatar_url;
      document.body.append(img);

      let createName = (json) => {
        let name = json.name;
        if (json.name === undefined || json.name === null) {
          name = 'Информация о пользователе не доступна';
        }

        return name;
      };

      console.log(createName(json));

      let name = document.createElement('a');
      name.href = json.html_url;
      name.innerHTML = ` ${createName(json)}`;
      document.body.append(name);

      let createBio = (json) => {
        let bio = json.bio;
        if (json.bio === undefined || json.bio === null) {
          bio = 'Информация о пользователе не доступна';
        }
        return bio;
      };

      let bio = document.createElement('p');
      bio.innerHTML = `${createBio(json)}`;
      document.body.append(bio);
    });
};
createInfo(url);
