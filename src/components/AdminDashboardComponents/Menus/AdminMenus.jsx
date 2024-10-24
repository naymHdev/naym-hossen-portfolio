import Link from "next/link";

const AdminMenus = () => {
  return (
    <>
      <div>
        <ul className="menu">
          {/* Sidebar content here */}
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/allBlogs">All Blogs</Link>
          </li>
          <li>
            <Link href="/addBlog">Add Blog</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminMenus;
