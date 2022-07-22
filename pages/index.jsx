import Layout from "../container/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className={styles.container}>
      <Layout data={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  // Call an external API endpoint to get posts

  const res = await fetch("https://course-api.com/react-tours-project");

  const posts = await res.json();
  console.log(posts);

  return {
    props: { posts: posts },
  };
};
