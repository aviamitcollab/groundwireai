export type DevToArticle = {
  title: string;
  url: string;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
};

export async function getDevToArticles(
  username: string,
  limit = 6
): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=${limit}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((post) => ({
      title: post.title,
      url: post.url,
      publishedAt: post.readable_publish_date,
      readingTimeMinutes: post.reading_time_minutes,
      tags: post.tag_list ?? [],
    }));
  } catch {
    return [];
  }
}
