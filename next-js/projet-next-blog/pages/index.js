import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='container'>
      <h1>Bienvenue sur Code.io</h1>
      <p>Le blog communautaire des atticionados de developpement web</p>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>Lisez les articles</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Maximisez votre culture web
              </h6>
              <p className='card-text'>
                Chaque auteur tente de vous apporter le plus de valeur possible
                par article.
              </p>
              <Link href='/blog'>
                <a className='card-link text-primary text-decoration-underline'>
                  Visite le blog
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>
                Faites un tour vers la iste de membres
              </h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Faites vous des amis
              </h6>
              <p className='card-text'>
                Ajoutez, invitez et discutez avec les différents membres
              </p>
              <Link href='/utilisateurs'>
                <a className='card-link text-primary text-decoration-underline'>
                  Découvre la liste de membres
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
