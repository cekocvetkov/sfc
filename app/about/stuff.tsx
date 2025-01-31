import React from "react";
import Image from "next/image";

function Stuff() {
  return (
    <div className="flex -mx-3 md:mx-0 justify-between text-[10px] sm:text-[13px] md:text-[13px] lg:text-[15px] text-white">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-x-2 md:gap-x-1 lg:gap-x-2">
          <div className=" min-w-24 sm:min-w-max">Name:</div> <div className="text-nowrap text-secondary-text-color">Tsvetan Tsvetkov</div>
        </div>
        <div className="flex flex-col gap-x-2 md:gap-x-0 lg:gap-x-2">
          <div className=" min-w-24 sm:min-w-max">Hobbies: </div>
          <div className="flex text-secondary-text-color">
            <Image src={"/images/icons/guitar.svg"} title="Java" alt="Java" width={18} height={18} />
            <Image src={"/images/icons/music.svg"} title="Java" alt="Java" width={18} height={18} />
            <Image src={"/images/icons/football.svg"} title="Java" alt="Java" width={18} height={18} />
            <Image src={"/images/icons/basketball.svg"} title="Java" alt="Java" width={18} height={18} />
            <Image src={"/images/icons/book.svg"} title="Java" alt="Java" width={18} height={18} />
            <Image src={"/images/icons/laptop.svg"} title="Java" alt="Java" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-x-2 md:gap-x-1 lg:gap-x-2 ">
          <div className=" min-w-24 sm:min-w-max text-nowrap">Born in:</div>
          <div className="flex flex-nowrap text-secondary-text-color">
            <div>Shumen, Bulgaria</div>
          </div>
        </div>
        <div className="flex flex-col gap-x-2">
          <div className=" text-nowrap min-w-24 sm:min-w-max"> Lives in:</div>
          <div className="flex flex-nowrap  text-secondary-text-color">
            <div>Vienna, Austria</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-x-2 md:gap-x-1 lg:gap-x-2">
          <div className=" text-nowrap min-w-24 sm:min-w-max">Languages:</div> <div className="text-secondary-text-color">Bulgarian, English, German</div>
        </div>
        <div className="flex flex-col gap-x-2">
          <div className=" text-nowrap min-w-24 sm:min-w-max">E-Mail: </div> <div className="text-secondary-text-color">c.y.cvetkov@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Stuff;
