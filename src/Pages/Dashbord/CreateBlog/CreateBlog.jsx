import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import designSelectBox from './CreateBlog.css';
const CreateBlog = () => {
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
                                    {/* <span className='text-sm'>(you can use multiple category for your blog)</span> */}
                                </p>
                            </label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                                className={designSelectBox}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;