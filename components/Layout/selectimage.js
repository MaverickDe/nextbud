import {
  addimage,
  deleteimage,
  setimage,
  setimagememo,
} from "@/redux/slices/image";
import addimg from "@/public/images/images/addimg.svg";
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { fetch_, setErrorHelper } from "../utils/utils";
import { CircularProgress } from "@mui/material";
import { DOMAIN, UPLOADMEMOURL } from "../const";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const SelectImagee = () => {
  let UseAppDispatch = AppDispatch();
  const router = useRouter();

  // setimage
  const { image, refresh } = useAppSelector((state) => state.image);

  return (
    <div className="box-border w-full border-dashed border-primary  rounded-md border-2 ">
      <div className="w-full  min-h-[200px] p-10 flex flex-col items-center justify-center ">
        <Image
          onClick={(e) => {
            e.preventDefault();
            let elem = document.createElement("input");
            elem.setAttribute("type", "file");
            elem.setAttribute("multiple", "multiple");
            elem.setAttribute("accept", "image/png, image/gif, image/jpeg");
            elem.onchange = (input) => {
              if (input.target.files && input.target.files[0]) {
                for (let data of input.target.files) {
                  console.log(data);
                  let reader = new FileReader();
                  reader.onload = function () {
                    let images = [];
                    const dataURL = reader.result;
                    images.push({ name: data.name, src: dataURL, data });
                    UseAppDispatch(addimage({ images }));
                  };
                  reader.readAsDataURL(data);
                }
                // console.log(images)
              }
            };
            elem.click();
          }}
          src={addimg}
          className=" z-10 w-[40px] "
          priority
          loading="eager"
        />
        <h1>Add Memo</h1>
        <p className="text-[10px]">image should have aspect ratio of 4/1.5</p>
        {/* <Input size={30} type="file"  placeholder="Enter your email" /> */}
      </div>
      <button
        onClick={async (e) => {
          let target = e.currentTarget;

          e.preventDefault();

          // SERVERLOGINURL
          //
          try {
            target.disabled = true;
            target.querySelector(".submitprogress").classList.remove("hidden");

            let formdata = new FormData();
            await image.forEach(async (e, index) => {
              formdata.append("files", e.data, e.name);
            });
            let resp = await fetch_(UPLOADMEMOURL, {
              method: "post",
              // redirect: 'manual',
              redirect: "manual",
              credentials: "include",
              origin: DOMAIN,
              mode: "cors",

              credentials: "include",
              body: formdata,
              // credentials: "include",
              //   headers: {
              //     "Content-Type": "application/json",
              //   },
              // referrerPolicy: "no-referrer"
            });
            let res = await resp.json();
            console.log(res);

            if (res.image) {
           

              UseAppDispatch(setimagememo(res.image));
            }

            if (res.redirect) {
              router.push(res.redirect);
              //    redirect(res.redirect)
            }
            if (res.errmsg) {
              return setErrorHelper(res.errmsg);
            }

            if (resp.status != 200) {
              return setErrorHelper("Error in performing action");
            } else {
              UseAppDispatch(setimage([]));
              setErrorHelper("uploaded successfully")
            }
          } catch (e) {
            console.log(e);
            if (e.errmsg) {
              return setErrorHelper(e.errormsg);
            }
            return setErrorHelper("Error in performing action");
          } finally {
            target.disabled = false;
            setTimeout(() => {
              target.querySelector(".submitprogress").classList.add("hidden");
            }, 1000);
          }
        }}
        className="m-5 submitbtn bg-secondary dark:bg-primary  text-primary dark:text-secondary shadow-md rounded-md w-fit px-5 py-2 flex gap-2 justify-center items-center"
      >
        <span>upload</span>
        <div className="submitprogress hidden">
          <CircularProgress color="inherit" size="1rem" />
        </div>
      </button>
      <div className="imagelist flex flex-wrap gap-5 w-full p-5 ">
        {image.map((e, index) => {
          return (
            <div
              key={index}
              className=" w-full max-w-[200px] rounded-md flex justify-center items-center h-[100px] relative "
            >
              <Image
                fill={true}
                src={e.src}
                className=" rounded-md w-full h-full "
                priority
                loading="eager"
              />
              <FontAwesomeIcon
                onClick={() => {
                  UseAppDispatch(deleteimage({ index }));
                }}
                className=" absolute w-[10px] top-[10px] right-[10px]"
                icon={faX}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectImagee;
// modules.export
// export SelectImage;
