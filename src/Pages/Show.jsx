/* eslint-disable no-underscore-dangle */

import React from 'react';
import { useParams } from 'react-router';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Episodes from '../components/show/Episodes';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styles';

const Show = () => {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is loading</div>;
  }
  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiere={show.premiere}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Episodes episodes={show._embedded.episodes} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
