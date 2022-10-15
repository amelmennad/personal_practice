import React from 'react';
import Link from 'next/link';

export default function Blog({ postData }) {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {postData.map((item) => {
          return (
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.body.slice(0, 20) + '...'}</p>
                  <Link href={`/blog/${item.id}`}>
                    <a className='card-link text-primary text-decoration-underline d-flex align-items-center'>
                      Lire cet article
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postData = await data.json();

  return {
    props: {
      postData,
    },
  };
}
