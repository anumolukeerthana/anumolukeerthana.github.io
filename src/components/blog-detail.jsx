import React from "react";
import { Link, useParams } from "react-router-dom";

export const BlogDetail = (props) => {
  const { slug } = useParams();
  const blogData = props.data || { posts: [] };

  const createSlug = (title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const findPostBySlug = () => {
    return blogData.posts.find(post => createSlug(post.title) === slug);
  };

  const post = findPostBySlug();

  // Add CSS to remove lines from blog detail page title
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #blog-detail h1::after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="section-title text-center center">
          <h2>Blog Post Not Found</h2>
          <hr />
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div id="blog-detail" className="container" style={{ paddingTop: '100px' }}>
      <div className="blog-post">
        <div className="blog-header">
          <Link to="/blog" className="btn btn-back-to-blog">
            ← Back to Blog
          </Link>
        </div>

        <div className="blog-content-wrapper">
          <div className="section-title">
            <h1>{post.title}</h1>
          </div>

          <div className="blog-meta-full">
            <span className="blog-date">{post.date}</span>
            <span className="blog-author"> By {post.author}</span>
          </div>

          <div className="blog-post-content">
            <p>{post.content}</p>
          </div>

          <div className="blog-footer">
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};