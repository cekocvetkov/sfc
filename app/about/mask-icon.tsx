import React from "react";

/** An icon from `/images/icons`, tinted with the palette accent instead of its own colours. */
export default function MaskIcon({ file, label, size }: { file: string; label: string; size: number }) {
  const style = { "--icon": `url(/images/icons/${file}.svg)`, width: size, height: size } as React.CSSProperties;
  return <span role="img" aria-label={label} title={label} className="mask-icon" style={style} />;
}
