import Icon3 from '../../images/icon3.png'

const Article3 = () => {
    return (
        <article>
            <div className = "card">
                <img className="card-img"src={Icon3} alt="icon1" />
                <div className = "cardInner">
                    <h6>Single-Way</h6>
                    <p id="card-text">A set of immutable values are passed to the component's.</p>
                </div>
            </div>
        </article>
    );
};


export default Article3;