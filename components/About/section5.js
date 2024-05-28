import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";
// import img1 from "../../public/images/images/img1.svg";
// import img2 from "../../public/images/images/img2.svg";
// import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";

export const Section5 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className={` ${mwidth.isTabletDevice ? "px-[10px]" : " px-[100px] "}`}>
      <h1
        className={`text-center  ${
          mwidth.isTabletDevice ? "text-[20px]" : " text-[30px] "
        }`}
      >
        <b>Our Services</b>
      </h1>
      <h1
        className={`${
          mwidth.isMobileDevice
            ? "text-[15px] mt-[50px] px-[5px]"
            : "text-[27px] mt-[40px]"
        }`}
      >
        <b>
          Perfect I.T
          <span className="text-primary underline"> Solution</span> for
        </b>
      </h1>
      <h1
        className={`${
          mwidth.isMobileDevice ? "text-[15px] px-[5px] " : "text-[27px]"
        }`}
      >
        <b>
          Your<span className="text-primary underline"> business</span>
        </b>
      </h1>

      <div className="w-full flex  flex-col justify-center items-center mt-[100px] ">
        {[
          {
            head: "IT Consultation",
            list: [
              {
                head: "Strategic IT Consulting:",
                body: " We work with your team to understand your business goals and formulate IT strategies that align with them.",
              },
              {
                head: "Infrastructure Optimization:",
                body: "We assess your current IT infrastructure and suggest improvements to enhance efficiency and productivity.",
              },
              {
                head: "Digital Transformation Roadmaps:",
                body: "We help you navigate the digital landscape by creating a step-by-step guide for your digital transformation journey.",
              },
            ],
          },
          {
            head: "IT Outsourcing",
            list: [
              {
                head: "Help Desk Support: ",
                body: "We provide round-the-clock support to address any IT issues that may arise, ensuring minimal downtime.",
              },
              {
                head: "System Administration:",
                body: "We manage your IT systems, including servers, networks, and databases, to ensure smooth operation.",
              },
              {
                head: "Application Development:",
                body: "We develop custom applications tailored to your business needs, enhancing your digital capabilities.",
              },
            ],
          },
          {
            head: "Digital security",
            list: [
              {
                head: "Threat Assessments:",
                body: "We identify potential threats to your digital assets and suggest measures to mitigate them.",
              },
              {
                head: "Implementation of Security Measures:",
                body: "We implement robust security measures, such as firewalls and encryption, to protect your digital assets.",
              },
              {
                head: "Security Audits:",
                body: "We conduct regular audits to ensure the ongoing security of your digital assets.",
              },
            ],
          },
          {
            head: "Customer Product development",
            list: [
              {
                head: "Bespoke Software Solutions:",
                body: "We develop custom software solutions tailored to your business needs, from CRM systems to automation tools.",
              },
              {
                head: "Specialized Application Development:",
                body: "We create specialized applications, such as mobile apps or web apps, to enhance your digital presence.",
              },
            ],
          },
        ].map((e, index) => {
          return (
            <div
              key={index}
              className={`bg-white relative min-h-[350px]  h-[auto] rounded-md shadow-md flex flex-col justify-center items-center  py-7 my-10 ${
                mwidth.isTabletDevice
                  ? "text-[15px] px-3  w-[94%]"
                  : " w-[100%]   px-5"
              }`}
            >
              <div className="flex justify-between w-full mb-10">
                <h2
                  className={`text-primary ${gelasio.className} ${
                    mwidth.isTabletDevice ? " text-[14px]" : "text-[19px] "
                  }`}
                >
                  <b>{e.head}</b>
                </h2>
                <div>0{index + 1}</div>
              </div>
              <ul className={`${poppins.className} w-full flex flex-col gap-5`}>
                {e.list.map((ee, index) => {
                  return (
                    <li
                      className={`mb-5 flex gap-5 ${poppins.className}`}
                      key={index}
                    >
                      <div className="bg-primary rounded-[50%] h-[7px] w-[7px] "></div>
                      <p
                        className={`${
                          mwidth.isTabletDevice
                            ? "w-full text-[10px]"
                            : "w-[80%] "
                        }`}
                      >
                              <b>{ee.head}</b>
                              {"\t"}
                        {ee.body}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
