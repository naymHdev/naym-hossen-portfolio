/* eslint-disable @next/next/no-img-element */
import Loading from "@/components/Loading/Loading";
import { fetchMediumPosts } from "@/utils/fetchMediumPosts";
import { Suspense } from "react";

const truncateContent = (content, length) => {
  const plainText = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
  return plainText.length > length
    ? plainText.substring(0, length) + "..."
    : plainText;
};

const Blogs = async () => {
  const posts = await fetchMediumPosts();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-4 flex flex-col md:flex-row justify-between border-b border-[#013f5b] gap-4"
            >
              <div className="flex-1">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-2xl font-ubuntu font-semibold text-title hover:text-primaryColor">
                    {post.title}
                  </h2>
                </a>
                <div
                  className="mt-2 text-foreground"
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(post.content, 200), // Limit to 200 characters
                  }}
                ></div>
              </div>
              <div className="mt-4 md:mt-0">
                {post.thumbnail && (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full sm:w-[144px] sm:h-[96px] rounded object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default Blogs;
