import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImage from "../../public/images/me.jpg";
function About() {
  return (
    <div className="flex flex-col gap-y-6 overflow-y-auto overflow-x-hidden scrollbar-hide md:overflow-y-visible md:overflow-x-visible flex-grow ">
      <div className="block">
        <div className="float-left pr-4">
          <Image
            alt="Image of author"
            src={AboutImage}
            placeholder="blur"
            // src={"/images/me.jpg"}
            // blurDataURL="data:image/webp;base64,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"
            width={190}
            height={190}
            className="object-cover border-border-color border-[1.5px]"
            style={{ height: "190px", width: "164px" }}
          ></Image>
          <div className="about-rectangle mt-4"></div>
        </div>
        <div className="text-sm mt-[-6px] md:mr-[-20%]">
          <div className="text-2xl pb-2">Passionate software developer</div>
          <div className="">
            <div className="pb-2">Always on the lookout for fresh challenges that push my boundaries and expand my skill set.</div>
            <div className="pb-2">
              As a creative who values simplicity, I've designed my blog to be like a business card: a quick introduction to me and my work. It contains findings and information I encounter during my
              hobby projects or work.
            </div>
            <div>
              If you're curious about my work or want to explore some coding together, feel free to check out my
              <Link aria-label="Link to my Github handle" href="https://github.com/cekocvetkov" className="pl-1 text-secondary-text-color font-extrabold">
                Github Page
              </Link>
              . I'd love to learn from others and contribute to projects that make a positive impact.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 text-sm md:mr-[-20%]">
        <div className="flex justify-between max-[430px]:flex-col gap-y-5 gap-x-5  md:gap-x-10">
          <div className="flex flex-col  gap-y-4">
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold">Name:</div> <div className="max-[430px]:pl-1 md:pl-1">Tsvetan Tsvetkov</div>
            </div>
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold">Hobbies: </div> <div className="max-[430px]:pl-1 md:pl-1">&nbsp;🎸 🏀 ⚽ 📚 💻</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold">Born in:</div> <div className="max-[430px]:pl-1 md:pl-1"> Bulgaria 🇧🇬</div>
            </div>
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold"> Lives in:</div> <div className="max-[430px]:pl-1 md:pl-1"> Vienna 🇦🇹</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold">Languages:</div> <div className="max-[430px]:pl-1 md:pl-1"> &nbsp;🇧🇬 &nbsp;🇬🇧&nbsp;&nbsp;🇩🇪</div>
            </div>
            <div className="flex flex-col max-[430px]:flex-row md:flex-row">
              <div className="font-extrabold">E-Mail: </div> <div className="max-[430px]:pl-1 md:pl-1">c.y.cvetkov@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="min-w-full flex gap-y-2 flex-wrap">
          <div className="flex flex-row">
            <div className="font-extrabold"> Favourite Technologies:</div>
          </div>
          <div className="flex flex-wrap gap-y-2 pb-8 md:pb-0 md:flex-row gap-x-[5.9px] md:pl-1">
            <Image src={"/images/java-original.svg"} title="Java" alt="Java" width={20} height={18} />
            <Image src={"/images/javascript-original.svg"} title="JavaScript" alt="JavaScript" width={18} height={18} />
            <Image src={"/images/typescript-original.svg"} title="TypeScript" alt="TypeScript" width={18} height={18} />
            <Image src={"/images/css3-original.svg"} title="CSS3" alt="CSS3" width={18} height={18} />
            <Image src={"/images/nodejs-original.svg"} title="NodeJS" alt="NodeJS" width={18} height={18} />
            <Image src={"/images/angular-original.svg"} title="Angular" alt="Angular" width={18} height={18} />
            <Image src={"/images/react-original.svg"} title="React" alt="React" width={18} height={18} />
            <Image src={"/images/nextjs-original.svg"} title="NextJS" alt="NextJS" width={18} height={18} />
            <Image src={"/images/quarkus-original.svg"} title="Quarkus" alt="Quarkus" width={18} height={18} />
            <Image src={"/images/spring-original.svg"} title="Spring" alt="Spring" width={18} height={18} />
            <Image src={"/images/postgresql-original.svg"} title="PostgreSQL" alt="PostgreSQL" width={18} height={18} />
            <Image src={"/images/rabbitmq-original.svg"} title="RabbitMQ" alt="RabbitMQ" width={18} height={18} />
            <Image src={"/images/docker-original.svg"} title="Docker" alt="Docker" width={18} height={18} />
            <Image src={"/images/kubernetes-original.svg"} title="Kubernetes" alt="Kubernetes" width={18} height={18} />
            <Image src={"/images/helm-original.svg"} title="Helm" alt="Helm" width={18} height={18} style={{ height: "18px", backgroundColor: "white" }} />
            <Image src={"/images/argocd-original.svg"} title="ArgoCD" alt="ArgoCD" width={18} height={18} />
            <Image src={"/images/amazonwebservices-plain-wordmark.svg"} title="Amazon Web Services (AWS)" alt="Amazon Web Services (AWS)" width={18} height={18} />
            <Image src={"/images/azure-original.svg"} title="Microsoft Azure" alt="Microsoft Azure" width={18} height={18} />
            <Image src={"/images/github-original.svg"} title="GitHub" alt="GitHub" width={18} height={18} style={{ height: "18px", backgroundColor: "white" }} />
            <Image src={"/images/githubactions-original.svg"} title="GitHub Actions" alt="GitHub Actions" width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
