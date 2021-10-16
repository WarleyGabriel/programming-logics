const https = require("https");

const getTopRatedFoodOutlets = async (city) => {
  let qtyPages = 1;
  let allResponses = [];

  for (let i = 1; i <= qtyPages; i++) {
    const url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${i}`;
    allResponses[i - 1] = await makeRequest(url);
    qtyPages = JSON.parse(allResponses[0]).total_pages;
  }

  const allResults = organizeResponses(allResponses);

  const highestRate = getHighestRate(allResults);

  return getOutletsByRate(allResults, highestRate);
};

const getOutletsByRate = (allResults, rate) => {
  return allResults.reduce((result, data) => {
    if (data.user_rating.average_rating === rate) {
      result.push(data.name);
    }
    return result;
  }, []);
};

const getHighestRate = (allResults) => {
  return allResults.reduce((result, data) => {
    if (result < data.user_rating.average_rating) {
      result = data.user_rating.average_rating;
    }
    return result;
  }, 0);
};

const makeRequest = async (url) => {
  return new Promise((resolve, reject) => {
    let body;

    https
      .get(url, (res) => {
        res.on("data", (result) => {
          body = result;
        });
        res.on("end", (result) => {
          resolve(Buffer.from(body).toString());
        });
      })
      .on("error", (error) => {
        console.error(error);
        reject(error);
      });
  });
};

const organizeResponses = (allResponses) => {
  return allResponses.reduce((result, response) => {
    JSON.parse(response).data.forEach((data) => {
      if (!result) {
        result = data;
      } else {
        result = [...result, data];
      }
    });
    return result;
  }, []);
};

getTopRatedFoodOutlets("Seattle")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
