
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import {useEffect, useState} from 'react';

function App() {
  // useState là hook mặc định của react
  // movie là biến, setMovie là hàm set data cho biến movie
  // khởi tạo useState([]) nghĩa là giá trị mặc định là rỗng
  const [movie, setMovie] = useState([]);

   //những gì đặt trong useEffect thì chỉ chạy đúng 1 lần thôi
  useEffect(()=>{
    const fetchMovie = async () => {
      const url = `${import.meta.env.VITE_API_POPULAR_MOVIE}` //'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN_KEY}`
        }
      };
  
      const response = await fetch(url, options);
      const data = await response.json();

      console.log(data);
      setMovie(data.results);
    }
    fetchMovie();
  },[]) // để [] ở đây nghĩa là ko khởi chạy lại , nếu truyền giá trị vào thì khi giá trị đó thay đổi thì sẽ gọi lại hàm useEffect
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <MovieList title={"Phim Hot"} data={movie}></MovieList>
      {/* <MovieList title={"Phim Đề cử"}></MovieList> */}
    </>
  );
}

export default App;
