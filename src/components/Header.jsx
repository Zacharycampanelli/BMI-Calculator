import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} />
      <h1>Body Mass Index Calculator</h1>
      <p>
        Better understand your weight in relation to your height 
        using our body mass index (BM) calculator. While BMI is not 
        the sole determinant of a healthy weight, it offers a valuable 
        starting point to evaluate your overall health and well-being.
      </p>
    </div>
  );
};

export default Header;
