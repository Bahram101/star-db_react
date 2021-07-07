const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src="/img/logo.png" width={40} height={40} />
                <div>
                    <h3 className="mb-0 text-uppercase">React Sneakers</h3>
                    <p className="logo-title m-0">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="">
                    <img src="/img/cart.svg" width={18} height={18} />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/user.svg" width={18} height={18} />
                </li>
            </ul>
        </header>
    )
}

export default Header;