import React from 'react';

export default function Article({ articleData }) {
  return (
    <div className='container'>
      <h1 className='text-center'>{articleData.title}</h1>
      <p>{articleData.body}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const articleContext = context.params.article;
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articleList = await data.json();

  const articleData = articleList.find(
    (article) => article.id == articleContext
  );

  return {
    props: {
      articleData,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articleList = await data.json();

  const paths = articleList.map((item) => {
    return {
      params: { article: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
