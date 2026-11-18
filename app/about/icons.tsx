import React from "react";
import MaskIcon from "./mask-icon";

/** Twenty entries so the grid always fills evenly: 5 × 4 on phones, 10 × 2 from 640px up. */
const technologies = [
  ["java", "Java"],
  ["js", "JavaScript"],
  ["ts", "TypeScript"],
  ["css", "CSS3"],
  ["node", "NodeJS"],
  ["angular", "Angular"],
  ["react", "React"],
  ["nextjs", "NextJS"],
  ["quarkus", "Quarkus"],
  ["spring", "Spring"],
  ["postgres", "PostgreSQL"],
  ["rabbitmq", "RabbitMQ"],
  ["docker", "Docker"],
  ["k8s", "Kubernetes"],
  ["helm", "Helm"],
  ["argo", "ArgoCD"],
  ["aws", "Amazon Web Services (AWS)"],
  ["azure", "Microsoft Azure"],
  ["github", "GitHub"],
  ["githubactions", "GitHub Actions"],
];

function Icons() {
  return (
    <section className="py-8 border-y border-border-color">
      <h2 className="label-caps text-muted-text-color mb-6 mt-0">favourite technologies</h2>
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-y-6 justify-items-center">
        {technologies.map(([file, label]) => (
          <MaskIcon key={file} file={file} label={label} size={26} />
        ))}
      </div>
    </section>
  );
}

export default Icons;
