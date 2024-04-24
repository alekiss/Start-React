import { FaAtom, FaPlus } from "react-icons/fa";
import Cards from "../../components/Cards";
import "./styles.css"

const Home = () => {
    const data = [
        {
          "image": <FaPlus />,
          "title": "Simple Counter",
          "route": "simple-counter"
        },
        {
          "image": <FaAtom />,
          "title": "Context API",
          "route": "context-api"
        },
      ];
    
      return (
        <div className="home">
          <div className="home_content">
            {data.map((item, index) => (
              <div className="cards" key={index}>
                <Cards 
                  image={item.image}
                  title={item.title}
                  route={item.route}     
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home