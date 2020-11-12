import React from 'react';
import '../App.css'
import { useQuery, gql } from '@apollo/client';
import Launche from './Launche'


const FETCH_LAUNCHES = gql`
  query Fetchlaunches {
    launches(limit: 5) {
      id
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;


function List(): JSX.Element {
  const { loading, error, data } = useQuery(FETCH_LAUNCHES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
  <>

<header>
        <h1>Space X launches</h1>
    </header>

    <main className="container">

<section className="card-row">
            {data.launches.map((launche: any) => (
              <Launche
                key={launche.date}
                success={launche.succes}
                date={launche.date}
                links={launche.links}
                details={launche.details}

              />
            ))}
          </section>
          </main>
          <footer>
      <div className="container">
        <p>&copy; 2020 Wild Code School</p>
      </div>
    </footer>

</>

);
}
 
export default List;