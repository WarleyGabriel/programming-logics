const axios = require("axios");

async function main(name) {
  const instance = axios.create({
    baseURL: "https://serverest.dev",
    timeout: 1000,
  });

  const loginResponse = await login(instance);

  instance.defaults.headers.common["Authorization"] = {
    authorization: loginResponse.data.authorization,
  };

  const usersResponse = await instance({ method: "get", url: "/usuarios" });

  return usersResponse.data.usuarios.filter((user) => {
    return user.nome.toUpperCase().includes(name.toUpperCase());
  });
}

async function login(instance) {
  const result = await instance({
    method: "post",
    url: "/login",
    data: {
      email: "fulano@qa.com",
      password: "teste",
    },
  });
  return result;
}

// main("fulano").then((result) => {
//   console.log(result);
// });

module.exports = { main };
