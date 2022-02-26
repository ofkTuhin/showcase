import Image from "next/image";
import Link from "next/link";
import React from "react";
import { parseDomain } from "parse-domain";

const MainPage = ({ post }) => {
  return (
    <div className="w-full">
      <main>
        <div className="flex flex-wrap">
          {
            <>
              {post.map((p, i) => {
                return (
                  <div className="w-cardWidth m-4" key={i}>
                    <Link key={i} href={p.url} passHref>
                      <a target="_blank" rel="noreferrer">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                          <div className="w-full h-60 relative">
                            <Image
                              alt="alt"
                              src={p.image}
                              layout="fill"
                              objectFit="cover"
                            ></Image>
                          </div>

                          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="">
                              by
                              <span className="font-bold text-black ml-2">
                                {p.themeName}
                              </span>
                            </h1>
                          </header>

                          <section className="leading-none p-2 md:p-4">
                            <p className="flex items-center no-underline">
                              Category:{" "}
                              <span className="font-bold">{p.category}</span>
                            </p>
                            <p className="mt-2">
                              Wesite Name :
                              <span className="font-bold">
                                {" "}
                                {parseDomain(new URL(p.url).hostname).domain}
                              </span>
                            </p>
                            <div className="my-5">
                              <p>
                                Updated at{" "}
                                {new Date(p.updateDate).toLocaleDateString()}
                              </p>
                            </div>
                          </section>
                        </article>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </>
          }
        </div>
      </main>
    </div>
  );
};

export default MainPage;
