import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.testaustime.fi/users/Eino/activity/summary"
        );
        const jsonData = await response.json();
        setData(jsonData.last_month.languages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const projects = [
    {
      lang: ["ReactJS", "CSS"],
      name: "eino-it-www",
      description:
        "Website for my business. Made with ReactJS and CSS. Static website, no backend.",
      url: "https://eino-it.fi",
      image: "/eino-it.png",
    },
    {
      lang: ["ReactJS", "CSS"],
      name: "eino-porfolio-react",
      description:
        "My personal website. Made with ReactJS and SCSS. Static website, no backend.",
      url: "https://eino-it.fi",
      image: "/eino-portfolio.png",
      archived: true,
    },
    {
      lang: ["NextJS", "SCSS"],
      name: "lomakeitaat-www",
      description:
        "Cottage rental website. Made with NextJS and SCSS. Linkage to Lomarengas' booking system.",
      url: null,
      image: "/wip.png",
      private: true
    },
  ];
  return (
    <main className="bg-zinc-900 text-stone-300">
      <div className="min-h-screen px-4 flex flex-col pt-20 text-center content-center ">
        <div className="min-h-[200px]">
          <h1 className="text-6xl font-bold p-0 gradient-text">Eino Pitkälä</h1>
          <p className="text-xl mt-5">
            Tech nerd, front-end developer and entrepreneur @{" "}
            <Link href={"https://eino-it.fi"} className="link">
              eino-it.fi
            </Link>
          </p>
        </div>

        <h2 className="text-3xl font-bold p-0 mt-20 ">About me</h2>
        <p className="text-l px-0 mt-4 md:px-32 lg:px-72 ">
          Hi! I&apos;m Eino Pitkälä, 14 year old boy from Finland. Besides
          school, I work as an entrepreneur in my own company,{" "}
          <Link className="link" href={"https://eino-it.fi"}>
            Eino IT
          </Link>
          . I&apos;m interested in coding in different languages and I&apos;m
          learning to code more and more all the time. I do small projects with
          React and for my company&apos;s clients, I usually make websites with
          WordPress.
        </p>
        <h2 className="text-3xl font-bold p-0 mt-20 ">Coding stats past month</h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap  text-left">
        {Object.entries(data).map((item, index) => {
          const minutes = item[1] / 60
          return Math.ceil(item[1] / 60) === 0 ? null : 
          item[1] > 300 ? (
            <Card>
               <h2 className="text-2xl font-bold gradient-text font-sans py-2">
                {item[0]}
              </h2>
              <p>{(minutes / 60).toFixed(2)} hours</p>
            </Card>
          ) : null;
        })}
        </div>
        <h2 className="text-3xl font-bold p-0 mt-20">My projects</h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap  text-left mb-[40px]">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="flex gap-3">
                {project.archived ? (
                  <h5 className="text-red-500 font-bold opacity-80 bg-zinc-600 p-1 rounded-lg">
                    Archived
                  </h5>
                ) : null}
                {project.private ? (
                   <h5 className="text-red-500 font-bold opacity-80 bg-zinc-600 p-1 rounded-lg">
                   Private
                 </h5>
                ) : null
                }
                {Array.isArray(project.lang)
                  ? project.lang.map((lang: string, index: number) => (
                      <h5
                        key={index}
                        className="font-bold opacity-80 bg-zinc-600 p-1 rounded-lg"
                      >
                        {lang}
                      </h5>
                    ))
                  : null}
              </div>
              <h2 className="text-2xl font-bold gradient-text font-sans py-2">
                {project.name}
              </h2>
              <p className="text-lg">{project.description}</p>
              <Image
                src={project.image}
                alt="Picture of the project."
                width={600}
                height={100}
              />
              <Button href={project.url}>
                {project.archived ? "View on GitHub" : "View project"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
