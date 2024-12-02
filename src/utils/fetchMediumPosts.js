import Parser from "rss-parser";
import sanitizeHtml from "sanitize-html";

const parser = new Parser();

const extractImage = (content) => {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/;
  const match = content?.match(imgTagRegex);
  return match ? match[1] : null;
};

export const fetchMediumPosts = async () => {
  const feed = await parser.parseURL("https://medium.com/feed/@naymhossen1b");

  return feed.items.map((post) => {
    const image = extractImage(post["content:encoded"]) || post.enclosure?.url;
    return {
      title: post.title,
      link: post.link,
      pubDate: post.pubDate,
      thumbnail: image,
      content: sanitizeHtml(post["content:encoded"]),
    };
  });
};
