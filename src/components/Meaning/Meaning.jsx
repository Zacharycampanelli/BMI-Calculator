import Requirements from './Requirements';
import manEating from '../../assets/images/image-man-eating.webp';
import eating from '../../assets/images/icon-eating.svg';
import exercise from '../../assets/images/icon-exercise.svg';
import sleeping from '../../assets/images/icon-sleep.svg';

const requirements = [
  {
    requirement: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    image: eating,
  },
  {
    requirement: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    image: exercise,
  },
  {
    requirement: 'Adequate Sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    image: sleeping,
  },
];

const Meaning = () => {
  return (
    <>
      <img src={manEating} id="manEating" alt="A man eating with chopsticks" />
      <div className="whatsItMean">
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your
          chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet
          with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for
          regular physical activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
      <div className="requirements">
        {requirements.map((item) => (
          <Requirements
            requirement={item.requirement}
            description={item.description}
            icon={item.image}
            key={item.requirement}
          />
        ))}
      </div>
    </>
  );
};

export default Meaning;
