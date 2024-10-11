
const AlternatingSection = ({ image, text, flip }) => {
  return (
    <div className={`alternating-section ${flip ? 'flipped' : ''}`}>
      <div className="image-container">
        <img src={image} alt="illustration" />
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

const MainContent = () => {
    const sections = [
      { image: 'image1.jpg', text: 'Première section' },
      { image: 'image2.jpg', text: 'Deuxième section' },
      { image: 'image3.jpg', text: 'Troisième section' },
    ];
  
    return (
      <div>
        {sections.map((section, index) => (
          <AlternatingSection 
            key={index} 
            image={section.image} 
            text={section.text} 
            flip={index % 2 !== 0}
          />
        ))}
      </div>
    );
  };

export default MainContent;
