// let favNumber = 24;
// let baseURL = "http://numbersapi.com";

// // 1.
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//   console.log(data);
// });

// // 2.
// let favNumbers = [7, 11, 22];
// $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
//   console.log(data);
// });

// // 3.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${baseURL}/${favNumber}?json`);
//   })
// ).then(facts => {
//   facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });


const favNumber = 24;
const baseURL = "http://numbersapi.com";

// 1.
const getNumberFact = async () => {
  const data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
};

getNumberFact();

// 2.
const getMultipleNumberFacts = async () => {
  const favNumbers = [7, 11, 22];
  const data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
};

getMultipleNumberFacts();

// 3.
const getMultipleFacts = async () => {
  const facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
  );
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
};

getMultipleFacts();