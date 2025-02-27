export default function TabButton({children, isSelected, ...props}) {

    return (
        <button className={isSelected ? 'active' : undefined} on{...props}>{children}</button>
    );
}