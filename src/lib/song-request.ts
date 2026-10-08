type SongRequest = {
  name: string;
  email: string;
  song: string;
  note: string;
};

export async function sendSongRequest(request: SongRequest) {
  if (!request.song && !request.note) return;

  const response = await fetch("https://formspree.io/f/mbdzejjy", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Your request wasn't sent. Please try again before leaving this page.");
  }
}
