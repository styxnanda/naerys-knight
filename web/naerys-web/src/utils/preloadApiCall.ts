export async function preloadCharCheck(charId: string): Promise<boolean> {
  const character = await fetch(
    `http://localhost:3000/characters/detail?id=${charId}`
  );

  if (!character.ok) {
    return false;
  } else {
    return true;
  }
}
