
const apiToken: string = 'BQC6otvIg2GnkcS9f3doiOOOK3Gye73kgLkKL4BsYB8kwD5YdgMZXTrjzrqeapAzzCwEKYbwWcHORTHYhWqr6pV-DUf4-I3-JCwRRI-JvWbXQ9YgtrupM_yyq_4V5cPtyesZbQzUv68dUj_S4gBJLHkIVklfcCPgqY1Xl8kTUlPTq_bGNqqATK_o-Lwz-olT6HerXJshBvglJllibds';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};