interface RequirementProps {
  requirement: string,
  description: string,
  icon: string;
}

const Requirements:React.FC<RequirementProps> = ({ requirement, description, icon }) => {
  return (
    <div className="requirement">
      <img src={icon} alt={icon} />
      <div className="description">
        <h3>{requirement}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Requirements;
