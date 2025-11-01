import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://back-end-for-xirfadsan.onrender.com/api/blog/allNew/${id}`);
                if (!response.ok) throw new Error("Failed to load blog");
                const data = await response.json();
                console.log(data); // ✅ shows array
                setBlog(data[0]); // ✅ store single blog object
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);


    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!blog) return <p className="text-center mt-10">Blog not found</p>;

    return (
        <div className="min-h-screen bg-muted/30 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <Link to="/blog" className="flex items-center text-sm mb-6 text-gray-600 hover:text-primary">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
                </Link>

                <img
                    src={`https://back-end-for-xirfadsan.onrender.com/api/blog/image/${blog.id}`}
                    alt={blog.title}
                    className="w-full h-80 object-cover rounded-lg mb-6"
                />

                <h1 className="text-3xl font-bold mb-4 text-black">{blog.title}</h1>
                <p className="text-gray-500 text-sm mb-6">
                    {new Date(blog.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })}
                </p>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {blog.content || blog.blog}
                </p>
            </div>
        </div>
    );
}