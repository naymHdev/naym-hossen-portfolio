"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const CreateBlogPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("draft"); // Blog post status

  const onSubmit = async (data) => {
    console.log("blog__data", data);
    // Post form data to your Next.js API route
    // try {
    //   const response = await axios.post("/api/blog-posts", { ...data, status });
    //   console.log("Blog post created:", response.data);
    // } catch (error) {
    //   console.error("Error creating blog post:", error);
    // }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Blog Title */}
        <div>
          <label htmlFor="title" className="block text-lg">
            Blog Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Blog Post Content */}
        <div>
          <label htmlFor="content" className="block text-lg">
            Blog Content
          </label>
          <textarea
            {...register("content", { required: true })}
            className="w-full p-2 border rounded"
            rows="10"
          ></textarea>
          {errors.content && (
            <p className="text-red-500">Content is required</p>
          )}
        </div>

        {/* Blog Featured Image */}
        <div>
          <label htmlFor="featuredImage" className="block text-lg">
            Featured Image URL
          </label>
          <input
            type="text"
            {...register("featuredImage", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.featuredImage && (
            <p className="text-red-500">Image URL is required</p>
          )}
        </div>

        {/* Blog URL Slug */}
        <div>
          <label htmlFor="slug" className="block text-lg">
            Blog URL Slug
          </label>
          <input
            type="text"
            {...register("slug", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.slug && <p className="text-red-500">Slug is required</p>}
        </div>

        {/* Categories */}
        <div>
          <label htmlFor="categories" className="block text-lg">
            Categories
          </label>
          <input
            type="text"
            {...register("categories", { required: true })}
            placeholder="Separate categories with commas"
            className="w-full p-2 border rounded"
          />
          {errors.categories && (
            <p className="text-red-500">Categories are required</p>
          )}
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-lg">
            Tags
          </label>
          <input
            type="text"
            {...register("tags", { required: true })}
            placeholder="Separate tags with commas"
            className="w-full p-2 border rounded"
          />
          {errors.tags && <p className="text-red-500">Tags are required</p>}
        </div>

        {/* Date Created */}
        <div>
          <label htmlFor="dateCreated" className="block text-lg">
            Date Created
          </label>
          <input
            type="date"
            {...register("dateCreated", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.dateCreated && (
            <p className="text-red-500">Date is required</p>
          )}
        </div>

        {/* Status (Draft or Published) */}
        <div>
          <label htmlFor="status" className="block text-lg">
            Status
          </label>
          <select
            {...register("status", { required: true })}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-lg">
            Author
          </label>
          <input
            type="text"
            {...register("author", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.author && <p className="text-red-500">Author is required</p>}
        </div>

        {/* Blog Excerpt */}
        <div>
          <label htmlFor="excerpt" className="block text-lg">
            Blog Excerpt
          </label>
          <textarea
            {...register("excerpt", { required: true })}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
          {errors.excerpt && (
            <p className="text-red-500">Excerpt is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded mt-4"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
