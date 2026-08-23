

import type { getPublishedNews } from "@/lib/news";

export type NewsItem = Awaited<
  ReturnType<typeof getPublishedNews>
>[number];