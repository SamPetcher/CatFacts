export default function CatCard({ cat }) {
  return (
    <div>
      <img className="CatImage" style={{width:'150px', height:'150px'}} src={cat.url}></img>
    
    </div>
  );
}
