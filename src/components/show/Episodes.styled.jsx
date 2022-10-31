import styled from 'styled-components';

export const EpisodesWrapper = styled.div`
  p {
    margin: 5px 0;
  }

  span {
    font-weight: 700;
  }
`;

export const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;

  .episode-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
      margin-bottom: 0;
    }

    .img-wrap {
      width: 50px;
      min-width: 50px;
      height: 50px;
      margin-right: 20px;
      overflow: hidden;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
