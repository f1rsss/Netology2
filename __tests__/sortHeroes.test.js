import { sortHeroes } from "../src/sortHeroes";

describe('Функция sortHeroes', () => {
    it('Должно сортировать героев по убыванию', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ];

        const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroes(heroes)).toEqual(expected);
    // toBe работать не будет
    expect(sortHeroes(heroes)).not.toBe(expected);
    });
});