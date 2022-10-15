import React from 'react';
import Link from 'next/link';

export default function Utilisateurs({ userList }) {
  return (
    <div className='container'>
      <h1 className='text-center'>La liste des utilisateurs.</h1>
      {userList.map((element) => {
        return (
          <div className='container'>
            <div className='card '>
              <div className='d-flex justify-content-between'>
                <div className='card-body'>{element.name}</div>
                <Link href={`/utilisateurs/${element.id}`}>
                  <a className='card-link text-primary text-decoration-underline d-flex align-items-center'>
                    Contacter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const userList = await data.json();

  return {
    props: {
      userList,
    },
  };
}
