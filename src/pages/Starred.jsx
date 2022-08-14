import React, { useEffect, useState } from 'react'
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks'

const Starred = () => {

    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (starred && starred.length > 0) {
          const promises = starred.map(showId => apiGet(`/shows/${showId}`));
    
          Promise.all(promises)
            .then(apiData => apiData.map(show => ({ show })))
            .then(results => {
              setShows(results);
              setIsLoading(false);
            })
            .catch(err => {
                console.log("Inside catch block")
              setError(err.message);
              setIsLoading(false);
            });
        } else {
          setIsLoading(false);
            setError("Some Error Occured");
        }
      }, [starred]);
    return (
        <div>
            {console.log('error',error)}
            {isLoading && <div>Shows are being loading</div>}
            {/* {error && <div>Error Occured : {error}</div>} */}

            {!isLoading && !shows && <div>No Shows were added</div>}
            {!isLoading && !error && <ShowGrid result={shows} />}
        </div>
    )
}

export default Starred