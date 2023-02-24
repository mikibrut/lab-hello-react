import Navbar from './Navbar';

const Header = () => {
    return (
       
       <div className ="header">
            <Navbar/>
            <div className = "container">
                <h2>Say Hello to ReactJS</h2>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                <button>Awesome!</button>  
            </div>  
        </div>
        
    );
};

export default Header;