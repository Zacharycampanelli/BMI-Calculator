interface LimitProps {
  limit: string;
  description: string;
  image: string;
}

const Limit: React.FC<LimitProps> = ({ limit, description, image }) => {
  return (
    <div className={`single-limit ${limit}`}>
      <div className="limit-header">
        <img src={image} className="icon" alt={limit} />
        <h4>{limit}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Limit;
