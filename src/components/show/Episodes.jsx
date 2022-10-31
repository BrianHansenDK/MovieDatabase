import React from 'react';
import { EpisodeList, EpisodesWrapper } from './Episodes.styled';
import NOT_FOUND from '../../images/not-found.png';

const Episodes = ({ episodes }) => {
  return (
    <EpisodesWrapper>
      <p>
        Episodes in total: <span>{episodes.length}</span>
      </p>

      <EpisodeList>
        {episodes.map(episode => (
          <div key={episode.id} className="episode-item">
            <div className="img-wrap">
              <img
                src={episode.image ? episode.image.medium : NOT_FOUND}
                alt={episode.name}
              />
            </div>
            <div className="left">
              <p>
                Season: {episode.season}, Episode: {episode.number}
              </p>
              <p>{episode.name}</p>
            </div>
            <div className="right">
              <p>
                Ratings:{' '}
                {episode.rating.average ? episode.rating.average : 'N/A'}
              </p>
              <p>Aired: {episode.airdate}</p>
            </div>
          </div>
        ))}
      </EpisodeList>
    </EpisodesWrapper>
  );
};

export default Episodes;
