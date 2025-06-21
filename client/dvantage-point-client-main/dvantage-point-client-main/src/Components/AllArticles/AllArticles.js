import articleData from "../../utils/ArticleData";
import Service from "../Service/Service";
import "./AllArticles.css";
const AllArticles = () => {
  return (
    <div className="container-fluid" id="article">
      <br />
      <h1 className="text-center text-primary my-5">Articles</h1>
      <div className="d-flex align-item-center justify-content-center flex-wrap">
        {articleData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
