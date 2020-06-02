
import GameSavingLoader from '../js/GameSavingLoader';

test('load возвращает Promise с данными', (done) => {
  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  GameSavingLoader.load().then((response) => {
    expect(response).toBe(expected);
    done();
  });
});
