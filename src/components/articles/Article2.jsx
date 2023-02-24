import Icon2 from '../../images/icon2.png'

const Article2 = () => {
    return (
        <article>
            <div className = "card">
                <img className="card-img"src={Icon2} alt="icon1" />
                <div className = "cardInner">
                    <h6>Components</h6>
                    <p id="card-text">Build encapsulated components that manage their state.</p>
                </div>
            </div>
        </article>
    );
};


export default Article2;