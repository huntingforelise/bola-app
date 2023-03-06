export const filterGames = (arr, user) => {
  const myGames = [];
  for (const game of arr) {
    for (const id of game.subscribedlist) {
      if (id === user._id) {
        myGames.push(game);
      }
    }
  }
  return myGames;
};
