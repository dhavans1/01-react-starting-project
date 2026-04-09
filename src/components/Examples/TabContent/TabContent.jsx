export default function TabContent({title, tabIdx, activeBtnIdx, ...props}) {
    return (
        <li key={title}>
            <button
                {...props}
                className={tabIdx === activeBtnIdx ? 'active' : ''}
            >
                {title}
            </button>
        </li>
    );
}