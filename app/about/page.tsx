import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImage from "../../public/images/me.jpg";
import Stuff from "./stuff";
import Icons from "./icons";
function About() {
  return (
    <div className="w-full flex flex-col gap-y-6 md:gap-y-3 lg:gap-y-6">
      <div className="block md:flex gap-x-10">
        <div className="float-left pr-5 md:pr-0">
          <div className="about-rectangle mb-4"></div>
          <Image
            alt="Image of author"
            src={AboutImage}
            placeholder="blur"
            width={190}
            height={190}
            className="object-cover border-border-color border-[1.5px] h-[190px]  md:h-[150px] lg:h-[190px] w-[164px]"
          ></Image>
          <div className="about-rectangle mt-4"></div>
        </div>
        <div className=" md:ml-0 md:min-w-[300px] leading-[26px]">
          <div className="-mt-[4px] text-[22px] text-white pb-4 md:pb-2 lg:pb-4">
            <span className="">
              Software <span className="text-secondary-text-color2">Developer</span>
            </span>
            <br />
            <span className="text-[18px]">
              <div className="text-secondary-text-color2">Lifelong learner</div>
            </span>
          </div>
          <div className="text-[16px] [ md:text-[14px] lg:text-[16px] text-white text-opacity-60 leading-[18px]">
            I've designed my blog to be like a business card: a quick introduction to me and my work. It contains findings and information I encounter during my hobby projects or work.
            <br />
            <br /> Feel free to check out my
            <Link aria-label="Link to my Github handle" href="https://github.com/cekocvetkov" className="pl-1 text-secondary-text-color font-extrabold">
              Github Page
            </Link>
            . I'd love to learn from others and contribute to projects that make a positive impact.
            <br />
            <div className="flex md:hidden lg:flex">
              <br />
            </div>
            <div className="flex md:hidden lg:flex">Here are some of my favorite technologies to work with, along with a few personal details:</div>
          </div>
        </div>
      </div>
      <Icons></Icons>
      <Stuff></Stuff>
    </div>
    // <div className="flex flex-col gap-y-3 lg:gap-y-6 overflow-y-auto overflow-x-hidden scrollbar-hide md:overflow-y-visible md:overflow-x-visible flex-grow ">
    //   <div className="block">
    //     <div className="float-left pr-4 ">
    //       <Image
    //         alt="Image of author"
    //         src={AboutImage}
    //         placeholder="blur"
    //         width={190}
    //         height={190}
    //         className="object-cover border-border-color border-[1.5px] h-[190px] md:h-[150px] lg:h-[190px] w-[164px] "
    //         // style={{ height: "190px", width: "164px" }}
    //       ></Image>
    //       <div className="about-rectangle mt-4"></div>
    //     </div>
    //     <div className="text-sm mt-[-6px] md:mr-[-15%] lg:mr-[-20%]">
    //       <div className="text-2xl pb-2">Passionate software developer</div>
    //       <div className="">
    //         <div className="pb-2">Always on the lookout for fresh challenges that push my boundaries and expand my skill set.</div>
    //         <div className="pb-2">
    //           As a creative who values simplicity, I've designed my blog to be like a business card: a quick introduction to me and my work. It contains findings and information I encounter during my
    //           hobby projects or work.
    //         </div>
    //         <div>
    //           If you're curious about my work or want to explore some coding together, feel free to check out my
    //           <Link aria-label="Link to my Github handle" href="https://github.com/cekocvetkov" className="pl-1 text-secondary-text-color font-extrabold">
    //             Github Page
    //           </Link>
    //           . I'd love to learn from others and contribute to projects that make a positive impact.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-y-4 md:gap-y-0 lg:gap-y-4 text-sm md:mr-[-20%]">
    //     <div className="flex flex-col sm:flex-row justify-between gap-y-5 gap-x-5 lg:gap-x-10 mr-5 lg:mr-0 flex-wrap md:flex-nowrap">
    //       <div className="flex flex-col gap-y-4">
    //         <div className="flex gap-x-2 md:gap-x-1 lg:gap-x-2">
    //           <div className="font-extrabold min-w-24 sm:min-w-max">Name:</div> <div className="text-nowrap">Tsvetan Tsvetkov</div>
    //         </div>
    //         <div className="flex gap-x-2 md:gap-x-0 lg:gap-x-2">
    //           <div className="font-extrabold min-w-24 sm:min-w-max">Hobbies: </div> <div className="text-nowrap">&nbsp;🎸 🏀 ⚽ 📚 💻</div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-y-4">
    //         <div className="flex gap-x-2 md:gap-x-1 lg:gap-x-2">
    //           <div className="font-extrabold min-w-24 sm:min-w-max text-nowrap">Born in:</div>
    //           <div className="flex flex-nowrap gap-x-2">
    //             <div> Bulgaria</div> <div>🇧🇬</div>
    //           </div>
    //         </div>
    //         <div className="flex gap-x-2">
    //           <div className="font-extrabold text-nowrap min-w-24 sm:min-w-max"> Lives in:</div>{" "}
    //           <div className="flex flex-nowrap gap-x-2">
    //             <div>Vienna</div> <div>🇦🇹</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-y-4">
    //         <div className="flex gap-x-2 md:gap-x-1 lg:gap-x-2">
    //           <div className="font-extrabold text-nowrap min-w-24 sm:min-w-max">Languages:</div> <div className=""> &nbsp;🇧🇬 &nbsp;🇬🇧&nbsp;&nbsp;🇩🇪</div>
    //         </div>
    //         <div className="flex gap-x-2">
    //           <div className="font-extrabold text-nowrap min-w-24 sm:min-w-max">E-Mail: </div> <div className="">c.y.cvetkov@gmail.com</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pt-3 min-w-full flex gap-y-2 gap-x-2 md:gap-x-0 lg:gap-x-0 flex-wrap ">
    //       <div className="flex">
    //         <div className="flex md:hidden lg:flex font-extrabold"> Favourite Technologies:</div>
    //       </div>
    //       <div className="flex flex-wrap gap-y-2 pb-8 md:pb-0 md:flex-row md:w-full lg:w-auto justify-between md:mr-8 lg:mr-0 gap-x-[5.9px] md:pl-1">
    //         <Image src={"/images/java-original.svg"} title="Java" alt="Java" width={20} height={18} />
    //         <Image src={"/images/javascript-original.svg"} title="JavaScript" alt="JavaScript" width={18} height={18} />
    //         <Image src={"/images/typescript-original.svg"} title="TypeScript" alt="TypeScript" width={18} height={18} />
    //         <Image src={"/images/css3-original.svg"} title="CSS3" alt="CSS3" width={18} height={18} />
    //         <Image src={"/images/nodejs-original.svg"} title="NodeJS" alt="NodeJS" width={18} height={18} />
    //         <Image src={"/images/angular-original.svg"} title="Angular" alt="Angular" width={18} height={18} />
    //         <Image src={"/images/react-original.svg"} title="React" alt="React" width={18} height={18} />
    //         <Image src={"/images/nextjs-original.svg"} title="NextJS" alt="NextJS" width={18} height={18} />
    //         <Image src={"/images/quarkus-original.svg"} title="Quarkus" alt="Quarkus" width={18} height={18} />
    //         <Image src={"/images/spring-original.svg"} title="Spring" alt="Spring" width={18} height={18} />
    //         <Image src={"/images/postgresql-original.svg"} title="PostgreSQL" alt="PostgreSQL" width={18} height={18} />
    //         <Image src={"/images/rabbitmq-original.svg"} title="RabbitMQ" alt="RabbitMQ" width={18} height={18} />
    //         <Image src={"/images/docker-original.svg"} title="Docker" alt="Docker" width={18} height={18} />
    //         <Image src={"/images/kubernetes-original.svg"} title="Kubernetes" alt="Kubernetes" width={18} height={18} />
    //         <Image src={"/images/helm-original.svg"} title="Helm" alt="Helm" width={18} height={18} style={{ height: "18px", backgroundColor: "white" }} />
    //         <Image src={"/images/argocd-original.svg"} title="ArgoCD" alt="ArgoCD" width={18} height={18} />
    //         <Image src={"/images/amazonwebservices-plain-wordmark.svg"} title="Amazon Web Services (AWS)" alt="Amazon Web Services (AWS)" width={18} height={18} />
    //         <Image src={"/images/azure-original.svg"} title="Microsoft Azure" alt="Microsoft Azure" width={18} height={18} />
    //         <Image src={"/images/github-original.svg"} title="GitHub" alt="GitHub" width={18} height={18} style={{ height: "18px", backgroundColor: "white" }} />
    //         <Image src={"/images/githubactions-original.svg"} title="GitHub Actions" alt="GitHub Actions" width={18} height={18} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About;
