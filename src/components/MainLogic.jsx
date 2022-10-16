import React from 'react'

const MainLogic = ({mainData}) => {
    // console.log(mainData)
  return (
    <>
    <section className='main-card--cointainer'>
    {mainData.map((curElem)=>{
        return(
            <>
            <div className="card-container" key={curElem.id}>
        <div className="card">
            <div className="card-body">
                <span className='card-number card-circle subtle'>{curElem.id}</span>
                <span className='card-author subtle'>{curElem.category}</span>
                {/* <span className='card-author subtle'>Auctions</span>
                <span className='card-author subtle'>Winners</span>
                <span className='card-author subtle'>How to play</span>
                <span className='card-author subtle'>Announcement</span> */}

              <h2 className='card-title'>{curElem.name}</h2>
              <span className='card-description subtle'>
                {curElem.description}
              </span>
              <div className='card-read'>Read</div>
                </div>
                <img src= {curElem.image} alt="images" className='card-media' />

                <span className='card-tag subtle'>Bid now</span>
        </div>
    </div>
    </>
        );
    })}
    </section>
     </>
  );
};

export default MainLogic;
