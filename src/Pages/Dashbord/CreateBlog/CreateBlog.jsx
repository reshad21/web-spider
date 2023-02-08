import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './CreateBlog.css';
const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const animatedComponents = makeAnimated();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className='mx-auto max-w-7xl px-3 py-5'>
            <h1 className='text-center font-bold text-4xl mb-2 text-[#444444e0]'>Create New Blog</h1>
            <div className="hero bg-base-200">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Blog Title</span>
                            </label>
                            <input type="text" placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Blog Description</span>
                            </label>
                            {/* <textarea className="textarea textarea-bordered" placeholder="Start..." rows='5'></textarea> */}
                            <JoditEditor
                                ref={editor}
                                value={content}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => { }}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <p>
                                    <span className="label-text font-bold">Blog Category</span>
                                    {/* <span className='text-sm'>(you can use multiple category for your blog)</span> */}
                                </p>
                            </label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                            />
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