"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export const categories = [
  { value: "programmingLanguages", label: "Programming Languages" },
  { value: "webDevelopment", label: "Web Development" },
  { value: "mobileDevelopment", label: "Mobile Development" },
  { value: "devOps", label: "DevOps" },
  { value: "databaseManagement", label: "Database Management" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloudComputing", label: "Cloud Computing" },
  { value: "machineLearningAI", label: "Machine Learning & AI" },
  { value: "apisMicroservices", label: "APIs & Microservices" },
  {
    value: "blockchainCryptocurrencies",
    label: "Blockchain & Cryptocurrencies",
  },
  { value: "versionControl", label: "Version Control" },
  { value: "developmentFrameworks", label: "Development Frameworks" },
  { value: "codingBestPractices", label: "Coding Best Practices" },
  { value: "developmentTools", label: "Development Tools" },
  { value: "uiUxDesign", label: "UI/UX Design" },
  { value: "performanceOptimization", label: "Performance Optimization" },
  { value: "techIndustryNews", label: "Tech Industry News" },
  { value: "freelancingRemoteWork", label: "Freelancing & Remote Work" },
  { value: "productivityTools", label: "Productivity Tools" },
  { value: "projectManagement", label: "Project Management" },
  { value: "softSkillsForDevelopers", label: "Soft Skills for Developers" },
  {
    value: "techInterviewsCareerAdvice",
    label: "Tech Interviews & Career Advice",
  },
  { value: "ecommerceDevelopment", label: "E-commerce Development" },
  {
    value: "contentManagementSystems",
    label: "Content Management Systems (CMS)",
  },
  { value: "gameDevelopment", label: "Game Development" },
  { value: "arVrDevelopment", label: "AR/VR Development" },
  { value: "iotDevelopment", label: "IoT (Internet of Things)" },
  { value: "learningResources", label: "Learning Resources" },
  { value: "developerToolsTips", label: "Developer Tools & Tips" },
  {
    value: "personalProjectsPortfolios",
    label: "Personal Projects & Portfolios",
  },
  { value: "developerExperiences", label: "Developer Experiences" },
  { value: "startupsEntrepreneurship", label: "Startups & Entrepreneurship" },
];

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
      <h1 className="text-2xl font-bold mb-4 text-white">
        Create New Blog Post
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Blog Title */}
        <div>
          <label htmlFor="title" className="block text-lg text-white">
            Blog Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Blog Post Content */}
        <div>
          <label htmlFor="content" className="block text-lg text-white">
            Blog Content
          </label>
          <textarea
            {...register("content", { required: true })}
            className="w-full p-2 border bg-transparent focus:outline-none border-foreground"
            rows="10"
          ></textarea>
          {errors.content && (
            <p className="text-red-500">Content is required</p>
          )}
        </div>

        {/* Blog Featured Image */}
        <div>
          <label htmlFor="featuredImage" className="block text-lg text-white">
            Featured Image URL
          </label>
          <input
            type="text"
            {...register("featuredImage", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.featuredImage && (
            <p className="text-red-500">Image URL is required</p>
          )}
        </div>

        {/* Blog URL Slug */}
        <div>
          <label htmlFor="slug" className="block text-lg text-white">
            Blog URL Slug
          </label>
          <input
            type="text"
            {...register("slug", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.slug && <p className="text-red-500">Slug is required</p>}
        </div>

        {/* Categories */}
        <div>
          <label htmlFor="categories" className="block text-lg text-white">
            Categories
          </label>
          <select
            {...register("categories", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          {errors.categories && (
            <p className="text-red-500">Categories are required</p>
          )}
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-lg text-white">
            Tags
          </label>
          <input
            type="text"
            {...register("tags", { required: true })}
            placeholder="Separate tags with commas"
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.tags && <p className="text-red-500">Tags are required</p>}
        </div>

        {/* Date Created */}
        <div>
          <label htmlFor="dateCreated" className="block text-lg text-white">
            Date Created
          </label>
          <input
            type="date"
            {...register("dateCreated", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.dateCreated && (
            <p className="text-red-500">Date is required</p>
          )}
        </div>

        {/* Status (Draft or Published) */}
        <div>
          <label htmlFor="status" className="block text-lg text-white">
            Status
          </label>
          <select
            {...register("status", { required: true })}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-lg text-white">
            Author
          </label>
          <input
            type="text"
            {...register("author", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
          />
          {errors.author && <p className="text-red-500">Author is required</p>}
        </div>

        {/* Blog Excerpt */}
        <div>
          <label htmlFor="excerpt" className="block text-lg text-white">
            Blog Excerpt
          </label>
          <textarea
            {...register("excerpt", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-foreground"
            rows="3"
          ></textarea>
          {errors.excerpt && (
            <p className="text-red-500">Excerpt is required</p>
          )}
        </div>

        <div className=" flex items-center justify-start mt-4 gap-4">
          <button
            type="submit"
            className=" px-5 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
          <button className="px-5 py-2 rounded bg-foreground text-black">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPost;
