import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import './CreateBlog.css';
const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const handleCreateBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const blogTitle = form.blog_title.value;
        const blogImg = form.blog_img.value;
        const blogText = form.blog_text.value;
        const category = form.category.value;


        const blogInfo = {
            blogTitle,
            blogImg,
            blogText,
            category
        }
        console.log(blogInfo);
    }
    return (
        <div className='mx-auto max-w-7xl px-3 py-5'>
            <h1 className='text-center font-bold text-4xl mb-2 text-[#444444e0]'>Create New Blog</h1>
            <div className="hero bg-base-200">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleCreateBlog}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-bold">Blog Title</span>
                            </label>
                            <input type="text" name='blog_title' placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-bold">Blog Image</span>
                            </label>
                            <input type="file" name='blog_img' className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-bold">Blog Description</span>
                            </label>
                            {/* <textarea className="textarea textarea-bordered" placeholder="Start..." rows='5'></textarea> */}
                            <JoditEditor
                                ref={editor}
                                value={content}
                                name='blog_text'
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => { }}
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <p>
                                    <span className="label-text font-bold">Blog Category</span>
                                </p>
                            </label>
                            <select name='category' className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;