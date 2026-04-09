export default function TabContent({title, tabIdx, activeBtnIdx, ButtonsContainer, ...props}) {
    return (
        <ButtonsContainer key={title}>
            <button
                {...props}
                className={tabIdx === activeBtnIdx ? 'active' : ''}
            >
                {title}
            </button>
        </ButtonsContainer>
    );
}