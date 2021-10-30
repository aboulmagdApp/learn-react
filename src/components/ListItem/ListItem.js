import './listItem.css';

function ListItem(props) {
    const { data } = { ...props };
    return (
        <li className="listitem" data-ref={data.ref}>
        <h2 className="title">{data.title}</h2>
        {data.txt && <p>{data.txt}</p>}
      </li>
    )
}

export default ListItem
