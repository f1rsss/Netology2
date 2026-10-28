export function sortHeroes(hero) {
    const sortHealth = [...hero].sort((a,b) => b.health - a.health);
    return sortHealth
}