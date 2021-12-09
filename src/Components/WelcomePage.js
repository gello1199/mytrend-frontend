import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'

const images = [
    { url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
    
    { url: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
    
    { url: "https://images.unsplash.com/photo-1500643752441-4dc90cda350a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
    
    { url: "https://media.istockphoto.com/photos/the-perfect-outfit-means-a-perfect-day-picture-id890289344?b=1&k=20&m=890289344&s=170667a&w=0&h=NKkuoqlJNLG50MXJBagdDDBSXwVZ75H32t0peX2aQ-A=" },
    
    { url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
  
  ];

const WelcomePage = () => {

    return (
    <div className="image-slider">
        <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        
      />
    </div>
    );
}

export default WelcomePage;
