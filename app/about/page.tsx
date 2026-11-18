import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImage from "../../public/images/me.jpg";
import Stuff from "./stuff";
import Icons from "./icons";

function About() {
  return (
    <main className="w-full mt-[14vh] flex flex-col gap-12">
      <section className="flex flex-col smm:flex-row gap-8 smm:gap-10 smm:items-start">
        <Image
          alt="Image of author"
          src={AboutImage}
          placeholder="blur"
          width={180}
          height={220}
          className="object-cover w-[160px] h-[200px] lg:w-[180px] lg:h-[220px] shrink-0 border border-border-color p-1.5"
        />
        <div className="min-w-0">
          <h1 className="text-[24px] md:text-[28px] font-extralight leading-tight m-0">
            Software <span className="text-secondary-text-color">Developer</span>
          </h1>
          <div className="text-[17px] font-extralight text-secondary-text-color mt-1">Lifelong learner</div>
          <div className="mt-6 text-[15px] md:text-base leading-[1.8] text-[rgba(250,249,246,0.7)] flex flex-col gap-4">
            <p className="m-0">
              I've designed my blog to be like a business card: a quick introduction to me and my work. It contains findings and information I encounter during my hobby projects or work.
            </p>
            <p className="m-0">
              Feel free to check out my{" "}
              <Link aria-label="Link to my Github handle" href="https://github.com/cekocvetkov" className="text-secondary-text-color hover:underline">
                Github Page
              </Link>
              . I'd love to learn from others and contribute to projects that make a positive impact.
            </p>
          </div>
        </div>
      </section>
      <Icons />
      <Stuff />
    </main>
  );
}

export default About;
