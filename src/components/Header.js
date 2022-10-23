const Header = (isDarkMode, onDarkModeClick) => {
    const handleDarkModeClick = (e) => {
        isDarkMode.onDarkModeClick(e.target.isDarkMode);
    };

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick}>
                {`${isDarkMode ? 'Dark' : 'Light'} Mode`}
            </button>
        </header>
    );
};

export default Header;