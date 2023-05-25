import React from "react";
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from "../lib/posts.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.padding6px}>Hey, I'm Ry. I'm a full-stack web developer making a little blog site through Next.js to grasp a better understanding of React and the Next framework.</p>
      </section>
    </Layout>
  );
}