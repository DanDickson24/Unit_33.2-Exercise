// $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//   .then(deckData => {
//     const deckId = deckData.deck_id;
//     return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
//   })
//   .then(cardData => {
//     const card = cardData.cards[0];
//     console.log(`${card.value} of ${card.suit}`);
//   })
//   .catch(error => {
//     console.log("Oops, there was an error:", error);
//   });

//   $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//   .then(deckData => {
//     const deckId = deckData.deck_id;
//     return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
//   })
//   .then(cardData => {
//     const cards = cardData.cards;
//     const card1 = cards[0];
//     const card2 = cards[1];
//     console.log(`Card 1: ${card1.value} of ${card1.suit}`);
//     console.log(`Card 2: ${card2.value} of ${card2.suit}`);
//   })
//   .catch(error => {
//     console.log("Oops, there was an error:", error);
//   });



    $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(data => {
        deckId = data.deck_id;
      })
      .catch(error => {
        console.log("Oops, there was an error:", error);
      });


    $('button').click(() => {
      $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(data => {
          const card = data.cards[0];
          $('#card-area').append(`<img src="${card.image}" alt="${card.value} of ${card.suit}">`);
          if (data.remaining === 0) {
            $('button').attr('disabled', true);
            console.log('No more cards in the deck.');
          }
        })
        .catch(error => {
          console.log("Oops, there was an error:", error);
        });
    });
    ;