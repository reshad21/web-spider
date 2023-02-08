import React from 'react';

const CreateBlog = () => {
    return (
        <div className='mx-auto max-w-7xl px-3 py-5'>
            <h1 className='text-center font-bold text-4xl mb-2 text-[#444444e0]'>Create New Blog</h1>
            <div className="hero bg-base-200">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Bio" rows='5'></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <p>
                                    <span className="label-text font-bold">Category</span>
                                    <span className='text-sm'>(you can use multiple category for your blog)</span>
                                </p>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;