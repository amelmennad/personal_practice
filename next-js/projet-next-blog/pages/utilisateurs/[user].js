import React from 'react';

export default function User({ userData }) {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{userData.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            Username : {userData.username}
          </h6>
          <div className='card'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Username : {userData.username}
              </li>
              <li className='list-group-item'>Email : {userData.email}</li>
              <li className='list-group-item'>Site Web : {userData.website}</li>
              <li className='list-group-item'>Téléphone : {userData.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const userContext = context.params.user;
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const userList = await data.json();

  const userData = userList.find((user) => user.id == userContext);

  return {
    props: {
      userData,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const userList = await data.json();

  const paths = userList.map((item) => {
    return {
      params: { user: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
