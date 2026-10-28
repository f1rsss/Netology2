import { getHealthStatus } from '../src/health';

describe('Функция getHealthStatus', () => {
  it('должна возвращать healthy, если здоровье больше 50', () => {
    const hero = { name: 'Mar', health: 90 };
    expect(getHealthStatus(hero)).toBe('healthy');
  });

  it('должна возвращать wounded, если здоровье равно 50', () => {
    const hero = { name: 'Маг', health: 50 };
    expect(getHealthStatus(hero)).toBe('wounded');
  });

  it('должна возвращать wounded, если здоровье равно 15', () => {
    const hero = { name: 'Маг', health: 15 };
    expect(getHealthStatus(hero)).toBe('wounded');
  });

  it('должна возвращать critical, если здоровье меньше 15', () => {
    const hero = { name: 'Маг', health: 14 };
    expect(getHealthStatus(hero)).toBe('critical');
  });
});
