import Limit from './Limit';
import gender from '../../assets/images/icon-gender.svg';
import age from '../../assets/images/icon-age.svg';
import muscle from '../../assets/images/icon-muscle.svg';
import pregnancy from '../../assets/images/icon-pregnancy.svg';
import race from '../../assets/images/icon-race.svg';



const limitations = [
    {
      limit: 'Gender',
      description: `The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.`,
      image: gender,
    },
    {
      limit: 'Age',
      description: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
      image: age,
    },
    {
      limit: 'Muscle',
      description: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.`,
      image: muscle,
    },
    {
      limit: 'Pregnancy',
      description: `Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.`,
      image: pregnancy,
    },
    {
      limit: 'Race',
      description: `Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.`,
      image: race,
    }
  ];

const Limitations = () => {
  return (
    <div className="limits">
      <h2>Limitations of BMI</h2>
      <p>
        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
        groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial
        to use.
      </p>

      {limitations.map((limit) => <Limit limit={limit.limit} description={limit.description} image={limit.image} key={limit.limit} />)}
    </div>
  );
};

export default Limitations;
