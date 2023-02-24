import Icon1 from '../../images/icon1.png'

const Article1 = () => {
    return (
        <article>
            <div className = "card">
                <img className="card-img"src={Icon1} alt="icon1" />
                <div className = "cardInner">
                    <h6>Declarative</h6>
                    <p id="card-text">React makes it painless to create interactive UIs.</p>
                </div>
            </div>
        </article>
    );
};


export default Article1;