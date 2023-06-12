import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
            console.log(newItem,imgURL);
            axiosSecure.post('/menu', newItem)
            .then(data=>{
              console.log('after posting new data', data.data);
              reset();
              if (data.data.insertedId) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Medicine added successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
      });
  };
  console.log(errors);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add An Item"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Medicine Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 80 })}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:flex items-center gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Select Category*</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue="Pick One"
                {...register("category", { required: true })}
              >
                <option disabled>Pick One</option>
                <option>Vitamins & Supplements</option>
                <option>OTC-Medicines</option>
                <option>Personal Care</option>
                <option>Medical Device</option>
                <option>Dental Care</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true, maxLength: 80 })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Medicine Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-black w-full"
          />
          <input
            type="submit"
            className="btn btn-warning rounded-1 mt-10"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
