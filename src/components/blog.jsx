import React from "react";
import { Link } from "react-router-dom";

export const Blog = (props) => {
  const blogData = props.data || {
    title: "Blog",
    subtitle: "Stay updated with the latest insights on nutrition, wellness, and healthy living.",
    posts: []
  };

  const createSlug = (title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  // Add CSS to remove lines from blog post titles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .blog-item h3::after,
      .blog-title-link::after,
      #blog h3::after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div id="blog">
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="section-title text-center center">
          <h2>{blogData.title}</h2>
          <p>{blogData.subtitle}</p>
        </div>
        <div className="row">
          {blogData.posts.map((post, index) => (
            <div key={index} className="col-xs-12 col-md-4">
              <div className="blog-item">
                <div className="blog-content">
                  <h3>
                    <Link to={`/blog/${createSlug(post.title)}`} className="blog-title-link">
                      {post.title}
                    </Link>
                  </h3>
                  <p>
                    {post.content.length > 150
                      ? `${post.content.substring(0, 150)}...`
                      : post.content}
                  </p>
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-author">By {post.author}</span>
                  </div>
                  <div className="blog-read-more">
                    <Link to={`/blog/${createSlug(post.title)}`} className="btn btn-read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};