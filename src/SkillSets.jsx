function SkillSets(props) {
    return (<ul className="flex flex-wrap gap-2">
        {props.sets.map((item) => (<li key={item.id} className="bg-gray-200 rounded-sm px-2 gap-1">{item.name}</li>))}
    </ul>);
}
export default SkillSets;