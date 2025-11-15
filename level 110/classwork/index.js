
const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("success");
      } else {
        reject("fail");
      }
    }, 2000);
  });

const handleRandomPromise = async () => {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

handleRandomPromise();


const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
