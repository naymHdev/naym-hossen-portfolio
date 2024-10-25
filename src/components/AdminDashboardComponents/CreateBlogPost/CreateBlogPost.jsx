"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import "./blogPost.css";
import Editor from "./Editor";
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
  const [postContent, setPostContent] = useState(null);

  const handleSave = (data) => {
    setPostContent(data);
    console.log("Post content saved:", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/blog-posts", { ...data });
      console.log("Blog post created successfully");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Blog Post Content */}
        <div>
          <label htmlFor="content" className="block text-white mb-2">
            Blog Content
          </label>
          <div>
            <Editor onSave={handleSave} />
            {postContent && (
              <div className="mt-8">
                <h2 className="text-xl font-bold">Saved Content Preview</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  {JSON.stringify(postContent, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Blog Featured Image */}
        <div>
          <label htmlFor="featuredImage" className="block text-lg text-white">
            Featured Image URL
          </label>
          <input
            type="text"
            {...register("featuredImage", { required: true })}
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
            className="w-full p-2 border-b bg-transparent focus:outline-none border-primaryColor"
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
