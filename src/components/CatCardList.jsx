import { useEffect, useState } from "react";
import CatCard from "./CatCard";

export default function CatCardList({ searchTerm }) {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState()
  useEffect(() => {
    setIsLoading(true)
    setCats([])
    fetch(`https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${searchTerm.id}&api_key=live_EtG045ZWeV59PcqZyf63f4bfi5TNmsqqiOr97leiXJNkDidsHPVsELqT4Mc1fsZ1`)
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
        setIsLoading(false)
      });
  }, [searchTerm]);
  if (isLoading === true) {
      return <div className="loader"></div>
    }
    else {
  return (
    <div className="CatList__list">
      {cats.map((cat) => {
        return <CatCard key={cat.id} cat={cat} />;
      })}
    </div>
  );
    }
}
