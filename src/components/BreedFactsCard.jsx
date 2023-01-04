export default function BreedFactsCard({searchTerm}) {
    
    function generateScore(rank) {
        const max = 10;
        let cat = "🐈"
        let ranking = []
            for (let i = 0; i <= rank; i ++)
            {
             ranking.push(<span role="img" aria-label="sheep">{cat}</span>)
            }
            return ranking
        } 


    return <div className="BreedFacts">

<p><b>Affection Level:</b> {generateScore(searchTerm.affection_level)}</p>
<p><b>Energy Level:</b> {generateScore(searchTerm.energy_level)}</p>
<p><b>Dog Friendliness:</b> {generateScore(searchTerm.dog_friendly)}</p>
<p><b>Shedding Level:</b> {generateScore(searchTerm.shedding_level)}</p>
<h2>Description</h2>
<p>{searchTerm.description}</p>
<h2>Traits:</h2>
<p>{searchTerm.temperament}</p>
    </div>
}