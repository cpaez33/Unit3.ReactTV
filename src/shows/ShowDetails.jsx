// import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  show,
  selectedEpisode,
  setSelectedEpisode,
}) {
  // const [selectedEpisode, setSelectedEpisode] = useState(undefined);

  return (
    <div className="show-details">
      {!show && <p>Please select a show to learn more.</p>}
      {show && (
        <>
          <EpisodeList
            name={show.name}
            episodes={show.episodes}
            selectedEpisode={selectedEpisode}
            setSelectedEpisode={setSelectedEpisode}
          />
          <EpisodeDetails episode={selectedEpisode} />
        </>
      )}
    </div>
  );
}
