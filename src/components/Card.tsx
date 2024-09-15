import 'bootstrap/dist/css/bootstrap.css';

interface CardProps {
    img?: string,
    title: string,
    text: string,
    link: string,
    refName: string
}

const Card = ({ img, title, text, link, refName }: CardProps) => {

    return (
      <div className="card">
        {img ? (
          <img src={img} className="card-img-top" alt="..."></img>
        ) : (
          <></>
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">{refName}</a>
        </div>
      </div>
    );
  };
  
  export default Card;