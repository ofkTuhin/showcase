import axios from "axios";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../components/UserContext/UserContext";

const API_KEY = "7M60APC-EHW49D9-PZNE7VS-7TN2210";
const InputData = () => {
  const [login] = useContext(UserContext);
  const router = useRouter();
  const [image, setImage] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUrl = async (e) => {
    const link = e.target.value;

    axios
      .get(
        `https://shot.screenshotapi.net/screenshot?url=${link}&token=${API_KEY}`
      )
      .then((res) => setImage(res.data.screenshot));
  };

  useEffect(() => {
    if (!login) {
      router.push("/login");
    }
  });

  const onSubmit = async (data) => {
    const event = {
      themeName: data.themeName,
      url: data.url,
      image: image,
      category: data.category,
      Dr: data.Dr,
      date: data.date,
    };

    if (image != " ") {
      try {
        const res = await fetch(
          "https://glacial-lake-15784.herokuapp.com//post/",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json ",
              "Upgrade-Insecure-Requests": 1,
            },
            body: JSON.stringify(event),
          }
        );
        if (res.status == 200) {
          reset({
            themeName: "",
            url: "",
            Dr: "",
            category: "",
            date: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Layout>
      <div className="mt-5 text-center">
        <div className="px-4 sm:px-6 flex justify-center items-center">
          <div className="mx-auto w-full max-w-2xl rounded-xl p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="themeName" className="sr-only">
                  Website name
                </label>
                <input
                  type="text"
                  {...register("themeName", {
                    required: {
                      value: true,
                      message: "You must enter your theme name",
                    },
                  })}
                  className={`block w-full border-2 py-3 px-4 outline-0`}
                  placeholder="Theme name"
                />
                <span className="text-red-400 text-sm py-2">
                  {errors?.themeName?.message}
                </span>
              </div>
              <div>
                <label htmlFor="url" className="sr-only">
                  Website URL
                </label>
                <input
                  type="url"
                  {...register("url", {
                    required: {
                      value: true,
                      message: "You must enter your theme name",
                    },
                  })}
                  className={`block w-full border-2 py-3 px-4 outline-0`}
                  placeholder="Website URL"
                  onChange={handleUrl}
                />
                <span className="text-red-400 text-sm py-2">
                  {errors?.url?.message}
                </span>
              </div>
              <div>
                <label htmlFor="Dr" className="sr-only">
                  URL Image
                </label>
                <input
                  type="number"
                  {...register("Dr", {
                    required: { value: true, message: "Image required" },
                  })}
                  className={`block w-full border-2 py-3 px-4 outline-0`}
                  placeholder="Domain Rating"
                />
                <span className="text-red-400 text-sm py-2">
                  {errors?.Dr?.message}
                </span>
              </div>
              <div>
                <label htmlFor="Category" className="sr-only">
                  Category
                </label>
                <input
                  type="text"
                  {...register("category", {
                    required: { value: true, message: "Category required" },
                  })}
                  className={`block w-full border-2 py-3 px-4 outline-0`}
                  placeholder="Website Category"
                />
                <span className="text-red-400 text-sm py-2">
                  {errors?.Category?.message}
                </span>
              </div>
              <div>
                <label htmlFor="Category" className="sr-only">
                  Date
                </label>
                <input
                  type="date"
                  {...register("date", {
                    required: { value: true, message: "Date required" },
                  })}
                  className={`block w-full border-2 py-3 px-4 outline-0`}
                  placeholder="Date"
                />
                <span className="text-red-400 text-sm py-2">
                  {errors?.Date?.message}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white px-6 p-4 flex items-start transition duration-300 ease-in-outs bg-red-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InputData;
