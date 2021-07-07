const Drawer = () => {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <div className="drawer-top">
                    <h2 className="d-flex justify-content-between">
                        Корзина
                        <img src="/img/btn-remove.svg" alt="remove" className="removeBtn" />
                    </h2>
                    <div className="items">
                        <div className="cartItem d-flex align-items-center mb-3" >
                            <img className="cartItemImg me-3" src="/img/sneakers/1.jpg" width={70} height={70} alt="skeakers" />
                            <div>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12999 р.</b>
                            </div>
                            <img src="/img/btn-remove.svg" alt="remove" className="removeBtn" />
                        </div>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;