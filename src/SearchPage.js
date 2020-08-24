import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./stateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./Response";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcom from "@material-ui/icons/MoreVertOutlined";

function SearchPage() {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  //   Mock API Call
  // const data = Response;
  //   Live API call
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news"> News </Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images"> Images </Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping"> Shopping </Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Map</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcom />
                <Link to="/mode">More</Link>
              </div>
            </div>
            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/settings"> Settings </Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools"> Tools </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>{term}</h1> */}
      </div>
      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedResults} result (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt="img"
                    />
                  )}

                {item.displayLink}
              </a>

              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.displayLink}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      <div className="searchPage_result"></div>
    </div>
  );
}
// AIzaSyDoO-_b2nm7P3J27i0XZYMeZQofM1SPz9Q
// Search engine ID
// 10e54a5432ce10395

export default SearchPage;
