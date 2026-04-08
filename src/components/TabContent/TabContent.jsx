export default function TabContent({title, onSelect, tabIdx, activeBtnIdx}) {
    return (
        <li key={title}>
            <button
                onClick={onSelect}
                className={tabIdx === activeBtnIdx ? 'active' : ''}>
                    {title}
        </button> </li>
    );
}