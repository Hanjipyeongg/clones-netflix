import Banner from "../banner/Banner";
import Rows from "../layout/Rows";
import Navbar from "../navbar/Nav";
import request from "../../common/API/request";
import Footer from "../footer"
function HomeScreen() {
  return (
    <div className="Home">
      <header className="App-header">
        <Navbar />
        <Banner />
        <Rows
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
        <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={request.fetchDocumentMovies} />
        <Footer />
      </header>
    </div>
  );
}

export default HomeScreen;
