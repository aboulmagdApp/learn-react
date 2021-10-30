import ListItem from '../ListItem/ListItem';
import './list.css';


function List(props) {
  return (
    <ul className="list">
      {props.data?.map((item) => (
        <ListItem key={item.title} data={item} />
      ))}
    </ul>
  );
}

export default List
