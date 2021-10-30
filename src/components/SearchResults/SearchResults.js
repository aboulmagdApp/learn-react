import './searchResults.css';
import List from '../List/List';

export default function SearchResults(props) {
    const {results, type} = {...props}

    let formattedData = results?.map((item, index) => {
        let obj = {
            original: item
        };
        switch (type) {
            case 'films':
              break;
            case 'people':
              break;
            case 'planets':
              break;
          }
          return obj;
    });
    return (
        <div className="results">
            <List data={formattedData} />
        </div>
    )
}
/*
 <ul className="results">
           {
               props.results?.map(item => (
                   <li key={item.episode_id}>{item.title}</li>
               ))
           }
       </ul>

*/