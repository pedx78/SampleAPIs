import React from "react";
import { URLS } from "../utils/Config";

type Props = {
  baseAPI: string;
  endpoint: string;
};

const EndPointLink: React.FC<Props> = ({ baseAPI, endpoint }) => {
  return (
    <a
      className="home-page-action btn"
      href={`${URLS.API_LINK}/${baseAPI}/v2/${endpoint}`}
      target="_blank"
      rel="noreferrer"
    >
      {endpoint}
    </a>
  );
};

export default EndPointLink;