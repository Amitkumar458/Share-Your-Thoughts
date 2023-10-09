import {useForm} from 'react-hook-form'
import { useDispatch } from "react-redux";

import {  createPost } from "./postSlice";

const CreatePost = () => {
const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => dispatch(createPost(data))

      
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        {...register("name",{required:true})}
        placeholder="Enter Your Name"
        className="btn2"
        required
      />
      {errors.name && <p>Please Enter Your Name</p>}
      <input
        type="text"
        name="title"
        {...register("title",{required:true})}
        placeholder="Enter Your title"
        className="btn2"
        required
      />
      <textarea
        type="text"
        name="description"
        {...register("description",{required:true})}
        placeholder="Enter Your Description"
        className="btn3"
        required
      />
      <div>
        <button type="submit" className="btn4">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
