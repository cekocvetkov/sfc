import React from "react";
import Image from "next/image";

function Icons() {
  return (
    <div className="w-full py-1">
      <div className="[@media(min-width:589px)]:hidden">
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            {/* First half of the icons */}
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/java.svg"}
                title="Java"
                alt="Java"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Java
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/js.svg"}
                title="JavaScript"
                alt="JavaScript"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                JavaScript
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/ts.svg"}
                title="TypeScript"
                alt="TypeScript"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                TypeScript
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/css.svg"}
                title="CSS3"
                alt="CSS3"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                CSS3
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/node.svg"}
                title="NodeJS"
                alt="NodeJS"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                NodeJS
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/angular.svg"}
                title="Angular"
                alt="Angular"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Angular
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/react.svg"}
                title="React"
                alt="React"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                React
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/nextjs.svg"}
                title="NextJS"
                alt="NextJS"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                NextJS
              </span>
            </div>

            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/quarkus.svg"}
                title="Quarkus"
                alt="Quarkus"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Quarkus
              </span>
            </div>

            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/spring.svg"}
                title="Spring"
                alt="Spring"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Spring
              </span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            {/* Second half of the icons */}

            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/postgres.svg"}
                title="PostgreSQL"
                alt="PostgreSQL"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                PostgreSQL
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/rabbitmq.svg"}
                title="RabbitMQ"
                alt="RabbitMQ"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                RabbitMQ
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/docker.svg"}
                title="Docker"
                alt="Docker"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Docker
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/k8s.svg"}
                title="Kubernetes"
                alt="Kubernetes"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Kubernetes
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/helm.svg"}
                title="Helm"
                alt="Helm"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Helm
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/argo.svg"}
                title="ArgoCD"
                alt="ArgoCD"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                ArgoCD
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/aws.svg"}
                title="Amazon Web Services (AWS)"
                alt="Amazon Web Services (AWS)"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                AWS
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/azure.svg"}
                title="Microsoft Azure"
                alt="Microsoft Azure"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                Azure
              </span>
            </div>
            <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
              <Image
                src={"/images/icons/github.svg"}
                title="GitHub"
                alt="GitHub"
                width={20}
                height={20}
                className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
              />
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
              >
                GitHub
              </span>
            </div>
            {/* <Image src={"/images/icons/githubactions.svg"} title="GitHub Actions" alt="GitHub Actions" width={27} height={27} /> */}
          </div>
        </div>
      </div>
      <div className="[@media(max-width:589px)]:hidden flex gap-x-[2px] lg:gap-x-[7px] flex-wrap justify-between md:flex-nowrap">
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/java.svg"}
            title="Java"
            alt="Java"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Java
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/js.svg"}
            title="JavaScript"
            alt="JavaScript"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            JavaScript
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/ts.svg"}
            title="TypeScript"
            alt="TypeScript"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            TypeScript
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/css.svg"}
            title="CSS3"
            alt="CSS3"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            CSS3
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/node.svg"}
            title="NodeJS"
            alt="NodeJS"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            NodeJS
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/angular.svg"}
            title="Angular"
            alt="Angular"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Angular
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/react.svg"}
            title="React"
            alt="React"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            React
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/nextjs.svg"}
            title="NextJS"
            alt="NextJS"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            NextJS
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/quarkus.svg"}
            title="Quarkus"
            alt="Quarkus"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Quarkus
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/spring.svg"}
            title="Spring"
            alt="Spring"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Spring
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/postgres.svg"}
            title="PostgreSQL"
            alt="PostgreSQL"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            PostgreSQL
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/rabbitmq.svg"}
            title="RabbitMQ"
            alt="RabbitMQ"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            RabbitMQ
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/docker.svg"}
            title="Docker"
            alt="Docker"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Docker
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/k8s.svg"}
            title="Kubernetes"
            alt="Kubernetes"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Kubernetes
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/helm.svg"}
            title="Helm"
            alt="Helm"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Helm
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/argo.svg"}
            title="ArgoCD"
            alt="ArgoCD"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            ArgoCD
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/aws.svg"}
            title="Amazon Web Services (AWS)"
            alt="Amazon Web Services (AWS)"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            AWS
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/azure.svg"}
            title="Microsoft Azure"
            alt="Microsoft Azure"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            Azure
          </span>
        </div>
        <div className="relative group min-w-[27px] min-h-[27px] lg:min-w-[27px] lg:min-h-[27px]">
          <Image
            src={"/images/icons/github.svg"}
            title="GitHub"
            alt="GitHub"
            width={20}
            height={20}
            className="lg:w-[27px] lg:h-[27px] hover:scale-110 hover:translate-y-[-10%] transition-transform duration-300"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-[#292929] text-secondary-text-color2 text-[13px] rounded py-1 px-2"
          >
            GitHub
          </span>
        </div>
        {/* <Image src={"/images/icons/githubactions.svg"} title="GitHub Actions" alt="GitHub Actions" width={27} height={27} /> */}
      </div>
    </div>
  );
}

export default Icons;
