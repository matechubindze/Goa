const checkNumber = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      num > 10 ? resolve("resolve") : reject("reject");
    }, 2000);
  });

const handlePromise = async () => {
  try {
    const result = await checkNumber(15);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

handlePromise();
