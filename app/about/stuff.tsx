import React from "react";
import MaskIcon from "./mask-icon";

const hobbies = [
  ["guitar", "Guitar"],
  ["music", "Music"],
  ["football", "Football"],
  ["basketball", "Basketball"],
  ["book", "Book"],
  ["laptop", "Laptop"],
];

function Detail({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`min-w-0 ${wide ? "col-span-2 smm:col-span-1" : ""}`}>
      <dt className="label-caps text-muted-text-color mb-2">{label}</dt>
      <dd className="m-0 text-base font-extralight text-primary-text-color break-words">{children}</dd>
    </div>
  );
}

function Stuff() {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 m-0">
      <Detail label="name">Tsvetan Tsvetkov</Detail>
      <Detail label="born in">Shumen, Bulgaria</Detail>
      <Detail label="languages">Bulgarian, English, German</Detail>
      <Detail label="lives in">Vienna, Austria</Detail>
      <Detail label="e-mail" wide>
        <a href="mailto:c.y.cvetkov@gmail.com" className="hover:text-secondary-text-color transition-colors">
          c.y.cvetkov@gmail.com
        </a>
      </Detail>
      <Detail label="hobbies">
        <span className="flex gap-3 pt-0.5">
          {hobbies.map(([file, label]) => (
            <MaskIcon key={file} file={file} label={label} size={20} />
          ))}
        </span>
      </Detail>
    </dl>
  );
}

export default Stuff;
