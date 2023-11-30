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
          rowID="1"
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Rows rowID="2" title="Trending Now" fetchUrl={request.fetchTrending} />
        <Rows rowID="3" title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Rows
          rowID="4"
          title="Action Movies"
          fetchUrl={request.fetchActionMovies}
        />
        <Rows
          rowID="5"
          title="Comedy Movies"
          fetchUrl={request.fetchComedyMovies}
        />
        <Rows
          rowID="6"
          title="Horror Movies"
          fetchUrl={request.fetchHorrorMovies}
        />
        <Rows
          rowID="7"
          title="Romance Movies"
          fetchUrl={request.fetchRomanceMovies}
        />
        <Rows
          rowID="8"
          title="Documentaries"
          fetchUrl={request.fetchDocumentMovies}
        />
        <Footer />
      </header>
    </div>
  );
}

export default HomeScreen;
